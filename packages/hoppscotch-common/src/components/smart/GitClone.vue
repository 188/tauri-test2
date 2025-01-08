<template>
  <HoppSmartModal
    v-if="show"
    dialog
    title="Clone Git Repostiry"
    @close="hideModal"
  >
    <template #body>
      <HoppSmartInput
        v-model="gitUrl"
        placeholder=" "
        label="Git Url"
        input-styles="floating-input"
      />
    </template>
    <template #footer>
      <span class="flex space-x-2">
        <HoppButtonPrimary
          label="Clone"
          :loading="loadingState"
          outline
          @click="clone"
        />
        <HoppButtonSecondary
          :label="t('action.cancel')"
          outline
          filled
          @click="hideModal"
        />
      </span>
    </template>
  </HoppSmartModal>
</template>

<script setup lang="ts">
import { watch, ref } from "vue"
import { useToast } from "@composables/toast"
import { useI18n } from "@composables/i18n"
import { HoppButtonPrimary } from "@hoppscotch/ui"
import { gitClone } from "@helpers/git"
import { useService } from "dioc/vue"
import { PersistenceService } from "~/services/persistence"

const toast = useToast()
const t = useI18n()
const loadingState = ref(false)
const persistenceService = useService(PersistenceService)

const props = withDefaults(
  defineProps<{
    show: boolean
  }>(),
  {
    show: false,
  }
)

const emit = defineEmits<{
  (e: "init"): void
  (e: "hide-modal"): void
}>()

const gitUrl = ref("")

watch(
  () => props.show,
  (show) => {
    if (!show) {
      gitUrl.value = ""
      hideModal()
    }
  }
)

const hideModal = () => {
  gitUrl.value = ""
  emit("hide-modal")
}

const clone = () => {
  if (loadingState.value) {
    return
  }

  if (!gitUrl.value) {
    console.log("gitUrl not empty2", gitUrl.value)
    toast.error(`${t("git.url_empty_message")}`)
    return
  }
  loadingState.value = true
  gitClone(gitUrl.value)
    .then(() => {
      hideModal()
      toast.success("Cloned successfully!")
      emit("init")
      persistenceService.setupLocalPersistence()
      loadingState.value = false
    })
    .catch((error) => {
      toast.error(error)
      emit("init")
      loadingState.value = false
    })
}
</script>
