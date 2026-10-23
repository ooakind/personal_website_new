// Cloudflare Web Analytics (cookie-free). Loaded only in production builds so
// local development visits are not counted. `spa: true` makes the beacon record a
// page view whenever the app changes the URL (see goTo in App.jsx).
const TOKEN = '2e45d8b653214c79883b59e88a27099b';

export function initAnalytics() {
  if (!import.meta.env.PROD) return;
  if (document.querySelector('script[data-cf-beacon]')) return;
  const script = document.createElement('script');
  script.defer = true;
  script.src = 'https://static.cloudflareinsights.com/beacon.min.js';
  script.setAttribute('data-cf-beacon', JSON.stringify({ token: TOKEN, spa: true }));
  document.head.appendChild(script);
}
