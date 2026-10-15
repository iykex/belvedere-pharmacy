const tabs = await (await fetch(`http://127.0.0.1:${process.env.HERO_CDP_PORT ?? 9223}/json`)).json();
const page = tabs.find((item) => item.type === 'page');
if (!page) throw new Error('No browser page');
const socket = new WebSocket(page.webSocketDebuggerUrl);
await new Promise((resolve) => socket.addEventListener('open', resolve, { once: true }));
let nextId = 0;
const pending = new Map();
socket.addEventListener('message', ({ data }) => {
  const response = JSON.parse(data);
  if (!response.id) return;
  const callback = pending.get(response.id);
  if (!callback) return;
  pending.delete(response.id);
  if (response.error) callback.reject(new Error(JSON.stringify(response.error)));
  else callback.resolve(response.result);
});
function send(method, params = {}) {
  const id = ++nextId;
  return new Promise((resolve, reject) => {
    pending.set(id, { resolve, reject });
    socket.send(JSON.stringify({ id, method, params }));
  });
}
async function evaluate(expression) {
  const response = await send('Runtime.evaluate', { expression, returnByValue: true });
  return response.result.value;
}

for (const width of [320, 375, 390, 430, 640, 800, 1024, 1360, 1440, 1568]) {
  await send('Emulation.setDeviceMetricsOverride', { width, height: 900, deviceScaleFactor: 1, mobile: width < 640 });
  await new Promise((resolve) => setTimeout(resolve, 150));
  const result = await evaluate(`JSON.stringify({ width: innerWidth, scrollWidth: document.documentElement.scrollWidth, card: document.querySelector('.bp-hero__carousel')?.getBoundingClientRect().toJSON(), trustBadgePresent: Boolean(document.querySelector('.bp-hero__trust')), nav: document.querySelector('nav')?.getBoundingClientRect().toJSON() })`);
  const parsed = JSON.parse(result);
  console.log(`${width}: overflow=${parsed.scrollWidth > parsed.width}, trustBadgePresent=${parsed.trustBadgePresent}, card=[${Math.round(parsed.card.x)},${Math.round(parsed.card.y)},${Math.round(parsed.card.width)},${Math.round(parsed.card.height)}]`);
}

await send('Emulation.setDeviceMetricsOverride', { width: 375, height: 900, deviceScaleFactor: 1, mobile: true });
const initial = await evaluate(`document.querySelector('.bp-carousel__content h2')?.textContent`);
await evaluate(`document.querySelector('button[aria-label="Next featured service"]')?.click()`);
const next = await evaluate(`document.querySelector('.bp-carousel__content h2')?.textContent`);
await evaluate(`document.querySelector('button[aria-label="Previous featured service"]')?.click()`);
const previous = await evaluate(`document.querySelector('.bp-carousel__content h2')?.textContent`);
const links = await evaluate(`JSON.stringify({appointment: document.querySelector('.bp-hero__action--primary')?.getAttribute('href'), prescription: document.querySelector('.bp-hero__action--secondary')?.getAttribute('href'), carousel: document.querySelector('.bp-carousel__cta')?.getAttribute('href'), dots: document.querySelectorAll('.bp-carousel__dots button').length})`);
console.log(JSON.stringify({ initial, next, previous, links: JSON.parse(links) }));
await evaluate(`Array.from(document.querySelectorAll('button')).find((button) => button.textContent.includes('Open navigation menu'))?.click()`);
await new Promise((resolve) => setTimeout(resolve, 200));
console.log(`mobileMenuOpen=${await evaluate(`Boolean(document.querySelector('[role="dialog"]'))`)}; mobileMenuLinks=${await evaluate(`document.querySelectorAll('[role="dialog"] a').length`)}`);
socket.close();
