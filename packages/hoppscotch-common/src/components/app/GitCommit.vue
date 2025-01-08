<template>
  <HoppSmartSlideOver :show="show" title="Commit" @close="close()">
    <template #content>
      <textarea
        v-model="commitMessage"
        rows="5"
        cols="10"
        style="margin: 10px"
        wrap="soft"
        placeholder="Please enter a submit message"
        class="rounded-lg border-black"
      ></textarea>
      <span
        class="flex space-x-2"
        style="justify-content: center; width: 400px"
      >
        <HoppButtonPrimary
          label="Commit"
          :loading="loadingStateCommit"
          outline
          style="width: 150px"
          @click="commit"
        />
        <HoppButtonSecondary
          label="Commit And Push"
          :loading="loadingStateCommitAndPush"
          outline
          filled
          style="width: 150px"
          @click="gitCommitAndPush"
        />
      </span>
      <div
        ref="tippyActions"
        class="flex flex-col focus:outline-none"
        style="min-width: 200px; margin-top: 20px"
      >
        <div class="pb-2 pl-4 text-sm font-bold text-secondaryLight">
          The last 10 commit times
        </div>

        <HoppSmartItem
          v-for="c in commitHistorys"
          :key="c.fullId"
          :label="c.shortId + ' ' + c.summary"
          :title="c.time"
        ></HoppSmartItem>
      </div>
    </template>
  </HoppSmartSlideOver>
</template>

<script setup lang="ts">
import { ref, watch } from "vue"
import { useI18n } from "@composables/i18n"
import { useToast } from "~/composables/toast"
import {
  gitPull,
  gitPush,
  gitCommit,
  listGitCommitHistory,
  hasUncommittedChanges,
  hasUnpushedCommits,
  CommitInfo,
} from "@helpers/git"

const t = useI18n()
const toast = useToast()

const commitHistorys = ref<CommitInfo[]>([])
const loadingStateCommit = ref(false)
const loadingStateCommitAndPush = ref(false)
const commitMessage = ref("")

const props = defineProps<{
  show: boolean
}>()
watch(
  () => props.show,
  (newVal) => {
    if (newVal) {
      commitMessage.value = ""
      init()
    }
  }
)

const init = () => {
  listGitCommitHistory(10)
    .then((result) => {
      commitHistorys.value = result
    })
    .catch((error) => {
      toast.error(error)
    })
}

// init()

const validate = async () => {
  if (!commitMessage.value || commitMessage.value.length < 5) {
    toast.error(`${t("git.commit_message_error_message")}`)
    return false
  }
  return true
}

const commitSync = async () => {
  const hasUnCommit = await hasUncommittedChanges()
  if (!hasUnCommit) {
    toast.info(`${t("git.commit_no_changes_message")}`)
    return false
  }
  try {
    await gitPull()
  } catch (error) {}
  await gitCommit(commitMessage.value)
  return true
}

const commit = () => {
  ;(async () => {
    try {
      loadingStateCommit.value = true
      if (!(await validate())) {
        loadingStateCommit.value = false
        return
      }

      if (await commitSync()) {
        toast.success(`${t("git.commit_success_message")}`)
      }
      loadingStateCommit.value = false
      init()
      close()
    } catch (error) {
      toast.error(String(error))
      loadingStateCommit.value = false
    }
  })()
}

const pushSync = async () => {
  const hasUnPush = hasUnpushedCommits()
  if (!hasUnPush) {
    toast.info(`${t("git.push_no_changes_message")}`)
    return false
  }
  await gitPush()
  return true
}

const gitCommitAndPush = () => {
  ;(async () => {
    try {
      loadingStateCommitAndPush.value = true
      if (!(await validate())) {
        loadingStateCommitAndPush.value = false
        return
      }

      if (await commitSync()) {
        if (await pushSync()) {
          toast.success(`${t("git.commit_push_success_message")}`)
        }
      }

      loadingStateCommitAndPush.value = false
      init()
      close()
    } catch (error) {
      toast.error(String(error))
      loadingStateCommitAndPush.value = false
    }
  })()
}

const emit = defineEmits<{
  (e: "close"): void
}>()

const close = () => {
  emit("close")
}
</script>

<style scoped>
textarea {
  resize: vertical;
  overflow: auto;
  padding: 10px;
  margin-top: 10px;
  word-wrap: break-word;
  white-space: pre-wrap;
}
</style>
