use std::fs;
use std::io;
use std::path::Path;
use std::path::PathBuf;

#[tauri::command]
pub fn read_file(path: String) -> Result<String, String> {
    use std::fs;
    match fs::read_to_string(path) {
        Ok(content) => Ok(content),
        Err(error) if error.kind() == io::ErrorKind::NotFound => Ok(String::new()),
        Err(error) => Err(error.to_string()),
    }
}

#[tauri::command]
pub fn write_file(path: String, content: String) -> Result<(), String> {
    use std::fs;
    let file_path = PathBuf::from(path);
    if !file_path.exists() {
        if let Some(parent) = file_path.parent() {
            fs::create_dir_all(parent).map_err(|e| e.to_string())?;
        }
        fs::File::create(&file_path).map_err(|e| e.to_string())?;
    }
    fs::write(file_path, content).map_err(|err| format!("Failed to write file: {}", err))
}

/// Recursively copies all files and subdirectories from the source directory to the destination directory, overwriting existing files.
#[tauri::command]
pub fn copy_folder_all(src: String, dst: String) -> Result<(), String> {
    let src_path = PathBuf::from(&src);
    let dst_path = PathBuf::from(&dst);

    // Check if the source path is a directory
    if !src_path.is_dir() {
        return Err(format!("Source path '{}' is not a directory", src));
    }

    // Try to copy the contents, and convert errors to String for Tauri
    match copy_directory_recursive(&src_path, &dst_path) {
        Ok(_) => Ok(()),
        Err(e) => Err(format!("Failed to copy folder: {}", e)),
    }
}

/// Recursively copies all files and subdirectories from `src` to `dst`.
fn copy_directory_recursive(src: &Path, dst: &Path) -> io::Result<()> {
    // Ensure the destination directory exists
    fs::create_dir_all(dst)?;

    // Iterate through the contents of the source directory
    for entry in fs::read_dir(src)? {
        let entry = entry?;
        let entry_path = entry.path();
        let dest_path = dst.join(entry.file_name());

        if entry_path.is_dir() {
            // Recursively copy subdirectories
            copy_directory_recursive(&entry_path, &dest_path)?;
        } else {
            // Copy files, overwriting any existing files at the destination
            fs::copy(&entry_path, &dest_path)?;
        }
    }
    Ok(())
}
