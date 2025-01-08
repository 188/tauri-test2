use std::sync::Arc;
use tauri::AppHandle;
use tauri::Manager;
use tauri_plugin_store::{Store, StoreBuilder};

pub struct AppState<R: tauri::Runtime> {
    store: Arc<Store<R>>,
}

impl<R: tauri::Runtime> AppState<R> {
    pub fn new(handle: &AppHandle<R>) -> Self {
        let app_dir = handle
            .path()
            .app_data_dir()
            .expect("App data directory not found");
        let file_path = app_dir.join("settings.db");

        let store = match StoreBuilder::new(handle, file_path).build() {
            Ok(store) => store,
            Err(e) => panic!("Failed to build store: {}", e),
        };
        AppState { store }
    }

    pub fn set<T>(&mut self, key: &str, value: T) -> Result<(), String>
    where
        T: serde::Serialize,
    {
        let json_value = serde_json::to_value(value).map_err(|e| e.to_string())?;
        self.store.set(key.to_string(), json_value);
        Ok(())
    }

    pub fn get<T>(&self, key: &str, default: T) -> T
    where
        T: serde::de::DeserializeOwned + Clone,
    {
        self.store
            .get(key)
            .and_then(|json_value| serde_json::from_value(json_value.clone()).ok())
            .unwrap_or(default)
    }
}
