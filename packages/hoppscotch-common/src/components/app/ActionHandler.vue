<template>
  <AppShortcuts :show="showShortcuts" @close="showShortcuts = false" />
  <AppShare :show="showShare" @hide-modal="showShare = false" />
  <AppGitCommit :show="showGitCommit" @close="showGitCommit = false" />
  <HttpResponseInterface
    v-if="isDrawerOpen"
    :show="isDrawerOpen"
    @close="isDrawerOpen = false"
  />
</template>

<script setup lang="ts">
import { ref } from "vue"
import { defineActionHandler } from "~/helpers/actions"

const showShortcuts = ref(false)
const showShare = ref(false)
const showLogin = ref(false)
const isDrawerOpen = ref(false)
const showGitCommit = ref(false)

defineActionHandler("flyouts.keybinds.toggle", () => {
  showShortcuts.value = !showShortcuts.value
})

defineActionHandler("modals.share.toggle", () => {
  showShare.value = !showShare.value
})

defineActionHandler("modals.login.toggle", () => {
  showLogin.value = !showLogin.value
})

defineActionHandler("response.schema.toggle", () => {
  isDrawerOpen.value = !isDrawerOpen.value
})

defineActionHandler("flyouts.git-commit.toggle", () => {
  showGitCommit.value = !showGitCommit.value
})
</script>
