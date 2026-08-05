const GOOGLE_ANALYTICS_ID = 'G-9B1XELPLNW'
const GOOGLE_TAG_SCRIPT_ID = 'scarlet-google-tag'

export function initializeGoogleAnalytics() {
  if (!import.meta.env.PROD || window.__scarletGoogleAnalyticsInitialized) return

  window.__scarletGoogleAnalyticsInitialized = true
  window.dataLayer = window.dataLayer || []
  window.gtag = window.gtag || function gtag() {
    window.dataLayer.push(arguments)
  }

  window.gtag('js', new Date())
  window.gtag('config', GOOGLE_ANALYTICS_ID)

  if (document.getElementById(GOOGLE_TAG_SCRIPT_ID)) return

  const script = document.createElement('script')
  script.id = GOOGLE_TAG_SCRIPT_ID
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`
  document.head.appendChild(script)
}
