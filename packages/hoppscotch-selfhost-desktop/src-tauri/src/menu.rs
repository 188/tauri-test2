use anyhow::Context;
use serde_json::json;
use std::sync::{Arc, LazyLock, Mutex};
use tauri::Emitter;
use tauri::{
    menu::{Menu, MenuEvent, MenuItemBuilder, PredefinedMenuItem, Submenu, SubmenuBuilder},
    AppHandle, Runtime, WebviewWindow,
};
use tauri_plugin_shell::ShellExt;

use crate::util::language;
use crate::util::store::AppState;

#[cfg(target_os = "macos")]
use cocoa::appkit::NSApp;
#[cfg(target_os = "macos")]
use cocoa::base::nil;
#[cfg(target_os = "macos")]
use objc::runtime::Object;
#[cfg(target_os = "macos")]
use objc::{msg_send, sel, sel_impl};

static SCALE_FACTOR: LazyLock<Arc<Mutex<f64>>> = LazyLock::new(|| Arc::new(Mutex::new(1.0)));

pub fn build_default<R: Runtime>(handle: &AppHandle<R>) -> tauri::Result<tauri::menu::Menu<R>> {
    let store = AppState::new(handle);
    let language_local: String = store.get("language", "en".to_string());

    build(handle, &language_local)
}

pub fn build<R: Runtime>(
    handle: &AppHandle<R>,
    language: &str,
) -> tauri::Result<tauri::menu::Menu<R>> {
    let mut store = AppState::new(handle);
    let _ = store.set("language", language);

    let lang = language::menu(handle, language)?;
    let check_for_updates = MenuItemBuilder::with_id(
        "global/update",
        lang["check_for_updates"]
            .as_str()
            .unwrap_or("Check for updates…"),
    )
    .build(handle)?;

    let quit_menu =
        MenuItemBuilder::with_id("global/quit", lang["quit"].as_str().unwrap_or("Quit"))
            .accelerator("CmdOrCtrl+Q")
            .build(handle)?;

    let app_name = handle
        .config()
        .product_name
        .clone()
        .context("App name not defined.")?;

    let about_menu = MenuItemBuilder::with_id(
        "global/about",
        lang["about"].as_str().unwrap_or("About").to_owned() + " " + &app_name,
    )
    .build(handle)?;

    #[cfg(target_os = "macos")]
    let settings_menu = MenuItemBuilder::with_id(
        "global/settings",
        lang["settings"].as_str().unwrap_or("Settings"),
    )
    .accelerator("CmdOrCtrl+,")
    .build(handle)?;

    #[cfg(target_os = "macos")]
    let mac_menu = &SubmenuBuilder::new(handle, app_name.clone())
        .item(&about_menu)
        .separator()
        .item(&settings_menu)
        .item(&check_for_updates)
        .separator()
        .services()
        .separator()
        .item(
            &MenuItemBuilder::with_id(
                "global/hide",
                lang["hide"].as_str().unwrap_or("Hide").to_owned() + " " + &app_name,
            )
            .accelerator("CmdOrCtrl+H")
            .build(handle)?,
        )
        .item(
            &MenuItemBuilder::with_id(
                "global/hide_others",
                lang["hide_others"].as_str().unwrap_or("Hide Others"),
            )
            .accelerator("CmdOrCtrl+Option+H")
            .build(handle)?,
        )
        .item(
            &MenuItemBuilder::with_id(
                "global/show_all",
                lang["show_all"].as_str().unwrap_or("Show All"),
            )
            .build(handle)?,
        )
        .separator()
        .item(&quit_menu)
        .build()?;

    let file_menu = &SubmenuBuilder::new(handle, lang["file"].as_str().unwrap_or("File"))
        .items(&[
            &MenuItemBuilder::with_id("file/new", lang["new"].as_str().unwrap_or("New"))
                .accelerator("CmdOrCtrl+N")
                .build(handle)?,
        ])
        .separator()
        .build()?;

    #[cfg(target_os = "macos")]
    let _ = file_menu.append(
        &MenuItemBuilder::with_id(
            "file/close-window",
            lang["close_window"].as_str().unwrap_or("Close Window"),
        )
        .accelerator("CmdOrCtrl+W")
        .build(handle)?,
    );

    #[cfg(not(target_os = "macos"))]
    file_menu.append_items(&[&check_for_updates, &quit_menu])?;

    #[cfg(not(target_os = "linux"))]
    let edit_menu = &Submenu::new(handle, lang["edit"].as_str().unwrap_or("Edit"), true)?;

    #[cfg(target_os = "macos")]
    {
        edit_menu.append_items(&[
            &MenuItemBuilder::with_id("edit/undo", lang["undo"].as_str().unwrap_or("Undo"))
                .accelerator("CmdOrCtrl+Z")
                .build(handle)?,
            &MenuItemBuilder::with_id("edit/redo", lang["redo"].as_str().unwrap_or("Redo"))
                .accelerator("CmdOrCtrl+Shift+Z")
                .build(handle)?,
            &PredefinedMenuItem::separator(handle)?,
        ])?;
    }
    #[cfg(not(target_os = "linux"))]
    {
        edit_menu.append_items(&[
            &MenuItemBuilder::with_id("edit/cut", lang["cut"].as_str().unwrap_or("Cut"))
                .accelerator("CmdOrCtrl+X")
                .build(handle)?,
            &MenuItemBuilder::with_id("edit/copy", lang["copy"].as_str().unwrap_or("Copy"))
                .accelerator("CmdOrCtrl+C")
                .build(handle)?,
            &MenuItemBuilder::with_id("edit/paste", lang["paste"].as_str().unwrap_or("Paste"))
                .accelerator("CmdOrCtrl+V")
                .build(handle)?,
        ])?;
    }

    #[cfg(target_os = "macos")]
    edit_menu.append(
        &MenuItemBuilder::with_id(
            "edit/select_all",
            lang["select_all"].as_str().unwrap_or("Select All"),
        )
        .accelerator("CmdOrCtrl+A")
        .build(handle)?,
    )?;

    let view_menu = &Submenu::new(handle, lang["view"].as_str().unwrap_or("View"), true)?;

    #[cfg(target_os = "macos")]
    view_menu.append(
        &MenuItemBuilder::with_id(
            "view/toggle_full_screen",
            lang["toggle_full_screen"]
                .as_str()
                .unwrap_or("Toggle Full Screen"),
        )
        .build(handle)?,
    )?;
    view_menu.append_items(&[
        &PredefinedMenuItem::separator(handle)?,
        &MenuItemBuilder::with_id(
            "view/zoom-in",
            lang["zoom_in"].as_str().unwrap_or("Zoom In"),
        )
        .accelerator("CmdOrCtrl+=")
        .build(handle)?,
        &MenuItemBuilder::with_id(
            "view/zoom-out",
            lang["zoom_out"].as_str().unwrap_or("Zoom Out"),
        )
        .accelerator("CmdOrCtrl+-")
        .build(handle)?,
        &MenuItemBuilder::with_id(
            "view/zoom-reset",
            lang["reset_zoom"].as_str().unwrap_or("Reset Zoom"),
        )
        .accelerator("CmdOrCtrl+0")
        .build(handle)?,
        &PredefinedMenuItem::separator(handle)?,
    ])?;

    #[cfg(any(debug_assertions))]
    view_menu.append_items(&[
        &MenuItemBuilder::with_id(
            "view/devtools",
            lang["developer_tools"]
                .as_str()
                .unwrap_or("Developer Tools"),
        )
        .build(handle)?,
        &MenuItemBuilder::with_id(
            "view/reload",
            lang["reload_view"].as_str().unwrap_or("Reload View"),
        )
        .accelerator("CmdOrCtrl+R")
        .build(handle)?,
    ])?;

    #[cfg(target_os = "macos")]
    let window_menu = &SubmenuBuilder::new(handle, lang["window"].as_str().unwrap_or("Window"))
        .items(&[
            &MenuItemBuilder::with_id(
                "window/minimize",
                lang["minimize"].as_str().unwrap_or("Minimize"),
            )
            .accelerator("CmdOrCtrl+M")
            .build(handle)?,
            &MenuItemBuilder::with_id(
                "window/maximize",
                lang["maximize"].as_str().unwrap_or("Zoom"),
            )
            .accelerator("CmdOrCtrl+M")
            .build(handle)?,
            &PredefinedMenuItem::separator(handle)?,
            &MenuItemBuilder::with_id(
                "window/close_window",
                lang["close_window"].as_str().unwrap_or("Close Window"),
            )
            .build(handle)?,
        ])
        .build()?;

    let help_menu = &SubmenuBuilder::new(handle, lang["help"].as_str().unwrap_or("Help"))
        .text(
            "help/documentation",
            lang["documentation"].as_str().unwrap_or("Documentation"),
        )
        .text(
            "help/github",
            lang["source_code"].as_str().unwrap_or("Source Code"),
        )
        .text(
            "help/release-notes",
            lang["release_notes"].as_str().unwrap_or("Release Notes"),
        )
        .separator()
        .text(
            "help/report-issue",
            lang["report_issue"].as_str().unwrap_or("Report an Issue…"),
        )
        .build()?;

    #[cfg(not(target_os = "macos"))]
    help_menu.append_items(&[separator(), &about_menu])?;

    Menu::with_items(
        handle,
        &[
            #[cfg(target_os = "macos")]
            mac_menu,
            file_menu,
            #[cfg(not(target_os = "linux"))]
            edit_menu,
            view_menu,
            #[cfg(target_os = "macos")]
            window_menu,
            help_menu,
        ],
    )
}

#[tauri::command]
pub fn change_language(app_handle: AppHandle, language: String) -> tauri::Result<()> {
    let menu = build(&app_handle, &language)?;
    app_handle.set_menu(menu)?;
    Ok(())
}

pub fn handle_event(app_handle: AppHandle, webview: &WebviewWindow, event: &MenuEvent) {
    if event.id() == "global/about" {
        emit(webview, "menu://global/about");
        return;
    }

    if event.id() == "global/settings" {
        emit(webview, "menu://global/settings");
        return;
    }

    if event.id() == "global/update" {
        emit(webview, "menu://global/update");
        return;
    }

    if event.id() == "global/hide" {
        let _ = webview.minimize();
        return;
    }

    if event.id() == "global/hide_others" {
        hide_other_applications();
        return;
    }

    if event.id() == "global/show_all" {
        let script = r#"
                tell application "System Events"
                    set visible of every process whose background only is false to true
                end tell
            "#;
        let _output = tauri::async_runtime::block_on(async move {
            app_handle
                .shell()
                .command("osascript")
                .args(["-e", script])
                .output()
                .await
                .unwrap()
        });

        return;
    }

    if event.id() == "global/quit" {
        app_handle.exit(0);
        return;
    }

    if event.id() == "file/new" {
        emit(webview, "menu://file/new");
        return;
    }

    if event.id() == "file/close-window" {
        app_handle.exit(0);
        return;
    }

    if event.id() == "edit/undo" {
        webview.eval("document.execCommand('undo')").unwrap();
        return;
    }

    if event.id() == "edit/redo" {
        webview.eval("document.execCommand('redo')").unwrap();
        return;
    }

    if event.id() == "edit/cut" {
        webview.eval("document.execCommand('cut')").unwrap();
        return;
    }

    if event.id() == "edit/copy" {
        emit(webview, "menu://edit/copy");
        return;
    }

    if event.id() == "edit/paste" {
        emit(webview, "menu://edit/paste");
        return;
    }

    if event.id() == "edit/select_all" {
        webview.eval("document.execCommand('selectAll')").unwrap();
        return;
    }

    if event.id() == "view/toggle_full_screen" {
        let is_fullscreen = webview.is_fullscreen().unwrap();
        webview.set_fullscreen(!is_fullscreen).unwrap();
        return;
    }

    if event.id() == "view/zoom-in" {
        webview
            .eval(&format!(
                "document.body.style.zoom = '{}'",
                calc_scale_factor(0.1)
            ))
            .unwrap();
        return;
    }

    if event.id() == "view/zoom-out" {
        webview
            .eval(&format!(
                "document.body.style.zoom = '{}'",
                calc_scale_factor(-0.1)
            ))
            .unwrap();
        return;
    }

    if event.id() == "view/zoom-reset" {
        webview.eval("document.body.style.zoom = '1.0'").unwrap();
        return;
    }

    #[cfg(any(debug_assertions))]
    {
        if event.id() == "view/devtools" {
            webview.open_devtools();
            return;
        }
    }

    if event.id() == "view/reload" {
        webview.eval("window.location.reload();").unwrap();
        return;
    }

    if event.id() == "window/minimize" {
        let _ = webview.minimize();
        return;
    }

    if event.id() == "window/maximize" {
        let _ = webview.maximize();
        return;
    }

    if event.id() == "window/close_window" {
        app_handle.exit(0);
        return;
    }

    'open_link: {
        let result = match event.id().0.as_str() {
            "help/documentation" => open::that("https://docs.postdata.cn"),
            "help/github" => open::that("https://github.com/mamahuhu-io/postdata"),
            "help/release-notes" => open::that("https://github.com/mamahuhu-io/release"),
            "help/report-issue" => open::that("https://github.com/mamahuhu-io/postdata/issues/new"),
            _ => break 'open_link,
        };

        if let Err(err) = result {
            tracing::error!(error = ?err, "failed to open url for {}", event.id().0);
        }

        return;
    }

    tracing::error!("unhandled 'help' menu event: {}", event.id().0);
}

fn emit<R: Runtime>(window: &tauri::WebviewWindow<R>, event: &str) {
    if let Err(err) = window.emit(event, json!({})) {
        tracing::error!(error = ?err, "failed to emit event");
    }
}

#[cfg(target_os = "macos")]
fn hide_other_applications() {
    unsafe {
        let app: *mut Object = NSApp();
        let _: () = msg_send![app, hideOtherApplications: nil];
    }
}

fn calc_scale_factor(delta: f64) -> f64 {
    let mut scale_lock = SCALE_FACTOR.lock().unwrap();
    let mut new_scale = *scale_lock;
    new_scale += delta;
    if new_scale < 0.5 {
        new_scale = 0.5;
    } else if new_scale > 2.0 {
        new_scale = 2.0;
    }
    *scale_lock = new_scale;
    new_scale
}
