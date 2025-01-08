pub trait ResultExt<T> {
    fn to_string_err(self) -> Result<T, String>;
}

impl<T, E: std::fmt::Display> ResultExt<T> for Result<T, E> {
    fn to_string_err(self) -> Result<T, String> {
        self.map_err(|e| e.to_string())
    }
}
