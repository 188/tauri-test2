use hex_color::HexColor;
use std::mem::transmute;
use std::sync::atomic::{AtomicUsize, Ordering};
use std::{ffi::c_void, mem::size_of, ptr};
use tauri::Emitter;
use tauri::Listener;
use tauri::WebviewWindow;
use tauri::{App, Manager};
use windows::Win32::UI::WindowsAndMessaging::HWND;

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
    let window = app.get_webview_window("main").unwrap();
    let win_handle = window.hwnd().unwrap();

    // 使用 AtomicUsize 来存储 HWND 的值
    let win_handle = AtomicUsize::new(win_handle.0 as usize);

    let win_clone = win_handle.clone();

    app.listen_any("hopp-bg-changed", move |ev| {
        let payload = serde_json::from_str::<&str>(ev.payload()).unwrap().trim();

        let color = HexColor::parse_rgb(payload).unwrap();

        // 获取 HWND 的值
        let hwnd_value = win_clone.load(Ordering::SeqCst);
        let hwnd = HWND(hwnd_value as isize);

        update_bg_color(&hwnd, color);
    });

    // 获取 HWND 的值
    let hwnd_value = win_handle.load(Ordering::SeqCst);
    let hwnd = HWND(hwnd_value as isize);

    update_bg_color(&hwnd, HexColor::rgb(23, 23, 23));
}
