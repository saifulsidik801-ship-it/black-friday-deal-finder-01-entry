// DealHawk app logic: renders the deal grid, the top-picks strip, the live
// stats bar, and the working search + filter + sort controls. All maths is
// done from the two prices in deals.js, so the discount on screen can never
// disagree with the prices. No network calls: everything is local data.
//
// v3 changes: each card shows its own product glyph (not the category
// picture) on a gradient picked from the product type, so two cards in the
// same category no longer look identical; each card carries a price-history
// line from deals.js; the top-picks strip takes the biggest cut from three
// DIFFERENT stores, so one store can no longer sweep all three slots.

import { DEALS, SOURCES, CATEGORIES, STORES, COMPARE } from "./deals.js";
import { CATEGORY_ICON, PRODUCT_ICON } from "./icons.js";

const money = (n) =>
  "$" + n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

const pctOff = (d) => Math.round((1 - d.sale / d.usual) * 100);
const saved = (d) => d.usual - d.sale;

// Verdict from the numbers, not from a mood. NEW LOW only where the source
// called it an all-time / best-ever low; the rest is pure discount size.
function verdict(d) {
  if (d.low) return { label: "NEW LOW", cls: "v-low", why: "Best price the source has ever tracked for this item." };
  const p = pctOff(d);
  if (p >= 30) return { label: "REAL DEAL", cls: "v-real", why: p + "% off a real usual price — a genuine cut, not a sticker game." };
  if (p >= 15) return { label: "SOLID DEAL", cls: "v-solid", why: p + "% off. Worth it if you wanted it anyway." };
  return { label: "ROUTINE SALE", cls: "v-routine", why: "Only " + p + "% off. Fine, but not the reason to buy today." };
}

// Ten tile gradients. A card's gradient comes from its product type, not
// its category, so a shoe, a jacket and a handbag in Fashion each get their
// own colour and their own picture — nothing repeats at a glance.
const TILE_GRADIENTS = [
  ["#1d4ed8", "#7c3aed"],
  ["#0f766e", "#0369a1"],
  ["#be185d", "#7c3aed"],
  ["#b45309", "#dc2626"],
  ["#15803d", "#ca8a04"],
  ["#9d174d", "#ea580c"],
  ["#a21caf", "#db2777"],
  ["#1e40af", "#059669"],
  ["#7c2d12", "#b91c1c"],
  ["#334155", "#0f766e"],
];

function tileGradient(d) {
  const key = d.ic || d.category;
  let h = 0;
  for (let i = 0; i < key.length; i++) h = (h * 31 + key.charCodeAt(i)) >>> 0;
  return TILE_GRADIENTS[h % TILE_GRADIENTS.length];
}

const state = { q: "", cat: "All", store: "All", minPct: 0, verdict: "All", sort: "pct" };

function filteredDeals() {
  let list = DEALS.filter((d) => {
    if (state.cat !== "All" && d.category !== state.cat) return false;
    if (state.store !== "All" && d.store !== state.store) return false;
    if (pctOff(d) < state.minPct) return false;
    if (state.verdict !== "All" && verdict(d).label !== state.verdict) return false;
    if (state.q) {
      const hay = (d.name + " " + d.brand + " " + d.category + " " + d.store).toLowerCase();
      if (!hay.includes(state.q.toLowerCase())) return false;
    }
    return true;
  });
  const by = {
    pct: (a, b) => pctOff(b) - pctOff(a),
    saved: (a, b) => saved(b) - saved(a),
    priceAsc: (a, b) => a.sale - b.sale,
    priceDesc: (a, b) => b.sale - a.sale,
    name: (a, b) => a.name.localeCompare(b.name),
  };
  return list.sort(by[state.sort] || by.pct);
}

function dealCard(d) {
  const v = verdict(d);
  const [c1, c2] = tileGradient(d);
  const src = SOURCES[d.src];
  const icon = (d.ic && PRODUCT_ICON[d.ic]) || CATEGORY_ICON[d.category] || "";
  const history = d.hist
    ? `<p class="history"><b>Price history:</b> ${d.hist}</p>`
    : "";
  return `
  <article class="card" data-id="${d.id}">
    <div class="tile" style="background:linear-gradient(135deg,${c1},${c2})">
      <span class="tile-icon">${icon}</span>
      <span class="tile-cat">${d.category}</span>
      <span class="pct-badge">−${pctOff(d)}%</span>
    </div>
    <div class="card-body">
      <div class="card-top"><span class="brand">${d.brand}</span><span class="store">${d.store}</span></div>
      <h3>${d.name}</h3>
      <div class="price-row">
        <span class="sale">${money(d.sale)}</span>
        <span class="usual"><s>${money(d.usual)}</s></span>
      </div>
      <div class="save-line">You save ${money(saved(d))} · ${pctOff(d)}% off</div>
      <div class="verdict ${v.cls}" title="${v.why}">${v.label}</div>
      <p class="why">${v.why}</p>
      ${history}
      <p class="checked">Checked ${d.at} · via ${src.name}</p>
      <a class="shop" href="${d.link}" target="_blank" rel="noopener">Shop at ${d.store} &rarr;</a>
    </div>
  </article>`;
}

function renderStats() {
  const totalSaved = DEALS.reduce((s, d) => s + saved(d), 0);
  const avgPct = Math.round(DEALS.reduce((s, d) => s + pctOff(d), 0) / DEALS.length);
  const best = DEALS.reduce((a, b) => (pctOff(b) > pctOff(a) ? b : a));
  const lows = DEALS.filter((d) => d.low).length;
  document.getElementById("stat-deals").textContent = DEALS.length;
  document.getElementById("stat-stores").textContent = STORES.length;
  document.getElementById("stat-avg").textContent = "−" + avgPct + "%";
  document.getElementById("stat-saved").textContent = money(totalSaved);
  document.getElementById("stat-best").textContent = "−" + pctOff(best) + "% · " + best.name;
  document.getElementById("stat-lows").textContent = lows + " new lows";
}

// Biggest cut from three different stores: walk the deals from the biggest
// cut down and take the first deal from each store not already picked, so
// the strip shows the spread of the sale instead of one store's clearance.
function renderTopPicks() {
  const ranked = [...DEALS].sort((a, b) => pctOff(b) - pctOff(a));
  const picks = [];
  const seenStores = new Set();
  for (const d of ranked) {
    if (picks.length >= 3) break;
    if (seenStores.has(d.store)) continue;
    seenStores.add(d.store);
    picks.push(d);
  }
  document.getElementById("top-picks").innerHTML = picks
    .map((d, i) => {
      const v = verdict(d);
      return `<div class="pick">
        <span class="pick-rank">#${i + 1} BIGGEST CUT</span>
        <span class="pick-name">${d.name}</span>
        <span class="pick-price">${money(d.sale)} <s>${money(d.usual)}</s> <b>−${pctOff(d)}%</b></span>
        <span class="pick-meta">${d.store} · ${d.category} · ${v.label} · save ${money(saved(d))}</span>
      </div>`;
    })
    .join("");
}

function renderGrid() {
  const list = filteredDeals();
  const grid = document.getElementById("grid");
  grid.innerHTML = list.length
    ? list.map(dealCard).join("")
    : `<div class="empty">No deals match those filters. Loosen the discount or clear the search — all ${DEALS.length} deals are still here.</div>`;
  document.getElementById("result-count").textContent =
    list.length + " of " + DEALS.length + " deals";
  const active = [];
  if (state.cat !== "All") active.push(state.cat);
  if (state.store !== "All") active.push(state.store);
  if (state.minPct) active.push(state.minPct + "%+ off");
  if (state.verdict !== "All") active.push(state.verdict);
  if (state.q) active.push('"' + state.q + '"');
  document.getElementById("active-filters").textContent = active.length
    ? "Showing: " + active.join(" · ")
    : "Showing: every verified deal";
}

function renderChips() {
  const wrap = document.getElementById("cat-chips");
  wrap.innerHTML = ["All", ...CATEGORIES]
    .map((c) => {
      const n = c === "All" ? DEALS.length : DEALS.filter((d) => d.category === c).length;
      return `<button class="chip${state.cat === c ? " on" : ""}" data-cat="${c}">${c} <span>${n}</span></button>`;
    })
    .join("");
  wrap.querySelectorAll(".chip").forEach((b) =>
    b.addEventListener("click", () => {
      state.cat = b.dataset.cat;
      renderChips();
      renderGrid();
    })
  );
}

function renderCompare() {
  document.getElementById("compare-rows").innerHTML = COMPARE.map((c) => {
    const best = Math.min(...c.prices.map((p) => p.price));
    const src = SOURCES[c.src];
    return `<div class="compare-row">
      <div class="compare-product">
        <span class="compare-name">${c.product}</span>
        <span class="compare-note">${c.note} · via ${src.name}</span>
      </div>
      <div class="compare-prices">${c.prices
        .map(
          (p) =>
            `<span class="compare-price${p.price === best ? " best" : ""}">${p.store} <b>${money(p.price)}</b>${p.price === best ? ' <em>LOWEST</em>' : ""}</span>`
        )
        .join("")}</div>
    </div>`;
  }).join("");
}

function renderSources() {
  document.getElementById("sources").innerHTML = SOURCES.map(
    (s) => `<li><a href="${s.url}" target="_blank" rel="noopener">${s.name}</a> — ${s.note}</li>`
  ).join("");
}

function fillSelect(id, options) {
  const el = document.getElementById(id);
  el.innerHTML = options.map((o) => `<option value="${o.v}">${o.t}</option>`).join("");
}

fillSelect("store-filter", [{ v: "All", t: "All stores" }, ...STORES.map((s) => ({ v: s, t: s }))]);
fillSelect("discount-filter", [
  { v: 0, t: "Any discount" },
  { v: 15, t: "15% off or more" },
  { v: 30, t: "30% off or more" },
  { v: 40, t: "40% off or more" },
  { v: 50, t: "50% off or more" },
]);
fillSelect("verdict-filter", [
  { v: "All", t: "Any verdict" },
  { v: "NEW LOW", t: "New lows only" },
  { v: "REAL DEAL", t: "Real deals only" },
  { v: "SOLID DEAL", t: "Solid deals only" },
  { v: "ROUTINE SALE", t: "Routine sales" },
]);
fillSelect("sort-filter", [
  { v: "pct", t: "Biggest % off first" },
  { v: "saved", t: "Biggest $ saved first" },
  { v: "priceAsc", t: "Lowest price first" },
  { v: "priceDesc", t: "Highest price first" },
  { v: "name", t: "Name A–Z" },
]);

document.getElementById("search").addEventListener("input", (e) => {
  state.q = e.target.value.trim();
  renderGrid();
});
document.getElementById("store-filter").addEventListener("change", (e) => {
  state.store = e.target.value;
  renderGrid();
});
document.getElementById("discount-filter").addEventListener("change", (e) => {
  state.minPct = Number(e.target.value);
  renderGrid();
});
document.getElementById("verdict-filter").addEventListener("change", (e) => {
  state.verdict = e.target.value;
  renderGrid();
});
document.getElementById("sort-filter").addEventListener("change", (e) => {
  state.sort = e.target.value;
  renderGrid();
});

renderStats();
renderTopPicks();
renderCompare();
renderChips();
renderGrid();
renderSources();
