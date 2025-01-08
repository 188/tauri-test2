<template>
  <span class="inline-flex">
    <tippy interactive trigger="click" theme="popover">
      <div class="flex items-center">
        <HoppSmartItem
          :label="folderPath"
          @click="selectFolder"
        ></HoppSmartItem>
      </div>
    </tippy>
  </span>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { invoke } from "@tauri-apps/api/core"
import { open } from "@tauri-apps/plugin-dialog"
import { useService } from "dioc/vue"
import { PersistenceService } from "~/services/persistence"

// TODO: This component might be completely whack right now
const folderPath = ref("")
const dataPathKey = "dataPath"

const persistenceService = useService(PersistenceService)

const initData = () => {
  const dataPath = persistenceService.getLocalConfig(dataPathKey)
  if (dataPath) {
    folderPath.value = dataPath
  }
}
initData()

async function selectFolder() {
  try {
    const selected = await open({
      directory: true,
      multiple: false,
    })
    if (selected) {
      if (Array.isArray(selected)) {
        folderPath.value = selected[0]
      } else {
        folderPath.value = selected
      }
      const dataPath = persistenceService.getLocalConfig(dataPathKey)
      await invoke("copy_folder_all", { src: dataPath, dst: folderPath.value })
      persistenceService.setLocalConfig(dataPathKey, folderPath.value)
      persistenceService.setupLocalPersistence()
    }
  } catch (error) {
    console.error(error)
  }
}
</script>
