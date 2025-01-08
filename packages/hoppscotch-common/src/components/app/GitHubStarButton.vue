<template>
  <GithubButton
    title="Star Postdata on GitHub"
    href="https://github.com/mamahuhu-io/postdata"
    :data-color-scheme="
      colorMode.value != 'light'
        ? colorMode.value == 'black'
          ? 'dark'
          : 'dark_dimmed'
        : 'light'
    "
    data-show-count="true"
    data-text="Star"
    aria-label="Star Postdata on GitHub"
    :data-size="size"
  />
</template>

<script setup lang="ts">
import GithubButton from "vue-github-button"
import { useColorMode } from "@composables/theming"

const colorMode = useColorMode()

defineProps({
  size: {
    type: String,
    default: undefined,
  },
})
</script>
