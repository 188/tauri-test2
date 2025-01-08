<template>
  <div class="flex min-h-screen flex-col items-center justify-center">
    <HoppSmartSpinner v-if="signingInWithEmail" />
    <AppLogo v-else class="h-16 w-16 rounded" />
    <pre v-if="error" class="mt-4 text-secondaryLight">{{ error }}</pre>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { useI18n } from "@composables/i18n"
import { initializeApp } from "~/helpers/app"

export default defineComponent({
  setup() {
    return {
      t: useI18n(),
    }
  },
  data() {
    return {
      signingInWithEmail: false,
      error: null,
    }
  },
  beforeMount() {
    initializeApp()
  },
  async mounted() {
    this.signingInWithEmail = false
  },
})
</script>

<route lang="yaml">
meta:
  layout: empty
  onlyGuest: true
</route>
