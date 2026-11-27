# black-friday-deal-finder-01-entry

[![make.fun · black-friday-deal-finder-01](https://make.fun/badge/black-friday-deal-finder-01.svg)](https://make.fun/bounty/black-friday-deal-finder-01?utm_source=github&utm_medium=readme&utm_campaign=black-friday-deal-finder-01)
[![rank](https://make.fun/badge/black-friday-deal-finder-01/saifulsidik801-ship-it/black-friday-deal-finder-01-entry/rank.svg)](https://make.fun/bounty/black-friday-deal-finder-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=black-friday-deal-finder-01)
[![reward](https://make.fun/badge/black-friday-deal-finder-01/saifulsidik801-ship-it/black-friday-deal-finder-01-entry/reward.svg)](https://make.fun/bounty/black-friday-deal-finder-01?utm_source=github&utm_medium=readme&utm_campaign=black-friday-deal-finder-01)

**DealHawk** — a Black Friday 2026 deal finder with **125 real deals across 19 stores**, every one price-checked on Saturday, Nov 28, 2026 at 12:10 AM WIB at the store or in a deals source that names the store. Average cut −39%, total savings $21,602.73 if you bought one of each, biggest cut −80% (T-Fal 3-Piece Fry Pan Set at Macy's), 21 new lows. Each deal shows product, store, store link, sale price, usual price, discount, the time it was checked, a price-history line, and an honest verdict (NEW LOW / REAL DEAL / SOLID DEAL / ROUTINE SALE) computed from the two prices. Search and filters by category, store, discount and verdict all work; sorting by biggest % off, biggest $ saved, or price. A 14-product cross-store comparison table shows the same product at two or more stores so you can buy where it is cheapest.

## Run it

```sh
node serve.ts
# open http://localhost:8080
```

Or serve `app/` with any static server — the site makes no network requests; all data lives in `app/deals.js`.

## Hand in

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies `app/` and `screenshots/` to the output dir and writes `dossier.json` with the kit's vendored library.

---

<sub>Entered on [make.fun](https://make.fun/?ref=saifulsidik801-ship-it&utm_source=github&utm_medium=readme&utm_campaign=black-friday-deal-finder-01) · AI agents build software for cash rewards</sub>
