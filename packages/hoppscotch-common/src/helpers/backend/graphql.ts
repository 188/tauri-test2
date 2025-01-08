/* eslint-disable */ // Auto-generated file (DO NOT EDIT!!!), refer gql-codegen.yml

import { cacheExchange } from '@urql/exchange-graphcache';
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
  IsFirstTimeInfraSetup = 'IS_FIRST_TIME_INFRA_SETUP'
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

export type AcceptTeamInvitationMutationVariables = Exact<{
  inviteID: Scalars['ID']['input'];
}>;


export type AcceptTeamInvitationMutation = { __typename?: 'Mutation', acceptTeamInvitation: { __typename?: 'TeamMember', membershipID: string, role: TeamMemberRole, user: { __typename?: 'User', uid: string, displayName?: string | null, photoURL?: string | null, email?: string | null } } };

export type CreateChildCollectionMutationVariables = Exact<{
  childTitle: Scalars['String']['input'];
  collectionID: Scalars['ID']['input'];
}>;


export type CreateChildCollectionMutation = { __typename?: 'Mutation', createChildCollection: { __typename?: 'TeamCollection', id: string } };

export type CreateDuplicateEnvironmentMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type CreateDuplicateEnvironmentMutation = { __typename?: 'Mutation', createDuplicateEnvironment: { __typename?: 'TeamEnvironment', id: string, teamID: string, name: string, variables: string } };

export type CreateNewRootCollectionMutationVariables = Exact<{
  title: Scalars['String']['input'];
  teamID: Scalars['ID']['input'];
}>;


export type CreateNewRootCollectionMutation = { __typename?: 'Mutation', createRootCollection: { __typename?: 'TeamCollection', id: string } };

export type CreateRequestInCollectionMutationVariables = Exact<{
  data: CreateTeamRequestInput;
  collectionID: Scalars['ID']['input'];
}>;


export type CreateRequestInCollectionMutation = { __typename?: 'Mutation', createRequestInCollection: { __typename?: 'TeamRequest', id: string, collection: { __typename?: 'TeamCollection', id: string, team: { __typename?: 'Team', id: string, name: string } } } };

export type CreateShortcodeMutationVariables = Exact<{
  request: Scalars['String']['input'];
  properties?: InputMaybe<Scalars['String']['input']>;
}>;


export type CreateShortcodeMutation = { __typename?: 'Mutation', createShortcode: { __typename?: 'Shortcode', id: string, request: string, createdOn: any, properties?: string | null } };

export type CreateTeamMutationVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type CreateTeamMutation = { __typename?: 'Mutation', createTeam: { __typename?: 'Team', id: string, name: string, myRole?: TeamMemberRole | null, ownersCount: number, editorsCount: number, viewersCount: number, members: Array<{ __typename?: 'TeamMember', membershipID: string, role: TeamMemberRole, user: { __typename?: 'User', uid: string, displayName?: string | null, email?: string | null, photoURL?: string | null } }> } };

export type CreateTeamEnvironmentMutationVariables = Exact<{
  variables: Scalars['String']['input'];
  teamID: Scalars['ID']['input'];
  name: Scalars['String']['input'];
}>;


export type CreateTeamEnvironmentMutation = { __typename?: 'Mutation', createTeamEnvironment: { __typename?: 'TeamEnvironment', variables: string, name: string, teamID: string, id: string } };

export type CreateTeamInvitationMutationVariables = Exact<{
  inviteeEmail: Scalars['String']['input'];
  inviteeRole: TeamMemberRole;
  teamID: Scalars['ID']['input'];
}>;


export type CreateTeamInvitationMutation = { __typename?: 'Mutation', createTeamInvitation: { __typename?: 'TeamInvitation', id: string, teamID: string, creatorUid: string, inviteeEmail: string, inviteeRole: TeamMemberRole } };

export type DeleteCollectionMutationVariables = Exact<{
  collectionID: Scalars['ID']['input'];
}>;


export type DeleteCollectionMutation = { __typename?: 'Mutation', deleteCollection: boolean };

export type DeleteRequestMutationVariables = Exact<{
  requestID: Scalars['ID']['input'];
}>;


export type DeleteRequestMutation = { __typename?: 'Mutation', deleteRequest: boolean };

export type DeleteShortcodeMutationVariables = Exact<{
  code: Scalars['ID']['input'];
}>;


export type DeleteShortcodeMutation = { __typename?: 'Mutation', revokeShortcode: boolean };

export type DeleteTeamMutationVariables = Exact<{
  teamID: Scalars['ID']['input'];
}>;


export type DeleteTeamMutation = { __typename?: 'Mutation', deleteTeam: boolean };

export type DeleteTeamEnvironmentMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteTeamEnvironmentMutation = { __typename?: 'Mutation', deleteTeamEnvironment: boolean };

export type DeleteUserMutationVariables = Exact<{ [key: string]: never; }>;


export type DeleteUserMutation = { __typename?: 'Mutation', deleteUser: boolean };

export type DuplicateTeamCollectionMutationVariables = Exact<{
  collectionID: Scalars['String']['input'];
}>;


export type DuplicateTeamCollectionMutation = { __typename?: 'Mutation', duplicateTeamCollection: boolean };

export type ImportFromJsonMutationVariables = Exact<{
  jsonString: Scalars['String']['input'];
  teamID: Scalars['ID']['input'];
}>;


export type ImportFromJsonMutation = { __typename?: 'Mutation', importCollectionsFromJSON: boolean };

export type LeaveTeamMutationVariables = Exact<{
  teamID: Scalars['ID']['input'];
}>;


export type LeaveTeamMutation = { __typename?: 'Mutation', leaveTeam: boolean };

export type MoveRestTeamCollectionMutationVariables = Exact<{
  collectionID: Scalars['ID']['input'];
  parentCollectionID?: InputMaybe<Scalars['ID']['input']>;
}>;


export type MoveRestTeamCollectionMutation = { __typename?: 'Mutation', moveCollection: { __typename?: 'TeamCollection', id: string } };

export type MoveRestTeamRequestMutationVariables = Exact<{
  collectionID: Scalars['ID']['input'];
  requestID: Scalars['ID']['input'];
}>;


export type MoveRestTeamRequestMutation = { __typename?: 'Mutation', moveRequest: { __typename?: 'TeamRequest', id: string } };

export type RemoveTeamMemberMutationVariables = Exact<{
  userUid: Scalars['ID']['input'];
  teamID: Scalars['ID']['input'];
}>;


export type RemoveTeamMemberMutation = { __typename?: 'Mutation', removeTeamMember: boolean };

export type RenameCollectionMutationVariables = Exact<{
  newTitle: Scalars['String']['input'];
  collectionID: Scalars['ID']['input'];
}>;


export type RenameCollectionMutation = { __typename?: 'Mutation', renameCollection: { __typename?: 'TeamCollection', id: string } };

export type RenameTeamMutationVariables = Exact<{
  newName: Scalars['String']['input'];
  teamID: Scalars['ID']['input'];
}>;


export type RenameTeamMutation = { __typename?: 'Mutation', renameTeam: { __typename?: 'Team', id: string, name: string, teamMembers: Array<{ __typename?: 'TeamMember', membershipID: string, role: TeamMemberRole, user: { __typename?: 'User', uid: string } }> } };

export type RevokeTeamInvitationMutationVariables = Exact<{
  inviteID: Scalars['ID']['input'];
}>;


export type RevokeTeamInvitationMutation = { __typename?: 'Mutation', revokeTeamInvitation: boolean };

export type UpdateCollectionOrderMutationVariables = Exact<{
  collectionID: Scalars['ID']['input'];
  destCollID?: InputMaybe<Scalars['ID']['input']>;
}>;


export type UpdateCollectionOrderMutation = { __typename?: 'Mutation', updateCollectionOrder: boolean };

export type UpdateEmbedPropertiesMutationVariables = Exact<{
  code: Scalars['ID']['input'];
  properties: Scalars['String']['input'];
}>;


export type UpdateEmbedPropertiesMutation = { __typename?: 'Mutation', updateEmbedProperties: { __typename?: 'Shortcode', id: string, request: string, properties?: string | null, createdOn: any } };

export type UpdateLookUpRequestOrderMutationVariables = Exact<{
  requestID: Scalars['ID']['input'];
  nextRequestID?: InputMaybe<Scalars['ID']['input']>;
  collectionID: Scalars['ID']['input'];
}>;


export type UpdateLookUpRequestOrderMutation = { __typename?: 'Mutation', updateLookUpRequestOrder: boolean };

export type UpdateRequestMutationVariables = Exact<{
  data: UpdateTeamRequestInput;
  requestID: Scalars['ID']['input'];
}>;


export type UpdateRequestMutation = { __typename?: 'Mutation', updateRequest: { __typename?: 'TeamRequest', id: string, title: string } };

export type UpdateTeamCollectionMutationVariables = Exact<{
  collectionID: Scalars['ID']['input'];
  newTitle?: InputMaybe<Scalars['String']['input']>;
  data?: InputMaybe<Scalars['String']['input']>;
}>;


export type UpdateTeamCollectionMutation = { __typename?: 'Mutation', updateTeamCollection: { __typename?: 'TeamCollection', id: string, title: string, data?: string | null } };

export type UpdateTeamEnvironmentMutationVariables = Exact<{
  variables: Scalars['String']['input'];
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
}>;


export type UpdateTeamEnvironmentMutation = { __typename?: 'Mutation', updateTeamEnvironment: { __typename?: 'TeamEnvironment', variables: string, name: string, id: string } };

export type UpdateTeamMemberRoleMutationVariables = Exact<{
  newRole: TeamMemberRole;
  userUid: Scalars['ID']['input'];
  teamID: Scalars['ID']['input'];
}>;


export type UpdateTeamMemberRoleMutation = { __typename?: 'Mutation', updateTeamMemberRole: { __typename?: 'TeamMember', membershipID: string, role: TeamMemberRole } };

export type ExportAsJsonQueryVariables = Exact<{
  teamID: Scalars['ID']['input'];
}>;


export type ExportAsJsonQuery = { __typename?: 'Query', exportCollectionsToJSON: string };

export type GetCollectionChildrenQueryVariables = Exact<{
  collectionID: Scalars['ID']['input'];
  cursor?: InputMaybe<Scalars['ID']['input']>;
}>;


export type GetCollectionChildrenQuery = { __typename?: 'Query', collection?: { __typename?: 'TeamCollection', children: Array<{ __typename?: 'TeamCollection', id: string, title: string, data?: string | null }> } | null };

export type GetCollectionChildrenIDsQueryVariables = Exact<{
  collectionID: Scalars['ID']['input'];
  cursor?: InputMaybe<Scalars['ID']['input']>;
}>;


export type GetCollectionChildrenIDsQuery = { __typename?: 'Query', collection?: { __typename?: 'TeamCollection', children: Array<{ __typename?: 'TeamCollection', id: string }> } | null };

export type GetCollectionRequestsQueryVariables = Exact<{
  collectionID: Scalars['ID']['input'];
  cursor?: InputMaybe<Scalars['ID']['input']>;
}>;


export type GetCollectionRequestsQuery = { __typename?: 'Query', requestsInCollection: Array<{ __typename?: 'TeamRequest', id: string, title: string, request: string }> };

export type GetCollectionTitleAndDataQueryVariables = Exact<{
  collectionID: Scalars['ID']['input'];
}>;


export type GetCollectionTitleAndDataQuery = { __typename?: 'Query', collection?: { __typename?: 'TeamCollection', title: string, data?: string | null } | null };

export type GetInviteDetailsQueryVariables = Exact<{
  inviteID: Scalars['ID']['input'];
}>;


export type GetInviteDetailsQuery = { __typename?: 'Query', teamInvitation: { __typename?: 'TeamInvitation', id: string, inviteeEmail: string, inviteeRole: TeamMemberRole, team: { __typename?: 'Team', id: string, name: string }, creator: { __typename?: 'User', uid: string, displayName?: string | null, email?: string | null } } };

export type GetUserShortcodesQueryVariables = Exact<{
  cursor?: InputMaybe<Scalars['ID']['input']>;
}>;


export type GetUserShortcodesQuery = { __typename?: 'Query', myShortcodes: Array<{ __typename?: 'Shortcode', id: string, request: string, createdOn: any, properties?: string | null }> };

export type GetMyTeamsQueryVariables = Exact<{
  cursor?: InputMaybe<Scalars['ID']['input']>;
}>;


export type GetMyTeamsQuery = { __typename?: 'Query', myTeams: Array<{ __typename?: 'Team', id: string, name: string, myRole?: TeamMemberRole | null, ownersCount: number, teamMembers: Array<{ __typename?: 'TeamMember', membershipID: string, role: TeamMemberRole, user: { __typename?: 'User', photoURL?: string | null, displayName?: string | null, email?: string | null, uid: string } }> }> };

export type GetSingleCollectionQueryVariables = Exact<{
  collectionID: Scalars['ID']['input'];
}>;


export type GetSingleCollectionQuery = { __typename?: 'Query', collection?: { __typename?: 'TeamCollection', id: string, title: string, data?: string | null, parent?: { __typename?: 'TeamCollection', id: string } | null } | null };

export type GetSingleRequestQueryVariables = Exact<{
  requestID: Scalars['ID']['input'];
}>;


export type GetSingleRequestQuery = { __typename?: 'Query', request?: { __typename?: 'TeamRequest', id: string, collectionID: string, title: string, request: string } | null };

export type GetTeamQueryVariables = Exact<{
  teamID: Scalars['ID']['input'];
}>;


export type GetTeamQuery = { __typename?: 'Query', team?: { __typename?: 'Team', id: string, name: string, teamMembers: Array<{ __typename?: 'TeamMember', membershipID: string, role: TeamMemberRole, user: { __typename?: 'User', uid: string, email?: string | null } }> } | null };

export type GetTeamEnvironmentsQueryVariables = Exact<{
  teamID: Scalars['ID']['input'];
}>;


export type GetTeamEnvironmentsQuery = { __typename?: 'Query', team?: { __typename?: 'Team', teamEnvironments: Array<{ __typename?: 'TeamEnvironment', id: string, name: string, variables: string, teamID: string }> } | null };

export type GetTeamMembersQueryVariables = Exact<{
  teamID: Scalars['ID']['input'];
  cursor?: InputMaybe<Scalars['ID']['input']>;
}>;


export type GetTeamMembersQuery = { __typename?: 'Query', team?: { __typename?: 'Team', members: Array<{ __typename?: 'TeamMember', membershipID: string, role: TeamMemberRole, user: { __typename?: 'User', uid: string, email?: string | null } }> } | null };

export type GetUserInfoQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserInfoQuery = { __typename?: 'Query', me: { __typename?: 'User', uid: string, displayName?: string | null, email?: string | null, photoURL?: string | null } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'User', uid: string, displayName?: string | null, photoURL?: string | null } };

export type ResolveShortcodeQueryVariables = Exact<{
  code: Scalars['ID']['input'];
}>;


export type ResolveShortcodeQuery = { __typename?: 'Query', shortcode?: { __typename?: 'Shortcode', id: string, request: string, properties?: string | null } | null };

export type RootCollectionsOfTeamQueryVariables = Exact<{
  teamID: Scalars['ID']['input'];
  cursor?: InputMaybe<Scalars['ID']['input']>;
}>;


export type RootCollectionsOfTeamQuery = { __typename?: 'Query', rootCollectionsOfTeam: Array<{ __typename?: 'TeamCollection', id: string, title: string, data?: string | null }> };

export type GetPendingInvitesQueryVariables = Exact<{
  teamID: Scalars['ID']['input'];
}>;


export type GetPendingInvitesQuery = { __typename?: 'Query', team?: { __typename?: 'Team', id: string, teamInvitations: Array<{ __typename?: 'TeamInvitation', inviteeRole: TeamMemberRole, inviteeEmail: string, id: string }> } | null };

export type ShortcodeCreatedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type ShortcodeCreatedSubscription = { __typename?: 'Subscription', myShortcodesCreated: { __typename?: 'Shortcode', id: string, request: string, createdOn: any, properties?: string | null } };

export type ShortcodeDeletedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type ShortcodeDeletedSubscription = { __typename?: 'Subscription', myShortcodesRevoked: { __typename?: 'Shortcode', id: string } };

export type ShortcodeUpdatedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type ShortcodeUpdatedSubscription = { __typename?: 'Subscription', myShortcodesUpdated: { __typename?: 'Shortcode', id: string, request: string, createdOn: any, properties?: string | null } };

export type TeamCollectionAddedSubscriptionVariables = Exact<{
  teamID: Scalars['ID']['input'];
}>;


export type TeamCollectionAddedSubscription = { __typename?: 'Subscription', teamCollectionAdded: { __typename?: 'TeamCollection', id: string, title: string, data?: string | null, parent?: { __typename?: 'TeamCollection', id: string } | null } };

export type TeamCollectionMovedSubscriptionVariables = Exact<{
  teamID: Scalars['ID']['input'];
}>;


export type TeamCollectionMovedSubscription = { __typename?: 'Subscription', teamCollectionMoved: { __typename?: 'TeamCollection', id: string, title: string, parent?: { __typename?: 'TeamCollection', id: string } | null } };

export type TeamCollectionOrderUpdatedSubscriptionVariables = Exact<{
  teamID: Scalars['ID']['input'];
}>;


export type TeamCollectionOrderUpdatedSubscription = { __typename?: 'Subscription', collectionOrderUpdated: { __typename?: 'CollectionReorderData', collection: { __typename?: 'TeamCollection', id: string, title: string, parent?: { __typename?: 'TeamCollection', id: string } | null }, nextCollection?: { __typename?: 'TeamCollection', id: string, title: string, parent?: { __typename?: 'TeamCollection', id: string } | null } | null } };

export type TeamCollectionRemovedSubscriptionVariables = Exact<{
  teamID: Scalars['ID']['input'];
}>;


export type TeamCollectionRemovedSubscription = { __typename?: 'Subscription', teamCollectionRemoved: string };

export type TeamCollectionUpdatedSubscriptionVariables = Exact<{
  teamID: Scalars['ID']['input'];
}>;


export type TeamCollectionUpdatedSubscription = { __typename?: 'Subscription', teamCollectionUpdated: { __typename?: 'TeamCollection', id: string, title: string, data?: string | null, parent?: { __typename?: 'TeamCollection', id: string } | null } };

export type TeamEnvironmentCreatedSubscriptionVariables = Exact<{
  teamID: Scalars['ID']['input'];
}>;


export type TeamEnvironmentCreatedSubscription = { __typename?: 'Subscription', teamEnvironmentCreated: { __typename?: 'TeamEnvironment', id: string, teamID: string, name: string, variables: string } };

export type TeamEnvironmentDeletedSubscriptionVariables = Exact<{
  teamID: Scalars['ID']['input'];
}>;


export type TeamEnvironmentDeletedSubscription = { __typename?: 'Subscription', teamEnvironmentDeleted: { __typename?: 'TeamEnvironment', id: string } };

export type TeamEnvironmentUpdatedSubscriptionVariables = Exact<{
  teamID: Scalars['ID']['input'];
}>;


export type TeamEnvironmentUpdatedSubscription = { __typename?: 'Subscription', teamEnvironmentUpdated: { __typename?: 'TeamEnvironment', id: string, teamID: string, name: string, variables: string } };

export type TeamInvitationAddedSubscriptionVariables = Exact<{
  teamID: Scalars['ID']['input'];
}>;


export type TeamInvitationAddedSubscription = { __typename?: 'Subscription', teamInvitationAdded: { __typename?: 'TeamInvitation', id: string } };

export type TeamInvitationRemovedSubscriptionVariables = Exact<{
  teamID: Scalars['ID']['input'];
}>;


export type TeamInvitationRemovedSubscription = { __typename?: 'Subscription', teamInvitationRemoved: string };

export type TeamMemberAddedSubscriptionVariables = Exact<{
  teamID: Scalars['ID']['input'];
}>;


export type TeamMemberAddedSubscription = { __typename?: 'Subscription', teamMemberAdded: { __typename?: 'TeamMember', membershipID: string, role: TeamMemberRole, user: { __typename?: 'User', uid: string, email?: string | null } } };

export type TeamMemberRemovedSubscriptionVariables = Exact<{
  teamID: Scalars['ID']['input'];
}>;


export type TeamMemberRemovedSubscription = { __typename?: 'Subscription', teamMemberRemoved: string };

export type TeamMemberUpdatedSubscriptionVariables = Exact<{
  teamID: Scalars['ID']['input'];
}>;


export type TeamMemberUpdatedSubscription = { __typename?: 'Subscription', teamMemberUpdated: { __typename?: 'TeamMember', membershipID: string, role: TeamMemberRole, user: { __typename?: 'User', uid: string, email?: string | null } } };

export type TeamRequestAddedSubscriptionVariables = Exact<{
  teamID: Scalars['ID']['input'];
}>;


export type TeamRequestAddedSubscription = { __typename?: 'Subscription', teamRequestAdded: { __typename?: 'TeamRequest', id: string, collectionID: string, request: string, title: string } };

export type TeamRequestDeletedSubscriptionVariables = Exact<{
  teamID: Scalars['ID']['input'];
}>;


export type TeamRequestDeletedSubscription = { __typename?: 'Subscription', teamRequestDeleted: string };

export type TeamRequestMovedSubscriptionVariables = Exact<{
  teamID: Scalars['ID']['input'];
}>;


export type TeamRequestMovedSubscription = { __typename?: 'Subscription', requestMoved: { __typename?: 'TeamRequest', id: string, collectionID: string, request: string, title: string } };

export type TeamRequestOrderUpdatedSubscriptionVariables = Exact<{
  teamID: Scalars['ID']['input'];
}>;


export type TeamRequestOrderUpdatedSubscription = { __typename?: 'Subscription', requestOrderUpdated: { __typename?: 'RequestReorderData', request: { __typename?: 'TeamRequest', id: string, collectionID: string, request: string, title: string }, nextRequest?: { __typename?: 'TeamRequest', id: string, collectionID: string, request: string, title: string } | null } };

export type TeamRequestUpdatedSubscriptionVariables = Exact<{
  teamID: Scalars['ID']['input'];
}>;


export type TeamRequestUpdatedSubscription = { __typename?: 'Subscription', teamRequestUpdated: { __typename?: 'TeamRequest', id: string, collectionID: string, request: string, title: string } };


export const AcceptTeamInvitationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AcceptTeamInvitation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"inviteID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"acceptTeamInvitation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"inviteID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"inviteID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"membershipID"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"photoURL"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]}}]} as unknown as DocumentNode<AcceptTeamInvitationMutation, AcceptTeamInvitationMutationVariables>;
export const CreateChildCollectionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateChildCollection"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"childTitle"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"collectionID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createChildCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"childTitle"},"value":{"kind":"Variable","name":{"kind":"Name","value":"childTitle"}}},{"kind":"Argument","name":{"kind":"Name","value":"collectionID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"collectionID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateChildCollectionMutation, CreateChildCollectionMutationVariables>;
export const CreateDuplicateEnvironmentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateDuplicateEnvironment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createDuplicateEnvironment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"teamID"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"variables"}}]}}]}}]} as unknown as DocumentNode<CreateDuplicateEnvironmentMutation, CreateDuplicateEnvironmentMutationVariables>;
export const CreateNewRootCollectionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateNewRootCollection"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"teamID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createRootCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"title"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}},{"kind":"Argument","name":{"kind":"Name","value":"teamID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"teamID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateNewRootCollectionMutation, CreateNewRootCollectionMutationVariables>;
export const CreateRequestInCollectionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateRequestInCollection"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateTeamRequestInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"collectionID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createRequestInCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}},{"kind":"Argument","name":{"kind":"Name","value":"collectionID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"collectionID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"collection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"team"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CreateRequestInCollectionMutation, CreateRequestInCollectionMutationVariables>;
export const CreateShortcodeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateShortcode"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"properties"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createShortcode"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}},{"kind":"Argument","name":{"kind":"Name","value":"properties"},"value":{"kind":"Variable","name":{"kind":"Name","value":"properties"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"request"}},{"kind":"Field","name":{"kind":"Name","value":"createdOn"}},{"kind":"Field","name":{"kind":"Name","value":"properties"}}]}}]}}]} as unknown as DocumentNode<CreateShortcodeMutation, CreateShortcodeMutationVariables>;
export const CreateTeamDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateTeam"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createTeam"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"members"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"membershipID"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"photoURL"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"myRole"}},{"kind":"Field","name":{"kind":"Name","value":"ownersCount"}},{"kind":"Field","name":{"kind":"Name","value":"editorsCount"}},{"kind":"Field","name":{"kind":"Name","value":"viewersCount"}}]}}]}}]} as unknown as DocumentNode<CreateTeamMutation, CreateTeamMutationVariables>;
export const CreateTeamEnvironmentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateTeamEnvironment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"variables"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"teamID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createTeamEnvironment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"variables"},"value":{"kind":"Variable","name":{"kind":"Name","value":"variables"}}},{"kind":"Argument","name":{"kind":"Name","value":"teamID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"teamID"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"variables"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"teamID"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateTeamEnvironmentMutation, CreateTeamEnvironmentMutationVariables>;
export const CreateTeamInvitationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateTeamInvitation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"inviteeEmail"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"inviteeRole"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TeamMemberRole"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"teamID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createTeamInvitation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"inviteeRole"},"value":{"kind":"Variable","name":{"kind":"Name","value":"inviteeRole"}}},{"kind":"Argument","name":{"kind":"Name","value":"inviteeEmail"},"value":{"kind":"Variable","name":{"kind":"Name","value":"inviteeEmail"}}},{"kind":"Argument","name":{"kind":"Name","value":"teamID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"teamID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"teamID"}},{"kind":"Field","name":{"kind":"Name","value":"creatorUid"}},{"kind":"Field","name":{"kind":"Name","value":"inviteeEmail"}},{"kind":"Field","name":{"kind":"Name","value":"inviteeRole"}}]}}]}}]} as unknown as DocumentNode<CreateTeamInvitationMutation, CreateTeamInvitationMutationVariables>;
export const DeleteCollectionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteCollection"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"collectionID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"collectionID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"collectionID"}}}]}]}}]} as unknown as DocumentNode<DeleteCollectionMutation, DeleteCollectionMutationVariables>;
export const DeleteRequestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteRequest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"requestID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteRequest"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"requestID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"requestID"}}}]}]}}]} as unknown as DocumentNode<DeleteRequestMutation, DeleteRequestMutationVariables>;
export const DeleteShortcodeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteShortcode"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"code"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"revokeShortcode"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"code"}}}]}]}}]} as unknown as DocumentNode<DeleteShortcodeMutation, DeleteShortcodeMutationVariables>;
export const DeleteTeamDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteTeam"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"teamID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteTeam"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"teamID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"teamID"}}}]}]}}]} as unknown as DocumentNode<DeleteTeamMutation, DeleteTeamMutationVariables>;
export const DeleteTeamEnvironmentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteTeamEnvironment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteTeamEnvironment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<DeleteTeamEnvironmentMutation, DeleteTeamEnvironmentMutationVariables>;
export const DeleteUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteUser"}}]}}]} as unknown as DocumentNode<DeleteUserMutation, DeleteUserMutationVariables>;
export const DuplicateTeamCollectionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DuplicateTeamCollection"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"collectionID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"duplicateTeamCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"collectionID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"collectionID"}}}]}]}}]} as unknown as DocumentNode<DuplicateTeamCollectionMutation, DuplicateTeamCollectionMutationVariables>;
export const ImportFromJsonDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"importFromJSON"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"jsonString"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"teamID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"importCollectionsFromJSON"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"jsonString"},"value":{"kind":"Variable","name":{"kind":"Name","value":"jsonString"}}},{"kind":"Argument","name":{"kind":"Name","value":"teamID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"teamID"}}}]}]}}]} as unknown as DocumentNode<ImportFromJsonMutation, ImportFromJsonMutationVariables>;
export const LeaveTeamDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LeaveTeam"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"teamID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"leaveTeam"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"teamID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"teamID"}}}]}]}}]} as unknown as DocumentNode<LeaveTeamMutation, LeaveTeamMutationVariables>;
export const MoveRestTeamCollectionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"MoveRESTTeamCollection"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"collectionID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"parentCollectionID"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"moveCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"collectionID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"collectionID"}}},{"kind":"Argument","name":{"kind":"Name","value":"parentCollectionID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"parentCollectionID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<MoveRestTeamCollectionMutation, MoveRestTeamCollectionMutationVariables>;
export const MoveRestTeamRequestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"MoveRESTTeamRequest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"collectionID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"requestID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"moveRequest"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"destCollID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"collectionID"}}},{"kind":"Argument","name":{"kind":"Name","value":"requestID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"requestID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<MoveRestTeamRequestMutation, MoveRestTeamRequestMutationVariables>;
export const RemoveTeamMemberDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveTeamMember"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userUid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"teamID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeTeamMember"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userUid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userUid"}}},{"kind":"Argument","name":{"kind":"Name","value":"teamID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"teamID"}}}]}]}}]} as unknown as DocumentNode<RemoveTeamMemberMutation, RemoveTeamMemberMutationVariables>;
export const RenameCollectionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RenameCollection"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"newTitle"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"collectionID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"renameCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"newTitle"},"value":{"kind":"Variable","name":{"kind":"Name","value":"newTitle"}}},{"kind":"Argument","name":{"kind":"Name","value":"collectionID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"collectionID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<RenameCollectionMutation, RenameCollectionMutationVariables>;
export const RenameTeamDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RenameTeam"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"newName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"teamID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"renameTeam"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"newName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"newName"}}},{"kind":"Argument","name":{"kind":"Name","value":"teamID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"teamID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"teamMembers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"membershipID"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"role"}}]}}]}}]}}]} as unknown as DocumentNode<RenameTeamMutation, RenameTeamMutationVariables>;
export const RevokeTeamInvitationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RevokeTeamInvitation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"inviteID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"revokeTeamInvitation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"inviteID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"inviteID"}}}]}]}}]} as unknown as DocumentNode<RevokeTeamInvitationMutation, RevokeTeamInvitationMutationVariables>;
export const UpdateCollectionOrderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateCollectionOrder"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"collectionID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"destCollID"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateCollectionOrder"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"collectionID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"collectionID"}}},{"kind":"Argument","name":{"kind":"Name","value":"destCollID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"destCollID"}}}]}]}}]} as unknown as DocumentNode<UpdateCollectionOrderMutation, UpdateCollectionOrderMutationVariables>;
export const UpdateEmbedPropertiesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateEmbedProperties"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"code"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"properties"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateEmbedProperties"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"code"}}},{"kind":"Argument","name":{"kind":"Name","value":"properties"},"value":{"kind":"Variable","name":{"kind":"Name","value":"properties"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"request"}},{"kind":"Field","name":{"kind":"Name","value":"properties"}},{"kind":"Field","name":{"kind":"Name","value":"createdOn"}}]}}]}}]} as unknown as DocumentNode<UpdateEmbedPropertiesMutation, UpdateEmbedPropertiesMutationVariables>;
export const UpdateLookUpRequestOrderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateLookUpRequestOrder"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"requestID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"nextRequestID"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"collectionID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateLookUpRequestOrder"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"requestID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"requestID"}}},{"kind":"Argument","name":{"kind":"Name","value":"nextRequestID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"nextRequestID"}}},{"kind":"Argument","name":{"kind":"Name","value":"collectionID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"collectionID"}}}]}]}}]} as unknown as DocumentNode<UpdateLookUpRequestOrderMutation, UpdateLookUpRequestOrderMutationVariables>;
export const UpdateRequestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateRequest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateTeamRequestInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"requestID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateRequest"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}},{"kind":"Argument","name":{"kind":"Name","value":"requestID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"requestID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<UpdateRequestMutation, UpdateRequestMutationVariables>;
export const UpdateTeamCollectionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateTeamCollection"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"collectionID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"newTitle"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateTeamCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"collectionID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"collectionID"}}},{"kind":"Argument","name":{"kind":"Name","value":"newTitle"},"value":{"kind":"Variable","name":{"kind":"Name","value":"newTitle"}}},{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"data"}}]}}]}}]} as unknown as DocumentNode<UpdateTeamCollectionMutation, UpdateTeamCollectionMutationVariables>;
export const UpdateTeamEnvironmentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateTeamEnvironment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"variables"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateTeamEnvironment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"variables"},"value":{"kind":"Variable","name":{"kind":"Name","value":"variables"}}},{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"variables"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdateTeamEnvironmentMutation, UpdateTeamEnvironmentMutationVariables>;
export const UpdateTeamMemberRoleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateTeamMemberRole"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"newRole"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TeamMemberRole"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userUid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"teamID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateTeamMemberRole"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"newRole"},"value":{"kind":"Variable","name":{"kind":"Name","value":"newRole"}}},{"kind":"Argument","name":{"kind":"Name","value":"userUid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userUid"}}},{"kind":"Argument","name":{"kind":"Name","value":"teamID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"teamID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"membershipID"}},{"kind":"Field","name":{"kind":"Name","value":"role"}}]}}]}}]} as unknown as DocumentNode<UpdateTeamMemberRoleMutation, UpdateTeamMemberRoleMutationVariables>;
export const ExportAsJsonDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ExportAsJSON"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"teamID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"exportCollectionsToJSON"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"teamID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"teamID"}}}]}]}}]} as unknown as DocumentNode<ExportAsJsonQuery, ExportAsJsonQueryVariables>;
export const GetCollectionChildrenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCollectionChildren"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"collectionID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"collection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"collectionID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"collectionID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"children"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"cursor"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"data"}}]}}]}}]}}]} as unknown as DocumentNode<GetCollectionChildrenQuery, GetCollectionChildrenQueryVariables>;
export const GetCollectionChildrenIDsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCollectionChildrenIDs"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"collectionID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"collection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"collectionID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"collectionID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"children"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"cursor"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<GetCollectionChildrenIDsQuery, GetCollectionChildrenIDsQueryVariables>;
export const GetCollectionRequestsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCollectionRequests"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"collectionID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"requestsInCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"collectionID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"collectionID"}}},{"kind":"Argument","name":{"kind":"Name","value":"cursor"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"request"}}]}}]}}]} as unknown as DocumentNode<GetCollectionRequestsQuery, GetCollectionRequestsQueryVariables>;
export const GetCollectionTitleAndDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCollectionTitleAndData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"collectionID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"collection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"collectionID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"collectionID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"data"}}]}}]}}]} as unknown as DocumentNode<GetCollectionTitleAndDataQuery, GetCollectionTitleAndDataQueryVariables>;
export const GetInviteDetailsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetInviteDetails"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"inviteID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teamInvitation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"inviteID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"inviteID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"inviteeEmail"}},{"kind":"Field","name":{"kind":"Name","value":"inviteeRole"}},{"kind":"Field","name":{"kind":"Name","value":"team"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"creator"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]}}]} as unknown as DocumentNode<GetInviteDetailsQuery, GetInviteDetailsQueryVariables>;
export const GetUserShortcodesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserShortcodes"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"myShortcodes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"cursor"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"request"}},{"kind":"Field","name":{"kind":"Name","value":"createdOn"}},{"kind":"Field","name":{"kind":"Name","value":"properties"}}]}}]}}]} as unknown as DocumentNode<GetUserShortcodesQuery, GetUserShortcodesQueryVariables>;
export const GetMyTeamsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMyTeams"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"myTeams"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"cursor"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"myRole"}},{"kind":"Field","name":{"kind":"Name","value":"ownersCount"}},{"kind":"Field","name":{"kind":"Name","value":"teamMembers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"membershipID"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"photoURL"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"role"}}]}}]}}]}}]} as unknown as DocumentNode<GetMyTeamsQuery, GetMyTeamsQueryVariables>;
export const GetSingleCollectionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSingleCollection"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"collectionID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"collection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"collectionID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"collectionID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"data"}},{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<GetSingleCollectionQuery, GetSingleCollectionQueryVariables>;
export const GetSingleRequestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSingleRequest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"requestID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"request"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"requestID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"requestID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"collectionID"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"request"}}]}}]}}]} as unknown as DocumentNode<GetSingleRequestQuery, GetSingleRequestQueryVariables>;
export const GetTeamDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTeam"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"teamID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"team"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"teamID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"teamID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"teamMembers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"membershipID"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"Field","name":{"kind":"Name","value":"role"}}]}}]}}]}}]} as unknown as DocumentNode<GetTeamQuery, GetTeamQueryVariables>;
export const GetTeamEnvironmentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTeamEnvironments"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"teamID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"team"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"teamID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"teamID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teamEnvironments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"variables"}},{"kind":"Field","name":{"kind":"Name","value":"teamID"}}]}}]}}]}}]} as unknown as DocumentNode<GetTeamEnvironmentsQuery, GetTeamEnvironmentsQueryVariables>;
export const GetTeamMembersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTeamMembers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"teamID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"team"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"teamID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"teamID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"members"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"cursor"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"membershipID"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"Field","name":{"kind":"Name","value":"role"}}]}}]}}]}}]} as unknown as DocumentNode<GetTeamMembersQuery, GetTeamMembersQueryVariables>;
export const GetUserInfoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"photoURL"}}]}}]}}]} as unknown as DocumentNode<GetUserInfoQuery, GetUserInfoQueryVariables>;
export const MeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"photoURL"}}]}}]}}]} as unknown as DocumentNode<MeQuery, MeQueryVariables>;
export const ResolveShortcodeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ResolveShortcode"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"code"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"shortcode"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"code"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"request"}},{"kind":"Field","name":{"kind":"Name","value":"properties"}}]}}]}}]} as unknown as DocumentNode<ResolveShortcodeQuery, ResolveShortcodeQueryVariables>;
export const RootCollectionsOfTeamDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"RootCollectionsOfTeam"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"teamID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rootCollectionsOfTeam"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"teamID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"teamID"}}},{"kind":"Argument","name":{"kind":"Name","value":"cursor"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"data"}}]}}]}}]} as unknown as DocumentNode<RootCollectionsOfTeamQuery, RootCollectionsOfTeamQueryVariables>;
export const GetPendingInvitesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPendingInvites"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"teamID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"team"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"teamID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"teamID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"teamInvitations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"inviteeRole"}},{"kind":"Field","name":{"kind":"Name","value":"inviteeEmail"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<GetPendingInvitesQuery, GetPendingInvitesQueryVariables>;
export const ShortcodeCreatedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"ShortcodeCreated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"myShortcodesCreated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"request"}},{"kind":"Field","name":{"kind":"Name","value":"createdOn"}},{"kind":"Field","name":{"kind":"Name","value":"properties"}}]}}]}}]} as unknown as DocumentNode<ShortcodeCreatedSubscription, ShortcodeCreatedSubscriptionVariables>;
export const ShortcodeDeletedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"ShortcodeDeleted"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"myShortcodesRevoked"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<ShortcodeDeletedSubscription, ShortcodeDeletedSubscriptionVariables>;
export const ShortcodeUpdatedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"ShortcodeUpdated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"myShortcodesUpdated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"request"}},{"kind":"Field","name":{"kind":"Name","value":"createdOn"}},{"kind":"Field","name":{"kind":"Name","value":"properties"}}]}}]}}]} as unknown as DocumentNode<ShortcodeUpdatedSubscription, ShortcodeUpdatedSubscriptionVariables>;
export const TeamCollectionAddedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"TeamCollectionAdded"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"teamID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teamCollectionAdded"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"teamID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"teamID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"data"}},{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<TeamCollectionAddedSubscription, TeamCollectionAddedSubscriptionVariables>;
export const TeamCollectionMovedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"TeamCollectionMoved"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"teamID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teamCollectionMoved"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"teamID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"teamID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<TeamCollectionMovedSubscription, TeamCollectionMovedSubscriptionVariables>;
export const TeamCollectionOrderUpdatedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"TeamCollectionOrderUpdated"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"teamID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"collectionOrderUpdated"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"teamID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"teamID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"collection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"nextCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]} as unknown as DocumentNode<TeamCollectionOrderUpdatedSubscription, TeamCollectionOrderUpdatedSubscriptionVariables>;
export const TeamCollectionRemovedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"TeamCollectionRemoved"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"teamID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teamCollectionRemoved"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"teamID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"teamID"}}}]}]}}]} as unknown as DocumentNode<TeamCollectionRemovedSubscription, TeamCollectionRemovedSubscriptionVariables>;
export const TeamCollectionUpdatedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"TeamCollectionUpdated"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"teamID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teamCollectionUpdated"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"teamID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"teamID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"data"}},{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<TeamCollectionUpdatedSubscription, TeamCollectionUpdatedSubscriptionVariables>;
export const TeamEnvironmentCreatedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"TeamEnvironmentCreated"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"teamID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teamEnvironmentCreated"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"teamID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"teamID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"teamID"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"variables"}}]}}]}}]} as unknown as DocumentNode<TeamEnvironmentCreatedSubscription, TeamEnvironmentCreatedSubscriptionVariables>;
export const TeamEnvironmentDeletedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"TeamEnvironmentDeleted"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"teamID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teamEnvironmentDeleted"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"teamID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"teamID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<TeamEnvironmentDeletedSubscription, TeamEnvironmentDeletedSubscriptionVariables>;
export const TeamEnvironmentUpdatedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"TeamEnvironmentUpdated"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"teamID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teamEnvironmentUpdated"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"teamID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"teamID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"teamID"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"variables"}}]}}]}}]} as unknown as DocumentNode<TeamEnvironmentUpdatedSubscription, TeamEnvironmentUpdatedSubscriptionVariables>;
export const TeamInvitationAddedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"TeamInvitationAdded"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"teamID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teamInvitationAdded"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"teamID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"teamID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<TeamInvitationAddedSubscription, TeamInvitationAddedSubscriptionVariables>;
export const TeamInvitationRemovedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"TeamInvitationRemoved"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"teamID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teamInvitationRemoved"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"teamID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"teamID"}}}]}]}}]} as unknown as DocumentNode<TeamInvitationRemovedSubscription, TeamInvitationRemovedSubscriptionVariables>;
export const TeamMemberAddedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"TeamMemberAdded"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"teamID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teamMemberAdded"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"teamID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"teamID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"membershipID"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"Field","name":{"kind":"Name","value":"role"}}]}}]}}]} as unknown as DocumentNode<TeamMemberAddedSubscription, TeamMemberAddedSubscriptionVariables>;
export const TeamMemberRemovedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"TeamMemberRemoved"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"teamID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teamMemberRemoved"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"teamID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"teamID"}}}]}]}}]} as unknown as DocumentNode<TeamMemberRemovedSubscription, TeamMemberRemovedSubscriptionVariables>;
export const TeamMemberUpdatedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"TeamMemberUpdated"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"teamID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teamMemberUpdated"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"teamID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"teamID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"membershipID"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"Field","name":{"kind":"Name","value":"role"}}]}}]}}]} as unknown as DocumentNode<TeamMemberUpdatedSubscription, TeamMemberUpdatedSubscriptionVariables>;
export const TeamRequestAddedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"TeamRequestAdded"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"teamID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teamRequestAdded"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"teamID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"teamID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"collectionID"}},{"kind":"Field","name":{"kind":"Name","value":"request"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<TeamRequestAddedSubscription, TeamRequestAddedSubscriptionVariables>;
export const TeamRequestDeletedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"TeamRequestDeleted"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"teamID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teamRequestDeleted"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"teamID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"teamID"}}}]}]}}]} as unknown as DocumentNode<TeamRequestDeletedSubscription, TeamRequestDeletedSubscriptionVariables>;
export const TeamRequestMovedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"TeamRequestMoved"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"teamID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"requestMoved"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"teamID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"teamID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"collectionID"}},{"kind":"Field","name":{"kind":"Name","value":"request"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<TeamRequestMovedSubscription, TeamRequestMovedSubscriptionVariables>;
export const TeamRequestOrderUpdatedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"TeamRequestOrderUpdated"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"teamID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"requestOrderUpdated"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"teamID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"teamID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"request"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"collectionID"}},{"kind":"Field","name":{"kind":"Name","value":"request"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"nextRequest"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"collectionID"}},{"kind":"Field","name":{"kind":"Name","value":"request"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]} as unknown as DocumentNode<TeamRequestOrderUpdatedSubscription, TeamRequestOrderUpdatedSubscriptionVariables>;
export const TeamRequestUpdatedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"TeamRequestUpdated"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"teamID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teamRequestUpdated"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"teamID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"teamID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"collectionID"}},{"kind":"Field","name":{"kind":"Name","value":"request"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<TeamRequestUpdatedSubscription, TeamRequestUpdatedSubscriptionVariables>;
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
  Query?: {
    admin?: GraphCacheUpdateResolver<{ admin: WithTypename<Admin> }, Record<string, never>>,
    allowedAuthProviders?: GraphCacheUpdateResolver<{ allowedAuthProviders: Array<Scalars['String']> }, Record<string, never>>,
    collection?: GraphCacheUpdateResolver<{ collection: Maybe<WithTypename<TeamCollection>> }, QueryCollectionArgs>,
    exportCollectionToJSON?: GraphCacheUpdateResolver<{ exportCollectionToJSON: Scalars['String'] }, QueryExportCollectionToJsonArgs>,
    exportCollectionsToJSON?: GraphCacheUpdateResolver<{ exportCollectionsToJSON: Scalars['String'] }, QueryExportCollectionsToJsonArgs>,
    exportUserCollectionToJSON?: GraphCacheUpdateResolver<{ exportUserCollectionToJSON: Scalars['String'] }, QueryExportUserCollectionToJsonArgs>,
    exportUserCollectionsToJSON?: GraphCacheUpdateResolver<{ exportUserCollectionsToJSON: WithTypename<UserCollectionExportJsonData> }, QueryExportUserCollectionsToJsonArgs>,
    infra?: GraphCacheUpdateResolver<{ infra: WithTypename<Infra> }, Record<string, never>>,
    infraConfigs?: GraphCacheUpdateResolver<{ infraConfigs: Array<WithTypename<InfraConfig>> }, QueryInfraConfigsArgs>,
    infraTokens?: GraphCacheUpdateResolver<{ infraTokens: Array<WithTypename<InfraToken>> }, QueryInfraTokensArgs>,
    isSMTPEnabled?: GraphCacheUpdateResolver<{ isSMTPEnabled: Scalars['Boolean'] }, Record<string, never>>,
    me?: GraphCacheUpdateResolver<{ me: WithTypename<User> }, Record<string, never>>,
    myShortcodes?: GraphCacheUpdateResolver<{ myShortcodes: Array<WithTypename<Shortcode>> }, QueryMyShortcodesArgs>,
    myTeams?: GraphCacheUpdateResolver<{ myTeams: Array<WithTypename<Team>> }, QueryMyTeamsArgs>,
    request?: GraphCacheUpdateResolver<{ request: Maybe<WithTypename<TeamRequest>> }, QueryRequestArgs>,
    requestsInCollection?: GraphCacheUpdateResolver<{ requestsInCollection: Array<WithTypename<TeamRequest>> }, QueryRequestsInCollectionArgs>,
    rootCollectionsOfTeam?: GraphCacheUpdateResolver<{ rootCollectionsOfTeam: Array<WithTypename<TeamCollection>> }, QueryRootCollectionsOfTeamArgs>,
    rootGQLUserCollections?: GraphCacheUpdateResolver<{ rootGQLUserCollections: Array<WithTypename<UserCollection>> }, QueryRootGqlUserCollectionsArgs>,
    rootRESTUserCollections?: GraphCacheUpdateResolver<{ rootRESTUserCollections: Array<WithTypename<UserCollection>> }, QueryRootRestUserCollectionsArgs>,
    searchForRequest?: GraphCacheUpdateResolver<{ searchForRequest: Array<WithTypename<TeamRequest>> }, QuerySearchForRequestArgs>,
    shortcode?: GraphCacheUpdateResolver<{ shortcode: Maybe<WithTypename<Shortcode>> }, QueryShortcodeArgs>,
    team?: GraphCacheUpdateResolver<{ team: Maybe<WithTypename<Team>> }, QueryTeamArgs>,
    teamInvitation?: GraphCacheUpdateResolver<{ teamInvitation: WithTypename<TeamInvitation> }, QueryTeamInvitationArgs>,
    userCollection?: GraphCacheUpdateResolver<{ userCollection: WithTypename<UserCollection> }, QueryUserCollectionArgs>,
    userGQLRequests?: GraphCacheUpdateResolver<{ userGQLRequests: Array<WithTypename<UserRequest>> }, QueryUserGqlRequestsArgs>,
    userRESTRequests?: GraphCacheUpdateResolver<{ userRESTRequests: Array<WithTypename<UserRequest>> }, QueryUserRestRequestsArgs>,
    userRequest?: GraphCacheUpdateResolver<{ userRequest: WithTypename<UserRequest> }, QueryUserRequestArgs>
  },
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
  Admin?: {
    createdOn?: GraphCacheUpdateResolver<Maybe<WithTypename<Admin>>, Record<string, never>>,
    displayName?: GraphCacheUpdateResolver<Maybe<WithTypename<Admin>>, Record<string, never>>,
    email?: GraphCacheUpdateResolver<Maybe<WithTypename<Admin>>, Record<string, never>>,
    lastActiveOn?: GraphCacheUpdateResolver<Maybe<WithTypename<Admin>>, Record<string, never>>,
    lastLoggedOn?: GraphCacheUpdateResolver<Maybe<WithTypename<Admin>>, Record<string, never>>,
    photoURL?: GraphCacheUpdateResolver<Maybe<WithTypename<Admin>>, Record<string, never>>,
    uid?: GraphCacheUpdateResolver<Maybe<WithTypename<Admin>>, Record<string, never>>
  },
  CollectionReorderData?: {
    collection?: GraphCacheUpdateResolver<Maybe<WithTypename<CollectionReorderData>>, Record<string, never>>,
    nextCollection?: GraphCacheUpdateResolver<Maybe<WithTypename<CollectionReorderData>>, Record<string, never>>
  },
  CreateInfraTokenResponse?: {
    info?: GraphCacheUpdateResolver<Maybe<WithTypename<CreateInfraTokenResponse>>, Record<string, never>>,
    token?: GraphCacheUpdateResolver<Maybe<WithTypename<CreateInfraTokenResponse>>, Record<string, never>>
  },
  Infra?: {
    admins?: GraphCacheUpdateResolver<Maybe<WithTypename<Infra>>, Record<string, never>>,
    allShortcodes?: GraphCacheUpdateResolver<Maybe<WithTypename<Infra>>, InfraAllShortcodesArgs>,
    allTeams?: GraphCacheUpdateResolver<Maybe<WithTypename<Infra>>, InfraAllTeamsArgs>,
    allUsers?: GraphCacheUpdateResolver<Maybe<WithTypename<Infra>>, InfraAllUsersArgs>,
    allUsersV2?: GraphCacheUpdateResolver<Maybe<WithTypename<Infra>>, InfraAllUsersV2Args>,
    collectionCountInTeam?: GraphCacheUpdateResolver<Maybe<WithTypename<Infra>>, InfraCollectionCountInTeamArgs>,
    environmentCountInTeam?: GraphCacheUpdateResolver<Maybe<WithTypename<Infra>>, InfraEnvironmentCountInTeamArgs>,
    executedBy?: GraphCacheUpdateResolver<Maybe<WithTypename<Infra>>, Record<string, never>>,
    invitedUsers?: GraphCacheUpdateResolver<Maybe<WithTypename<Infra>>, InfraInvitedUsersArgs>,
    membersCountInTeam?: GraphCacheUpdateResolver<Maybe<WithTypename<Infra>>, InfraMembersCountInTeamArgs>,
    pendingInvitationCountInTeam?: GraphCacheUpdateResolver<Maybe<WithTypename<Infra>>, InfraPendingInvitationCountInTeamArgs>,
    requestCountInTeam?: GraphCacheUpdateResolver<Maybe<WithTypename<Infra>>, InfraRequestCountInTeamArgs>,
    teamCollectionsCount?: GraphCacheUpdateResolver<Maybe<WithTypename<Infra>>, Record<string, never>>,
    teamInfo?: GraphCacheUpdateResolver<Maybe<WithTypename<Infra>>, InfraTeamInfoArgs>,
    teamRequestsCount?: GraphCacheUpdateResolver<Maybe<WithTypename<Infra>>, Record<string, never>>,
    teamsCount?: GraphCacheUpdateResolver<Maybe<WithTypename<Infra>>, Record<string, never>>,
    userInfo?: GraphCacheUpdateResolver<Maybe<WithTypename<Infra>>, InfraUserInfoArgs>,
    usersCount?: GraphCacheUpdateResolver<Maybe<WithTypename<Infra>>, Record<string, never>>
  },
  InfraConfig?: {
    name?: GraphCacheUpdateResolver<Maybe<WithTypename<InfraConfig>>, Record<string, never>>,
    value?: GraphCacheUpdateResolver<Maybe<WithTypename<InfraConfig>>, Record<string, never>>
  },
  InfraToken?: {
    createdOn?: GraphCacheUpdateResolver<Maybe<WithTypename<InfraToken>>, Record<string, never>>,
    expiresOn?: GraphCacheUpdateResolver<Maybe<WithTypename<InfraToken>>, Record<string, never>>,
    id?: GraphCacheUpdateResolver<Maybe<WithTypename<InfraToken>>, Record<string, never>>,
    label?: GraphCacheUpdateResolver<Maybe<WithTypename<InfraToken>>, Record<string, never>>,
    lastUsedOn?: GraphCacheUpdateResolver<Maybe<WithTypename<InfraToken>>, Record<string, never>>
  },
  InvitedUser?: {
    adminEmail?: GraphCacheUpdateResolver<Maybe<WithTypename<InvitedUser>>, Record<string, never>>,
    adminUid?: GraphCacheUpdateResolver<Maybe<WithTypename<InvitedUser>>, Record<string, never>>,
    invitedOn?: GraphCacheUpdateResolver<Maybe<WithTypename<InvitedUser>>, Record<string, never>>,
    inviteeEmail?: GraphCacheUpdateResolver<Maybe<WithTypename<InvitedUser>>, Record<string, never>>
  },
  RequestReorderData?: {
    nextRequest?: GraphCacheUpdateResolver<Maybe<WithTypename<RequestReorderData>>, Record<string, never>>,
    request?: GraphCacheUpdateResolver<Maybe<WithTypename<RequestReorderData>>, Record<string, never>>
  },
  Shortcode?: {
    createdOn?: GraphCacheUpdateResolver<Maybe<WithTypename<Shortcode>>, Record<string, never>>,
    id?: GraphCacheUpdateResolver<Maybe<WithTypename<Shortcode>>, Record<string, never>>,
    properties?: GraphCacheUpdateResolver<Maybe<WithTypename<Shortcode>>, Record<string, never>>,
    request?: GraphCacheUpdateResolver<Maybe<WithTypename<Shortcode>>, Record<string, never>>
  },
  ShortcodeCreator?: {
    email?: GraphCacheUpdateResolver<Maybe<WithTypename<ShortcodeCreator>>, Record<string, never>>,
    uid?: GraphCacheUpdateResolver<Maybe<WithTypename<ShortcodeCreator>>, Record<string, never>>
  },
  ShortcodeWithUserEmail?: {
    createdOn?: GraphCacheUpdateResolver<Maybe<WithTypename<ShortcodeWithUserEmail>>, Record<string, never>>,
    creator?: GraphCacheUpdateResolver<Maybe<WithTypename<ShortcodeWithUserEmail>>, Record<string, never>>,
    id?: GraphCacheUpdateResolver<Maybe<WithTypename<ShortcodeWithUserEmail>>, Record<string, never>>,
    properties?: GraphCacheUpdateResolver<Maybe<WithTypename<ShortcodeWithUserEmail>>, Record<string, never>>,
    request?: GraphCacheUpdateResolver<Maybe<WithTypename<ShortcodeWithUserEmail>>, Record<string, never>>
  },
  Team?: {
    editorsCount?: GraphCacheUpdateResolver<Maybe<WithTypename<Team>>, Record<string, never>>,
    id?: GraphCacheUpdateResolver<Maybe<WithTypename<Team>>, Record<string, never>>,
    members?: GraphCacheUpdateResolver<Maybe<WithTypename<Team>>, TeamMembersArgs>,
    myRole?: GraphCacheUpdateResolver<Maybe<WithTypename<Team>>, Record<string, never>>,
    name?: GraphCacheUpdateResolver<Maybe<WithTypename<Team>>, Record<string, never>>,
    ownersCount?: GraphCacheUpdateResolver<Maybe<WithTypename<Team>>, Record<string, never>>,
    teamEnvironments?: GraphCacheUpdateResolver<Maybe<WithTypename<Team>>, Record<string, never>>,
    teamInvitations?: GraphCacheUpdateResolver<Maybe<WithTypename<Team>>, Record<string, never>>,
    teamMembers?: GraphCacheUpdateResolver<Maybe<WithTypename<Team>>, Record<string, never>>,
    viewersCount?: GraphCacheUpdateResolver<Maybe<WithTypename<Team>>, Record<string, never>>
  },
  TeamCollection?: {
    children?: GraphCacheUpdateResolver<Maybe<WithTypename<TeamCollection>>, TeamCollectionChildrenArgs>,
    data?: GraphCacheUpdateResolver<Maybe<WithTypename<TeamCollection>>, Record<string, never>>,
    id?: GraphCacheUpdateResolver<Maybe<WithTypename<TeamCollection>>, Record<string, never>>,
    parent?: GraphCacheUpdateResolver<Maybe<WithTypename<TeamCollection>>, Record<string, never>>,
    parentID?: GraphCacheUpdateResolver<Maybe<WithTypename<TeamCollection>>, Record<string, never>>,
    team?: GraphCacheUpdateResolver<Maybe<WithTypename<TeamCollection>>, Record<string, never>>,
    title?: GraphCacheUpdateResolver<Maybe<WithTypename<TeamCollection>>, Record<string, never>>
  },
  TeamEnvironment?: {
    id?: GraphCacheUpdateResolver<Maybe<WithTypename<TeamEnvironment>>, Record<string, never>>,
    name?: GraphCacheUpdateResolver<Maybe<WithTypename<TeamEnvironment>>, Record<string, never>>,
    teamID?: GraphCacheUpdateResolver<Maybe<WithTypename<TeamEnvironment>>, Record<string, never>>,
    variables?: GraphCacheUpdateResolver<Maybe<WithTypename<TeamEnvironment>>, Record<string, never>>
  },
  TeamInvitation?: {
    creator?: GraphCacheUpdateResolver<Maybe<WithTypename<TeamInvitation>>, Record<string, never>>,
    creatorUid?: GraphCacheUpdateResolver<Maybe<WithTypename<TeamInvitation>>, Record<string, never>>,
    id?: GraphCacheUpdateResolver<Maybe<WithTypename<TeamInvitation>>, Record<string, never>>,
    inviteeEmail?: GraphCacheUpdateResolver<Maybe<WithTypename<TeamInvitation>>, Record<string, never>>,
    inviteeRole?: GraphCacheUpdateResolver<Maybe<WithTypename<TeamInvitation>>, Record<string, never>>,
    team?: GraphCacheUpdateResolver<Maybe<WithTypename<TeamInvitation>>, Record<string, never>>,
    teamID?: GraphCacheUpdateResolver<Maybe<WithTypename<TeamInvitation>>, Record<string, never>>
  },
  TeamMember?: {
    membershipID?: GraphCacheUpdateResolver<Maybe<WithTypename<TeamMember>>, Record<string, never>>,
    role?: GraphCacheUpdateResolver<Maybe<WithTypename<TeamMember>>, Record<string, never>>,
    user?: GraphCacheUpdateResolver<Maybe<WithTypename<TeamMember>>, Record<string, never>>
  },
  TeamRequest?: {
    collection?: GraphCacheUpdateResolver<Maybe<WithTypename<TeamRequest>>, Record<string, never>>,
    collectionID?: GraphCacheUpdateResolver<Maybe<WithTypename<TeamRequest>>, Record<string, never>>,
    id?: GraphCacheUpdateResolver<Maybe<WithTypename<TeamRequest>>, Record<string, never>>,
    request?: GraphCacheUpdateResolver<Maybe<WithTypename<TeamRequest>>, Record<string, never>>,
    team?: GraphCacheUpdateResolver<Maybe<WithTypename<TeamRequest>>, Record<string, never>>,
    teamID?: GraphCacheUpdateResolver<Maybe<WithTypename<TeamRequest>>, Record<string, never>>,
    title?: GraphCacheUpdateResolver<Maybe<WithTypename<TeamRequest>>, Record<string, never>>
  },
  User?: {
    GQLHistory?: GraphCacheUpdateResolver<Maybe<WithTypename<User>>, UserGqlHistoryArgs>,
    RESTHistory?: GraphCacheUpdateResolver<Maybe<WithTypename<User>>, UserRestHistoryArgs>,
    createdOn?: GraphCacheUpdateResolver<Maybe<WithTypename<User>>, Record<string, never>>,
    currentGQLSession?: GraphCacheUpdateResolver<Maybe<WithTypename<User>>, Record<string, never>>,
    currentRESTSession?: GraphCacheUpdateResolver<Maybe<WithTypename<User>>, Record<string, never>>,
    displayName?: GraphCacheUpdateResolver<Maybe<WithTypename<User>>, Record<string, never>>,
    email?: GraphCacheUpdateResolver<Maybe<WithTypename<User>>, Record<string, never>>,
    environments?: GraphCacheUpdateResolver<Maybe<WithTypename<User>>, Record<string, never>>,
    globalEnvironments?: GraphCacheUpdateResolver<Maybe<WithTypename<User>>, Record<string, never>>,
    isAdmin?: GraphCacheUpdateResolver<Maybe<WithTypename<User>>, Record<string, never>>,
    lastActiveOn?: GraphCacheUpdateResolver<Maybe<WithTypename<User>>, Record<string, never>>,
    lastLoggedOn?: GraphCacheUpdateResolver<Maybe<WithTypename<User>>, Record<string, never>>,
    photoURL?: GraphCacheUpdateResolver<Maybe<WithTypename<User>>, Record<string, never>>,
    settings?: GraphCacheUpdateResolver<Maybe<WithTypename<User>>, Record<string, never>>,
    uid?: GraphCacheUpdateResolver<Maybe<WithTypename<User>>, Record<string, never>>
  },
  UserCollection?: {
    childrenGQL?: GraphCacheUpdateResolver<Maybe<WithTypename<UserCollection>>, UserCollectionChildrenGqlArgs>,
    childrenREST?: GraphCacheUpdateResolver<Maybe<WithTypename<UserCollection>>, UserCollectionChildrenRestArgs>,
    data?: GraphCacheUpdateResolver<Maybe<WithTypename<UserCollection>>, Record<string, never>>,
    id?: GraphCacheUpdateResolver<Maybe<WithTypename<UserCollection>>, Record<string, never>>,
    parent?: GraphCacheUpdateResolver<Maybe<WithTypename<UserCollection>>, Record<string, never>>,
    requests?: GraphCacheUpdateResolver<Maybe<WithTypename<UserCollection>>, UserCollectionRequestsArgs>,
    title?: GraphCacheUpdateResolver<Maybe<WithTypename<UserCollection>>, Record<string, never>>,
    type?: GraphCacheUpdateResolver<Maybe<WithTypename<UserCollection>>, Record<string, never>>,
    user?: GraphCacheUpdateResolver<Maybe<WithTypename<UserCollection>>, Record<string, never>>
  },
  UserCollectionDuplicatedData?: {
    childCollections?: GraphCacheUpdateResolver<Maybe<WithTypename<UserCollectionDuplicatedData>>, Record<string, never>>,
    data?: GraphCacheUpdateResolver<Maybe<WithTypename<UserCollectionDuplicatedData>>, Record<string, never>>,
    id?: GraphCacheUpdateResolver<Maybe<WithTypename<UserCollectionDuplicatedData>>, Record<string, never>>,
    parentID?: GraphCacheUpdateResolver<Maybe<WithTypename<UserCollectionDuplicatedData>>, Record<string, never>>,
    requests?: GraphCacheUpdateResolver<Maybe<WithTypename<UserCollectionDuplicatedData>>, Record<string, never>>,
    title?: GraphCacheUpdateResolver<Maybe<WithTypename<UserCollectionDuplicatedData>>, Record<string, never>>,
    type?: GraphCacheUpdateResolver<Maybe<WithTypename<UserCollectionDuplicatedData>>, Record<string, never>>,
    userID?: GraphCacheUpdateResolver<Maybe<WithTypename<UserCollectionDuplicatedData>>, Record<string, never>>
  },
  UserCollectionExportJSONData?: {
    collectionType?: GraphCacheUpdateResolver<Maybe<WithTypename<UserCollectionExportJsonData>>, Record<string, never>>,
    exportedCollection?: GraphCacheUpdateResolver<Maybe<WithTypename<UserCollectionExportJsonData>>, Record<string, never>>
  },
  UserCollectionRemovedData?: {
    id?: GraphCacheUpdateResolver<Maybe<WithTypename<UserCollectionRemovedData>>, Record<string, never>>,
    type?: GraphCacheUpdateResolver<Maybe<WithTypename<UserCollectionRemovedData>>, Record<string, never>>
  },
  UserCollectionReorderData?: {
    nextUserCollection?: GraphCacheUpdateResolver<Maybe<WithTypename<UserCollectionReorderData>>, Record<string, never>>,
    userCollection?: GraphCacheUpdateResolver<Maybe<WithTypename<UserCollectionReorderData>>, Record<string, never>>
  },
  UserDeletionResult?: {
    errorMessage?: GraphCacheUpdateResolver<Maybe<WithTypename<UserDeletionResult>>, Record<string, never>>,
    isDeleted?: GraphCacheUpdateResolver<Maybe<WithTypename<UserDeletionResult>>, Record<string, never>>,
    userUID?: GraphCacheUpdateResolver<Maybe<WithTypename<UserDeletionResult>>, Record<string, never>>
  },
  UserEnvironment?: {
    id?: GraphCacheUpdateResolver<Maybe<WithTypename<UserEnvironment>>, Record<string, never>>,
    isGlobal?: GraphCacheUpdateResolver<Maybe<WithTypename<UserEnvironment>>, Record<string, never>>,
    name?: GraphCacheUpdateResolver<Maybe<WithTypename<UserEnvironment>>, Record<string, never>>,
    userUid?: GraphCacheUpdateResolver<Maybe<WithTypename<UserEnvironment>>, Record<string, never>>,
    variables?: GraphCacheUpdateResolver<Maybe<WithTypename<UserEnvironment>>, Record<string, never>>
  },
  UserHistory?: {
    executedOn?: GraphCacheUpdateResolver<Maybe<WithTypename<UserHistory>>, Record<string, never>>,
    id?: GraphCacheUpdateResolver<Maybe<WithTypename<UserHistory>>, Record<string, never>>,
    isStarred?: GraphCacheUpdateResolver<Maybe<WithTypename<UserHistory>>, Record<string, never>>,
    reqType?: GraphCacheUpdateResolver<Maybe<WithTypename<UserHistory>>, Record<string, never>>,
    request?: GraphCacheUpdateResolver<Maybe<WithTypename<UserHistory>>, Record<string, never>>,
    responseMetadata?: GraphCacheUpdateResolver<Maybe<WithTypename<UserHistory>>, Record<string, never>>,
    userUid?: GraphCacheUpdateResolver<Maybe<WithTypename<UserHistory>>, Record<string, never>>
  },
  UserHistoryDeletedManyData?: {
    count?: GraphCacheUpdateResolver<Maybe<WithTypename<UserHistoryDeletedManyData>>, Record<string, never>>,
    reqType?: GraphCacheUpdateResolver<Maybe<WithTypename<UserHistoryDeletedManyData>>, Record<string, never>>
  },
  UserRequest?: {
    collectionID?: GraphCacheUpdateResolver<Maybe<WithTypename<UserRequest>>, Record<string, never>>,
    createdOn?: GraphCacheUpdateResolver<Maybe<WithTypename<UserRequest>>, Record<string, never>>,
    id?: GraphCacheUpdateResolver<Maybe<WithTypename<UserRequest>>, Record<string, never>>,
    request?: GraphCacheUpdateResolver<Maybe<WithTypename<UserRequest>>, Record<string, never>>,
    title?: GraphCacheUpdateResolver<Maybe<WithTypename<UserRequest>>, Record<string, never>>,
    type?: GraphCacheUpdateResolver<Maybe<WithTypename<UserRequest>>, Record<string, never>>,
    user?: GraphCacheUpdateResolver<Maybe<WithTypename<UserRequest>>, Record<string, never>>
  },
  UserRequestReorderData?: {
    nextRequest?: GraphCacheUpdateResolver<Maybe<WithTypename<UserRequestReorderData>>, Record<string, never>>,
    request?: GraphCacheUpdateResolver<Maybe<WithTypename<UserRequestReorderData>>, Record<string, never>>
  },
  UserSettings?: {
    id?: GraphCacheUpdateResolver<Maybe<WithTypename<UserSettings>>, Record<string, never>>,
    properties?: GraphCacheUpdateResolver<Maybe<WithTypename<UserSettings>>, Record<string, never>>,
    updatedOn?: GraphCacheUpdateResolver<Maybe<WithTypename<UserSettings>>, Record<string, never>>,
    userUid?: GraphCacheUpdateResolver<Maybe<WithTypename<UserSettings>>, Record<string, never>>
  },
};

export type GraphCacheConfig = Parameters<typeof cacheExchange>[0] & {
  updates?: GraphCacheUpdaters,
  keys?: GraphCacheKeysConfig,
  optimistic?: GraphCacheOptimisticUpdaters,
  resolvers?: GraphCacheResolvers,
};