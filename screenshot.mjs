/**
 * screenshot.mjs — Full-page screenshot via Chrome CDP (Node.js v22 built-in WebSocket)
 * Usage: node screenshot.mjs http://localhost:3000 [label]
 */
import http from 'http';
import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const url      = process.argv[2] || 'http://localhost:3000';
const label    = process.argv[3] || '';
const CHROME   = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const DBG_PORT = 9222;

// ── output path ────────────────────────────────────────────────────────────────
const screenshotDir = path.join(__dirname, 'temporary screenshots');
if (!fs.existsSync(screenshotDir)) fs.mkdirSync(screenshotDir, { recursive: true });
let idx = 1;
while (fs.existsSync(path.join(screenshotDir, `screenshot-${idx}${label ? '-' + label : ''}.png`))) idx++;
const filename   = `screenshot-${idx}${label ? '-' + label : ''}.png`;
const outputPath = path.join(screenshotDir, filename);

// ── launch Chrome ──────────────────────────────────────────────────────────────
const chrome = spawn(CHROME, [
  `--remote-debugging-port=${DBG_PORT}`,
  '--headless=new',
  '--no-sandbox',
  '--disable-setuid-sandbox',
  '--disable-gpu',
  '--window-size=1440,900',
  'about:blank',
], { detached: false, stdio: 'ignore' });

await new Promise(r => setTimeout(r, 2000));

// ── create a new tab and get its WS URL ──────────────────────────────────────
async function newTabWsUrl() {
  return new Promise((resolve, reject) => {
    const req = http.request({ hostname: 'localhost', port: DBG_PORT, path: '/json/new', method: 'PUT' }, res => {
      let body = '';
      res.on('data', d => body += d);
      res.on('end', () => {
        try { resolve(JSON.parse(body).webSocketDebuggerUrl); }
        catch(e) { reject(new Error('CDP parse error: ' + body)); }
      });
    });
    req.on('error', reject);
    req.end();
  });
}

const wsUrl = await newTabWsUrl();

// ── minimal CDP client using Web API WebSocket ─────────────────────────────────
const ws = new WebSocket(wsUrl);
const pending = new Map();
let msgId = 0;

await new Promise((resolve, reject) => {
  ws.addEventListener('open',  resolve);
  ws.addEventListener('error', reject);
});

ws.addEventListener('message', ({ data }) => {
  const msg = JSON.parse(data);
  if (msg.id !== undefined && pending.has(msg.id)) {
    const { resolve, reject } = pending.get(msg.id);
    pending.delete(msg.id);
    if (msg.error) reject(new Error(msg.error.message));
    else           resolve(msg.result);
  }
});

function send(method, params = {}) {
  const id = ++msgId;
  return new Promise((resolve, reject) => {
    pending.set(id, { resolve, reject });
    ws.send(JSON.stringify({ id, method, params }));
  });
}

// ── navigate & wait ────────────────────────────────────────────────────────────
await send('Page.enable');
await send('Page.navigate', { url });
await new Promise(r => setTimeout(r, 3000));   // fonts + animations settle

// ── force all fade-up elements visible (IntersectionObserver unreliable headless) ──
await send('Runtime.evaluate', {
  expression: `document.querySelectorAll('.fade-up').forEach(el => el.classList.add('visible'))`,
});
await new Promise(r => setTimeout(r, 300));

// ── measure real page height (with 900px viewport intact) ─────────────────────
const { result: { value: pageHeight } } = await send('Runtime.evaluate', {
  expression: 'Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)',
});
const H = Math.ceil(pageHeight);

// ── keep 900px viewport height so that 100vh = 900px, but capture full page ───
await new Promise(r => setTimeout(r, 400));

// ── capture screenshot ─────────────────────────────────────────────────────────
const { data } = await send('Page.captureScreenshot', {
  format: 'png',
  captureBeyondViewport: true,
  clip: { x: 0, y: 0, width: 1440, height: H, scale: 1 },
});

ws.close();
chrome.kill();

fs.writeFileSync(outputPath, Buffer.from(data, 'base64'));
console.log(`Screenshot saved: temporary screenshots/${filename}`);
