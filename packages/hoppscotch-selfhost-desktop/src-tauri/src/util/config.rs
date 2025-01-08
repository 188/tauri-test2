use crate::AppHandle;
use tauri::Manager;

#[tauri::command]
pub fn get_data_dir(handle: AppHandle) -> Result<String, String> {
    let data_dir = handle
        .path()
        .config_dir()
        .map_err(|e| e.to_string())?
        .join(handle.config().identifier.clone());
    Ok(data_dir.display().to_string())
}
