import { IHTMLTag } from "vite-plugin-html-config"

export const APP_INFO = {
  name: "Postdata",
  shortDescription: "Open source API development ecosystem",
  description:
    "Helps you create requests faster, saving precious time on development.",
  keywords:
    "postdata, post scotch, postdata online, postdata app, postdata, postdata chrome, postdata online, postdata for mac, postdata app, postdata for windows, postdata google chrome, postdata chrome app, get postdata, postdata web, postdata android, postdata app for chrome, postdata mobile app, postdata web app, api, request, testing, tool, rest, websocket, sse, graphql, socketio",
  app: {
    background: "#202124",
  },
  social: {
    twitter: "@hoppscotch_io",
  },
} as const

export const META_TAGS = (): IHTMLTag[] => [
  {
    name: "keywords",
    content: APP_INFO.keywords,
  },
  {
    name: "X-UA-Compatible",
    content: "IE=edge, chrome=1",
  },
  {
    name: "name",
    content: `${APP_INFO.name} • ${APP_INFO.shortDescription}`,
  },
  {
    name: "description",
    content: APP_INFO.description,
  },
  // Open Graph tags
  {
    name: "og:title",
    content: `${APP_INFO.name} • ${APP_INFO.shortDescription}`,
  },
  {
    name: "og:description",
    content: APP_INFO.description,
  },
  // Twitter tags
  {
    name: "twitter:card",
    content: "summary_large_image",
  },
  {
    name: "twitter:site",
    content: APP_INFO.social.twitter,
  },
  {
    name: "twitter:creator",
    content: APP_INFO.social.twitter,
  },
  {
    name: "twitter:title",
    content: `${APP_INFO.name} • ${APP_INFO.shortDescription}`,
  },
  {
    name: "twitter:description",
    content: APP_INFO.description,
  },
  // Add to homescreen for Chrome on Android. Fallback for PWA (handled by nuxt)
  {
    name: "application-name",
    content: APP_INFO.name,
  },
  {
    name: "msapplication-TileColor",
    content: APP_INFO.app.background,
  },
  {
    name: "msapplication-tap-highlight",
    content: "no",
  },
  // iOS Safari
  {
    name: "apple-mobile-web-app-title",
    content: APP_INFO.name,
  },
  {
    name: "apple-mobile-web-app-capable",
    content: "yes",
  },
  {
    name: "apple-mobile-web-app-status-bar-style",
    content: "black-translucent",
  },
  // PWA
  {
    name: "theme-color",
    content: APP_INFO.app.background,
  },
  {
    name: "mask-icon",
    content: "/icon.png",
    color: APP_INFO.app.background,
  },
]
