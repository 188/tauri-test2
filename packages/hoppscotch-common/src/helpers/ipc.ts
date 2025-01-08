import { Toasted } from "@hoppscotch/vue-toasted"
import { listen } from "@tauri-apps/api/event"
import { readText, writeText } from "@tauri-apps/plugin-clipboard-manager"
import { Router } from "vue-router"

export const ipcListener = (router: Router, toast: Toasted) => {
  listen("menu://edit/paste", async () => {
    const pastedText = await readText()

    const activeElement = document.activeElement
    if (activeElement) {
      if (
        activeElement instanceof HTMLElement &&
        activeElement.isContentEditable
      ) {
        const selection = window.getSelection()
        const range = selection?.getRangeAt(0)

        if (range) {
          range.deleteContents()
          range.insertNode(document.createTextNode(pastedText))
          range.collapse(false)

          selection?.removeAllRanges()
          selection?.addRange(range)
        }
      } else if (
        activeElement instanceof HTMLInputElement ||
        activeElement instanceof HTMLTextAreaElement
      ) {
        const startPos = activeElement.selectionStart || 0
        const endPos = activeElement.selectionEnd || 0
        if (startPos !== endPos) {
          activeElement.setRangeText(pastedText, startPos, endPos, "end")
        } else {
          activeElement.setRangeText(pastedText, startPos, startPos, "end")
        }
      } else {
        console.log("Active element is not a supported input type.")
      }
    }
  })

  listen("menu://edit/copy", async () => {
    const selection = window.getSelection()
    const selectText = selection ? selection.toString() : ""
    await writeText(selectText)
  })

  listen("menu://global/settings", () => {
    router.push(`/settings`)
  })

  listen("menu://file/new", () => {
    const currentPath = router.currentRoute.value.path
    if (!currentPath || typeof currentPath === "undefined") {
      return
    }
    if (currentPath !== "/" && currentPath !== "/graphql") {
      toast.show("The current function does not support Tab creation!")
      return
    }
  })
}

export const listenRestFileNew = async (
  router: Router,
  toast: Toasted,
  callback: () => void
) => {
  return await listen("menu://file/new", () => {
    const currentPath = router.currentRoute.value.path
    if (!currentPath || typeof currentPath === "undefined") {
      return
    }
    if (currentPath === "/" || currentPath === "/graphql") {
      callback()
    }
  })
}

export const listenGlobalAbout = async (callback: () => void) => {
  await listen("menu://global/about", () => {
    callback()
  })
}
