/* eslint-disable */ // Auto-generated file (DO NOT EDIT!!!), refer gql-codegen.yml

import { offlineExchange } from '@urql/exchange-graphcache';
import { Resolver as GraphCacheResolver, UpdateResolver as GraphCacheUpdateResolver, OptimisticMutationResolver as GraphCacheOptimisticMutationResolver } from '@urql/exchange-graphcache';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type Admin = {
  __typename?: 'Admin';
  /** Date when the user account was created */
  createdOn: Scalars['DateTime']['output'];
  /** Name of the user (if fetched) */
  displayName?: Maybe<Scalars['String']['output']>;
  /** Email of the user */
  email?: Maybe<Scalars['String']['output']>;
  /** Date when the user last interacted with the app */
  lastActiveOn?: Maybe<Scalars['DateTime']['output']>;
  /** Date when the user last logged in */
  lastLoggedOn?: Maybe<Scalars['DateTime']['output']>;
  /** URL to the profile photo of the user (if fetched) */
  photoURL?: Maybe<Scalars['String']['output']>;
  /** UID of the user */
  uid: Scalars['ID']['output'];
};

export enum AuthProvider {
  Email = 'EMAIL',
  Github = 'GITHUB',
  Google = 'GOOGLE',
  Microsoft = 'MICROSOFT'
}

export type CollectionReorderData = {
  __typename?: 'CollectionReorderData';
  /** Team Collection being moved */
  collection: TeamCollection;
  /** Team Collection succeeding the collection being moved in its new position */
  nextCollection?: Maybe<TeamCollection>;
};

export type CreateInfraTokenResponse = {
  __typename?: 'CreateInfraTokenResponse';
  /** Infra token info */
  info: InfraToken;
  /** The infra token */
  token: Scalars['String']['output'];
};

export type CreateTeamRequestInput = {
  /** JSON string representing the request data */
  request: Scalars['String']['input'];
  /** ID of the team the collection belongs to */
  teamID: Scalars['ID']['input'];
  /** Displayed title of the request */
  title: Scalars['String']['input'];
};

export type EnableAndDisableSsoArgs = {
  /** Auth Provider */
  provider: AuthProvider;
  /** Auth Provider Status */
  status: ServiceStatus;
};

export type Infra = {
  __typename?: 'Infra';
  /** Returns a list of all admin users in infra */
  admins: Array<User>;
  /** Returns a list of all the shortcodes in the infra */
  allShortcodes: Array<ShortcodeWithUserEmail>;
  /** Returns a list of all the teams in the infra */
  allTeams: Array<Team>;
  /**
   * Returns a list of all the users in infra
   * @deprecated Use allUsersV2 instead
   */
  allUsers: Array<User>;
  /** Returns a list of all the users in infra */
  allUsersV2: Array<User>;
  /** Return count of all the stored collections in a team */
  collectionCountInTeam: Scalars['Int']['output'];
  /** Return count of all the stored environments in a team */
  environmentCountInTeam: Scalars['Int']['output'];
  /** Admin who executed the action */
  executedBy: Admin;
  /** Returns a list of all the invited users */
  invitedUsers: Array<InvitedUser>;
  /** Return count of all the members in a team */
  membersCountInTeam: Scalars['Int']['output'];
  /** Return all the pending invitations in a team */
  pendingInvitationCountInTeam: Array<TeamInvitation>;
  /** Return count of all the stored requests in a team */
  requestCountInTeam: Scalars['Int']['output'];
  /** Return total number of Team Collections in organization */
  teamCollectionsCount: Scalars['Int']['output'];
  /** Returns a team info by ID when requested by Admin */
  teamInfo: Team;
  /** Return total number of Team Requests in organization */
  teamRequestsCount: Scalars['Int']['output'];
  /** Return total number of Teams in organization */
  teamsCount: Scalars['Int']['output'];
  /** Returns a user info by UID */
  userInfo: User;
  /** Return total number of Users in organization */
  usersCount: Scalars['Int']['output'];
};


export type InfraAllShortcodesArgs = {
  cursor?: InputMaybe<Scalars['ID']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userEmail?: InputMaybe<Scalars['String']['input']>;
};


export type InfraAllTeamsArgs = {
  cursor?: InputMaybe<Scalars['ID']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type InfraAllUsersArgs = {
  cursor?: InputMaybe<Scalars['ID']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type InfraAllUsersV2Args = {
  searchString?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type InfraCollectionCountInTeamArgs = {
  teamID: Scalars['ID']['input'];
};


export type InfraEnvironmentCountInTeamArgs = {
  teamID: Scalars['ID']['input'];
};


export type InfraInvitedUsersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type InfraMembersCountInTeamArgs = {
  teamID: Scalars['ID']['input'];
};


export type InfraPendingInvitationCountInTeamArgs = {
  teamID: Scalars['ID']['input'];
};


export type InfraRequestCountInTeamArgs = {
  teamID: Scalars['ID']['input'];
};


export type InfraTeamInfoArgs = {
  teamID: Scalars['ID']['input'];
};


export type InfraUserInfoArgs = {
  userUid: Scalars['ID']['input'];
};

export type InfraConfig = {
  __typename?: 'InfraConfig';
  /** Infra Config Name */
  name: Scalars['String']['output'];
  /** Infra Config Value */
  value: Scalars['String']['output'];
};

export type InfraConfigArgs = {
  /** Infra Config Name */
  name: InfraConfigEnum;
  /** Infra Config Value */
  value: Scalars['String']['input'];
};

export enum InfraConfigEnum {
  AllowAnalyticsCollection = 'ALLOW_ANALYTICS_COLLECTION',
  AnalyticsUserId = 'ANALYTICS_USER_ID',
  GithubCallbackUrl = 'GITHUB_CALLBACK_URL',
  GithubClientId = 'GITHUB_CLIENT_ID',
  GithubClientSecret = 'GITHUB_CLIENT_SECRET',
  GithubScope = 'GITHUB_SCOPE',
  GoogleCallbackUrl = 'GOOGLE_CALLBACK_URL',
  GoogleClientId = 'GOOGLE_CLIENT_ID',
  GoogleClientSecret = 'GOOGLE_CLIENT_SECRET',
  GoogleScope = 'GOOGLE_SCOPE',
  IsFirstTimeInfraSetup = 'IS_FIRST_TIME_INFRA_SETUP',
  MailerAddressFrom = 'MAILER_ADDRESS_FROM',
  MailerSmtpEnable = 'MAILER_SMTP_ENABLE',
  MailerSmtpHost = 'MAILER_SMTP_HOST',
  MailerSmtpPassword = 'MAILER_SMTP_PASSWORD',
  MailerSmtpPort = 'MAILER_SMTP_PORT',
  MailerSmtpSecure = 'MAILER_SMTP_SECURE',
  MailerSmtpUrl = 'MAILER_SMTP_URL',
  MailerSmtpUser = 'MAILER_SMTP_USER',
  MailerTlsRejectUnauthorized = 'MAILER_TLS_REJECT_UNAUTHORIZED',
  MailerUseCustomConfigs = 'MAILER_USE_CUSTOM_CONFIGS',
  MicrosoftCallbackUrl = 'MICROSOFT_CALLBACK_URL',
  MicrosoftClientId = 'MICROSOFT_CLIENT_ID',
  MicrosoftClientSecret = 'MICROSOFT_CLIENT_SECRET',
  MicrosoftScope = 'MICROSOFT_SCOPE',
  MicrosoftTenant = 'MICROSOFT_TENANT',
  ViteAllowedAuthProviders = 'VITE_ALLOWED_AUTH_PROVIDERS'
}

export type InfraToken = {
  __typename?: 'InfraToken';
  /** Date when the infra token was created */
  createdOn: Scalars['DateTime']['output'];
  /** Date when the infra token expires */
  expiresOn?: Maybe<Scalars['DateTime']['output']>;
  /** ID of the infra token */
  id: Scalars['ID']['output'];
  /** Label of the infra token */
  label: Scalars['String']['output'];
  /** Date when the infra token was last used */
  lastUsedOn: Scalars['DateTime']['output'];
};

export type InvitedUser = {
  __typename?: 'InvitedUser';
  /** Admin email */
  adminEmail: Scalars['String']['output'];
  /** Admin UID */
  adminUid: Scalars['ID']['output'];
  /** Date when the user invitation was sent */
  invitedOn: Scalars['DateTime']['output'];
  /** Invitee email */
  inviteeEmail: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Accept an Invitation */
  acceptTeamInvitation: TeamMember;
  /** Add a user to a team with email and team member role */
  addUserToTeamByAdmin: TeamMember;
  /** Change the role of a user in a team */
  changeUserRoleInTeamByAdmin: TeamMember;
  /** Deletes all variables inside a users global environment */
  clearGlobalEnvironments: UserEnvironment;
  /** Create a collection that has a parent collection */
  createChildCollection: TeamCollection;
  /** Create a duplicate of an existing environment */
  createDuplicateEnvironment: TeamEnvironment;
  /** Creates a new child GraphQL user collection */
  createGQLChildUserCollection: UserCollection;
  /** Creates root GraphQL user collection(no parent user collection) */
  createGQLRootUserCollection: UserCollection;
  /** Create a new user GraphQL request */
  createGQLUserRequest: UserRequest;
  /** Create a new infra token */
  createInfraToken: CreateInfraTokenResponse;
  /** Creates a new child REST user collection */
  createRESTChildUserCollection: UserCollection;
  /** Creates root REST user collection(no parent user collection) */
  createRESTRootUserCollection: UserCollection;
  /** Create a new user REST request */
  createRESTUserRequest: UserRequest;
  /** Create a team request in the given collection. */
  createRequestInCollection: TeamRequest;
  /** Creates a collection at the root of the team hierarchy (no parent collection) */
  createRootCollection: TeamCollection;
  /** Create a shortcode for the given request. */
  createShortcode: Shortcode;
  /** Creates a team owned by the executing user */
  createTeam: Team;
  /** Create a new team by providing the user uid to nominate as Team owner */
  createTeamByAdmin: Team;
  /** Create a new Team Environment for given Team ID */
  createTeamEnvironment: TeamEnvironment;
  /** Creates a Team Invitation */
  createTeamInvitation: TeamInvitation;
  /** Create a new personal user environment for given user uid */
  createUserEnvironment: UserEnvironment;
  /** Create a new global user environment for given user uid */
  createUserGlobalEnvironment: UserEnvironment;
  /** Adds a new REST/GQL request to user history */
  createUserHistory: UserHistory;
  /** Creates a new user setting */
  createUserSettings: UserSettings;
  /** Deletes all REST/GQL history for a user based on Request type */
  deleteAllUserHistory: UserHistoryDeletedManyData;
  /** Delete all variables from a Team Environment */
  deleteAllVariablesFromTeamEnvironment: TeamEnvironment;
  /** Delete a collection */
  deleteCollection: Scalars['Boolean']['output'];
  /** Delete a request with the given ID */
  deleteRequest: Scalars['Boolean']['output'];
  /** Deletes the team */
  deleteTeam: Scalars['Boolean']['output'];
  /** Delete a team */
  deleteTeamByAdmin: Scalars['Boolean']['output'];
  /** Delete a Team Environment for given Team ID */
  deleteTeamEnvironment: Scalars['Boolean']['output'];
  /** Delete an user account */
  deleteUser: Scalars['Boolean']['output'];
  /** Delete a user collection */
  deleteUserCollection: Scalars['Boolean']['output'];
  /** Deletes a users personal environment */
  deleteUserEnvironment: Scalars['Boolean']['output'];
  /** Deletes all of users personal environments */
  deleteUserEnvironments: Scalars['Int']['output'];
  /** Delete a user request */
  deleteUserRequest: Scalars['Boolean']['output'];
  /** Remove users as admin */
  demoteUsersByAdmin: Scalars['Boolean']['output'];
  /** Duplicate a Team Collection */
  duplicateTeamCollection: Scalars['Boolean']['output'];
  /** Duplicate a User Collection */
  duplicateUserCollection: Scalars['Boolean']['output'];
  /** Enable or Disable SSO for login/signup */
  enableAndDisableSSO: Scalars['Boolean']['output'];
  /** Import collections from JSON string to the specified Team */
  importCollectionsFromJSON: Scalars['Boolean']['output'];
  /** Import collections from JSON string to the specified Team */
  importUserCollectionsFromJSON: Scalars['Boolean']['output'];
  /** Invite a user to the infra using email */
  inviteNewUser: InvitedUser;
  /** Leaves a team the executing user is a part of */
  leaveTeam: Scalars['Boolean']['output'];
  /**
   * Make user an admin
   * @deprecated Use makeUsersAdmin instead
   */
  makeUserAdmin: Scalars['Boolean']['output'];
  /** Make users an admin */
  makeUsersAdmin: Scalars['Boolean']['output'];
  /** Move a collection into a new parent collection or the root of the team */
  moveCollection: TeamCollection;
  /** Move a request to the given collection */
  moveRequest: TeamRequest;
  /** Move user collection into new parent or root */
  moveUserCollection: UserCollection;
  /** Move and re-order of a user request within same or across collection */
  moveUserRequest: UserRequest;
  /** Removes a REST/GQL request from user history */
  removeRequestFromHistory: UserHistory;
  /** Removes the team member from the team */
  removeTeamMember: Scalars['Boolean']['output'];
  /**
   * Remove user as admin
   * @deprecated Use demoteUsersByAdmin instead
   */
  removeUserAsAdmin: Scalars['Boolean']['output'];
  /**
   * Delete an user account from infra
   * @deprecated Use removeUsersByAdmin instead
   */
  removeUserByAdmin: Scalars['Boolean']['output'];
  /** Remove the user from a team */
  removeUserFromTeamByAdmin: Scalars['Boolean']['output'];
  /** Delete user accounts from infra */
  removeUsersByAdmin: Array<UserDeletionResult>;
  /**
   * Rename a collection
   * @deprecated Switch to updateTeamCollection mutation instead
   */
  renameCollection: TeamCollection;
  /** Renames a team */
  renameTeam: Team;
  /** Change a team name */
  renameTeamByAdmin: Team;
  /** Rename a user collection */
  renameUserCollection: UserCollection;
  /** Replace existing collections of a specific team with collections in JSON string */
  replaceCollectionsWithJSON: Scalars['Boolean']['output'];
  /** Reset Infra Configs with default values (.env) */
  resetInfraConfigs: Scalars['Boolean']['output'];
  /** Revoke an infra token */
  revokeInfraToken: Scalars['Boolean']['output'];
  /** Revoke a user generated shortcode */
  revokeShortcode: Scalars['Boolean']['output'];
  /** Revoke Shortcode by ID */
  revokeShortcodeByAdmin: Scalars['Boolean']['output'];
  /** Revokes an invitation and deletes it */
  revokeTeamInvitation: Scalars['Boolean']['output'];
  /** Revoke a team Invite by Invite ID */
  revokeTeamInviteByAdmin: Scalars['Boolean']['output'];
  /** Revoke a user invites by invitee emails */
  revokeUserInvitationsByAdmin: Scalars['Boolean']['output'];
  /** Enable or disable analytics collection */
  toggleAnalyticsCollection: Scalars['Boolean']['output'];
  /** Stars/Unstars a REST/GQL request in user history */
  toggleHistoryStarStatus: UserHistory;
  /** Enable or Disable SMTP for sending emails */
  toggleSMTP: Scalars['Boolean']['output'];
  /** Update the order of collections */
  updateCollectionOrder: Scalars['Boolean']['output'];
  /** Update a users display name */
  updateDisplayName: User;
  /** Update a user generated Shortcode */
  updateEmbedProperties: Shortcode;
  /** Update a user GraphQL request */
  updateGQLUserRequest: UserRequest;
  /** Update Infra Configs */
  updateInfraConfigs: Array<InfraConfig>;
  /** Update the order of requests in the lookup table */
  updateLookUpRequestOrder: Scalars['Boolean']['output'];
  /** Update a user REST request */
  updateRESTUserRequest: UserRequest;
  /** Update a request with the given ID */
  updateRequest: TeamRequest;
  /** Update Team Collection details */
  updateTeamCollection: TeamCollection;
  /** Add/Edit a single environment variable or variables to a Team Environment */
  updateTeamEnvironment: TeamEnvironment;
  /** Update role of a team member the executing user owns */
  updateTeamMemberRole: TeamMember;
  /** Update a UserCollection */
  updateUserCollection: UserCollection;
  /** Update the order of UserCollections inside parent collection or in root */
  updateUserCollectionOrder: Scalars['Boolean']['output'];
  /** Update user display name */
  updateUserDisplayNameByAdmin: Scalars['Boolean']['output'];
  /** Updates a users personal or global environment */
  updateUserEnvironment: UserEnvironment;
  /** Update user sessions */
  updateUserSessions: User;
  /** Update user setting for a given user */
  updateUserSettings: UserSettings;
};


export type MutationAcceptTeamInvitationArgs = {
  inviteID: Scalars['ID']['input'];
};


export type MutationAddUserToTeamByAdminArgs = {
  role: TeamMemberRole;
  teamID: Scalars['ID']['input'];
  userEmail: Scalars['String']['input'];
};


export type MutationChangeUserRoleInTeamByAdminArgs = {
  newRole: TeamMemberRole;
  teamID: Scalars['ID']['input'];
  userUID: Scalars['ID']['input'];
};


export type MutationClearGlobalEnvironmentsArgs = {
  id: Scalars['ID']['input'];
};


export type MutationCreateChildCollectionArgs = {
  childTitle: Scalars['String']['input'];
  collectionID: Scalars['ID']['input'];
  data?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateDuplicateEnvironmentArgs = {
  id: Scalars['ID']['input'];
};


export type MutationCreateGqlChildUserCollectionArgs = {
  data?: InputMaybe<Scalars['String']['input']>;
  parentUserCollectionID: Scalars['ID']['input'];
  title: Scalars['String']['input'];
};


export type MutationCreateGqlRootUserCollectionArgs = {
  data?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};


export type MutationCreateGqlUserRequestArgs = {
  collectionID: Scalars['ID']['input'];
  request: Scalars['String']['input'];
  title: Scalars['String']['input'];
};


export type MutationCreateInfraTokenArgs = {
  expiryInDays?: InputMaybe<Scalars['Int']['input']>;
  label: Scalars['String']['input'];
};


export type MutationCreateRestChildUserCollectionArgs = {
  data?: InputMaybe<Scalars['String']['input']>;
  parentUserCollectionID: Scalars['ID']['input'];
  title: Scalars['String']['input'];
};


export type MutationCreateRestRootUserCollectionArgs = {
  data?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};


export type MutationCreateRestUserRequestArgs = {
  collectionID: Scalars['ID']['input'];
  request: Scalars['String']['input'];
  title: Scalars['String']['input'];
};


export type MutationCreateRequestInCollectionArgs = {
  collectionID: Scalars['ID']['input'];
  data: CreateTeamRequestInput;
};


export type MutationCreateRootCollectionArgs = {
  data?: InputMaybe<Scalars['String']['input']>;
  teamID: Scalars['ID']['input'];
  title: Scalars['String']['input'];
};


export type MutationCreateShortcodeArgs = {
  properties?: InputMaybe<Scalars['String']['input']>;
  request: Scalars['String']['input'];
};


export type MutationCreateTeamArgs = {
  name: Scalars['String']['input'];
};


export type MutationCreateTeamByAdminArgs = {
  name: Scalars['String']['input'];
  userUid: Scalars['ID']['input'];
};


export type MutationCreateTeamEnvironmentArgs = {
  name: Scalars['String']['input'];
  teamID: Scalars['ID']['input'];
  variables: Scalars['String']['input'];
};


export type MutationCreateTeamInvitationArgs = {
  inviteeEmail: Scalars['String']['input'];
  inviteeRole: TeamMemberRole;
  teamID: Scalars['ID']['input'];
};


export type MutationCreateUserEnvironmentArgs = {
  name: Scalars['String']['input'];
  variables: Scalars['String']['input'];
};


export type MutationCreateUserGlobalEnvironmentArgs = {
  variables: Scalars['String']['input'];
};


export type MutationCreateUserHistoryArgs = {
  reqData: Scalars['String']['input'];
  reqType: ReqType;
  resMetadata: Scalars['String']['input'];
};


export type MutationCreateUserSettingsArgs = {
  properties: Scalars['String']['input'];
};


export type MutationDeleteAllUserHistoryArgs = {
  reqType: ReqType;
};


export type MutationDeleteAllVariablesFromTeamEnvironmentArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCollectionArgs = {
  collectionID: Scalars['ID']['input'];
};


export type MutationDeleteRequestArgs = {
  requestID: Scalars['ID']['input'];
};


export type MutationDeleteTeamArgs = {
  teamID: Scalars['ID']['input'];
};


export type MutationDeleteTeamByAdminArgs = {
  teamID: Scalars['ID']['input'];
};


export type MutationDeleteTeamEnvironmentArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUserCollectionArgs = {
  userCollectionID: Scalars['ID']['input'];
};


export type MutationDeleteUserEnvironmentArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUserRequestArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDemoteUsersByAdminArgs = {
  userUIDs: Array<Scalars['ID']['input']>;
};


export type MutationDuplicateTeamCollectionArgs = {
  collectionID: Scalars['String']['input'];
};


export type MutationDuplicateUserCollectionArgs = {
  collectionID: Scalars['String']['input'];
  reqType: ReqType;
};


export type MutationEnableAndDisableSsoArgs = {
  providerInfo: Array<EnableAndDisableSsoArgs>;
};


export type MutationImportCollectionsFromJsonArgs = {
  jsonString: Scalars['String']['input'];
  parentCollectionID?: InputMaybe<Scalars['ID']['input']>;
  teamID: Scalars['ID']['input'];
};


export type MutationImportUserCollectionsFromJsonArgs = {
  jsonString: Scalars['String']['input'];
  parentCollectionID?: InputMaybe<Scalars['ID']['input']>;
  reqType: ReqType;
};


export type MutationInviteNewUserArgs = {
  inviteeEmail: Scalars['String']['input'];
};


export type MutationLeaveTeamArgs = {
  teamID: Scalars['ID']['input'];
};


export type MutationMakeUserAdminArgs = {
  userUID: Scalars['ID']['input'];
};


export type MutationMakeUsersAdminArgs = {
  userUIDs: Array<Scalars['ID']['input']>;
};


export type MutationMoveCollectionArgs = {
  collectionID: Scalars['ID']['input'];
  parentCollectionID?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationMoveRequestArgs = {
  destCollID: Scalars['ID']['input'];
  nextRequestID?: InputMaybe<Scalars['ID']['input']>;
  requestID: Scalars['ID']['input'];
  srcCollID?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationMoveUserCollectionArgs = {
  destCollectionID?: InputMaybe<Scalars['ID']['input']>;
  userCollectionID: Scalars['ID']['input'];
};


export type MutationMoveUserRequestArgs = {
  destinationCollectionID: Scalars['ID']['input'];
  nextRequestID?: InputMaybe<Scalars['ID']['input']>;
  requestID: Scalars['ID']['input'];
  sourceCollectionID: Scalars['ID']['input'];
};


export type MutationRemoveRequestFromHistoryArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveTeamMemberArgs = {
  teamID: Scalars['ID']['input'];
  userUid: Scalars['ID']['input'];
};


export type MutationRemoveUserAsAdminArgs = {
  userUID: Scalars['ID']['input'];
};


export type MutationRemoveUserByAdminArgs = {
  userUID: Scalars['ID']['input'];
};


export type MutationRemoveUserFromTeamByAdminArgs = {
  teamID: Scalars['ID']['input'];
  userUid: Scalars['ID']['input'];
};


export type MutationRemoveUsersByAdminArgs = {
  userUIDs: Array<Scalars['ID']['input']>;
};


export type MutationRenameCollectionArgs = {
  collectionID: Scalars['ID']['input'];
  newTitle: Scalars['String']['input'];
};


export type MutationRenameTeamArgs = {
  newName: Scalars['String']['input'];
  teamID: Scalars['ID']['input'];
};


export type MutationRenameTeamByAdminArgs = {
  newName: Scalars['String']['input'];
  teamID: Scalars['ID']['input'];
};


export type MutationRenameUserCollectionArgs = {
  newTitle: Scalars['String']['input'];
  userCollectionID: Scalars['ID']['input'];
};


export type MutationReplaceCollectionsWithJsonArgs = {
  jsonString: Scalars['String']['input'];
  parentCollectionID?: InputMaybe<Scalars['ID']['input']>;
  teamID: Scalars['ID']['input'];
};


export type MutationRevokeInfraTokenArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRevokeShortcodeArgs = {
  code: Scalars['ID']['input'];
};


export type MutationRevokeShortcodeByAdminArgs = {
  code: Scalars['ID']['input'];
};


export type MutationRevokeTeamInvitationArgs = {
  inviteID: Scalars['ID']['input'];
};


export type MutationRevokeTeamInviteByAdminArgs = {
  inviteID: Scalars['ID']['input'];
};


export type MutationRevokeUserInvitationsByAdminArgs = {
  inviteeEmails: Array<Scalars['String']['input']>;
};


export type MutationToggleAnalyticsCollectionArgs = {
  status: ServiceStatus;
};


export type MutationToggleHistoryStarStatusArgs = {
  id: Scalars['ID']['input'];
};


export type MutationToggleSmtpArgs = {
  status: ServiceStatus;
};


export type MutationUpdateCollectionOrderArgs = {
  collectionID: Scalars['ID']['input'];
  destCollID?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationUpdateDisplayNameArgs = {
  updatedDisplayName: Scalars['String']['input'];
};


export type MutationUpdateEmbedPropertiesArgs = {
  code: Scalars['ID']['input'];
  properties: Scalars['String']['input'];
};


export type MutationUpdateGqlUserRequestArgs = {
  id: Scalars['ID']['input'];
  request?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateInfraConfigsArgs = {
  infraConfigs: Array<InfraConfigArgs>;
};


export type MutationUpdateLookUpRequestOrderArgs = {
  collectionID: Scalars['ID']['input'];
  nextRequestID?: InputMaybe<Scalars['ID']['input']>;
  requestID: Scalars['ID']['input'];
};


export type MutationUpdateRestUserRequestArgs = {
  id: Scalars['ID']['input'];
  request?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateRequestArgs = {
  data: UpdateTeamRequestInput;
  requestID: Scalars['ID']['input'];
};


export type MutationUpdateTeamCollectionArgs = {
  collectionID: Scalars['ID']['input'];
  data?: InputMaybe<Scalars['String']['input']>;
  newTitle?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateTeamEnvironmentArgs = {
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  variables: Scalars['String']['input'];
};


export type MutationUpdateTeamMemberRoleArgs = {
  newRole: TeamMemberRole;
  teamID: Scalars['ID']['input'];
  userUid: Scalars['ID']['input'];
};


export type MutationUpdateUserCollectionArgs = {
  data?: InputMaybe<Scalars['String']['input']>;
  newTitle?: InputMaybe<Scalars['String']['input']>;
  userCollectionID: Scalars['ID']['input'];
};


export type MutationUpdateUserCollectionOrderArgs = {
  collectionID: Scalars['ID']['input'];
  nextCollectionID?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationUpdateUserDisplayNameByAdminArgs = {
  displayName: Scalars['String']['input'];
  userUID: Scalars['ID']['input'];
};


export type MutationUpdateUserEnvironmentArgs = {
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  variables: Scalars['String']['input'];
};


export type MutationUpdateUserSessionsArgs = {
  currentSession: Scalars['String']['input'];
  sessionType: SessionType;
};


export type MutationUpdateUserSettingsArgs = {
  properties: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  /** Gives details of the admin executing this query */
  admin: Admin;
  /** Allowed Auth Provider list */
  allowedAuthProviders: Array<Scalars['String']['output']>;
  /** Get a Team Collection with ID or null (if not exists) */
  collection?: Maybe<TeamCollection>;
  /** Returns a JSON string of all the contents of a Team Collection */
  exportCollectionToJSON: Scalars['String']['output'];
  /** Returns the JSON string giving the collections and their contents of the team */
  exportCollectionsToJSON: Scalars['String']['output'];
  /** Returns a JSON string of all the contents of a User Collection */
  exportUserCollectionToJSON: Scalars['String']['output'];
  /** Returns the JSON string giving the collections and their contents of a user */
  exportUserCollectionsToJSON: UserCollectionExportJsonData;
  /** Fetch details of the Infrastructure */
  infra: Infra;
  /** Retrieve configuration details for the instance */
  infraConfigs: Array<InfraConfig>;
  /** Get list of infra tokens */
  infraTokens: Array<InfraToken>;
  /** Check if the SMTP is enabled or not */
  isSMTPEnabled: Scalars['Boolean']['output'];
  /** Gives details of the user executing this query (pass Authorization 'Bearer' header) */
  me: User;
  /** List all shortcodes the current user has generated */
  myShortcodes: Array<Shortcode>;
  /** List of teams that the executing user belongs to. */
  myTeams: Array<Team>;
  /** Gives a request with the given ID or null (if not exists) */
  request?: Maybe<TeamRequest>;
  /** Gives a paginated list of requests in the collection */
  requestsInCollection: Array<TeamRequest>;
  /** Returns the collections of a team */
  rootCollectionsOfTeam: Array<TeamCollection>;
  /** Get the root GraphQL user collections for a user */
  rootGQLUserCollections: Array<UserCollection>;
  /** Get the root REST user collections for a user */
  rootRESTUserCollections: Array<UserCollection>;
  /** Search the team for a specific request with title */
  searchForRequest: Array<TeamRequest>;
  /** Resolves and returns a shortcode data */
  shortcode?: Maybe<Shortcode>;
  /** Returns the detail of the team with the given ID */
  team?: Maybe<Team>;
  /** Gets the Team Invitation with the given ID, or null if not exists */
  teamInvitation: TeamInvitation;
  /** Get user collection with ID */
  userCollection: UserCollection;
  /** Get GraphQL user requests */
  userGQLRequests: Array<UserRequest>;
  /** Get REST user requests */
  userRESTRequests: Array<UserRequest>;
  /** Get a user request by ID */
  userRequest: UserRequest;
};


export type QueryCollectionArgs = {
  collectionID: Scalars['ID']['input'];
};


export type QueryExportCollectionToJsonArgs = {
  collectionID: Scalars['ID']['input'];
  teamID: Scalars['ID']['input'];
};


export type QueryExportCollectionsToJsonArgs = {
  teamID: Scalars['ID']['input'];
};


export type QueryExportUserCollectionToJsonArgs = {
  collectionID: Scalars['ID']['input'];
};


export type QueryExportUserCollectionsToJsonArgs = {
  collectionID?: InputMaybe<Scalars['ID']['input']>;
  collectionType: ReqType;
};


export type QueryInfraConfigsArgs = {
  configNames: Array<InfraConfigEnum>;
};


export type QueryInfraTokensArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryMyShortcodesArgs = {
  cursor?: InputMaybe<Scalars['ID']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryMyTeamsArgs = {
  cursor?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryRequestArgs = {
  requestID: Scalars['ID']['input'];
};


export type QueryRequestsInCollectionArgs = {
  collectionID: Scalars['ID']['input'];
  cursor?: InputMaybe<Scalars['ID']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryRootCollectionsOfTeamArgs = {
  cursor?: InputMaybe<Scalars['ID']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  teamID: Scalars['ID']['input'];
};


export type QueryRootGqlUserCollectionsArgs = {
  cursor?: InputMaybe<Scalars['ID']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryRootRestUserCollectionsArgs = {
  cursor?: InputMaybe<Scalars['ID']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerySearchForRequestArgs = {
  cursor?: InputMaybe<Scalars['ID']['input']>;
  searchTerm: Scalars['String']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  teamID: Scalars['ID']['input'];
};


export type QueryShortcodeArgs = {
  code: Scalars['ID']['input'];
};


export type QueryTeamArgs = {
  teamID: Scalars['ID']['input'];
};


export type QueryTeamInvitationArgs = {
  inviteID: Scalars['ID']['input'];
};


export type QueryUserCollectionArgs = {
  userCollectionID: Scalars['ID']['input'];
};


export type QueryUserGqlRequestsArgs = {
  collectionID?: InputMaybe<Scalars['ID']['input']>;
  cursor?: InputMaybe<Scalars['ID']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryUserRestRequestsArgs = {
  collectionID?: InputMaybe<Scalars['ID']['input']>;
  cursor?: InputMaybe<Scalars['ID']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryUserRequestArgs = {
  id: Scalars['ID']['input'];
};

export enum ReqType {
  Gql = 'GQL',
  Rest = 'REST'
}

export type RequestReorderData = {
  __typename?: 'RequestReorderData';
  /** Team Request succeeding the request being moved in its new position */
  nextRequest?: Maybe<TeamRequest>;
  /** Team Request being moved */
  request: TeamRequest;
};

export enum ServiceStatus {
  Disable = 'DISABLE',
  Enable = 'ENABLE'
}

export enum SessionType {
  Gql = 'GQL',
  Rest = 'REST'
}

export type Shortcode = {
  __typename?: 'Shortcode';
  /** Timestamp of when the Shortcode was created */
  createdOn: Scalars['DateTime']['output'];
  /** The 12 digit alphanumeric code */
  id: Scalars['ID']['output'];
  /** JSON string representing the properties for an embed */
  properties?: Maybe<Scalars['String']['output']>;
  /** JSON string representing the request data */
  request: Scalars['String']['output'];
};

export type ShortcodeCreator = {
  __typename?: 'ShortcodeCreator';
  /** Email of user who created the shortcode */
  email: Scalars['String']['output'];
  /** Uid of user who created the shortcode */
  uid: Scalars['String']['output'];
};

export type ShortcodeWithUserEmail = {
  __typename?: 'ShortcodeWithUserEmail';
  /** Timestamp of when the Shortcode was created */
  createdOn: Scalars['DateTime']['output'];
  /** Details of user who created the shortcode */
  creator?: Maybe<ShortcodeCreator>;
  /** The 12 digit alphanumeric code */
  id: Scalars['ID']['output'];
  /** JSON string representing the properties for an embed */
  properties?: Maybe<Scalars['String']['output']>;
  /** JSON string representing the request data */
  request: Scalars['String']['output'];
};

export type Subscription = {
  __typename?: 'Subscription';
  /** Listen to when a collections position has changed */
  collectionOrderUpdated: CollectionReorderData;
  /** Listen for shortcode creation */
  myShortcodesCreated: Shortcode;
  /** Listen for shortcode deletion */
  myShortcodesRevoked: Shortcode;
  /** Listen for Shortcode updates */
  myShortcodesUpdated: Shortcode;
  /** Emitted when a request has been moved from one collection into another */
  requestMoved: TeamRequest;
  /** Emitted when a requests position has been changed in its collection */
  requestOrderUpdated: RequestReorderData;
  /** Listen to when a collection has been added to a team. The emitted value is the team added */
  teamCollectionAdded: TeamCollection;
  /** Listen to when a collection has been moved */
  teamCollectionMoved: TeamCollection;
  /** Listen to when a collection has been removed */
  teamCollectionRemoved: Scalars['ID']['output'];
  /** Listen to when a collection has been updated. */
  teamCollectionUpdated: TeamCollection;
  /** Listen for Team Environment Creation Messages */
  teamEnvironmentCreated: TeamEnvironment;
  /** Listen for Team Environment Deletion Messages */
  teamEnvironmentDeleted: TeamEnvironment;
  /** Listen for Team Environment Updates */
  teamEnvironmentUpdated: TeamEnvironment;
  /** Listens to when a Team Invitation is added */
  teamInvitationAdded: TeamInvitation;
  /** Listens to when a Team Invitation is removed */
  teamInvitationRemoved: Scalars['ID']['output'];
  /** Listen to when a new team member being added to the team. The emitted value is the new team member added. */
  teamMemberAdded: TeamMember;
  /** Listen to when a team member has been removed. The emitted value is the uid of the user removed */
  teamMemberRemoved: Scalars['ID']['output'];
  /** Listen to when a team member status has been updated. The emitted value is the new team member status */
  teamMemberUpdated: TeamMember;
  /** Emits when a new request is added to a team */
  teamRequestAdded: TeamRequest;
  /** Emitted when a request has been deleted. Only the id of the request is emitted. */
  teamRequestDeleted: Scalars['ID']['output'];
  /** Emitted when a request has been updated */
  teamRequestUpdated: TeamRequest;
  /** Listen for User Collection Creation */
  userCollectionCreated: UserCollection;
  /** Listen to when a User Collection has been duplicated */
  userCollectionDuplicated: UserCollectionDuplicatedData;
  /** Listen to when a User Collection has been moved */
  userCollectionMoved: UserCollection;
  /** Listen to when a User Collections position has changed */
  userCollectionOrderUpdated: UserCollectionReorderData;
  /** Listen to when a User Collection has been deleted */
  userCollectionRemoved: UserCollectionRemovedData;
  /** Listen to when a User Collection has been updated. */
  userCollectionUpdated: UserCollection;
  /** Listen for user deletion */
  userDeleted: User;
  /** Listen for User Environment Creation */
  userEnvironmentCreated: UserEnvironment;
  /** Listen for User Environment DeleteMany */
  userEnvironmentDeleteMany: Scalars['Int']['output'];
  /** Listen for User Environment deletion */
  userEnvironmentDeleted: UserEnvironment;
  /** Listen for User Environment updates */
  userEnvironmentUpdated: UserEnvironment;
  /** Listen for User History Creation */
  userHistoryCreated: UserHistory;
  /** Listen for User History deletion */
  userHistoryDeleted: UserHistory;
  /** Listen for User History deleted many */
  userHistoryDeletedMany: UserHistoryDeletedManyData;
  /** Listen for User History update */
  userHistoryUpdated: UserHistory;
  /** Listen for User Invitation */
  userInvited: InvitedUser;
  /** Listen for User Request Creation */
  userRequestCreated: UserRequest;
  /** Listen for User Request Deletion */
  userRequestDeleted: UserRequest;
  /** Listen for User Request Moved */
  userRequestMoved: UserRequestReorderData;
  /** Listen for User Request Update */
  userRequestUpdated: UserRequest;
  /** Listen for user setting creation */
  userSettingsCreated: UserSettings;
  /** Listen for user setting updates */
  userSettingsUpdated: UserSettings;
  /** Listen for user updates */
  userUpdated: User;
};


export type SubscriptionCollectionOrderUpdatedArgs = {
  teamID: Scalars['ID']['input'];
};


export type SubscriptionRequestMovedArgs = {
  teamID: Scalars['ID']['input'];
};


export type SubscriptionRequestOrderUpdatedArgs = {
  teamID: Scalars['ID']['input'];
};


export type SubscriptionTeamCollectionAddedArgs = {
  teamID: Scalars['ID']['input'];
};


export type SubscriptionTeamCollectionMovedArgs = {
  teamID: Scalars['ID']['input'];
};


export type SubscriptionTeamCollectionRemovedArgs = {
  teamID: Scalars['ID']['input'];
};


export type SubscriptionTeamCollectionUpdatedArgs = {
  teamID: Scalars['ID']['input'];
};


export type SubscriptionTeamEnvironmentCreatedArgs = {
  teamID: Scalars['ID']['input'];
};


export type SubscriptionTeamEnvironmentDeletedArgs = {
  teamID: Scalars['ID']['input'];
};


export type SubscriptionTeamEnvironmentUpdatedArgs = {
  teamID: Scalars['ID']['input'];
};


export type SubscriptionTeamInvitationAddedArgs = {
  teamID: Scalars['ID']['input'];
};


export type SubscriptionTeamInvitationRemovedArgs = {
  teamID: Scalars['ID']['input'];
};


export type SubscriptionTeamMemberAddedArgs = {
  teamID: Scalars['ID']['input'];
};


export type SubscriptionTeamMemberRemovedArgs = {
  teamID: Scalars['ID']['input'];
};


export type SubscriptionTeamMemberUpdatedArgs = {
  teamID: Scalars['ID']['input'];
};


export type SubscriptionTeamRequestAddedArgs = {
  teamID: Scalars['ID']['input'];
};


export type SubscriptionTeamRequestDeletedArgs = {
  teamID: Scalars['ID']['input'];
};


export type SubscriptionTeamRequestUpdatedArgs = {
  teamID: Scalars['ID']['input'];
};

export type Team = {
  __typename?: 'Team';
  /** The number of users with the EDITOR role in the team */
  editorsCount: Scalars['Int']['output'];
  /** ID of the team */
  id: Scalars['ID']['output'];
  /** Returns the list of members of a team */
  members: Array<TeamMember>;
  /** The role of the current user in the team */
  myRole?: Maybe<TeamMemberRole>;
  /** Displayed name of the team */
  name: Scalars['String']['output'];
  /** The number of users with the OWNER role in the team */
  ownersCount: Scalars['Int']['output'];
  /** Returns all Team Environments for the given Team */
  teamEnvironments: Array<TeamEnvironment>;
  /** Get all the active invites in the team */
  teamInvitations: Array<TeamInvitation>;
  /** Returns the list of members of a team */
  teamMembers: Array<TeamMember>;
  /** The number of users with the VIEWER role in the team */
  viewersCount: Scalars['Int']['output'];
};


export type TeamMembersArgs = {
  cursor?: InputMaybe<Scalars['ID']['input']>;
};

export type TeamCollection = {
  __typename?: 'TeamCollection';
  /** List of children Team Collections */
  children: Array<TeamCollection>;
  /** JSON string representing the collection data */
  data?: Maybe<Scalars['String']['output']>;
  /** ID of the collection */
  id: Scalars['ID']['output'];
  /** Return the parent Team Collection (null if root ) */
  parent?: Maybe<TeamCollection>;
  /** ID of the collection */
  parentID?: Maybe<Scalars['ID']['output']>;
  /** Team the collection belongs to */
  team: Team;
  /** Displayed title of the collection */
  title: Scalars['String']['output'];
};


export type TeamCollectionChildrenArgs = {
  cursor?: InputMaybe<Scalars['ID']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type TeamEnvironment = {
  __typename?: 'TeamEnvironment';
  /** ID of the Team Environment */
  id: Scalars['ID']['output'];
  /** Name of the environment */
  name: Scalars['String']['output'];
  /** ID of the team this environment belongs to */
  teamID: Scalars['ID']['output'];
  /** All variables present in the environment */
  variables: Scalars['String']['output'];
};

export type TeamInvitation = {
  __typename?: 'TeamInvitation';
  /** Get the creator of the invite */
  creator: User;
  /** UID of the creator of the invite */
  creatorUid: Scalars['ID']['output'];
  /** ID of the invite */
  id: Scalars['ID']['output'];
  /** Email of the invitee */
  inviteeEmail: Scalars['String']['output'];
  /** The role that will be given to the invitee */
  inviteeRole: TeamMemberRole;
  /** Get the team associated to the invite */
  team: Team;
  /** ID of the team the invite is to */
  teamID: Scalars['ID']['output'];
};

export type TeamMember = {
  __typename?: 'TeamMember';
  /** Membership ID of the Team Member */
  membershipID: Scalars['ID']['output'];
  /** Role of the given team member in the given team */
  role: TeamMemberRole;
  user: User;
};

export enum TeamMemberRole {
  Editor = 'EDITOR',
  Owner = 'OWNER',
  Viewer = 'VIEWER'
}

export type TeamRequest = {
  __typename?: 'TeamRequest';
  /** Collection the request belongs to */
  collection: TeamCollection;
  /** ID of the collection the request belongs to. */
  collectionID: Scalars['ID']['output'];
  /** ID of the request */
  id: Scalars['ID']['output'];
  /** JSON string representing the request data */
  request: Scalars['String']['output'];
  /** Team the request belongs to */
  team: Team;
  /** ID of the team the request belongs to. */
  teamID: Scalars['ID']['output'];
  /** Displayed title of the request */
  title: Scalars['String']['output'];
};

export type UpdateTeamRequestInput = {
  /** JSON string representing the request data */
  request?: InputMaybe<Scalars['String']['input']>;
  /** Displayed title of the request */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  /** Returns a users GraphQL history */
  GQLHistory: Array<UserHistory>;
  /** Returns a users REST history */
  RESTHistory: Array<UserHistory>;
  /** Date when the user account was created */
  createdOn: Scalars['DateTime']['output'];
  /** Stringified current GraphQL session for logged-in User */
  currentGQLSession?: Maybe<Scalars['String']['output']>;
  /** Stringified current REST session for logged-in User */
  currentRESTSession?: Maybe<Scalars['String']['output']>;
  /** Name of the user (if fetched) */
  displayName?: Maybe<Scalars['String']['output']>;
  /** Email of the user */
  email?: Maybe<Scalars['String']['output']>;
  /** Returns a list of users personal environments */
  environments: Array<UserEnvironment>;
  /** Returns the users global environments */
  globalEnvironments: UserEnvironment;
  /** Flag to determine if user is an Admin or not */
  isAdmin: Scalars['Boolean']['output'];
  /** Date when the user last interacted with the app */
  lastActiveOn?: Maybe<Scalars['DateTime']['output']>;
  /** Date when the user last logged in */
  lastLoggedOn?: Maybe<Scalars['DateTime']['output']>;
  /** URL to the profile photo of the user (if fetched) */
  photoURL?: Maybe<Scalars['String']['output']>;
  /** Returns user settings */
  settings: UserSettings;
  /** UID of the user */
  uid: Scalars['ID']['output'];
};


export type UserGqlHistoryArgs = {
  cursor?: InputMaybe<Scalars['ID']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type UserRestHistoryArgs = {
  cursor?: InputMaybe<Scalars['ID']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type UserCollection = {
  __typename?: 'UserCollection';
  /** List of children GraphQL user collection */
  childrenGQL: Array<UserCollection>;
  /** List of children REST user collection */
  childrenREST: Array<UserCollection>;
  /** JSON string representing the collection data */
  data?: Maybe<Scalars['String']['output']>;
  /** ID of the user collection */
  id: Scalars['ID']['output'];
  /** Parent user collection (null if root) */
  parent?: Maybe<UserCollection>;
  /** Returns user requests of a user collection */
  requests: Array<UserRequest>;
  /** Displayed title of the user collection */
  title: Scalars['String']['output'];
  /** Type of the user collection */
  type: ReqType;
  /** User the collection belongs to */
  user: User;
};


export type UserCollectionChildrenGqlArgs = {
  cursor?: InputMaybe<Scalars['ID']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type UserCollectionChildrenRestArgs = {
  cursor?: InputMaybe<Scalars['ID']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type UserCollectionRequestsArgs = {
  cursor?: InputMaybe<Scalars['ID']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type UserCollectionDuplicatedData = {
  __typename?: 'UserCollectionDuplicatedData';
  /** Child collections of the duplicated User Collection */
  childCollections: Scalars['String']['output'];
  /** JSON string representing the collection data */
  data?: Maybe<Scalars['String']['output']>;
  /** ID of the user collection */
  id: Scalars['ID']['output'];
  /** Parent ID of the duplicated User Collection */
  parentID?: Maybe<Scalars['String']['output']>;
  /** Requests of the duplicated User Collection */
  requests: Array<UserRequest>;
  /** Displayed title of the user collection */
  title: Scalars['String']['output'];
  /** Type of the user collection */
  type: ReqType;
  /** User ID of the duplicated User Collection */
  userID: Scalars['String']['output'];
};

export type UserCollectionExportJsonData = {
  __typename?: 'UserCollectionExportJSONData';
  /** Type of the user collection */
  collectionType: ReqType;
  /** Stringified contents of the collection */
  exportedCollection: Scalars['ID']['output'];
};

export type UserCollectionRemovedData = {
  __typename?: 'UserCollectionRemovedData';
  /** ID of User Collection being removed */
  id: Scalars['ID']['output'];
  /** Type of the user collection */
  type: ReqType;
};

export type UserCollectionReorderData = {
  __typename?: 'UserCollectionReorderData';
  /** User Collection succeeding the collection being moved in its new position */
  nextUserCollection?: Maybe<UserCollection>;
  /** User Collection being moved */
  userCollection: UserCollection;
};

export type UserDeletionResult = {
  __typename?: 'UserDeletionResult';
  /** Error message if user deletion was not successful */
  errorMessage?: Maybe<Scalars['String']['output']>;
  /** Flag to determine if user deletion was successful or not */
  isDeleted: Scalars['Boolean']['output'];
  /** UID of the user */
  userUID: Scalars['ID']['output'];
};

export type UserEnvironment = {
  __typename?: 'UserEnvironment';
  /** ID of the User Environment */
  id: Scalars['ID']['output'];
  /** Flag to indicate the environment is global or not */
  isGlobal: Scalars['Boolean']['output'];
  /** Name of the environment */
  name?: Maybe<Scalars['String']['output']>;
  /** ID of the user this environment belongs to */
  userUid: Scalars['ID']['output'];
  /** All variables present in the environment */
  variables: Scalars['String']['output'];
};

export type UserHistory = {
  __typename?: 'UserHistory';
  /** Timestamp of when the request was executed or history was created */
  executedOn: Scalars['DateTime']['output'];
  /** ID of the user request in history */
  id: Scalars['ID']['output'];
  /** If the request in the history starred */
  isStarred: Scalars['Boolean']['output'];
  /** Type of the request in the history */
  reqType: ReqType;
  /** JSON string representing the request data */
  request: Scalars['String']['output'];
  /** JSON string representing the response meta-data */
  responseMetadata: Scalars['String']['output'];
  /** ID of the user this history belongs to */
  userUid: Scalars['ID']['output'];
};

export type UserHistoryDeletedManyData = {
  __typename?: 'UserHistoryDeletedManyData';
  /** Number of user histories deleted */
  count: Scalars['Int']['output'];
  /** Type of the request in the history */
  reqType: ReqType;
};

export type UserRequest = {
  __typename?: 'UserRequest';
  /** ID of the parent collection ID */
  collectionID: Scalars['ID']['output'];
  /** Date of the user request creation */
  createdOn: Scalars['DateTime']['output'];
  /** ID of the user request */
  id: Scalars['ID']['output'];
  /** Content/Body of the user request */
  request: Scalars['String']['output'];
  /** Title of the user request */
  title: Scalars['String']['output'];
  /** Type (GRAPHQL/REST) of the user request */
  type: ReqType;
  /** Returns the user of the user request */
  user: User;
};

export type UserRequestReorderData = {
  __typename?: 'UserRequestReorderData';
  /** User request succeeding the request being moved in its new position */
  nextRequest?: Maybe<UserRequest>;
  /** User request being moved */
  request: UserRequest;
};

export type UserSettings = {
  __typename?: 'UserSettings';
  /** ID of the User Setting */
  id: Scalars['ID']['output'];
  /** Stringified JSON settings object */
  properties: Scalars['String']['output'];
  /** Last updated on */
  updatedOn: Scalars['DateTime']['output'];
  /** ID of the user this setting belongs to */
  userUid: Scalars['ID']['output'];
};

export type ClearGlobalEnvironmentsMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ClearGlobalEnvironmentsMutation = { __typename?: 'Mutation', clearGlobalEnvironments: { __typename?: 'UserEnvironment', id: string } };

export type CreateGqlChildUserCollectionMutationVariables = Exact<{
  title: Scalars['String']['input'];
  parentUserCollectionID: Scalars['ID']['input'];
}>;


export type CreateGqlChildUserCollectionMutation = { __typename?: 'Mutation', createGQLChildUserCollection: { __typename?: 'UserCollection', id: string } };

export type CreateGqlRootUserCollectionMutationVariables = Exact<{
  title: Scalars['String']['input'];
}>;


export type CreateGqlRootUserCollectionMutation = { __typename?: 'Mutation', createGQLRootUserCollection: { __typename?: 'UserCollection', id: string } };

export type CreateGqlUserRequestMutationVariables = Exact<{
  title: Scalars['String']['input'];
  request: Scalars['String']['input'];
  collectionID: Scalars['ID']['input'];
}>;


export type CreateGqlUserRequestMutation = { __typename?: 'Mutation', createGQLUserRequest: { __typename?: 'UserRequest', id: string } };

export type CreateRestChildUserCollectionMutationVariables = Exact<{
  title: Scalars['String']['input'];
  parentUserCollectionID: Scalars['ID']['input'];
}>;


export type CreateRestChildUserCollectionMutation = { __typename?: 'Mutation', createRESTChildUserCollection: { __typename?: 'UserCollection', id: string } };

export type CreateRestRootUserCollectionMutationVariables = Exact<{
  title: Scalars['String']['input'];
}>;


export type CreateRestRootUserCollectionMutation = { __typename?: 'Mutation', createRESTRootUserCollection: { __typename?: 'UserCollection', id: string } };

export type CreateRestUserRequestMutationVariables = Exact<{
  collectionID: Scalars['ID']['input'];
  title: Scalars['String']['input'];
  request: Scalars['String']['input'];
}>;


export type CreateRestUserRequestMutation = { __typename?: 'Mutation', createRESTUserRequest: { __typename?: 'UserRequest', id: string } };

export type CreateUserEnvironmentMutationVariables = Exact<{
  name: Scalars['String']['input'];
  variables: Scalars['String']['input'];
}>;


export type CreateUserEnvironmentMutation = { __typename?: 'Mutation', createUserEnvironment: { __typename?: 'UserEnvironment', id: string, userUid: string, name?: string | null, variables: string, isGlobal: boolean } };

export type CreateUserGlobalEnvironmentMutationVariables = Exact<{
  variables: Scalars['String']['input'];
}>;


export type CreateUserGlobalEnvironmentMutation = { __typename?: 'Mutation', createUserGlobalEnvironment: { __typename?: 'UserEnvironment', id: string } };

export type CreateUserHistoryMutationVariables = Exact<{
  reqData: Scalars['String']['input'];
  resMetadata: Scalars['String']['input'];
  reqType: ReqType;
}>;


export type CreateUserHistoryMutation = { __typename?: 'Mutation', createUserHistory: { __typename?: 'UserHistory', id: string } };

export type CreateUserSettingsMutationVariables = Exact<{
  properties: Scalars['String']['input'];
}>;


export type CreateUserSettingsMutation = { __typename?: 'Mutation', createUserSettings: { __typename?: 'UserSettings', id: string } };

export type DeleteAllUserHistoryMutationVariables = Exact<{
  reqType: ReqType;
}>;


export type DeleteAllUserHistoryMutation = { __typename?: 'Mutation', deleteAllUserHistory: { __typename?: 'UserHistoryDeletedManyData', count: number, reqType: ReqType } };

export type DeleteUserCollectionMutationVariables = Exact<{
  userCollectionID: Scalars['ID']['input'];
}>;


export type DeleteUserCollectionMutation = { __typename?: 'Mutation', deleteUserCollection: boolean };

export type DeleteUserEnvironmentMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteUserEnvironmentMutation = { __typename?: 'Mutation', deleteUserEnvironment: boolean };

export type DeleteUserRequestMutationVariables = Exact<{
  requestID: Scalars['ID']['input'];
}>;


export type DeleteUserRequestMutation = { __typename?: 'Mutation', deleteUserRequest: boolean };

export type MoveUserCollectionMutationVariables = Exact<{
  destCollectionID?: InputMaybe<Scalars['ID']['input']>;
  userCollectionID: Scalars['ID']['input'];
}>;


export type MoveUserCollectionMutation = { __typename?: 'Mutation', moveUserCollection: { __typename?: 'UserCollection', id: string } };

export type MoveUserRequestMutationVariables = Exact<{
  sourceCollectionID: Scalars['ID']['input'];
  requestID: Scalars['ID']['input'];
  destinationCollectionID: Scalars['ID']['input'];
  nextRequestID?: InputMaybe<Scalars['ID']['input']>;
}>;


export type MoveUserRequestMutation = { __typename?: 'Mutation', moveUserRequest: { __typename?: 'UserRequest', id: string } };

export type RemoveRequestFromHistoryMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type RemoveRequestFromHistoryMutation = { __typename?: 'Mutation', removeRequestFromHistory: { __typename?: 'UserHistory', id: string } };

export type RenameUserCollectionMutationVariables = Exact<{
  userCollectionID: Scalars['ID']['input'];
  newTitle: Scalars['String']['input'];
}>;


export type RenameUserCollectionMutation = { __typename?: 'Mutation', renameUserCollection: { __typename?: 'UserCollection', id: string } };

export type ToggleHistoryStarStatusMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ToggleHistoryStarStatusMutation = { __typename?: 'Mutation', toggleHistoryStarStatus: { __typename?: 'UserHistory', id: string } };

export type UpdateGqlUserRequestMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  request: Scalars['String']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
}>;


export type UpdateGqlUserRequestMutation = { __typename?: 'Mutation', updateGQLUserRequest: { __typename?: 'UserRequest', id: string } };

export type UpdateRestUserRequestMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  title: Scalars['String']['input'];
  request: Scalars['String']['input'];
}>;


export type UpdateRestUserRequestMutation = { __typename?: 'Mutation', updateRESTUserRequest: { __typename?: 'UserRequest', id: string, collectionID: string, request: string } };

export type UpdateUserCollectionOrderMutationVariables = Exact<{
  collectionID: Scalars['ID']['input'];
  nextCollectionID?: InputMaybe<Scalars['ID']['input']>;
}>;


export type UpdateUserCollectionOrderMutation = { __typename?: 'Mutation', updateUserCollectionOrder: boolean };

export type UpdateUserEnvironmentMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  variables: Scalars['String']['input'];
}>;


export type UpdateUserEnvironmentMutation = { __typename?: 'Mutation', updateUserEnvironment: { __typename?: 'UserEnvironment', id: string, userUid: string, name?: string | null, variables: string, isGlobal: boolean } };

export type UpdateUserSettingsMutationVariables = Exact<{
  properties: Scalars['String']['input'];
}>;


export type UpdateUserSettingsMutation = { __typename?: 'Mutation', updateUserSettings: { __typename?: 'UserSettings', id: string } };

export type ExportUserCollectionsToJsonQueryVariables = Exact<{
  collectionID?: InputMaybe<Scalars['ID']['input']>;
  collectionType: ReqType;
}>;


export type ExportUserCollectionsToJsonQuery = { __typename?: 'Query', exportUserCollectionsToJSON: { __typename?: 'UserCollectionExportJSONData', collectionType: ReqType, exportedCollection: string } };

export type GetGlobalEnvironmentsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetGlobalEnvironmentsQuery = { __typename?: 'Query', me: { __typename?: 'User', globalEnvironments: { __typename?: 'UserEnvironment', id: string, isGlobal: boolean, name?: string | null, userUid: string, variables: string } } };

export type GetRestUserHistoryQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRestUserHistoryQuery = { __typename?: 'Query', me: { __typename?: 'User', RESTHistory: Array<{ __typename?: 'UserHistory', id: string, userUid: string, reqType: ReqType, request: string, responseMetadata: string, isStarred: boolean, executedOn: any }>, GQLHistory: Array<{ __typename?: 'UserHistory', id: string, userUid: string, reqType: ReqType, request: string, responseMetadata: string, isStarred: boolean, executedOn: any }> } };

export type GetGqlRootUserCollectionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetGqlRootUserCollectionsQuery = { __typename?: 'Query', rootGQLUserCollections: Array<{ __typename?: 'UserCollection', id: string, title: string, type: ReqType, childrenGQL: Array<{ __typename?: 'UserCollection', id: string, title: string, type: ReqType }> }> };

export type GetUserEnvironmentsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserEnvironmentsQuery = { __typename?: 'Query', me: { __typename?: 'User', environments: Array<{ __typename?: 'UserEnvironment', id: string, isGlobal: boolean, name?: string | null, userUid: string, variables: string }> } };

export type GetUserRootCollectionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserRootCollectionsQuery = { __typename?: 'Query', rootRESTUserCollections: Array<{ __typename?: 'UserCollection', id: string, title: string, type: ReqType, childrenREST: Array<{ __typename?: 'UserCollection', id: string, title: string, type: ReqType }> }> };

export type GetUserSettingsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserSettingsQuery = { __typename?: 'Query', me: { __typename?: 'User', settings: { __typename?: 'UserSettings', id: string, properties: string } } };

export type UserCollectionCreatedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type UserCollectionCreatedSubscription = { __typename?: 'Subscription', userCollectionCreated: { __typename?: 'UserCollection', id: string, title: string, type: ReqType, data?: string | null, parent?: { __typename?: 'UserCollection', id: string } | null } };

export type UserCollectionDuplicatedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type UserCollectionDuplicatedSubscription = { __typename?: 'Subscription', userCollectionDuplicated: { __typename?: 'UserCollectionDuplicatedData', id: string, parentID?: string | null, title: string, type: ReqType, data?: string | null, childCollections: string, requests: Array<{ __typename?: 'UserRequest', id: string, request: string, collectionID: string }> } };

export type UserCollectionMovedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type UserCollectionMovedSubscription = { __typename?: 'Subscription', userCollectionMoved: { __typename?: 'UserCollection', id: string, type: ReqType, parent?: { __typename?: 'UserCollection', id: string } | null } };

export type UserCollectionOrderUpdatedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type UserCollectionOrderUpdatedSubscription = { __typename?: 'Subscription', userCollectionOrderUpdated: { __typename?: 'UserCollectionReorderData', userCollection: { __typename?: 'UserCollection', id: string, parent?: { __typename?: 'UserCollection', id: string } | null }, nextUserCollection?: { __typename?: 'UserCollection', id: string, parent?: { __typename?: 'UserCollection', id: string } | null } | null } };

export type UserCollectionRemovedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type UserCollectionRemovedSubscription = { __typename?: 'Subscription', userCollectionRemoved: { __typename?: 'UserCollectionRemovedData', id: string, type: ReqType } };

export type UserCollectionUpdatedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type UserCollectionUpdatedSubscription = { __typename?: 'Subscription', userCollectionUpdated: { __typename?: 'UserCollection', id: string, title: string, type: ReqType, parent?: { __typename?: 'UserCollection', id: string } | null } };

export type UserEnvironmentCreatedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type UserEnvironmentCreatedSubscription = { __typename?: 'Subscription', userEnvironmentCreated: { __typename?: 'UserEnvironment', id: string, isGlobal: boolean, name?: string | null, userUid: string, variables: string } };

export type UserEnvironmentDeletedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type UserEnvironmentDeletedSubscription = { __typename?: 'Subscription', userEnvironmentDeleted: { __typename?: 'UserEnvironment', id: string } };

export type UserEnvironmentUpdatedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type UserEnvironmentUpdatedSubscription = { __typename?: 'Subscription', userEnvironmentUpdated: { __typename?: 'UserEnvironment', id: string, userUid: string, name?: string | null, variables: string, isGlobal: boolean } };

export type UserHistoryCreatedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type UserHistoryCreatedSubscription = { __typename?: 'Subscription', userHistoryCreated: { __typename?: 'UserHistory', id: string, reqType: ReqType, request: string, responseMetadata: string, isStarred: boolean, executedOn: any } };

export type UserHistoryDeletedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type UserHistoryDeletedSubscription = { __typename?: 'Subscription', userHistoryDeleted: { __typename?: 'UserHistory', id: string, reqType: ReqType } };

export type UserHistoryDeletedManySubscriptionVariables = Exact<{ [key: string]: never; }>;


export type UserHistoryDeletedManySubscription = { __typename?: 'Subscription', userHistoryDeletedMany: { __typename?: 'UserHistoryDeletedManyData', count: number, reqType: ReqType } };

export type UserHistoryUpdatedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type UserHistoryUpdatedSubscription = { __typename?: 'Subscription', userHistoryUpdated: { __typename?: 'UserHistory', id: string, reqType: ReqType, request: string, responseMetadata: string, isStarred: boolean, executedOn: any } };

export type UserRequestCreatedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type UserRequestCreatedSubscription = { __typename?: 'Subscription', userRequestCreated: { __typename?: 'UserRequest', id: string, collectionID: string, title: string, request: string, type: ReqType } };

export type UserRequestDeletedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type UserRequestDeletedSubscription = { __typename?: 'Subscription', userRequestDeleted: { __typename?: 'UserRequest', id: string, collectionID: string, title: string, request: string, type: ReqType } };

export type UserRequestMovedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type UserRequestMovedSubscription = { __typename?: 'Subscription', userRequestMoved: { __typename?: 'UserRequestReorderData', request: { __typename?: 'UserRequest', id: string, collectionID: string, type: ReqType }, nextRequest?: { __typename?: 'UserRequest', id: string, collectionID: string } | null } };

export type UserRequestUpdatedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type UserRequestUpdatedSubscription = { __typename?: 'Subscription', userRequestUpdated: { __typename?: 'UserRequest', id: string, collectionID: string, title: string, request: string, type: ReqType } };

export type UserSettingsUpdatedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type UserSettingsUpdatedSubscription = { __typename?: 'Subscription', userSettingsUpdated: { __typename?: 'UserSettings', id: string, properties: string } };


export const ClearGlobalEnvironmentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ClearGlobalEnvironments"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clearGlobalEnvironments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<ClearGlobalEnvironmentsMutation, ClearGlobalEnvironmentsMutationVariables>;
export const CreateGqlChildUserCollectionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateGQLChildUserCollection"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"parentUserCollectionID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createGQLChildUserCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"title"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}},{"kind":"Argument","name":{"kind":"Name","value":"parentUserCollectionID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"parentUserCollectionID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateGqlChildUserCollectionMutation, CreateGqlChildUserCollectionMutationVariables>;
export const CreateGqlRootUserCollectionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateGQLRootUserCollection"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createGQLRootUserCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"title"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateGqlRootUserCollectionMutation, CreateGqlRootUserCollectionMutationVariables>;
export const CreateGqlUserRequestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateGQLUserRequest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"collectionID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createGQLUserRequest"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"title"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}},{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}},{"kind":"Argument","name":{"kind":"Name","value":"collectionID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"collectionID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateGqlUserRequestMutation, CreateGqlUserRequestMutationVariables>;
export const CreateRestChildUserCollectionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateRESTChildUserCollection"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"parentUserCollectionID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createRESTChildUserCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"title"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}},{"kind":"Argument","name":{"kind":"Name","value":"parentUserCollectionID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"parentUserCollectionID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateRestChildUserCollectionMutation, CreateRestChildUserCollectionMutationVariables>;
export const CreateRestRootUserCollectionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateRESTRootUserCollection"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createRESTRootUserCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"title"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateRestRootUserCollectionMutation, CreateRestRootUserCollectionMutationVariables>;
export const CreateRestUserRequestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateRESTUserRequest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"collectionID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createRESTUserRequest"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"collectionID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"collectionID"}}},{"kind":"Argument","name":{"kind":"Name","value":"title"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}},{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateRestUserRequestMutation, CreateRestUserRequestMutationVariables>;
export const CreateUserEnvironmentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateUserEnvironment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"variables"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUserEnvironment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"variables"},"value":{"kind":"Variable","name":{"kind":"Name","value":"variables"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userUid"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"variables"}},{"kind":"Field","name":{"kind":"Name","value":"isGlobal"}}]}}]}}]} as unknown as DocumentNode<CreateUserEnvironmentMutation, CreateUserEnvironmentMutationVariables>;
export const CreateUserGlobalEnvironmentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateUserGlobalEnvironment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"variables"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUserGlobalEnvironment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"variables"},"value":{"kind":"Variable","name":{"kind":"Name","value":"variables"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateUserGlobalEnvironmentMutation, CreateUserGlobalEnvironmentMutationVariables>;
export const CreateUserHistoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateUserHistory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"reqData"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"resMetadata"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"reqType"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ReqType"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUserHistory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"reqData"},"value":{"kind":"Variable","name":{"kind":"Name","value":"reqData"}}},{"kind":"Argument","name":{"kind":"Name","value":"resMetadata"},"value":{"kind":"Variable","name":{"kind":"Name","value":"resMetadata"}}},{"kind":"Argument","name":{"kind":"Name","value":"reqType"},"value":{"kind":"Variable","name":{"kind":"Name","value":"reqType"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateUserHistoryMutation, CreateUserHistoryMutationVariables>;
export const CreateUserSettingsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateUserSettings"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"properties"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUserSettings"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"properties"},"value":{"kind":"Variable","name":{"kind":"Name","value":"properties"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateUserSettingsMutation, CreateUserSettingsMutationVariables>;
export const DeleteAllUserHistoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteAllUserHistory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"reqType"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ReqType"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteAllUserHistory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"reqType"},"value":{"kind":"Variable","name":{"kind":"Name","value":"reqType"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"reqType"}}]}}]}}]} as unknown as DocumentNode<DeleteAllUserHistoryMutation, DeleteAllUserHistoryMutationVariables>;
export const DeleteUserCollectionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteUserCollection"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userCollectionID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteUserCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userCollectionID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userCollectionID"}}}]}]}}]} as unknown as DocumentNode<DeleteUserCollectionMutation, DeleteUserCollectionMutationVariables>;
export const DeleteUserEnvironmentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteUserEnvironment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteUserEnvironment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<DeleteUserEnvironmentMutation, DeleteUserEnvironmentMutationVariables>;
export const DeleteUserRequestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteUserRequest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"requestID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteUserRequest"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"requestID"}}}]}]}}]} as unknown as DocumentNode<DeleteUserRequestMutation, DeleteUserRequestMutationVariables>;
export const MoveUserCollectionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"MoveUserCollection"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"destCollectionID"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userCollectionID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"moveUserCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"destCollectionID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"destCollectionID"}}},{"kind":"Argument","name":{"kind":"Name","value":"userCollectionID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userCollectionID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<MoveUserCollectionMutation, MoveUserCollectionMutationVariables>;
export const MoveUserRequestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"MoveUserRequest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sourceCollectionID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"requestID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"destinationCollectionID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"nextRequestID"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"moveUserRequest"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sourceCollectionID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sourceCollectionID"}}},{"kind":"Argument","name":{"kind":"Name","value":"requestID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"requestID"}}},{"kind":"Argument","name":{"kind":"Name","value":"destinationCollectionID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"destinationCollectionID"}}},{"kind":"Argument","name":{"kind":"Name","value":"nextRequestID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"nextRequestID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<MoveUserRequestMutation, MoveUserRequestMutationVariables>;
export const RemoveRequestFromHistoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveRequestFromHistory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeRequestFromHistory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<RemoveRequestFromHistoryMutation, RemoveRequestFromHistoryMutationVariables>;
export const RenameUserCollectionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RenameUserCollection"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userCollectionID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"newTitle"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"renameUserCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userCollectionID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userCollectionID"}}},{"kind":"Argument","name":{"kind":"Name","value":"newTitle"},"value":{"kind":"Variable","name":{"kind":"Name","value":"newTitle"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<RenameUserCollectionMutation, RenameUserCollectionMutationVariables>;
export const ToggleHistoryStarStatusDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ToggleHistoryStarStatus"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"toggleHistoryStarStatus"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<ToggleHistoryStarStatusMutation, ToggleHistoryStarStatusMutationVariables>;
export const UpdateGqlUserRequestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateGQLUserRequest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateGQLUserRequest"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}},{"kind":"Argument","name":{"kind":"Name","value":"title"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdateGqlUserRequestMutation, UpdateGqlUserRequestMutationVariables>;
export const UpdateRestUserRequestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateRESTUserRequest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateRESTUserRequest"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"title"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}},{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"collectionID"}},{"kind":"Field","name":{"kind":"Name","value":"request"}}]}}]}}]} as unknown as DocumentNode<UpdateRestUserRequestMutation, UpdateRestUserRequestMutationVariables>;
export const UpdateUserCollectionOrderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateUserCollectionOrder"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"collectionID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"nextCollectionID"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateUserCollectionOrder"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"collectionID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"collectionID"}}},{"kind":"Argument","name":{"kind":"Name","value":"nextCollectionID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"nextCollectionID"}}}]}]}}]} as unknown as DocumentNode<UpdateUserCollectionOrderMutation, UpdateUserCollectionOrderMutationVariables>;
export const UpdateUserEnvironmentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateUserEnvironment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"variables"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateUserEnvironment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"variables"},"value":{"kind":"Variable","name":{"kind":"Name","value":"variables"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userUid"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"variables"}},{"kind":"Field","name":{"kind":"Name","value":"isGlobal"}}]}}]}}]} as unknown as DocumentNode<UpdateUserEnvironmentMutation, UpdateUserEnvironmentMutationVariables>;
export const UpdateUserSettingsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateUserSettings"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"properties"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateUserSettings"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"properties"},"value":{"kind":"Variable","name":{"kind":"Name","value":"properties"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdateUserSettingsMutation, UpdateUserSettingsMutationVariables>;
export const ExportUserCollectionsToJsonDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ExportUserCollectionsToJSON"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"collectionID"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"collectionType"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ReqType"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"exportUserCollectionsToJSON"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"collectionID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"collectionID"}}},{"kind":"Argument","name":{"kind":"Name","value":"collectionType"},"value":{"kind":"Variable","name":{"kind":"Name","value":"collectionType"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"collectionType"}},{"kind":"Field","name":{"kind":"Name","value":"exportedCollection"}}]}}]}}]} as unknown as DocumentNode<ExportUserCollectionsToJsonQuery, ExportUserCollectionsToJsonQueryVariables>;
export const GetGlobalEnvironmentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetGlobalEnvironments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"globalEnvironments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isGlobal"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"userUid"}},{"kind":"Field","name":{"kind":"Name","value":"variables"}}]}}]}}]}}]} as unknown as DocumentNode<GetGlobalEnvironmentsQuery, GetGlobalEnvironmentsQueryVariables>;
export const GetRestUserHistoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetRESTUserHistory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"RESTHistory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userUid"}},{"kind":"Field","name":{"kind":"Name","value":"reqType"}},{"kind":"Field","name":{"kind":"Name","value":"request"}},{"kind":"Field","name":{"kind":"Name","value":"responseMetadata"}},{"kind":"Field","name":{"kind":"Name","value":"isStarred"}},{"kind":"Field","name":{"kind":"Name","value":"executedOn"}}]}},{"kind":"Field","name":{"kind":"Name","value":"GQLHistory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userUid"}},{"kind":"Field","name":{"kind":"Name","value":"reqType"}},{"kind":"Field","name":{"kind":"Name","value":"request"}},{"kind":"Field","name":{"kind":"Name","value":"responseMetadata"}},{"kind":"Field","name":{"kind":"Name","value":"isStarred"}},{"kind":"Field","name":{"kind":"Name","value":"executedOn"}}]}}]}}]}}]} as unknown as DocumentNode<GetRestUserHistoryQuery, GetRestUserHistoryQueryVariables>;
export const GetGqlRootUserCollectionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetGQLRootUserCollections"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rootGQLUserCollections"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"IntValue","value":"99999"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"childrenGQL"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}}]} as unknown as DocumentNode<GetGqlRootUserCollectionsQuery, GetGqlRootUserCollectionsQueryVariables>;
export const GetUserEnvironmentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserEnvironments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"environments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isGlobal"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"userUid"}},{"kind":"Field","name":{"kind":"Name","value":"variables"}}]}}]}}]}}]} as unknown as DocumentNode<GetUserEnvironmentsQuery, GetUserEnvironmentsQueryVariables>;
export const GetUserRootCollectionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserRootCollections"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rootRESTUserCollections"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"IntValue","value":"99999"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"childrenREST"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}}]} as unknown as DocumentNode<GetUserRootCollectionsQuery, GetUserRootCollectionsQueryVariables>;
export const GetUserSettingsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserSettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"settings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"properties"}}]}}]}}]}}]} as unknown as DocumentNode<GetUserSettingsQuery, GetUserSettingsQueryVariables>;
export const UserCollectionCreatedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"UserCollectionCreated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userCollectionCreated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"data"}}]}}]}}]} as unknown as DocumentNode<UserCollectionCreatedSubscription, UserCollectionCreatedSubscriptionVariables>;
export const UserCollectionDuplicatedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"UserCollectionDuplicated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userCollectionDuplicated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"parentID"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"data"}},{"kind":"Field","name":{"kind":"Name","value":"childCollections"}},{"kind":"Field","name":{"kind":"Name","value":"requests"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"request"}},{"kind":"Field","name":{"kind":"Name","value":"collectionID"}}]}}]}}]}}]} as unknown as DocumentNode<UserCollectionDuplicatedSubscription, UserCollectionDuplicatedSubscriptionVariables>;
export const UserCollectionMovedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"UserCollectionMoved"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userCollectionMoved"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<UserCollectionMovedSubscription, UserCollectionMovedSubscriptionVariables>;
export const UserCollectionOrderUpdatedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"UserCollectionOrderUpdated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userCollectionOrderUpdated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"nextUserCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]} as unknown as DocumentNode<UserCollectionOrderUpdatedSubscription, UserCollectionOrderUpdatedSubscriptionVariables>;
export const UserCollectionRemovedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"UserCollectionRemoved"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userCollectionRemoved"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<UserCollectionRemovedSubscription, UserCollectionRemovedSubscriptionVariables>;
export const UserCollectionUpdatedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"userCollectionUpdated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userCollectionUpdated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<UserCollectionUpdatedSubscription, UserCollectionUpdatedSubscriptionVariables>;
export const UserEnvironmentCreatedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"UserEnvironmentCreated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userEnvironmentCreated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isGlobal"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"userUid"}},{"kind":"Field","name":{"kind":"Name","value":"variables"}}]}}]}}]} as unknown as DocumentNode<UserEnvironmentCreatedSubscription, UserEnvironmentCreatedSubscriptionVariables>;
export const UserEnvironmentDeletedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"UserEnvironmentDeleted"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userEnvironmentDeleted"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UserEnvironmentDeletedSubscription, UserEnvironmentDeletedSubscriptionVariables>;
export const UserEnvironmentUpdatedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"UserEnvironmentUpdated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userEnvironmentUpdated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userUid"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"variables"}},{"kind":"Field","name":{"kind":"Name","value":"isGlobal"}}]}}]}}]} as unknown as DocumentNode<UserEnvironmentUpdatedSubscription, UserEnvironmentUpdatedSubscriptionVariables>;
export const UserHistoryCreatedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"UserHistoryCreated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userHistoryCreated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"reqType"}},{"kind":"Field","name":{"kind":"Name","value":"request"}},{"kind":"Field","name":{"kind":"Name","value":"responseMetadata"}},{"kind":"Field","name":{"kind":"Name","value":"isStarred"}},{"kind":"Field","name":{"kind":"Name","value":"executedOn"}}]}}]}}]} as unknown as DocumentNode<UserHistoryCreatedSubscription, UserHistoryCreatedSubscriptionVariables>;
export const UserHistoryDeletedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"userHistoryDeleted"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userHistoryDeleted"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"reqType"}}]}}]}}]} as unknown as DocumentNode<UserHistoryDeletedSubscription, UserHistoryDeletedSubscriptionVariables>;
export const UserHistoryDeletedManyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"UserHistoryDeletedMany"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userHistoryDeletedMany"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"reqType"}}]}}]}}]} as unknown as DocumentNode<UserHistoryDeletedManySubscription, UserHistoryDeletedManySubscriptionVariables>;
export const UserHistoryUpdatedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"UserHistoryUpdated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userHistoryUpdated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"reqType"}},{"kind":"Field","name":{"kind":"Name","value":"request"}},{"kind":"Field","name":{"kind":"Name","value":"responseMetadata"}},{"kind":"Field","name":{"kind":"Name","value":"isStarred"}},{"kind":"Field","name":{"kind":"Name","value":"executedOn"}}]}}]}}]} as unknown as DocumentNode<UserHistoryUpdatedSubscription, UserHistoryUpdatedSubscriptionVariables>;
export const UserRequestCreatedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"UserRequestCreated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userRequestCreated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"collectionID"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"request"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<UserRequestCreatedSubscription, UserRequestCreatedSubscriptionVariables>;
export const UserRequestDeletedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"UserRequestDeleted"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userRequestDeleted"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"collectionID"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"request"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<UserRequestDeletedSubscription, UserRequestDeletedSubscriptionVariables>;
export const UserRequestMovedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"UserRequestMoved"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userRequestMoved"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"request"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"collectionID"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}},{"kind":"Field","name":{"kind":"Name","value":"nextRequest"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"collectionID"}}]}}]}}]}}]} as unknown as DocumentNode<UserRequestMovedSubscription, UserRequestMovedSubscriptionVariables>;
export const UserRequestUpdatedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"UserRequestUpdated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userRequestUpdated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"collectionID"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"request"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<UserRequestUpdatedSubscription, UserRequestUpdatedSubscriptionVariables>;
export const UserSettingsUpdatedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"UserSettingsUpdated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userSettingsUpdated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"properties"}}]}}]}}]} as unknown as DocumentNode<UserSettingsUpdatedSubscription, UserSettingsUpdatedSubscriptionVariables>;
export type WithTypename<T extends { __typename?: any }> = Partial<T> & { __typename: NonNullable<T['__typename']> };

export type GraphCacheKeysConfig = {
  Admin?: (data: WithTypename<Admin>) => null | string,
  CollectionReorderData?: (data: WithTypename<CollectionReorderData>) => null | string,
  CreateInfraTokenResponse?: (data: WithTypename<CreateInfraTokenResponse>) => null | string,
  Infra?: (data: WithTypename<Infra>) => null | string,
  InfraConfig?: (data: WithTypename<InfraConfig>) => null | string,
  InfraToken?: (data: WithTypename<InfraToken>) => null | string,
  InvitedUser?: (data: WithTypename<InvitedUser>) => null | string,
  RequestReorderData?: (data: WithTypename<RequestReorderData>) => null | string,
  Shortcode?: (data: WithTypename<Shortcode>) => null | string,
  ShortcodeCreator?: (data: WithTypename<ShortcodeCreator>) => null | string,
  ShortcodeWithUserEmail?: (data: WithTypename<ShortcodeWithUserEmail>) => null | string,
  Team?: (data: WithTypename<Team>) => null | string,
  TeamCollection?: (data: WithTypename<TeamCollection>) => null | string,
  TeamEnvironment?: (data: WithTypename<TeamEnvironment>) => null | string,
  TeamInvitation?: (data: WithTypename<TeamInvitation>) => null | string,
  TeamMember?: (data: WithTypename<TeamMember>) => null | string,
  TeamRequest?: (data: WithTypename<TeamRequest>) => null | string,
  User?: (data: WithTypename<User>) => null | string,
  UserCollection?: (data: WithTypename<UserCollection>) => null | string,
  UserCollectionDuplicatedData?: (data: WithTypename<UserCollectionDuplicatedData>) => null | string,
  UserCollectionExportJSONData?: (data: WithTypename<UserCollectionExportJsonData>) => null | string,
  UserCollectionRemovedData?: (data: WithTypename<UserCollectionRemovedData>) => null | string,
  UserCollectionReorderData?: (data: WithTypename<UserCollectionReorderData>) => null | string,
  UserDeletionResult?: (data: WithTypename<UserDeletionResult>) => null | string,
  UserEnvironment?: (data: WithTypename<UserEnvironment>) => null | string,
  UserHistory?: (data: WithTypename<UserHistory>) => null | string,
  UserHistoryDeletedManyData?: (data: WithTypename<UserHistoryDeletedManyData>) => null | string,
  UserRequest?: (data: WithTypename<UserRequest>) => null | string,
  UserRequestReorderData?: (data: WithTypename<UserRequestReorderData>) => null | string,
  UserSettings?: (data: WithTypename<UserSettings>) => null | string
}

export type GraphCacheResolvers = {
  Query?: {
    admin?: GraphCacheResolver<WithTypename<Query>, Record<string, never>, WithTypename<Admin> | string>,
    allowedAuthProviders?: GraphCacheResolver<WithTypename<Query>, Record<string, never>, Array<Scalars['String'] | string>>,
    collection?: GraphCacheResolver<WithTypename<Query>, QueryCollectionArgs, WithTypename<TeamCollection> | string>,
    exportCollectionToJSON?: GraphCacheResolver<WithTypename<Query>, QueryExportCollectionToJsonArgs, Scalars['String'] | string>,
    exportCollectionsToJSON?: GraphCacheResolver<WithTypename<Query>, QueryExportCollectionsToJsonArgs, Scalars['String'] | string>,
    exportUserCollectionToJSON?: GraphCacheResolver<WithTypename<Query>, QueryExportUserCollectionToJsonArgs, Scalars['String'] | string>,
    exportUserCollectionsToJSON?: GraphCacheResolver<WithTypename<Query>, QueryExportUserCollectionsToJsonArgs, WithTypename<UserCollectionExportJsonData> | string>,
    infra?: GraphCacheResolver<WithTypename<Query>, Record<string, never>, WithTypename<Infra> | string>,
    infraConfigs?: GraphCacheResolver<WithTypename<Query>, QueryInfraConfigsArgs, Array<WithTypename<InfraConfig> | string>>,
    infraTokens?: GraphCacheResolver<WithTypename<Query>, QueryInfraTokensArgs, Array<WithTypename<InfraToken> | string>>,
    isSMTPEnabled?: GraphCacheResolver<WithTypename<Query>, Record<string, never>, Scalars['Boolean'] | string>,
    me?: GraphCacheResolver<WithTypename<Query>, Record<string, never>, WithTypename<User> | string>,
    myShortcodes?: GraphCacheResolver<WithTypename<Query>, QueryMyShortcodesArgs, Array<WithTypename<Shortcode> | string>>,
    myTeams?: GraphCacheResolver<WithTypename<Query>, QueryMyTeamsArgs, Array<WithTypename<Team> | string>>,
    request?: GraphCacheResolver<WithTypename<Query>, QueryRequestArgs, WithTypename<TeamRequest> | string>,
    requestsInCollection?: GraphCacheResolver<WithTypename<Query>, QueryRequestsInCollectionArgs, Array<WithTypename<TeamRequest> | string>>,
    rootCollectionsOfTeam?: GraphCacheResolver<WithTypename<Query>, QueryRootCollectionsOfTeamArgs, Array<WithTypename<TeamCollection> | string>>,
    rootGQLUserCollections?: GraphCacheResolver<WithTypename<Query>, QueryRootGqlUserCollectionsArgs, Array<WithTypename<UserCollection> | string>>,
    rootRESTUserCollections?: GraphCacheResolver<WithTypename<Query>, QueryRootRestUserCollectionsArgs, Array<WithTypename<UserCollection> | string>>,
    searchForRequest?: GraphCacheResolver<WithTypename<Query>, QuerySearchForRequestArgs, Array<WithTypename<TeamRequest> | string>>,
    shortcode?: GraphCacheResolver<WithTypename<Query>, QueryShortcodeArgs, WithTypename<Shortcode> | string>,
    team?: GraphCacheResolver<WithTypename<Query>, QueryTeamArgs, WithTypename<Team> | string>,
    teamInvitation?: GraphCacheResolver<WithTypename<Query>, QueryTeamInvitationArgs, WithTypename<TeamInvitation> | string>,
    userCollection?: GraphCacheResolver<WithTypename<Query>, QueryUserCollectionArgs, WithTypename<UserCollection> | string>,
    userGQLRequests?: GraphCacheResolver<WithTypename<Query>, QueryUserGqlRequestsArgs, Array<WithTypename<UserRequest> | string>>,
    userRESTRequests?: GraphCacheResolver<WithTypename<Query>, QueryUserRestRequestsArgs, Array<WithTypename<UserRequest> | string>>,
    userRequest?: GraphCacheResolver<WithTypename<Query>, QueryUserRequestArgs, WithTypename<UserRequest> | string>
  },
  Admin?: {
    createdOn?: GraphCacheResolver<WithTypename<Admin>, Record<string, never>, Scalars['DateTime'] | string>,
    displayName?: GraphCacheResolver<WithTypename<Admin>, Record<string, never>, Scalars['String'] | string>,
    email?: GraphCacheResolver<WithTypename<Admin>, Record<string, never>, Scalars['String'] | string>,
    lastActiveOn?: GraphCacheResolver<WithTypename<Admin>, Record<string, never>, Scalars['DateTime'] | string>,
    lastLoggedOn?: GraphCacheResolver<WithTypename<Admin>, Record<string, never>, Scalars['DateTime'] | string>,
    photoURL?: GraphCacheResolver<WithTypename<Admin>, Record<string, never>, Scalars['String'] | string>,
    uid?: GraphCacheResolver<WithTypename<Admin>, Record<string, never>, Scalars['ID'] | string>
  },
  CollectionReorderData?: {
    collection?: GraphCacheResolver<WithTypename<CollectionReorderData>, Record<string, never>, WithTypename<TeamCollection> | string>,
    nextCollection?: GraphCacheResolver<WithTypename<CollectionReorderData>, Record<string, never>, WithTypename<TeamCollection> | string>
  },
  CreateInfraTokenResponse?: {
    info?: GraphCacheResolver<WithTypename<CreateInfraTokenResponse>, Record<string, never>, WithTypename<InfraToken> | string>,
    token?: GraphCacheResolver<WithTypename<CreateInfraTokenResponse>, Record<string, never>, Scalars['String'] | string>
  },
  Infra?: {
    admins?: GraphCacheResolver<WithTypename<Infra>, Record<string, never>, Array<WithTypename<User> | string>>,
    allShortcodes?: GraphCacheResolver<WithTypename<Infra>, InfraAllShortcodesArgs, Array<WithTypename<ShortcodeWithUserEmail> | string>>,
    allTeams?: GraphCacheResolver<WithTypename<Infra>, InfraAllTeamsArgs, Array<WithTypename<Team> | string>>,
    allUsers?: GraphCacheResolver<WithTypename<Infra>, InfraAllUsersArgs, Array<WithTypename<User> | string>>,
    allUsersV2?: GraphCacheResolver<WithTypename<Infra>, InfraAllUsersV2Args, Array<WithTypename<User> | string>>,
    collectionCountInTeam?: GraphCacheResolver<WithTypename<Infra>, InfraCollectionCountInTeamArgs, Scalars['Int'] | string>,
    environmentCountInTeam?: GraphCacheResolver<WithTypename<Infra>, InfraEnvironmentCountInTeamArgs, Scalars['Int'] | string>,
    executedBy?: GraphCacheResolver<WithTypename<Infra>, Record<string, never>, WithTypename<Admin> | string>,
    invitedUsers?: GraphCacheResolver<WithTypename<Infra>, InfraInvitedUsersArgs, Array<WithTypename<InvitedUser> | string>>,
    membersCountInTeam?: GraphCacheResolver<WithTypename<Infra>, InfraMembersCountInTeamArgs, Scalars['Int'] | string>,
    pendingInvitationCountInTeam?: GraphCacheResolver<WithTypename<Infra>, InfraPendingInvitationCountInTeamArgs, Array<WithTypename<TeamInvitation> | string>>,
    requestCountInTeam?: GraphCacheResolver<WithTypename<Infra>, InfraRequestCountInTeamArgs, Scalars['Int'] | string>,
    teamCollectionsCount?: GraphCacheResolver<WithTypename<Infra>, Record<string, never>, Scalars['Int'] | string>,
    teamInfo?: GraphCacheResolver<WithTypename<Infra>, InfraTeamInfoArgs, WithTypename<Team> | string>,
    teamRequestsCount?: GraphCacheResolver<WithTypename<Infra>, Record<string, never>, Scalars['Int'] | string>,
    teamsCount?: GraphCacheResolver<WithTypename<Infra>, Record<string, never>, Scalars['Int'] | string>,
    userInfo?: GraphCacheResolver<WithTypename<Infra>, InfraUserInfoArgs, WithTypename<User> | string>,
    usersCount?: GraphCacheResolver<WithTypename<Infra>, Record<string, never>, Scalars['Int'] | string>
  },
  InfraConfig?: {
    name?: GraphCacheResolver<WithTypename<InfraConfig>, Record<string, never>, Scalars['String'] | string>,
    value?: GraphCacheResolver<WithTypename<InfraConfig>, Record<string, never>, Scalars['String'] | string>
  },
  InfraToken?: {
    createdOn?: GraphCacheResolver<WithTypename<InfraToken>, Record<string, never>, Scalars['DateTime'] | string>,
    expiresOn?: GraphCacheResolver<WithTypename<InfraToken>, Record<string, never>, Scalars['DateTime'] | string>,
    id?: GraphCacheResolver<WithTypename<InfraToken>, Record<string, never>, Scalars['ID'] | string>,
    label?: GraphCacheResolver<WithTypename<InfraToken>, Record<string, never>, Scalars['String'] | string>,
    lastUsedOn?: GraphCacheResolver<WithTypename<InfraToken>, Record<string, never>, Scalars['DateTime'] | string>
  },
  InvitedUser?: {
    adminEmail?: GraphCacheResolver<WithTypename<InvitedUser>, Record<string, never>, Scalars['String'] | string>,
    adminUid?: GraphCacheResolver<WithTypename<InvitedUser>, Record<string, never>, Scalars['ID'] | string>,
    invitedOn?: GraphCacheResolver<WithTypename<InvitedUser>, Record<string, never>, Scalars['DateTime'] | string>,
    inviteeEmail?: GraphCacheResolver<WithTypename<InvitedUser>, Record<string, never>, Scalars['String'] | string>
  },
  RequestReorderData?: {
    nextRequest?: GraphCacheResolver<WithTypename<RequestReorderData>, Record<string, never>, WithTypename<TeamRequest> | string>,
    request?: GraphCacheResolver<WithTypename<RequestReorderData>, Record<string, never>, WithTypename<TeamRequest> | string>
  },
  Shortcode?: {
    createdOn?: GraphCacheResolver<WithTypename<Shortcode>, Record<string, never>, Scalars['DateTime'] | string>,
    id?: GraphCacheResolver<WithTypename<Shortcode>, Record<string, never>, Scalars['ID'] | string>,
    properties?: GraphCacheResolver<WithTypename<Shortcode>, Record<string, never>, Scalars['String'] | string>,
    request?: GraphCacheResolver<WithTypename<Shortcode>, Record<string, never>, Scalars['String'] | string>
  },
  ShortcodeCreator?: {
    email?: GraphCacheResolver<WithTypename<ShortcodeCreator>, Record<string, never>, Scalars['String'] | string>,
    uid?: GraphCacheResolver<WithTypename<ShortcodeCreator>, Record<string, never>, Scalars['String'] | string>
  },
  ShortcodeWithUserEmail?: {
    createdOn?: GraphCacheResolver<WithTypename<ShortcodeWithUserEmail>, Record<string, never>, Scalars['DateTime'] | string>,
    creator?: GraphCacheResolver<WithTypename<ShortcodeWithUserEmail>, Record<string, never>, WithTypename<ShortcodeCreator> | string>,
    id?: GraphCacheResolver<WithTypename<ShortcodeWithUserEmail>, Record<string, never>, Scalars['ID'] | string>,
    properties?: GraphCacheResolver<WithTypename<ShortcodeWithUserEmail>, Record<string, never>, Scalars['String'] | string>,
    request?: GraphCacheResolver<WithTypename<ShortcodeWithUserEmail>, Record<string, never>, Scalars['String'] | string>
  },
  Team?: {
    editorsCount?: GraphCacheResolver<WithTypename<Team>, Record<string, never>, Scalars['Int'] | string>,
    id?: GraphCacheResolver<WithTypename<Team>, Record<string, never>, Scalars['ID'] | string>,
    members?: GraphCacheResolver<WithTypename<Team>, TeamMembersArgs, Array<WithTypename<TeamMember> | string>>,
    myRole?: GraphCacheResolver<WithTypename<Team>, Record<string, never>, TeamMemberRole | string>,
    name?: GraphCacheResolver<WithTypename<Team>, Record<string, never>, Scalars['String'] | string>,
    ownersCount?: GraphCacheResolver<WithTypename<Team>, Record<string, never>, Scalars['Int'] | string>,
    teamEnvironments?: GraphCacheResolver<WithTypename<Team>, Record<string, never>, Array<WithTypename<TeamEnvironment> | string>>,
    teamInvitations?: GraphCacheResolver<WithTypename<Team>, Record<string, never>, Array<WithTypename<TeamInvitation> | string>>,
    teamMembers?: GraphCacheResolver<WithTypename<Team>, Record<string, never>, Array<WithTypename<TeamMember> | string>>,
    viewersCount?: GraphCacheResolver<WithTypename<Team>, Record<string, never>, Scalars['Int'] | string>
  },
  TeamCollection?: {
    children?: GraphCacheResolver<WithTypename<TeamCollection>, TeamCollectionChildrenArgs, Array<WithTypename<TeamCollection> | string>>,
    data?: GraphCacheResolver<WithTypename<TeamCollection>, Record<string, never>, Scalars['String'] | string>,
    id?: GraphCacheResolver<WithTypename<TeamCollection>, Record<string, never>, Scalars['ID'] | string>,
    parent?: GraphCacheResolver<WithTypename<TeamCollection>, Record<string, never>, WithTypename<TeamCollection> | string>,
    parentID?: GraphCacheResolver<WithTypename<TeamCollection>, Record<string, never>, Scalars['ID'] | string>,
    team?: GraphCacheResolver<WithTypename<TeamCollection>, Record<string, never>, WithTypename<Team> | string>,
    title?: GraphCacheResolver<WithTypename<TeamCollection>, Record<string, never>, Scalars['String'] | string>
  },
  TeamEnvironment?: {
    id?: GraphCacheResolver<WithTypename<TeamEnvironment>, Record<string, never>, Scalars['ID'] | string>,
    name?: GraphCacheResolver<WithTypename<TeamEnvironment>, Record<string, never>, Scalars['String'] | string>,
    teamID?: GraphCacheResolver<WithTypename<TeamEnvironment>, Record<string, never>, Scalars['ID'] | string>,
    variables?: GraphCacheResolver<WithTypename<TeamEnvironment>, Record<string, never>, Scalars['String'] | string>
  },
  TeamInvitation?: {
    creator?: GraphCacheResolver<WithTypename<TeamInvitation>, Record<string, never>, WithTypename<User> | string>,
    creatorUid?: GraphCacheResolver<WithTypename<TeamInvitation>, Record<string, never>, Scalars['ID'] | string>,
    id?: GraphCacheResolver<WithTypename<TeamInvitation>, Record<string, never>, Scalars['ID'] | string>,
    inviteeEmail?: GraphCacheResolver<WithTypename<TeamInvitation>, Record<string, never>, Scalars['String'] | string>,
    inviteeRole?: GraphCacheResolver<WithTypename<TeamInvitation>, Record<string, never>, TeamMemberRole | string>,
    team?: GraphCacheResolver<WithTypename<TeamInvitation>, Record<string, never>, WithTypename<Team> | string>,
    teamID?: GraphCacheResolver<WithTypename<TeamInvitation>, Record<string, never>, Scalars['ID'] | string>
  },
  TeamMember?: {
    membershipID?: GraphCacheResolver<WithTypename<TeamMember>, Record<string, never>, Scalars['ID'] | string>,
    role?: GraphCacheResolver<WithTypename<TeamMember>, Record<string, never>, TeamMemberRole | string>,
    user?: GraphCacheResolver<WithTypename<TeamMember>, Record<string, never>, WithTypename<User> | string>
  },
  TeamRequest?: {
    collection?: GraphCacheResolver<WithTypename<TeamRequest>, Record<string, never>, WithTypename<TeamCollection> | string>,
    collectionID?: GraphCacheResolver<WithTypename<TeamRequest>, Record<string, never>, Scalars['ID'] | string>,
    id?: GraphCacheResolver<WithTypename<TeamRequest>, Record<string, never>, Scalars['ID'] | string>,
    request?: GraphCacheResolver<WithTypename<TeamRequest>, Record<string, never>, Scalars['String'] | string>,
    team?: GraphCacheResolver<WithTypename<TeamRequest>, Record<string, never>, WithTypename<Team> | string>,
    teamID?: GraphCacheResolver<WithTypename<TeamRequest>, Record<string, never>, Scalars['ID'] | string>,
    title?: GraphCacheResolver<WithTypename<TeamRequest>, Record<string, never>, Scalars['String'] | string>
  },
  User?: {
    GQLHistory?: GraphCacheResolver<WithTypename<User>, UserGqlHistoryArgs, Array<WithTypename<UserHistory> | string>>,
    RESTHistory?: GraphCacheResolver<WithTypename<User>, UserRestHistoryArgs, Array<WithTypename<UserHistory> | string>>,
    createdOn?: GraphCacheResolver<WithTypename<User>, Record<string, never>, Scalars['DateTime'] | string>,
    currentGQLSession?: GraphCacheResolver<WithTypename<User>, Record<string, never>, Scalars['String'] | string>,
    currentRESTSession?: GraphCacheResolver<WithTypename<User>, Record<string, never>, Scalars['String'] | string>,
    displayName?: GraphCacheResolver<WithTypename<User>, Record<string, never>, Scalars['String'] | string>,
    email?: GraphCacheResolver<WithTypename<User>, Record<string, never>, Scalars['String'] | string>,
    environments?: GraphCacheResolver<WithTypename<User>, Record<string, never>, Array<WithTypename<UserEnvironment> | string>>,
    globalEnvironments?: GraphCacheResolver<WithTypename<User>, Record<string, never>, WithTypename<UserEnvironment> | string>,
    isAdmin?: GraphCacheResolver<WithTypename<User>, Record<string, never>, Scalars['Boolean'] | string>,
    lastActiveOn?: GraphCacheResolver<WithTypename<User>, Record<string, never>, Scalars['DateTime'] | string>,
    lastLoggedOn?: GraphCacheResolver<WithTypename<User>, Record<string, never>, Scalars['DateTime'] | string>,
    photoURL?: GraphCacheResolver<WithTypename<User>, Record<string, never>, Scalars['String'] | string>,
    settings?: GraphCacheResolver<WithTypename<User>, Record<string, never>, WithTypename<UserSettings> | string>,
    uid?: GraphCacheResolver<WithTypename<User>, Record<string, never>, Scalars['ID'] | string>
  },
  UserCollection?: {
    childrenGQL?: GraphCacheResolver<WithTypename<UserCollection>, UserCollectionChildrenGqlArgs, Array<WithTypename<UserCollection> | string>>,
    childrenREST?: GraphCacheResolver<WithTypename<UserCollection>, UserCollectionChildrenRestArgs, Array<WithTypename<UserCollection> | string>>,
    data?: GraphCacheResolver<WithTypename<UserCollection>, Record<string, never>, Scalars['String'] | string>,
    id?: GraphCacheResolver<WithTypename<UserCollection>, Record<string, never>, Scalars['ID'] | string>,
    parent?: GraphCacheResolver<WithTypename<UserCollection>, Record<string, never>, WithTypename<UserCollection> | string>,
    requests?: GraphCacheResolver<WithTypename<UserCollection>, UserCollectionRequestsArgs, Array<WithTypename<UserRequest> | string>>,
    title?: GraphCacheResolver<WithTypename<UserCollection>, Record<string, never>, Scalars['String'] | string>,
    type?: GraphCacheResolver<WithTypename<UserCollection>, Record<string, never>, ReqType | string>,
    user?: GraphCacheResolver<WithTypename<UserCollection>, Record<string, never>, WithTypename<User> | string>
  },
  UserCollectionDuplicatedData?: {
    childCollections?: GraphCacheResolver<WithTypename<UserCollectionDuplicatedData>, Record<string, never>, Scalars['String'] | string>,
    data?: GraphCacheResolver<WithTypename<UserCollectionDuplicatedData>, Record<string, never>, Scalars['String'] | string>,
    id?: GraphCacheResolver<WithTypename<UserCollectionDuplicatedData>, Record<string, never>, Scalars['ID'] | string>,
    parentID?: GraphCacheResolver<WithTypename<UserCollectionDuplicatedData>, Record<string, never>, Scalars['String'] | string>,
    requests?: GraphCacheResolver<WithTypename<UserCollectionDuplicatedData>, Record<string, never>, Array<WithTypename<UserRequest> | string>>,
    title?: GraphCacheResolver<WithTypename<UserCollectionDuplicatedData>, Record<string, never>, Scalars['String'] | string>,
    type?: GraphCacheResolver<WithTypename<UserCollectionDuplicatedData>, Record<string, never>, ReqType | string>,
    userID?: GraphCacheResolver<WithTypename<UserCollectionDuplicatedData>, Record<string, never>, Scalars['String'] | string>
  },
  UserCollectionExportJSONData?: {
    collectionType?: GraphCacheResolver<WithTypename<UserCollectionExportJsonData>, Record<string, never>, ReqType | string>,
    exportedCollection?: GraphCacheResolver<WithTypename<UserCollectionExportJsonData>, Record<string, never>, Scalars['ID'] | string>
  },
  UserCollectionRemovedData?: {
    id?: GraphCacheResolver<WithTypename<UserCollectionRemovedData>, Record<string, never>, Scalars['ID'] | string>,
    type?: GraphCacheResolver<WithTypename<UserCollectionRemovedData>, Record<string, never>, ReqType | string>
  },
  UserCollectionReorderData?: {
    nextUserCollection?: GraphCacheResolver<WithTypename<UserCollectionReorderData>, Record<string, never>, WithTypename<UserCollection> | string>,
    userCollection?: GraphCacheResolver<WithTypename<UserCollectionReorderData>, Record<string, never>, WithTypename<UserCollection> | string>
  },
  UserDeletionResult?: {
    errorMessage?: GraphCacheResolver<WithTypename<UserDeletionResult>, Record<string, never>, Scalars['String'] | string>,
    isDeleted?: GraphCacheResolver<WithTypename<UserDeletionResult>, Record<string, never>, Scalars['Boolean'] | string>,
    userUID?: GraphCacheResolver<WithTypename<UserDeletionResult>, Record<string, never>, Scalars['ID'] | string>
  },
  UserEnvironment?: {
    id?: GraphCacheResolver<WithTypename<UserEnvironment>, Record<string, never>, Scalars['ID'] | string>,
    isGlobal?: GraphCacheResolver<WithTypename<UserEnvironment>, Record<string, never>, Scalars['Boolean'] | string>,
    name?: GraphCacheResolver<WithTypename<UserEnvironment>, Record<string, never>, Scalars['String'] | string>,
    userUid?: GraphCacheResolver<WithTypename<UserEnvironment>, Record<string, never>, Scalars['ID'] | string>,
    variables?: GraphCacheResolver<WithTypename<UserEnvironment>, Record<string, never>, Scalars['String'] | string>
  },
  UserHistory?: {
    executedOn?: GraphCacheResolver<WithTypename<UserHistory>, Record<string, never>, Scalars['DateTime'] | string>,
    id?: GraphCacheResolver<WithTypename<UserHistory>, Record<string, never>, Scalars['ID'] | string>,
    isStarred?: GraphCacheResolver<WithTypename<UserHistory>, Record<string, never>, Scalars['Boolean'] | string>,
    reqType?: GraphCacheResolver<WithTypename<UserHistory>, Record<string, never>, ReqType | string>,
    request?: GraphCacheResolver<WithTypename<UserHistory>, Record<string, never>, Scalars['String'] | string>,
    responseMetadata?: GraphCacheResolver<WithTypename<UserHistory>, Record<string, never>, Scalars['String'] | string>,
    userUid?: GraphCacheResolver<WithTypename<UserHistory>, Record<string, never>, Scalars['ID'] | string>
  },
  UserHistoryDeletedManyData?: {
    count?: GraphCacheResolver<WithTypename<UserHistoryDeletedManyData>, Record<string, never>, Scalars['Int'] | string>,
    reqType?: GraphCacheResolver<WithTypename<UserHistoryDeletedManyData>, Record<string, never>, ReqType | string>
  },
  UserRequest?: {
    collectionID?: GraphCacheResolver<WithTypename<UserRequest>, Record<string, never>, Scalars['ID'] | string>,
    createdOn?: GraphCacheResolver<WithTypename<UserRequest>, Record<string, never>, Scalars['DateTime'] | string>,
    id?: GraphCacheResolver<WithTypename<UserRequest>, Record<string, never>, Scalars['ID'] | string>,
    request?: GraphCacheResolver<WithTypename<UserRequest>, Record<string, never>, Scalars['String'] | string>,
    title?: GraphCacheResolver<WithTypename<UserRequest>, Record<string, never>, Scalars['String'] | string>,
    type?: GraphCacheResolver<WithTypename<UserRequest>, Record<string, never>, ReqType | string>,
    user?: GraphCacheResolver<WithTypename<UserRequest>, Record<string, never>, WithTypename<User> | string>
  },
  UserRequestReorderData?: {
    nextRequest?: GraphCacheResolver<WithTypename<UserRequestReorderData>, Record<string, never>, WithTypename<UserRequest> | string>,
    request?: GraphCacheResolver<WithTypename<UserRequestReorderData>, Record<string, never>, WithTypename<UserRequest> | string>
  },
  UserSettings?: {
    id?: GraphCacheResolver<WithTypename<UserSettings>, Record<string, never>, Scalars['ID'] | string>,
    properties?: GraphCacheResolver<WithTypename<UserSettings>, Record<string, never>, Scalars['String'] | string>,
    updatedOn?: GraphCacheResolver<WithTypename<UserSettings>, Record<string, never>, Scalars['DateTime'] | string>,
    userUid?: GraphCacheResolver<WithTypename<UserSettings>, Record<string, never>, Scalars['ID'] | string>
  }
};

export type GraphCacheOptimisticUpdaters = {
  acceptTeamInvitation?: GraphCacheOptimisticMutationResolver<MutationAcceptTeamInvitationArgs, WithTypename<TeamMember>>,
  addUserToTeamByAdmin?: GraphCacheOptimisticMutationResolver<MutationAddUserToTeamByAdminArgs, WithTypename<TeamMember>>,
  changeUserRoleInTeamByAdmin?: GraphCacheOptimisticMutationResolver<MutationChangeUserRoleInTeamByAdminArgs, WithTypename<TeamMember>>,
  clearGlobalEnvironments?: GraphCacheOptimisticMutationResolver<MutationClearGlobalEnvironmentsArgs, WithTypename<UserEnvironment>>,
  createChildCollection?: GraphCacheOptimisticMutationResolver<MutationCreateChildCollectionArgs, WithTypename<TeamCollection>>,
  createDuplicateEnvironment?: GraphCacheOptimisticMutationResolver<MutationCreateDuplicateEnvironmentArgs, WithTypename<TeamEnvironment>>,
  createGQLChildUserCollection?: GraphCacheOptimisticMutationResolver<MutationCreateGqlChildUserCollectionArgs, WithTypename<UserCollection>>,
  createGQLRootUserCollection?: GraphCacheOptimisticMutationResolver<MutationCreateGqlRootUserCollectionArgs, WithTypename<UserCollection>>,
  createGQLUserRequest?: GraphCacheOptimisticMutationResolver<MutationCreateGqlUserRequestArgs, WithTypename<UserRequest>>,
  createInfraToken?: GraphCacheOptimisticMutationResolver<MutationCreateInfraTokenArgs, WithTypename<CreateInfraTokenResponse>>,
  createRESTChildUserCollection?: GraphCacheOptimisticMutationResolver<MutationCreateRestChildUserCollectionArgs, WithTypename<UserCollection>>,
  createRESTRootUserCollection?: GraphCacheOptimisticMutationResolver<MutationCreateRestRootUserCollectionArgs, WithTypename<UserCollection>>,
  createRESTUserRequest?: GraphCacheOptimisticMutationResolver<MutationCreateRestUserRequestArgs, WithTypename<UserRequest>>,
  createRequestInCollection?: GraphCacheOptimisticMutationResolver<MutationCreateRequestInCollectionArgs, WithTypename<TeamRequest>>,
  createRootCollection?: GraphCacheOptimisticMutationResolver<MutationCreateRootCollectionArgs, WithTypename<TeamCollection>>,
  createShortcode?: GraphCacheOptimisticMutationResolver<MutationCreateShortcodeArgs, WithTypename<Shortcode>>,
  createTeam?: GraphCacheOptimisticMutationResolver<MutationCreateTeamArgs, WithTypename<Team>>,
  createTeamByAdmin?: GraphCacheOptimisticMutationResolver<MutationCreateTeamByAdminArgs, WithTypename<Team>>,
  createTeamEnvironment?: GraphCacheOptimisticMutationResolver<MutationCreateTeamEnvironmentArgs, WithTypename<TeamEnvironment>>,
  createTeamInvitation?: GraphCacheOptimisticMutationResolver<MutationCreateTeamInvitationArgs, WithTypename<TeamInvitation>>,
  createUserEnvironment?: GraphCacheOptimisticMutationResolver<MutationCreateUserEnvironmentArgs, WithTypename<UserEnvironment>>,
  createUserGlobalEnvironment?: GraphCacheOptimisticMutationResolver<MutationCreateUserGlobalEnvironmentArgs, WithTypename<UserEnvironment>>,
  createUserHistory?: GraphCacheOptimisticMutationResolver<MutationCreateUserHistoryArgs, WithTypename<UserHistory>>,
  createUserSettings?: GraphCacheOptimisticMutationResolver<MutationCreateUserSettingsArgs, WithTypename<UserSettings>>,
  deleteAllUserHistory?: GraphCacheOptimisticMutationResolver<MutationDeleteAllUserHistoryArgs, WithTypename<UserHistoryDeletedManyData>>,
  deleteAllVariablesFromTeamEnvironment?: GraphCacheOptimisticMutationResolver<MutationDeleteAllVariablesFromTeamEnvironmentArgs, WithTypename<TeamEnvironment>>,
  deleteCollection?: GraphCacheOptimisticMutationResolver<MutationDeleteCollectionArgs, Scalars['Boolean']>,
  deleteRequest?: GraphCacheOptimisticMutationResolver<MutationDeleteRequestArgs, Scalars['Boolean']>,
  deleteTeam?: GraphCacheOptimisticMutationResolver<MutationDeleteTeamArgs, Scalars['Boolean']>,
  deleteTeamByAdmin?: GraphCacheOptimisticMutationResolver<MutationDeleteTeamByAdminArgs, Scalars['Boolean']>,
  deleteTeamEnvironment?: GraphCacheOptimisticMutationResolver<MutationDeleteTeamEnvironmentArgs, Scalars['Boolean']>,
  deleteUser?: GraphCacheOptimisticMutationResolver<Record<string, never>, Scalars['Boolean']>,
  deleteUserCollection?: GraphCacheOptimisticMutationResolver<MutationDeleteUserCollectionArgs, Scalars['Boolean']>,
  deleteUserEnvironment?: GraphCacheOptimisticMutationResolver<MutationDeleteUserEnvironmentArgs, Scalars['Boolean']>,
  deleteUserEnvironments?: GraphCacheOptimisticMutationResolver<Record<string, never>, Scalars['Int']>,
  deleteUserRequest?: GraphCacheOptimisticMutationResolver<MutationDeleteUserRequestArgs, Scalars['Boolean']>,
  demoteUsersByAdmin?: GraphCacheOptimisticMutationResolver<MutationDemoteUsersByAdminArgs, Scalars['Boolean']>,
  duplicateTeamCollection?: GraphCacheOptimisticMutationResolver<MutationDuplicateTeamCollectionArgs, Scalars['Boolean']>,
  duplicateUserCollection?: GraphCacheOptimisticMutationResolver<MutationDuplicateUserCollectionArgs, Scalars['Boolean']>,
  enableAndDisableSSO?: GraphCacheOptimisticMutationResolver<MutationEnableAndDisableSsoArgs, Scalars['Boolean']>,
  importCollectionsFromJSON?: GraphCacheOptimisticMutationResolver<MutationImportCollectionsFromJsonArgs, Scalars['Boolean']>,
  importUserCollectionsFromJSON?: GraphCacheOptimisticMutationResolver<MutationImportUserCollectionsFromJsonArgs, Scalars['Boolean']>,
  inviteNewUser?: GraphCacheOptimisticMutationResolver<MutationInviteNewUserArgs, WithTypename<InvitedUser>>,
  leaveTeam?: GraphCacheOptimisticMutationResolver<MutationLeaveTeamArgs, Scalars['Boolean']>,
  makeUserAdmin?: GraphCacheOptimisticMutationResolver<MutationMakeUserAdminArgs, Scalars['Boolean']>,
  makeUsersAdmin?: GraphCacheOptimisticMutationResolver<MutationMakeUsersAdminArgs, Scalars['Boolean']>,
  moveCollection?: GraphCacheOptimisticMutationResolver<MutationMoveCollectionArgs, WithTypename<TeamCollection>>,
  moveRequest?: GraphCacheOptimisticMutationResolver<MutationMoveRequestArgs, WithTypename<TeamRequest>>,
  moveUserCollection?: GraphCacheOptimisticMutationResolver<MutationMoveUserCollectionArgs, WithTypename<UserCollection>>,
  moveUserRequest?: GraphCacheOptimisticMutationResolver<MutationMoveUserRequestArgs, WithTypename<UserRequest>>,
  removeRequestFromHistory?: GraphCacheOptimisticMutationResolver<MutationRemoveRequestFromHistoryArgs, WithTypename<UserHistory>>,
  removeTeamMember?: GraphCacheOptimisticMutationResolver<MutationRemoveTeamMemberArgs, Scalars['Boolean']>,
  removeUserAsAdmin?: GraphCacheOptimisticMutationResolver<MutationRemoveUserAsAdminArgs, Scalars['Boolean']>,
  removeUserByAdmin?: GraphCacheOptimisticMutationResolver<MutationRemoveUserByAdminArgs, Scalars['Boolean']>,
  removeUserFromTeamByAdmin?: GraphCacheOptimisticMutationResolver<MutationRemoveUserFromTeamByAdminArgs, Scalars['Boolean']>,
  removeUsersByAdmin?: GraphCacheOptimisticMutationResolver<MutationRemoveUsersByAdminArgs, Array<WithTypename<UserDeletionResult>>>,
  renameCollection?: GraphCacheOptimisticMutationResolver<MutationRenameCollectionArgs, WithTypename<TeamCollection>>,
  renameTeam?: GraphCacheOptimisticMutationResolver<MutationRenameTeamArgs, WithTypename<Team>>,
  renameTeamByAdmin?: GraphCacheOptimisticMutationResolver<MutationRenameTeamByAdminArgs, WithTypename<Team>>,
  renameUserCollection?: GraphCacheOptimisticMutationResolver<MutationRenameUserCollectionArgs, WithTypename<UserCollection>>,
  replaceCollectionsWithJSON?: GraphCacheOptimisticMutationResolver<MutationReplaceCollectionsWithJsonArgs, Scalars['Boolean']>,
  resetInfraConfigs?: GraphCacheOptimisticMutationResolver<Record<string, never>, Scalars['Boolean']>,
  revokeInfraToken?: GraphCacheOptimisticMutationResolver<MutationRevokeInfraTokenArgs, Scalars['Boolean']>,
  revokeShortcode?: GraphCacheOptimisticMutationResolver<MutationRevokeShortcodeArgs, Scalars['Boolean']>,
  revokeShortcodeByAdmin?: GraphCacheOptimisticMutationResolver<MutationRevokeShortcodeByAdminArgs, Scalars['Boolean']>,
  revokeTeamInvitation?: GraphCacheOptimisticMutationResolver<MutationRevokeTeamInvitationArgs, Scalars['Boolean']>,
  revokeTeamInviteByAdmin?: GraphCacheOptimisticMutationResolver<MutationRevokeTeamInviteByAdminArgs, Scalars['Boolean']>,
  revokeUserInvitationsByAdmin?: GraphCacheOptimisticMutationResolver<MutationRevokeUserInvitationsByAdminArgs, Scalars['Boolean']>,
  toggleAnalyticsCollection?: GraphCacheOptimisticMutationResolver<MutationToggleAnalyticsCollectionArgs, Scalars['Boolean']>,
  toggleHistoryStarStatus?: GraphCacheOptimisticMutationResolver<MutationToggleHistoryStarStatusArgs, WithTypename<UserHistory>>,
  toggleSMTP?: GraphCacheOptimisticMutationResolver<MutationToggleSmtpArgs, Scalars['Boolean']>,
  updateCollectionOrder?: GraphCacheOptimisticMutationResolver<MutationUpdateCollectionOrderArgs, Scalars['Boolean']>,
  updateDisplayName?: GraphCacheOptimisticMutationResolver<MutationUpdateDisplayNameArgs, WithTypename<User>>,
  updateEmbedProperties?: GraphCacheOptimisticMutationResolver<MutationUpdateEmbedPropertiesArgs, WithTypename<Shortcode>>,
  updateGQLUserRequest?: GraphCacheOptimisticMutationResolver<MutationUpdateGqlUserRequestArgs, WithTypename<UserRequest>>,
  updateInfraConfigs?: GraphCacheOptimisticMutationResolver<MutationUpdateInfraConfigsArgs, Array<WithTypename<InfraConfig>>>,
  updateLookUpRequestOrder?: GraphCacheOptimisticMutationResolver<MutationUpdateLookUpRequestOrderArgs, Scalars['Boolean']>,
  updateRESTUserRequest?: GraphCacheOptimisticMutationResolver<MutationUpdateRestUserRequestArgs, WithTypename<UserRequest>>,
  updateRequest?: GraphCacheOptimisticMutationResolver<MutationUpdateRequestArgs, WithTypename<TeamRequest>>,
  updateTeamCollection?: GraphCacheOptimisticMutationResolver<MutationUpdateTeamCollectionArgs, WithTypename<TeamCollection>>,
  updateTeamEnvironment?: GraphCacheOptimisticMutationResolver<MutationUpdateTeamEnvironmentArgs, WithTypename<TeamEnvironment>>,
  updateTeamMemberRole?: GraphCacheOptimisticMutationResolver<MutationUpdateTeamMemberRoleArgs, WithTypename<TeamMember>>,
  updateUserCollection?: GraphCacheOptimisticMutationResolver<MutationUpdateUserCollectionArgs, WithTypename<UserCollection>>,
  updateUserCollectionOrder?: GraphCacheOptimisticMutationResolver<MutationUpdateUserCollectionOrderArgs, Scalars['Boolean']>,
  updateUserDisplayNameByAdmin?: GraphCacheOptimisticMutationResolver<MutationUpdateUserDisplayNameByAdminArgs, Scalars['Boolean']>,
  updateUserEnvironment?: GraphCacheOptimisticMutationResolver<MutationUpdateUserEnvironmentArgs, WithTypename<UserEnvironment>>,
  updateUserSessions?: GraphCacheOptimisticMutationResolver<MutationUpdateUserSessionsArgs, WithTypename<User>>,
  updateUserSettings?: GraphCacheOptimisticMutationResolver<MutationUpdateUserSettingsArgs, WithTypename<UserSettings>>
};

export type GraphCacheUpdaters = {
  Mutation?: {
    acceptTeamInvitation?: GraphCacheUpdateResolver<{ acceptTeamInvitation: WithTypename<TeamMember> }, MutationAcceptTeamInvitationArgs>,
    addUserToTeamByAdmin?: GraphCacheUpdateResolver<{ addUserToTeamByAdmin: WithTypename<TeamMember> }, MutationAddUserToTeamByAdminArgs>,
    changeUserRoleInTeamByAdmin?: GraphCacheUpdateResolver<{ changeUserRoleInTeamByAdmin: WithTypename<TeamMember> }, MutationChangeUserRoleInTeamByAdminArgs>,
    clearGlobalEnvironments?: GraphCacheUpdateResolver<{ clearGlobalEnvironments: WithTypename<UserEnvironment> }, MutationClearGlobalEnvironmentsArgs>,
    createChildCollection?: GraphCacheUpdateResolver<{ createChildCollection: WithTypename<TeamCollection> }, MutationCreateChildCollectionArgs>,
    createDuplicateEnvironment?: GraphCacheUpdateResolver<{ createDuplicateEnvironment: WithTypename<TeamEnvironment> }, MutationCreateDuplicateEnvironmentArgs>,
    createGQLChildUserCollection?: GraphCacheUpdateResolver<{ createGQLChildUserCollection: WithTypename<UserCollection> }, MutationCreateGqlChildUserCollectionArgs>,
    createGQLRootUserCollection?: GraphCacheUpdateResolver<{ createGQLRootUserCollection: WithTypename<UserCollection> }, MutationCreateGqlRootUserCollectionArgs>,
    createGQLUserRequest?: GraphCacheUpdateResolver<{ createGQLUserRequest: WithTypename<UserRequest> }, MutationCreateGqlUserRequestArgs>,
    createInfraToken?: GraphCacheUpdateResolver<{ createInfraToken: WithTypename<CreateInfraTokenResponse> }, MutationCreateInfraTokenArgs>,
    createRESTChildUserCollection?: GraphCacheUpdateResolver<{ createRESTChildUserCollection: WithTypename<UserCollection> }, MutationCreateRestChildUserCollectionArgs>,
    createRESTRootUserCollection?: GraphCacheUpdateResolver<{ createRESTRootUserCollection: WithTypename<UserCollection> }, MutationCreateRestRootUserCollectionArgs>,
    createRESTUserRequest?: GraphCacheUpdateResolver<{ createRESTUserRequest: WithTypename<UserRequest> }, MutationCreateRestUserRequestArgs>,
    createRequestInCollection?: GraphCacheUpdateResolver<{ createRequestInCollection: WithTypename<TeamRequest> }, MutationCreateRequestInCollectionArgs>,
    createRootCollection?: GraphCacheUpdateResolver<{ createRootCollection: WithTypename<TeamCollection> }, MutationCreateRootCollectionArgs>,
    createShortcode?: GraphCacheUpdateResolver<{ createShortcode: WithTypename<Shortcode> }, MutationCreateShortcodeArgs>,
    createTeam?: GraphCacheUpdateResolver<{ createTeam: WithTypename<Team> }, MutationCreateTeamArgs>,
    createTeamByAdmin?: GraphCacheUpdateResolver<{ createTeamByAdmin: WithTypename<Team> }, MutationCreateTeamByAdminArgs>,
    createTeamEnvironment?: GraphCacheUpdateResolver<{ createTeamEnvironment: WithTypename<TeamEnvironment> }, MutationCreateTeamEnvironmentArgs>,
    createTeamInvitation?: GraphCacheUpdateResolver<{ createTeamInvitation: WithTypename<TeamInvitation> }, MutationCreateTeamInvitationArgs>,
    createUserEnvironment?: GraphCacheUpdateResolver<{ createUserEnvironment: WithTypename<UserEnvironment> }, MutationCreateUserEnvironmentArgs>,
    createUserGlobalEnvironment?: GraphCacheUpdateResolver<{ createUserGlobalEnvironment: WithTypename<UserEnvironment> }, MutationCreateUserGlobalEnvironmentArgs>,
    createUserHistory?: GraphCacheUpdateResolver<{ createUserHistory: WithTypename<UserHistory> }, MutationCreateUserHistoryArgs>,
    createUserSettings?: GraphCacheUpdateResolver<{ createUserSettings: WithTypename<UserSettings> }, MutationCreateUserSettingsArgs>,
    deleteAllUserHistory?: GraphCacheUpdateResolver<{ deleteAllUserHistory: WithTypename<UserHistoryDeletedManyData> }, MutationDeleteAllUserHistoryArgs>,
    deleteAllVariablesFromTeamEnvironment?: GraphCacheUpdateResolver<{ deleteAllVariablesFromTeamEnvironment: WithTypename<TeamEnvironment> }, MutationDeleteAllVariablesFromTeamEnvironmentArgs>,
    deleteCollection?: GraphCacheUpdateResolver<{ deleteCollection: Scalars['Boolean'] }, MutationDeleteCollectionArgs>,
    deleteRequest?: GraphCacheUpdateResolver<{ deleteRequest: Scalars['Boolean'] }, MutationDeleteRequestArgs>,
    deleteTeam?: GraphCacheUpdateResolver<{ deleteTeam: Scalars['Boolean'] }, MutationDeleteTeamArgs>,
    deleteTeamByAdmin?: GraphCacheUpdateResolver<{ deleteTeamByAdmin: Scalars['Boolean'] }, MutationDeleteTeamByAdminArgs>,
    deleteTeamEnvironment?: GraphCacheUpdateResolver<{ deleteTeamEnvironment: Scalars['Boolean'] }, MutationDeleteTeamEnvironmentArgs>,
    deleteUser?: GraphCacheUpdateResolver<{ deleteUser: Scalars['Boolean'] }, Record<string, never>>,
    deleteUserCollection?: GraphCacheUpdateResolver<{ deleteUserCollection: Scalars['Boolean'] }, MutationDeleteUserCollectionArgs>,
    deleteUserEnvironment?: GraphCacheUpdateResolver<{ deleteUserEnvironment: Scalars['Boolean'] }, MutationDeleteUserEnvironmentArgs>,
    deleteUserEnvironments?: GraphCacheUpdateResolver<{ deleteUserEnvironments: Scalars['Int'] }, Record<string, never>>,
    deleteUserRequest?: GraphCacheUpdateResolver<{ deleteUserRequest: Scalars['Boolean'] }, MutationDeleteUserRequestArgs>,
    demoteUsersByAdmin?: GraphCacheUpdateResolver<{ demoteUsersByAdmin: Scalars['Boolean'] }, MutationDemoteUsersByAdminArgs>,
    duplicateTeamCollection?: GraphCacheUpdateResolver<{ duplicateTeamCollection: Scalars['Boolean'] }, MutationDuplicateTeamCollectionArgs>,
    duplicateUserCollection?: GraphCacheUpdateResolver<{ duplicateUserCollection: Scalars['Boolean'] }, MutationDuplicateUserCollectionArgs>,
    enableAndDisableSSO?: GraphCacheUpdateResolver<{ enableAndDisableSSO: Scalars['Boolean'] }, MutationEnableAndDisableSsoArgs>,
    importCollectionsFromJSON?: GraphCacheUpdateResolver<{ importCollectionsFromJSON: Scalars['Boolean'] }, MutationImportCollectionsFromJsonArgs>,
    importUserCollectionsFromJSON?: GraphCacheUpdateResolver<{ importUserCollectionsFromJSON: Scalars['Boolean'] }, MutationImportUserCollectionsFromJsonArgs>,
    inviteNewUser?: GraphCacheUpdateResolver<{ inviteNewUser: WithTypename<InvitedUser> }, MutationInviteNewUserArgs>,
    leaveTeam?: GraphCacheUpdateResolver<{ leaveTeam: Scalars['Boolean'] }, MutationLeaveTeamArgs>,
    makeUserAdmin?: GraphCacheUpdateResolver<{ makeUserAdmin: Scalars['Boolean'] }, MutationMakeUserAdminArgs>,
    makeUsersAdmin?: GraphCacheUpdateResolver<{ makeUsersAdmin: Scalars['Boolean'] }, MutationMakeUsersAdminArgs>,
    moveCollection?: GraphCacheUpdateResolver<{ moveCollection: WithTypename<TeamCollection> }, MutationMoveCollectionArgs>,
    moveRequest?: GraphCacheUpdateResolver<{ moveRequest: WithTypename<TeamRequest> }, MutationMoveRequestArgs>,
    moveUserCollection?: GraphCacheUpdateResolver<{ moveUserCollection: WithTypename<UserCollection> }, MutationMoveUserCollectionArgs>,
    moveUserRequest?: GraphCacheUpdateResolver<{ moveUserRequest: WithTypename<UserRequest> }, MutationMoveUserRequestArgs>,
    removeRequestFromHistory?: GraphCacheUpdateResolver<{ removeRequestFromHistory: WithTypename<UserHistory> }, MutationRemoveRequestFromHistoryArgs>,
    removeTeamMember?: GraphCacheUpdateResolver<{ removeTeamMember: Scalars['Boolean'] }, MutationRemoveTeamMemberArgs>,
    removeUserAsAdmin?: GraphCacheUpdateResolver<{ removeUserAsAdmin: Scalars['Boolean'] }, MutationRemoveUserAsAdminArgs>,
    removeUserByAdmin?: GraphCacheUpdateResolver<{ removeUserByAdmin: Scalars['Boolean'] }, MutationRemoveUserByAdminArgs>,
    removeUserFromTeamByAdmin?: GraphCacheUpdateResolver<{ removeUserFromTeamByAdmin: Scalars['Boolean'] }, MutationRemoveUserFromTeamByAdminArgs>,
    removeUsersByAdmin?: GraphCacheUpdateResolver<{ removeUsersByAdmin: Array<WithTypename<UserDeletionResult>> }, MutationRemoveUsersByAdminArgs>,
    renameCollection?: GraphCacheUpdateResolver<{ renameCollection: WithTypename<TeamCollection> }, MutationRenameCollectionArgs>,
    renameTeam?: GraphCacheUpdateResolver<{ renameTeam: WithTypename<Team> }, MutationRenameTeamArgs>,
    renameTeamByAdmin?: GraphCacheUpdateResolver<{ renameTeamByAdmin: WithTypename<Team> }, MutationRenameTeamByAdminArgs>,
    renameUserCollection?: GraphCacheUpdateResolver<{ renameUserCollection: WithTypename<UserCollection> }, MutationRenameUserCollectionArgs>,
    replaceCollectionsWithJSON?: GraphCacheUpdateResolver<{ replaceCollectionsWithJSON: Scalars['Boolean'] }, MutationReplaceCollectionsWithJsonArgs>,
    resetInfraConfigs?: GraphCacheUpdateResolver<{ resetInfraConfigs: Scalars['Boolean'] }, Record<string, never>>,
    revokeInfraToken?: GraphCacheUpdateResolver<{ revokeInfraToken: Scalars['Boolean'] }, MutationRevokeInfraTokenArgs>,
    revokeShortcode?: GraphCacheUpdateResolver<{ revokeShortcode: Scalars['Boolean'] }, MutationRevokeShortcodeArgs>,
    revokeShortcodeByAdmin?: GraphCacheUpdateResolver<{ revokeShortcodeByAdmin: Scalars['Boolean'] }, MutationRevokeShortcodeByAdminArgs>,
    revokeTeamInvitation?: GraphCacheUpdateResolver<{ revokeTeamInvitation: Scalars['Boolean'] }, MutationRevokeTeamInvitationArgs>,
    revokeTeamInviteByAdmin?: GraphCacheUpdateResolver<{ revokeTeamInviteByAdmin: Scalars['Boolean'] }, MutationRevokeTeamInviteByAdminArgs>,
    revokeUserInvitationsByAdmin?: GraphCacheUpdateResolver<{ revokeUserInvitationsByAdmin: Scalars['Boolean'] }, MutationRevokeUserInvitationsByAdminArgs>,
    toggleAnalyticsCollection?: GraphCacheUpdateResolver<{ toggleAnalyticsCollection: Scalars['Boolean'] }, MutationToggleAnalyticsCollectionArgs>,
    toggleHistoryStarStatus?: GraphCacheUpdateResolver<{ toggleHistoryStarStatus: WithTypename<UserHistory> }, MutationToggleHistoryStarStatusArgs>,
    toggleSMTP?: GraphCacheUpdateResolver<{ toggleSMTP: Scalars['Boolean'] }, MutationToggleSmtpArgs>,
    updateCollectionOrder?: GraphCacheUpdateResolver<{ updateCollectionOrder: Scalars['Boolean'] }, MutationUpdateCollectionOrderArgs>,
    updateDisplayName?: GraphCacheUpdateResolver<{ updateDisplayName: WithTypename<User> }, MutationUpdateDisplayNameArgs>,
    updateEmbedProperties?: GraphCacheUpdateResolver<{ updateEmbedProperties: WithTypename<Shortcode> }, MutationUpdateEmbedPropertiesArgs>,
    updateGQLUserRequest?: GraphCacheUpdateResolver<{ updateGQLUserRequest: WithTypename<UserRequest> }, MutationUpdateGqlUserRequestArgs>,
    updateInfraConfigs?: GraphCacheUpdateResolver<{ updateInfraConfigs: Array<WithTypename<InfraConfig>> }, MutationUpdateInfraConfigsArgs>,
    updateLookUpRequestOrder?: GraphCacheUpdateResolver<{ updateLookUpRequestOrder: Scalars['Boolean'] }, MutationUpdateLookUpRequestOrderArgs>,
    updateRESTUserRequest?: GraphCacheUpdateResolver<{ updateRESTUserRequest: WithTypename<UserRequest> }, MutationUpdateRestUserRequestArgs>,
    updateRequest?: GraphCacheUpdateResolver<{ updateRequest: WithTypename<TeamRequest> }, MutationUpdateRequestArgs>,
    updateTeamCollection?: GraphCacheUpdateResolver<{ updateTeamCollection: WithTypename<TeamCollection> }, MutationUpdateTeamCollectionArgs>,
    updateTeamEnvironment?: GraphCacheUpdateResolver<{ updateTeamEnvironment: WithTypename<TeamEnvironment> }, MutationUpdateTeamEnvironmentArgs>,
    updateTeamMemberRole?: GraphCacheUpdateResolver<{ updateTeamMemberRole: WithTypename<TeamMember> }, MutationUpdateTeamMemberRoleArgs>,
    updateUserCollection?: GraphCacheUpdateResolver<{ updateUserCollection: WithTypename<UserCollection> }, MutationUpdateUserCollectionArgs>,
    updateUserCollectionOrder?: GraphCacheUpdateResolver<{ updateUserCollectionOrder: Scalars['Boolean'] }, MutationUpdateUserCollectionOrderArgs>,
    updateUserDisplayNameByAdmin?: GraphCacheUpdateResolver<{ updateUserDisplayNameByAdmin: Scalars['Boolean'] }, MutationUpdateUserDisplayNameByAdminArgs>,
    updateUserEnvironment?: GraphCacheUpdateResolver<{ updateUserEnvironment: WithTypename<UserEnvironment> }, MutationUpdateUserEnvironmentArgs>,
    updateUserSessions?: GraphCacheUpdateResolver<{ updateUserSessions: WithTypename<User> }, MutationUpdateUserSessionsArgs>,
    updateUserSettings?: GraphCacheUpdateResolver<{ updateUserSettings: WithTypename<UserSettings> }, MutationUpdateUserSettingsArgs>
  },
  Subscription?: {
    collectionOrderUpdated?: GraphCacheUpdateResolver<{ collectionOrderUpdated: WithTypename<CollectionReorderData> }, SubscriptionCollectionOrderUpdatedArgs>,
    myShortcodesCreated?: GraphCacheUpdateResolver<{ myShortcodesCreated: WithTypename<Shortcode> }, Record<string, never>>,
    myShortcodesRevoked?: GraphCacheUpdateResolver<{ myShortcodesRevoked: WithTypename<Shortcode> }, Record<string, never>>,
    myShortcodesUpdated?: GraphCacheUpdateResolver<{ myShortcodesUpdated: WithTypename<Shortcode> }, Record<string, never>>,
    requestMoved?: GraphCacheUpdateResolver<{ requestMoved: WithTypename<TeamRequest> }, SubscriptionRequestMovedArgs>,
    requestOrderUpdated?: GraphCacheUpdateResolver<{ requestOrderUpdated: WithTypename<RequestReorderData> }, SubscriptionRequestOrderUpdatedArgs>,
    teamCollectionAdded?: GraphCacheUpdateResolver<{ teamCollectionAdded: WithTypename<TeamCollection> }, SubscriptionTeamCollectionAddedArgs>,
    teamCollectionMoved?: GraphCacheUpdateResolver<{ teamCollectionMoved: WithTypename<TeamCollection> }, SubscriptionTeamCollectionMovedArgs>,
    teamCollectionRemoved?: GraphCacheUpdateResolver<{ teamCollectionRemoved: Scalars['ID'] }, SubscriptionTeamCollectionRemovedArgs>,
    teamCollectionUpdated?: GraphCacheUpdateResolver<{ teamCollectionUpdated: WithTypename<TeamCollection> }, SubscriptionTeamCollectionUpdatedArgs>,
    teamEnvironmentCreated?: GraphCacheUpdateResolver<{ teamEnvironmentCreated: WithTypename<TeamEnvironment> }, SubscriptionTeamEnvironmentCreatedArgs>,
    teamEnvironmentDeleted?: GraphCacheUpdateResolver<{ teamEnvironmentDeleted: WithTypename<TeamEnvironment> }, SubscriptionTeamEnvironmentDeletedArgs>,
    teamEnvironmentUpdated?: GraphCacheUpdateResolver<{ teamEnvironmentUpdated: WithTypename<TeamEnvironment> }, SubscriptionTeamEnvironmentUpdatedArgs>,
    teamInvitationAdded?: GraphCacheUpdateResolver<{ teamInvitationAdded: WithTypename<TeamInvitation> }, SubscriptionTeamInvitationAddedArgs>,
    teamInvitationRemoved?: GraphCacheUpdateResolver<{ teamInvitationRemoved: Scalars['ID'] }, SubscriptionTeamInvitationRemovedArgs>,
    teamMemberAdded?: GraphCacheUpdateResolver<{ teamMemberAdded: WithTypename<TeamMember> }, SubscriptionTeamMemberAddedArgs>,
    teamMemberRemoved?: GraphCacheUpdateResolver<{ teamMemberRemoved: Scalars['ID'] }, SubscriptionTeamMemberRemovedArgs>,
    teamMemberUpdated?: GraphCacheUpdateResolver<{ teamMemberUpdated: WithTypename<TeamMember> }, SubscriptionTeamMemberUpdatedArgs>,
    teamRequestAdded?: GraphCacheUpdateResolver<{ teamRequestAdded: WithTypename<TeamRequest> }, SubscriptionTeamRequestAddedArgs>,
    teamRequestDeleted?: GraphCacheUpdateResolver<{ teamRequestDeleted: Scalars['ID'] }, SubscriptionTeamRequestDeletedArgs>,
    teamRequestUpdated?: GraphCacheUpdateResolver<{ teamRequestUpdated: WithTypename<TeamRequest> }, SubscriptionTeamRequestUpdatedArgs>,
    userCollectionCreated?: GraphCacheUpdateResolver<{ userCollectionCreated: WithTypename<UserCollection> }, Record<string, never>>,
    userCollectionDuplicated?: GraphCacheUpdateResolver<{ userCollectionDuplicated: WithTypename<UserCollectionDuplicatedData> }, Record<string, never>>,
    userCollectionMoved?: GraphCacheUpdateResolver<{ userCollectionMoved: WithTypename<UserCollection> }, Record<string, never>>,
    userCollectionOrderUpdated?: GraphCacheUpdateResolver<{ userCollectionOrderUpdated: WithTypename<UserCollectionReorderData> }, Record<string, never>>,
    userCollectionRemoved?: GraphCacheUpdateResolver<{ userCollectionRemoved: WithTypename<UserCollectionRemovedData> }, Record<string, never>>,
    userCollectionUpdated?: GraphCacheUpdateResolver<{ userCollectionUpdated: WithTypename<UserCollection> }, Record<string, never>>,
    userDeleted?: GraphCacheUpdateResolver<{ userDeleted: WithTypename<User> }, Record<string, never>>,
    userEnvironmentCreated?: GraphCacheUpdateResolver<{ userEnvironmentCreated: WithTypename<UserEnvironment> }, Record<string, never>>,
    userEnvironmentDeleteMany?: GraphCacheUpdateResolver<{ userEnvironmentDeleteMany: Scalars['Int'] }, Record<string, never>>,
    userEnvironmentDeleted?: GraphCacheUpdateResolver<{ userEnvironmentDeleted: WithTypename<UserEnvironment> }, Record<string, never>>,
    userEnvironmentUpdated?: GraphCacheUpdateResolver<{ userEnvironmentUpdated: WithTypename<UserEnvironment> }, Record<string, never>>,
    userHistoryCreated?: GraphCacheUpdateResolver<{ userHistoryCreated: WithTypename<UserHistory> }, Record<string, never>>,
    userHistoryDeleted?: GraphCacheUpdateResolver<{ userHistoryDeleted: WithTypename<UserHistory> }, Record<string, never>>,
    userHistoryDeletedMany?: GraphCacheUpdateResolver<{ userHistoryDeletedMany: WithTypename<UserHistoryDeletedManyData> }, Record<string, never>>,
    userHistoryUpdated?: GraphCacheUpdateResolver<{ userHistoryUpdated: WithTypename<UserHistory> }, Record<string, never>>,
    userInvited?: GraphCacheUpdateResolver<{ userInvited: WithTypename<InvitedUser> }, Record<string, never>>,
    userRequestCreated?: GraphCacheUpdateResolver<{ userRequestCreated: WithTypename<UserRequest> }, Record<string, never>>,
    userRequestDeleted?: GraphCacheUpdateResolver<{ userRequestDeleted: WithTypename<UserRequest> }, Record<string, never>>,
    userRequestMoved?: GraphCacheUpdateResolver<{ userRequestMoved: WithTypename<UserRequestReorderData> }, Record<string, never>>,
    userRequestUpdated?: GraphCacheUpdateResolver<{ userRequestUpdated: WithTypename<UserRequest> }, Record<string, never>>,
    userSettingsCreated?: GraphCacheUpdateResolver<{ userSettingsCreated: WithTypename<UserSettings> }, Record<string, never>>,
    userSettingsUpdated?: GraphCacheUpdateResolver<{ userSettingsUpdated: WithTypename<UserSettings> }, Record<string, never>>,
    userUpdated?: GraphCacheUpdateResolver<{ userUpdated: WithTypename<User> }, Record<string, never>>
  },
};

export type GraphCacheConfig = Parameters<typeof offlineExchange>[0] & {
  updates?: GraphCacheUpdaters,
  keys?: GraphCacheKeysConfig,
  optimistic?: GraphCacheOptimisticUpdaters,
  resolvers?: GraphCacheResolvers,
};