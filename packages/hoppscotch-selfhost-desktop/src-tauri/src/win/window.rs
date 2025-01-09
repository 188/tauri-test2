use hex_color::HexColor;
use tauri::Emitter;
use tauri::Listener;
use tauri::WebviewWindow;
use tauri::{App, Manager};

use std::mem::transmute;
use std::{ffi::c_void, mem::size_of, ptr};

use windows::Win32::UI::Controls::{
    WTA_NONCLIENT, WTNCA_NODRAWICON, WTNCA_NOMIRRORHELP, WTNCA_NOSYSMENU,
};

use windows::Win32::Foundation::BOOL;
use windows::Win32::Foundation::COLORREF;
use windows::Win32::Foundation::HWND;
use windows::Win32::Graphics::Dwm::DwmSetWindowAttribute;
use windows::Win32::Graphics::Dwm::DWMWA_CAPTION_COLOR;
use windows::Win32::Graphics::Dwm::DWMWA_USE_IMMERSIVE_DARK_MODE;
use windows::Win32::UI::Controls::SetWindowThemeAttribute;
use windows::Win32::UI::Controls::WTNCA_NODRAWCAPTION;

use winver::WindowsVersion;

fn hex_color_to_colorref(color: HexColor) -> COLORREF {
    // TODO: Remove this unsafe, This operation doesn't need to be unsafe!
    unsafe { COLORREF(transmute::<[u8; 4], u32>([color.r, color.g, color.b, 0])) }
}

struct WinThemeAttribute {
    flag: u32,
    mask: u32,
}

#[cfg(target_os = "windows")]
fn update_bg_color(hwnd: &HWND, bg_color: HexColor) {
    let use_dark_mode = BOOL::from(true);

    let final_color = hex_color_to_colorref(bg_color);

    unsafe {
        DwmSetWindowAttribute(
            HWND(hwnd.0),
            DWMWA_USE_IMMERSIVE_DARK_MODE,
            ptr::addr_of!(use_dark_mode) as *const c_void,
            size_of::<BOOL>().try_into().unwrap(),
        )
        .unwrap();
    }

    let version = WindowsVersion::detect().unwrap();
    if version >= WindowsVersion::new(10, 0, 22000) {
        unsafe {
            DwmSetWindowAttribute(
                HWND(hwnd.0),
                DWMWA_CAPTION_COLOR,
                ptr::addr_of!(final_color) as *const c_void,
                size_of::<COLORREF>().try_into().unwrap(),
            )
            .unwrap();
        }
    }

    let flags = WTNCA_NODRAWCAPTION | WTNCA_NODRAWICON;
    let mask = WTNCA_NODRAWCAPTION | WTNCA_NODRAWICON | WTNCA_NOSYSMENU | WTNCA_NOMIRRORHELP;
    let options = WinThemeAttribute { flag: flags, mask };

    unsafe {
        SetWindowThemeAttribute(
            HWND(hwnd.0),
            WTA_NONCLIENT,
            ptr::addr_of!(options) as *const c_void,
            size_of::<WinThemeAttribute>().try_into().unwrap(),
        )
        .unwrap();
    }
}

#[cfg(target_os = "windows")]
pub fn setup_win_window(app: &mut App) {
    use std::sync::{Arc, Mutex};
    use tauri::api::window::WindowHandleExtWindows; // 引入 Tauri 提供的 Windows 特定扩展

    let window = app.get_webview_window("main").unwrap();
    let hwnd = window.hwnd().unwrap(); // 获取 HWND 指针

    // 将 HWND 包装到线程安全的 Arc<Mutex>
    let hwnd_arc = Arc::new(Mutex::new(hwnd));

    // 监听 "hopp-bg-changed" 事件
    let hwnd_clone = Arc::clone(&hwnd_arc);
    app.listen_any("hopp-bg-changed", move |ev| {
        if let Some(payload) = ev.payload() {
            if let Ok(color) = HexColor::parse_rgb(payload.trim()) {
                // 安全访问和使用 HWND
                if let Ok(hwnd) = hwnd_clone.lock() {
                    update_bg_color(&HWND(hwnd.0), color);
                }
            }
        }
    });

    // 设置初始背景颜色
    if let Ok(hwnd) = hwnd_arc.lock() {
        update_bg_color(&HWND(hwnd.0), HexColor::rgb(23, 23, 23));
    }
}
