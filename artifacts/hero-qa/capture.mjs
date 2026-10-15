import { writeFile } from 'node:fs/promises';

const [widthArg, heightArg, destination] = process.argv.slice(2);
const width = Number(widthArg);
const height = Number(heightArg);
if (!width || !height || !destination) throw new Error('Usage: node capture.mjs width height destination');

const tabs = await (await fetch(`http://127.0.0.1:${process.env.HERO_CDP_PORT ?? 9223}/json`)).json();
const tab = tabs.find((entry) => entry.type === 'page');
if (!tab) throw new Error('No Chrome page target');

const socket = new WebSocket(tab.webSocketDebuggerUrl);
await new Promise((resolve, reject) => {
  socket.addEventListener('open', resolve, { once: true });
  socket.addEventListener('error', reject, { once: true });
});

let id = 0;
const requests = new Map();
socket.addEventListener('message', ({ data }) => {
  const message = JSON.parse(data);
  if (!message.id || !requests.has(message.id)) return;
  const { resolve, reject } = requests.get(message.id);
  requests.delete(message.id);
  if (message.error) reject(new Error(JSON.stringify(message.error)));
  else resolve(message.result);
});
function send(method, params = {}) {
  const requestId = ++id;
  return new Promise((resolve, reject) => {
    requests.set(requestId, { resolve, reject });
    socket.send(JSON.stringify({ id: requestId, method, params }));
  });
}

await send('Emulation.setDeviceMetricsOverride', { width, height, deviceScaleFactor: 1, mobile: width < 640 });
await send('Emulation.setEmulatedMedia', { media: 'screen', features: [{ name: 'prefers-color-scheme', value: 'light' }] });
await send('Page.navigate', { url: 'http://localhost:3000/' });
await new Promise((resolve) => setTimeout(resolve, 4500));
await send('Runtime.evaluate', { expression: "localStorage.setItem('theme', 'light')" });
await send('Network.setCacheDisabled', { cacheDisabled: true });
await send('Page.reload', { ignoreCache: true });
await new Promise((resolve) => setTimeout(resolve, 6000));
await send('Runtime.evaluate', { expression: `Array.from(document.querySelectorAll('button')).find((button) => button.textContent.trim() === 'Necessary only')?.click()` });
await send('Runtime.evaluate', { expression: `document.querySelector('button[aria-label="Show NHS & Private Flu"]')?.click()` });
await send('Runtime.evaluate', { expression: `document.head.insertAdjacentHTML('beforeend', '<style>button[aria-label="Open chat"],button[aria-label="Open cookie settings"]{display:none!important}</style>')` });
await new Promise((resolve) => setTimeout(resolve, 300));
const layout = await send('Runtime.evaluate', {
  expression: `JSON.stringify({
    theme: document.documentElement.className,
    width: document.documentElement.scrollWidth,
    viewport: innerWidth,
    hero: document.querySelector('.bp-hero')?.getBoundingClientRect().toJSON(),
    card: document.querySelector('.bp-hero__carousel')?.getBoundingClientRect().toJSON(),
    trustBadgePresent: Boolean(document.querySelector('.bp-hero__trust')),
    slide: document.querySelector('.bp-carousel__content h2')?.textContent
  })`,
  returnByValue: true,
});
const { data } = await send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: false, fromSurface: true });
await writeFile(destination, Buffer.from(data, 'base64'));
console.log(layout.result.value);
socket.close();
