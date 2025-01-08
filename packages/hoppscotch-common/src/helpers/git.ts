import { invoke } from "@tauri-apps/api/core"
import { PersistenceService } from "~/services/persistence"
import { getService } from "~/modules/dioc"

const dataPathKey = "dataPath"

export interface BranchInfo {
  branchName: string
  branchType: string
  isCurrent: boolean
}
export interface PullUpdateInfo {
  newCommitId: string
  oldCommitId: string
  numCommits: number
  fileChanges: Record<string, [number, number]>
}
export interface CommitInfo {
  fullId: string
  shortId: string
  summary: string
  time: string
}
export enum GResultEnum {
  Success = "Success",
  BranchNotExistsRemote = "BranchNotExistsRemote",
  UncommittedChanges = "UncommittedChanges",
  AlreadyUpToDate = "AlreadyUpToDate",
  NoRemoteConfigured = "NoRemoteConfigured",
}
export interface GResult<T> {
  status: GResultEnum
  result: T
}

const getDataPath = () => {
  const persistenceService = getService(PersistenceService)
  const dataPath = persistenceService.getLocalConfig(dataPathKey)
  return dataPath
}

export const isGitRepository = async () => {
  const result = await invoke("is_git_repository", {
    repoPath: getDataPath(),
  })
  return result
}

export const hasGitRemote = async () => {
  const result = await invoke("has_git_remote_url", {
    repoPath: getDataPath(),
  })
  return result
}

export const listGitBranches = async () => {
  const result = await invoke<BranchInfo[]>("git_branches", {
    repoPath: getDataPath(),
  })
  return result
}

export const gitInit = async () => {
  return await invoke("git_init", {
    repoPath: getDataPath(),
  })
}

export const gitCheckout = async (branchName: string) => {
  return await invoke("git_checkout", {
    repoPath: getDataPath(),
    target: branchName,
  })
}

export const gitPull = async () => {
  return await invoke<GResult<PullUpdateInfo>>("git_pull", {
    repoPath: getDataPath(),
  })
}

export const gitPush = async () => {
  return await invoke<GResultEnum>("git_push", {
    repoPath: getDataPath(),
  })
}

export const gitCommit = async (message: string) => {
  return await invoke<string>("git_commit", {
    repoPath: getDataPath(),
    message: message,
  })
}

export const listGitCommitHistory = async (num: number) => {
  return await invoke<CommitInfo[]>("git_commit_history", {
    repoPath: getDataPath(),
    n: num,
  })
}

export const hasUncommittedChanges = async () => {
  return await invoke<boolean>("has_uncommitted_changes", {
    repoPath: getDataPath(),
  })
}

export const hasUnpushedCommits = async () => {
  return await invoke<boolean>("has_unpushed_commits", {
    repoPath: getDataPath(),
  })
}

export const gitClone = async (repoUrl: string) => {
  return await invoke<string>("git_clone", {
    repoUrl: repoUrl,
    destination: getDataPath(),
  })
}

export const gitConfigureRemote = async (remoteName: string, url: string) => {
  return await invoke("git_configure_remote", {
    repoPath: getDataPath(),
    remoteName: remoteName,
    url: url,
  })
}

export const getCurrentBranchName = async (): Promise<string> => {
  let currentBranche = "master"
  const resultBranch = await listGitBranches()
  for (const b of resultBranch) {
    if (b.isCurrent) {
      currentBranche = b.branchName
    }
  }
  return currentBranche
}

export const gitNewBranch = async (branchName: string) => {
  return await invoke<string>("git_new_branch", {
    repoPath: getDataPath(),
    branchName: branchName,
  })
}
