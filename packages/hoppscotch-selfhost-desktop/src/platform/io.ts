import { IOPlatformDef } from "@hoppscotch/common/platform/io"
import { save } from "@tauri-apps/plugin-dialog"
import { open } from "@tauri-apps/plugin-shell"
import { writeFile, writeTextFile } from "@tauri-apps/plugin-fs"

export const ioDef: IOPlatformDef = {
  async saveFileWithDialog(opts) {
    const path = await save({
      filters: opts.filters,
      defaultPath: opts.suggestedFilename,
    })

    if (path === null) {
      return { type: "cancelled" }
    }

    if (typeof opts.data === "string") {
      await writeTextFile(path, opts.data)
    } else {
      await writeFile(path, opts.data)
    }

    return { type: "saved", path }
  },
  openExternalLink(url) {
    return open(url)
  },
}
