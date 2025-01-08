<template>
  <HoppSmartModal v-if="show" dialog title="Define Remote" @close="hideModal">
    <template #body>
      <HoppSmartInput
        v-model="name"
        placeholder=" "
        label="name"
        input-styles="floating-input"
        style="margin-bottom: 20px"
      />
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
          :label="t('action.save')"
          :loading="loadingState"
          outline
          @click="submit"
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
import { gitCommit, gitConfigureRemote } from "@helpers/git"

const toast = useToast()
const t = useI18n()
const name = ref("origin")
const loadingState = ref(false)

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
    }
  }
)

const hideModal = () => {
  gitUrl.value = ""
  emit("hide-modal")
}

const submit = async () => {
  if (loadingState.value) {
    return
  }

  if (!gitUrl.value) {
    toast.error(`${t("git.url_empty_message")}`)
    return
  }
  if (!name.value) {
    toast.error(`${t("git.remote_name_empty_message")}`)
    return
  }

  loadingState.value = true
  try {
    await gitCommit(`${t("git.remote_defined_commit_message")}`)
    await gitConfigureRemote(name.value, gitUrl.value)

    toast.success(`${t("git.remote_defined_success_message")}`)
    emit("init")
    loadingState.value = false
    hideModal()
  } catch (error) {
    toast.error(String(error))
    emit("init")
    loadingState.value = false
  }
}
</script>
