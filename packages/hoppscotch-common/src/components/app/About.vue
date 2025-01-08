<template>
  <HoppSmartModal v-if="show" dialog @close="hideModal">
    <template #body>
      <div class="w-full mx-auto text-sm">
        <p class="w-1/2 mx-auto"><AppLogo class="w-28 h-28 mx-auto" /></p>
        <p class="text-center p-2 mx-auto font-extrabold">
          {{ `${t("app.name")}` }}
        </p>
        <p class="w-full text-center p-1 mx-auto font-medium">
          {{ `v${version}` }}
        </p>
        <p
          class="w-full text-center p-1 mx-auto"
          style="padding: 0px 50px 0px 50px"
        >
          Postdata is a Git-integrated, fully offline, and open-source API
          client.
        </p>
        <p class="w-full text-center p-1 mx-auto">
          <a class="px-2" target="_blank" href="https://postdata.cn">website</a>
          <a
            class="px-2"
            target="_blank"
            href="https://github.com/mamahuhu-io/postdata"
          >
            Source Code
          </a>
          <a
            class="px-2"
            target="_blank"
            href="https://github.com/mamahuhu-io/postdata/issues"
          >
            Issues
          </a>
          <a class="px-2" target="_blank" href="mailto:steven@postdata.cn"
            >Contact us
          </a>
        </p>
      </div>
    </template>
    <template #footer>
      <span class="flex space-x-2">
        <HoppButtonSecondary
          :label="t('action.close')"
          outline
          filled
          @click="hideModal"
        />
      </span>
    </template>
  </HoppSmartModal>
</template>

<script setup lang="ts">
import { version } from "~/../package.json"
import { useI18n } from "@composables/i18n"
const t = useI18n()

withDefaults(
  defineProps<{
    show: boolean
  }>(),
  {
    show: false,
    loadingState: false,
  }
)

const emit = defineEmits<{
  (e: "hide-modal"): void
}>()

const hideModal = () => {
  emit("hide-modal")
}
</script>
