/// <reference types="vite/client" />

// Environment Variables Intellisense
interface ImportMetaEnv {
  readonly VITE_PROXYSCOTCH_ACCESS_TOKEN?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
