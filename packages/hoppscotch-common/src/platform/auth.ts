/**
 * A common (and required) set of fields that describe a user.
 */
export type HoppUser = {
  /** A unique ID identifying the user */
  uid: string

  /** The name to be displayed as the user's */
  displayName: string | null

  /** The user's email address */
  email: string | null

  /** URL to the profile picture of the user */
  photoURL: string | null

  // Regarding `provider` and `accessToken`:
  // The current implementation and use case for these 2 fields are super weird due to legacy.
  // Currrently these fields are only basically populated for Github Auth as we need the access token issued
  // by it to implement Gist submission. I would really love refactor to make this thing more sane.

  /** Name of the provider authenticating (NOTE: See notes on `platform/auth.ts`) */
  provider?: string
  /** Access Token for the auth of the user against the given `provider`. */
  accessToken?: string
  emailVerified: boolean
}
