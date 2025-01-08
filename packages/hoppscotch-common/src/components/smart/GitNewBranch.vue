<template>
  <HoppSmartModal v-if="show" dialog title="New Branch" @close="hideModal">
    <template #body>
      <HoppSmartInput
        v-model="name"
        placeholder=" "
        label="new branch name"
        input-styles="floating-input"
        style="margin-bottom: 20px"
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
import { gitNewBranch } from "@helpers/git"

const toast = useToast()
const t = useI18n()
const name = ref("branch")
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

watch(
  () => props.show,
  (show) => {
    if (!show) {
      name.value = "branch"
    }
  }
)

const hideModal = () => {
  name.value = ""
  emit("hide-modal")
}

const submit = async () => {
  if (loadingState.value) {
    return
  }

  if (!name.value) {
    toast.error("name not empty")
    return
  }

  loadingState.value = true
  try {
    await gitNewBranch(name.value)
    toast.success("New branch created!")
    emit("init")
    hideModal()
    loadingState.value = false
  } catch (error) {
    toast.error(String(error))
    emit("init")
    loadingState.value = false
  }
}
</script>
