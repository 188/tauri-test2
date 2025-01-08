// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

#[cfg(target_os = "macos")]
#[macro_use]
extern crate cocoa;

#[cfg(target_os = "macos")]
#[macro_use]
extern crate objc;

#[cfg(target_os = "macos")]
mod mac;

#[cfg(target_os = "windows")]
mod win;

mod interceptor;
mod interop;
mod menu;
mod util;

use crate::store::AppState;
use tauri::AppHandle;
use tauri::Manager;
use util::{config, file, git, store};

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    // tauri_plugin_deep_link::prepare("cn.postdata.desktop");
    let ctx = tauri::generate_context!();
    tauri::Builder::default()
        .plugin(tauri_plugin_updater::Builder::new().build())
        .plugin(tauri_plugin_shell::init())
        .plugin(tauri_plugin_os::init())
        .plugin(tauri_plugin_dialog::init())
        .plugin(tauri_plugin_http::init())
        .plugin(tauri_plugin_process::init())
        .plugin(tauri_plugin_window_state::Builder::default().build())
        .plugin(tauri_plugin_store::Builder::default().build())
        .plugin(tauri_plugin_clipboard_manager::init())
        .plugin(tauri_plugin_fs::init())
        .plugin(interceptor::init())
        .invoke_handler(tauri::generate_handler![
            interop::startup::init::interop_startup_init,
            file::read_file,
            file::write_file,
            file::copy_folder_all,
            config::get_data_dir,
            git::git_clone,
            git::git_branches,
            git::git_commit,
            git::git_commit_history,
            git::git_pull,
            git::git_push,
            git::git_checkout,
            git::is_git_repository,
            git::git_init,
            git::has_git_remote_url,
            git::git_configure_remote,
            git::has_uncommitted_changes,
            git::has_unpushed_commits,
            git::get_changed_files_in_commit,
            git::get_file_diff_in_commit,
            git::git_new_branch,
            interceptor::run_request,
            interceptor::cancel_request,
            menu::change_language,
        ])
        .setup(|app| {
            if cfg!(target_os = "macos") {
                #[cfg(target_os = "macos")]
                use mac::window::setup_mac_window;

                #[cfg(target_os = "macos")]
                setup_mac_window(app);
            } else if cfg!(target_os = "windows") {
                #[cfg(target_os = "windows")]
                use win::window::setup_win_window;

                #[cfg(target_os = "windows")]
                setup_win_window(app);
            }

            let handle_menu = app.handle().clone();
            let _ = handle_menu.set_menu(menu::build_default(&handle_menu)?);

            let window = app.get_webview_window("main").unwrap();
            app.on_menu_event(move |handle, event| {
                menu::handle_event(handle.clone(), &window.clone(), &event)
            });

            app.manage(AppState::new(app.handle()));

            Ok(())
        })
        .run(ctx)
        .expect("error while running tauri application");
}
