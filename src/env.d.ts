/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_TRUENAS_API: string
  readonly VITE_TRUENAS_USER: string
  readonly VITE_TRUENAS_PASSWORD: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
