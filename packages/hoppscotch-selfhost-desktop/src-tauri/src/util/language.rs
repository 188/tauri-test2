use serde_json::Value;
use std::fs;
use std::path::Path;
use tauri::AppHandle;
use tauri::Manager;
use tauri::Runtime;

#[tauri::command]
pub fn menu<R: Runtime>(handle: &AppHandle<R>, language: &str) -> tauri::Result<Value> {
    let lang_data = load(handle, language)?;
    Ok(lang_data["menu"].clone())
}

#[tauri::command]
pub fn load<R: Runtime>(handle: &AppHandle<R>, language: &str) -> tauri::Result<Value> {
    let resource_dir = if cfg!(debug_assertions) {
        std::env::current_dir()?
    } else {
        handle.path().resource_dir()?
    };

    let path = resource_dir
        .join("locales")
        .join(format!("{}.json", language));
    if Path::new(&path).exists() {
        let lang_data = fs::read_to_string(path)?;
        let json: Value = serde_json::from_str(&lang_data)?;
        Ok(json)
    } else {
        let path = resource_dir.join("locales").join(format!("{}.json", "en"));
        if Path::new(&path).exists() {
            let fallback_data = fs::read_to_string(resource_dir.join("locales").join("en.json"))?;
            let json: Value = serde_json::from_str(&fallback_data)?;
            Ok(json)
        } else {
            Ok(Value::Object(Default::default()))
        }
    }
}
