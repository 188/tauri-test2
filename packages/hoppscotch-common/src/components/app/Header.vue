<template>
  <div>
    <header
      ref="headerRef"
      class="grid grid-cols-5 grid-rows-1 gap-2 overflow-x-auto overflow-y-hidden p-2"
      @mousedown.prevent="platform.ui?.appHeader?.onHeaderAreaClick?.()"
      @dblclick="handleDoubleClick"
    >
      <div
        class="col-span-2 flex items-center justify-between space-x-2"
        :style="{
          paddingTop: platform.ui?.appHeader?.paddingTop?.value,
          paddingLeft: platform.ui?.appHeader?.paddingLeft?.value,
        }"
      >
        <div class="flex">
          <HoppButtonSecondary
            class="!font-bold uppercase tracking-wide !text-secondaryDark hover:bg-primaryDark focus-visible:bg-primaryDark"
            :label="t('app.name')"
            to="/"
          />
        </div>
      </div>
      <div class="col-span-1 flex items-center justify-between space-x-2">
        <AppSpotlightSearch />
      </div>
      <div class="col-span-2 flex items-center justify-between space-x-2">
        <div class="flex">
          <HoppButtonSecondary
            v-tippy="{ theme: 'tooltip', allowHTML: true }"
            :title="`${
              mdAndLarger ? t('support.title') : t('app.options')
            } <kbd>?</kbd>`"
            :icon="IconLifeBuoy"
            class="rounded hover:bg-primaryDark focus-visible:bg-primaryDark"
            @click="invokeAction('modals.support.toggle')"
          />
        </div>
        <div
          class="flex"
          :class="{
            'flex-row-reverse gap-2': workspaceSelectorFlagEnabled,
          }"
        >
          <div class="inline-flex items-center space-x-2">
            <SmartGitExtension></SmartGitExtension>

            <HoppButtonPrimary
              v-if="APP_IS_IN_DEV_MODE"
              label="Test"
              class="h-8"
              @click="reLoad"
            />
          </div>
          <div
            v-if="workspaceSelectorFlagEnabled"
            class="inline-flex items-center space-x-2"
          >
            <tippy
              interactive
              trigger="click"
              theme="popover"
              :on-shown="() => accountActions.focus()"
            >
              <HoppSmartSelectWrapper
                class="!text-blue-500 !focus-visible:text-blue-600 !hover:text-blue-600"
              >
                <HoppButtonSecondary
                  v-tippy="{ theme: 'tooltip' }"
                  :title="t('workspace.change')"
                  :label="mdAndLarger ? workspaceName : ``"
                  :icon="workspace.type === 'personal' ? IconUser : IconUsers"
                  class="!focus-visible:text-blue-600 !hover:text-blue-600 h-8 rounded border border-blue-600/25 bg-blue-500/10 pr-8 !text-blue-500 hover:border-blue-600/20 hover:bg-blue-600/20 focus-visible:border-blue-600/20 focus-visible:bg-blue-600/20"
                />
              </HoppSmartSelectWrapper>
              <template #content="{ hide }">
                <div
                  ref="accountActions"
                  class="flex flex-col focus:outline-none"
                  tabindex="0"
                  @keyup.escape="hide()"
                  @click="hide()"
                >
                  <WorkspaceSelector />
                </div>
              </template>
            </tippy>
          </div>
        </div>
      </div>
    </header>
    <AppBanner
      v-if="bannerContent"
      :banner="bannerContent"
      @dismiss="dismissBanner"
    />
    <TeamsModal :show="showTeamsModal" @hide-modal="showTeamsModal = false" />
    <TeamsInvite
      v-if="workspace.type === 'team' && workspace.teamID"
      :show="showModalInvite"
      :editing-team-i-d="editingTeamID"
      @hide-modal="displayModalInvite(false)"
    />
    <TeamsEdit
      :show="showModalEdit"
      :editing-team="editingTeamName"
      :editing-team-i-d="editingTeamID"
      @hide-modal="displayModalEdit(false)"
      @invite-team="inviteTeam(editingTeamName, editingTeamID)"
      @refetch-teams="refetchTeams"
    />
    <HoppSmartConfirmModal
      :show="confirmRemove"
      :title="t('confirm.remove_team')"
      @hide-modal="confirmRemove = false"
      @resolve="deleteTeam"
    />
  </div>
</template>

<script setup lang="ts">
import { useI18n, useFullI18n } from "@composables/i18n"
import { useReadonlyStream } from "@composables/stream"
import { defineActionHandler, invokeAction } from "@helpers/actions"
import { breakpointsTailwind, useBreakpoints, useNetwork } from "@vueuse/core"
import { useService } from "dioc/vue"
import * as TE from "fp-ts/TaskEither"
import { pipe } from "fp-ts/function"
import { computed, reactive, ref, watch } from "vue"
import { useToast } from "~/composables/toast"
import { GetMyTeamsQuery, TeamMemberRole } from "~/helpers/backend/graphql"
import { deleteTeam as backendDeleteTeam } from "~/helpers/backend/mutations/Team"
import { platform } from "~/platform"
import {
  BANNER_PRIORITY_LOW,
  BannerContent,
  BannerService,
} from "~/services/banner.service"
import { WorkspaceService } from "~/services/workspace.service"
import IconLifeBuoy from "~icons/lucide/life-buoy"
import IconUser from "~icons/lucide/user"
import IconUsers from "~icons/lucide/users"
import { WebviewWindow } from "@tauri-apps/api/webviewWindow"
import { invoke } from "@tauri-apps/api/core"
import { APP_IS_IN_DEV_MODE } from "@helpers/dev"

const t = useI18n()

invoke("change_language", { language: useFullI18n().locale.value })

const toast = useToast()

/**
 * Feature flag to enable the workspace selector login conversion
 */
const workspaceSelectorFlagEnabled = computed(
  () => !!platform.platformFeatureFlags.workspaceSwitcherLogin?.value
)

const showTeamsModal = ref(false)

const breakpoints = useBreakpoints(breakpointsTailwind)
const mdAndLarger = breakpoints.greater("md")

const banner = useService(BannerService)
const bannerContent = computed(() => banner.content.value?.content)
let offlineBannerID: number | null = null

const offlineBanner: BannerContent = {
  type: "warning",
  text: (t) => t("helpers.offline"),
  alternateText: (t) => t("helpers.offline_short"),
  score: BANNER_PRIORITY_LOW,
  dismissible: true,
}

// Show the offline banner if the app is offline
const network = reactive(useNetwork())
const isOnline = computed(() => network.isOnline)

watch(isOnline, () => {
  if (!isOnline.value) {
    offlineBannerID = banner.showBanner(offlineBanner)
    return
  }
  if (banner.content && offlineBannerID) {
    banner.removeBanner(offlineBannerID)
  }
})

const dismissBanner = () => {
  if (banner.content.value) {
    banner.removeBanner(banner.content.value.id)
  } else if (offlineBannerID) {
    banner.removeBanner(offlineBannerID)
    offlineBannerID = null
  }
}

const confirmRemove = ref(false)
const teamID = ref<string | null>(null)

const selectedTeam = ref<GetMyTeamsQuery["myTeams"][number] | undefined>()

// TeamList-Adapter
const workspaceService = useService(WorkspaceService)
const teamListAdapter = workspaceService.acquireTeamListAdapter(null)
const myTeams = useReadonlyStream(teamListAdapter.teamList$, null)

const workspace = workspaceService.currentWorkspace

const workspaceName = computed(() => {
  return workspace.value.type === "personal"
    ? t("workspace.personal")
    : workspace.value.teamName
})

const refetchTeams = () => {
  teamListAdapter.fetchList()
}

watch(
  () => myTeams.value,
  (newTeams) => {
    const space = workspace.value

    if (newTeams && space.type === "team" && space.teamID) {
      const team = newTeams.find((team) => team.id === space.teamID)
      if (team) {
        selectedTeam.value = team
        // Update the workspace name if it's not the same as the updated team name
        if (team.name !== space.teamName) {
          workspaceService.updateWorkspaceTeamName(team.name)
        }
      }
    }
  }
)

watch(
  () => workspace.value,
  (newWorkspace) => {
    if (newWorkspace.type === "team") {
      const team = myTeams.value?.find((t) => t.id === newWorkspace.teamID)
      if (team) {
        selectedTeam.value = team
      }
    }
  }
)

const showModalInvite = ref(false)
const showModalEdit = ref(false)

const editingTeamName = ref<{ name: string }>({ name: "" })
const editingTeamID = ref("")

const displayModalInvite = (show: boolean) => {
  showModalInvite.value = show
}

const displayModalEdit = (show: boolean) => {
  showModalEdit.value = show
  teamListAdapter.fetchList()
}

const inviteTeam = (team: { name: string }, teamID: string) => {
  editingTeamName.value = team
  editingTeamID.value = teamID
  displayModalInvite(true)
}

// Show the workspace selected team edit modal if the user is an owner of the team
const handleTeamEdit = () => {
  if (
    workspace.value.type === "team" &&
    workspace.value.teamID &&
    selectedTeam.value?.myRole === "OWNER"
  ) {
    editingTeamID.value = workspace.value.teamID
    editingTeamName.value = { name: selectedTeam.value.name }
    displayModalEdit(true)
  } else {
    noPermission()
  }
}

const deleteTeam = () => {
  if (!teamID.value) return
  pipe(
    backendDeleteTeam(teamID.value),
    TE.match(
      (err) => {
        // TODO: Better errors ? We know the possible errors now
        toast.error(`${t("error.something_went_wrong")}`)
        console.error(err)
      },
      () => {
        invokeAction("workspace.switch.personal")
        toast.success(`${t("team.deleted")}`)
      }
    )
  )() // Tasks (and TEs) are lazy, so call the function returned
}

// Template refs

const accountActions = ref<any | null>(null)

defineActionHandler("modals.team.edit", handleTeamEdit)

defineActionHandler("modals.team.invite", () => {
  if (
    selectedTeam.value?.myRole === "OWNER" ||
    selectedTeam.value?.myRole === "EDITOR"
  ) {
    inviteTeam({ name: selectedTeam.value.name }, selectedTeam.value.id)
  } else {
    noPermission()
  }
})

defineActionHandler("modals.team.delete", ({ teamId }) => {
  if (selectedTeam.value?.myRole !== TeamMemberRole.Owner) return noPermission()
  teamID.value = teamId
  confirmRemove.value = true
})

const noPermission = () => {
  toast.error(`${t("profile.no_permission")}`)
}

const handleDoubleClick = async () => {
  const currentWindow = WebviewWindow.getCurrent()
  const isMaximized = await currentWindow.isMaximized()
  if (isMaximized) {
    await currentWindow.unmaximize()
  } else {
    await currentWindow.maximize()
  }
}

const reLoad = async () => {
  // await invoke("change_language", { language: "en" })
}
</script>
