// Screenshot helper: drives Obscura's CDP endpoint (browser-level attach) to
// render a URL at a given viewport and save a PNG.
// Usage: node shot.cjs <url> <out.png> <width> <height> [evalJs] [waitMs]
const fs = require("fs");

const [url, out, w, h, evalJs = "", waitMs = 2000] = process.argv.slice(2);
const width = Number(w), height = Number(h);

async function main() {
  const ws = new WebSocket("ws://127.0.0.1:9222/devtools/browser");
  let id = 0;
  const pending = new Map();
  const send = (method, params = {}, sessionId) =>
    new Promise((resolve, reject) => {
      const mid = ++id;
      pending.set(mid, { resolve, reject });
      ws.send(JSON.stringify({ id: mid, method, params, sessionId }));
    });
  ws.addEventListener("message", (ev) => {
    const msg = JSON.parse(ev.data);
    if (msg.id && pending.has(msg.id)) {
      const { resolve, reject } = pending.get(msg.id);
      pending.delete(msg.id);
      msg.error ? reject(new Error(JSON.stringify(msg.error))) : resolve(msg.result);
    }
  });
  await new Promise((r) => ws.addEventListener("open", r));
  const target = await send("Target.createTarget", { url: "about:blank" });
  const attach = await send("Target.attachToTarget", { targetId: target.targetId, flatten: true });
  const s = attach.sessionId;
  await send("Page.enable", {}, s);
  await send("Emulation.setDeviceMetricsOverride", {
    width, height, deviceScaleFactor: 1, mobile: width < 600,
  }, s);
  await send("Page.navigate", { url }, s);
  await new Promise((r) => setTimeout(r, Number(waitMs)));
  if (evalJs) {
    await send("Runtime.evaluate", { expression: evalJs }, s);
    await new Promise((r) => setTimeout(r, 800));
  }
  const shot = await send("Page.captureScreenshot", { format: "png" }, s);
  fs.writeFileSync(out, Buffer.from(shot.data, "base64"));
  console.log("saved", out, fs.statSync(out).size, "bytes");
  ws.close();
  process.exit(0);
}
main().catch((e) => { console.error(e); process.exit(1); });
