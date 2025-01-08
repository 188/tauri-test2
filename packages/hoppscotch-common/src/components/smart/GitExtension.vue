<template>
  <span class="inline-flex">
    <tippy
      id="git-commit"
      interactive
      trigger="click"
      theme="popover"
      hide-on-click="toggle"
    >
      <HoppButtonSecondary
        v-tippy="{ theme: 'tooltip' }"
        :title="currentBranche"
        :label="currentBranche"
        :loading="loadingState"
        style="padding-right: 2px"
        :on-shown="() => tippyActions!.focus()"
      />
      <i v-if="!loadingState" style="padding-top: 10px">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m6 9l6 6l6-6"
          />
        </svg>
      </i>
      <template #content="{ hide }">
        <div v-show="!loadingState">
          <div
            v-if="isGitDir"
            ref="tippyActions"
            class="flex flex-col focus:outline-none pd-0"
            style="min-width: 200px"
            @keyup.escape="hide()"
          >
            <HoppSmartItem
              label="Update..."
              :icon="IconArrowDownLeft"
              @click="
                () => {
                  pull()
                  hide()
                }
              "
            />
            <HoppSmartItem
              label="Commit..."
              :icon="IconGitCommitHorizontal"
              @click="
                () => {
                  showCommit()
                  hide()
                }
              "
            />
            <HoppSmartItem
              v-if="hasRemoteUrl"
              label="Push..."
              :icon="IconArrowDownRight"
              @click="
                () => {
                  push()
                  hide()
                }
              "
            />
            <HoppSmartItem
              v-if="!hasRemoteUrl"
              label="Define remote"
              @click="
                () => {
                  gitDefineRemote()
                  hide()
                }
              "
            />
            <hr />
            <HoppSmartItem
              v-if="brancheRemotes.length > 0"
              label="New Branch..."
              :icon="IconPlus"
              @click="
                () => {
                  newBranch()
                  hide()
                }
              "
            />
            <hr />
            <div class="pb-2 pl-4 text-tiny text-secondaryLight">Local</div>
            <HoppSmartItem
              v-for="branche in brancheLocals"
              :key="branche.branchName"
              :label="branche.branchName"
              :title="branche.branchName"
              :icon="
                branche.branchName === currentBranche
                  ? IconCheck
                  : IconGitBranch
              "
              @click="
                () => {
                  checkoutGitRepostiry(branche.branchName)
                  hide()
                }
              "
            ></HoppSmartItem>
            <hr />
            <div class="pb-2 pl-4 text-tiny text-secondaryLight">Remote</div>
            <HoppSmartItem
              v-for="branche in brancheRemotes"
              :key="branche.branchName"
              :label="branche.branchName"
              :title="branche"
              :icon="IconGitBranch"
              @click="
                () => {
                  checkoutGitRepostiry(branche.branchName)
                  hide()
                }
              "
            ></HoppSmartItem>
          </div>
          <div
            v-if="!isGitDir"
            ref="tippyActions"
            class="flex flex-col focus:outline-none"
            style="min-width: 200px"
          >
            <HoppSmartItem
              label="Clone Git Repostiry..."
              @click="
                () => {
                  gitClone()
                  hide()
                }
              "
            />
            <HoppSmartItem
              label="Create Git Repostiry..."
              @click="
                () => {
                  initGitRepostiry()
                  hide()
                }
              "
            />
          </div>
        </div>
      </template>
    </tippy>
    <HoppButtonPrimary
      label="Git Sync"
      :loading="loadingStateGitSync"
      class="h-8"
      style="margin-left: 20px"
      @click="sync"
    />
    <SmartGitClone
      :show="showModalClone"
      @hide-modal="showModalClone = false"
      @init="init"
    />
    <SmartGitDefineRemote
      :show="showModalDefineRemote"
      @hide-modal="showModalDefineRemote = false"
      @init="init"
    />
    <SmartGitCommit
      :show="showModalCommit"
      @close="showModalCommit = false"
      @init="init"
    />
    <SmartGitNewBranch
      :show="showNewBranch"
      @hide-modal="showNewBranch = false"
      @init="init"
    />
  </span>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { useI18n } from "@composables/i18n"
import { HoppButtonPrimary } from "@hoppscotch/ui"
import { useToast } from "~/composables/toast"
import { invokeAction } from "@helpers/actions"
import {
  isGitRepository,
  hasGitRemote,
  listGitBranches,
  gitInit,
  gitCheckout,
  gitPull,
  gitPush,
  gitCommit,
  hasUnpushedCommits,
  hasUncommittedChanges,
  GResultEnum,
  PullUpdateInfo,
  GResult,
  BranchInfo,
} from "@helpers/git"
import { useService } from "dioc/vue"
import { PersistenceService } from "~/services/persistence"
import { TippyComponent } from "vue-tippy"
import IconArrowDownLeft from "~icons/lucide/arrow-down-left"
import IconArrowDownRight from "~icons/lucide/arrow-down-right"
import IconGitCommitHorizontal from "~icons/lucide/git-commit-horizontal"
import IconPlus from "~icons/lucide/plus"
import IconGitBranch from "~icons/lucide/git-branch"
import IconCheck from "~icons/lucide/check"
import { sprintf } from "sprintf-js"

// TODO: This component might be completely whack right now

// const i18n = useFullI18n()
const t = useI18n()
const toast = useToast()
const brancheLocals = ref<BranchInfo[]>([])
const brancheRemotes = ref<BranchInfo[]>([])
const currentBranche = ref("version control")
const isGitDir = ref(false)
const hasRemoteUrl = ref(false)
const showModalClone = ref(false)
const showModalDefineRemote = ref(false)
const showModalCommit = ref(false)
const showNewBranch = ref(false)
const loadingStateGitSync = ref(false)
const loadingState = ref(false)
const persistenceService = useService(PersistenceService)

const gitSync = async () => {
  console.log("gitSync")
  try {
    const hasUnCommit = await hasUncommittedChanges()
    console.log("hasUnCommit", hasUnCommit)
    if (hasUnCommit) {
      try {
        await gitPull()
      } catch (error) {
        console.log(error)
      }
      await gitCommit(`${t("git.default_commit_message")}`)
    }
    const hasUnPush = await hasUnpushedCommits()
    console.log("hasUnPush", hasUnPush)
    if (hasUnPush) {
      try {
        await gitPush()
      } catch (error) {
        console.log("push2:", error)
      }
    }

    await gitPull()

    toast.success(`${t("git.sync_success_message")}`)
    init()
    persistenceService.setupLocalPersistence()
    return true
  } catch (error) {
    toast.error(String(error))
    return false
  }
}

const sync = () => {
  ;(async () => {
    try {
      loadingStateGitSync.value = true
      await gitSync()
      loadingStateGitSync.value = false
    } catch (error) {
      toast.error(String(error))
    }
  })()
}

const initIsGitDir = () => {
  isGitRepository().then((r) => {
    isGitDir.value = Boolean(r)
    console.log("initIsGitDir", isGitDir.value, r)
    if (!r) {
      currentBranche.value = "version control"
    } else {
      initHasRemoteUrl()
      initGitBranches()
    }
  })
}

const initHasRemoteUrl = () => {
  hasGitRemote().then((r) => {
    hasRemoteUrl.value = Boolean(r)
  })
}

const initGitBranches = () => {
  listGitBranches()
    .then((result) => {
      brancheLocals.value = []
      brancheRemotes.value = []
      for (const b of result) {
        if (b.branchType === "local") {
          if (b.isCurrent) {
            currentBranche.value = b.branchName
          }
          brancheLocals.value.push(b)
        } else if (b.branchType === "remote") {
          brancheRemotes.value.push(b)
        }
      }
    })
    .catch((error) => {
      toast.error(error)
    })
}

const init = () => {
  initIsGitDir()
}

init()

const initGitRepostiry = async () => {
  try {
    await gitInit()
    toast.success(`${t("git.initialization_success_message")}`)
    init()
  } catch (error) {
    toast.error(String(error))
    init()
  }
}

const checkoutGitRepostiry = async (brancheName: string) => {
  loadingState.value = true
  const brancheNameFormat = formatBranchName(brancheName)
  if (brancheNameFormat === currentBranche.value) {
    toast.info(`${t("git.checkout_current_message")}`)
    loadingState.value = false
    return
  }

  try {
    const hasNoCommit = await hasUncommittedChanges()
    if (hasNoCommit) {
      toast.info(`${t("git.has_no_commit_message")}`)
      loadingState.value = false
      return
    }

    gitCheckout(brancheNameFormat)
      .then((result: any) => {
        persistenceService.setupLocalPersistence()
        init()
        initGitBranches()
        toast.success(String(result))
        loadingState.value = false
      })
      .catch((error: string) => {
        init()
        initGitBranches()
        toast.error(error)
        loadingState.value = false
      })
  } catch (error) {
    toast.error(String(error))
    loadingState.value = false
  }
}

const formatBranchName = (val: string) => {
  if (val.startsWith("*")) {
    return val.replace("*", "").trim()
  } else if (val.includes("/")) {
    const valArr = val.split("/")
    return valArr[valArr.length - 1]
  }
  return val
}

const pull = () => {
  loadingState.value = true
  gitPull()
    .then((result: GResult<PullUpdateInfo>) => {
      if (result.status === GResultEnum.AlreadyUpToDate) {
        toast.success("Already up to date!")
        loadingState.value = false
        return
      } else if (result.status === GResultEnum.UncommittedChanges) {
        toast.success("Uncommitted Changes!")
        loadingState.value = false
        return
      }

      let message = sprintf(
        "%s commits: %s -> %s <br>",
        result.result.numCommits,
        result.result.oldCommitId,
        result.result.newCommitId
      )
      Object.entries(result.result.fileChanges).forEach(([key, changes]) => {
        if (Array.isArray(changes) && changes.length === 2) {
          const [add, del] = changes
          message +=
            key + "  " + add + " insertions(+)" + del + " deletions(-)<br>"
        }
      })
      toast.success(message)
      persistenceService.setupLocalPersistence()
      initGitBranches()
      loadingState.value = false
    })
    .catch((error: any) => {
      toast.error(error)
      initGitBranches()
      loadingState.value = false
    })
}

const push = () => {
  loadingState.value = true
  hasUnpushedCommits()
    .then((result) => {
      if (result) {
        gitPush()
          .then((res) => {
            if (res === GResultEnum.NoRemoteConfigured) {
              toast.error(
                "No remote configured. Please add a remote before pushing."
              )
              loadingState.value = false
              return
            }
            toast.success(`${t("git.push_success_message")}`)
            loadingState.value = false
          })
          .catch((error: any) => {
            console.log("push error:", error)
            toast.error(error)
            loadingState.value = false
          })
      } else {
        toast.success(`${t("git.push_no_changes_message")}`)
        loadingState.value = false
      }
    })
    .catch((error: any) => {
      toast.error(error)
      loadingState.value = false
    })
}

const showCommit = () => {
  invokeAction("flyouts.git-commit.toggle")
}

const gitClone = () => {
  showModalClone.value = true
}

const newBranch = () => {
  showNewBranch.value = true
}

const gitDefineRemote = () => {
  showModalDefineRemote.value = true
}

const tippyActions = ref<TippyComponent | null>(null)
</script>

<style scoped>
.pd-0 :deep(.mr-4) {
  margin-right: 2px !important;
}
</style>
