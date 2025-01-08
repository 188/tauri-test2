import { platform } from "~/platform"

let initialized = false

export function initializeApp() {
  if (!initialized) {
    try {
      platform.analytics?.initAnalytics()

      initialized = true
    } catch (e) {
      // initializeApp throws exception if we reinitialize
      initialized = true
    }
  }
}
