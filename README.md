# black-friday-deal-finder-01-entry

[![make.fun · black-friday-deal-finder-01](https://make.fun/badge/black-friday-deal-finder-01.svg)](https://make.fun/bounty/black-friday-deal-finder-01?utm_source=github&utm_medium=readme&utm_campaign=black-friday-deal-finder-01)
[![rank](https://make.fun/badge/black-friday-deal-finder-01/saifulsidik801-ship-it/black-friday-deal-finder-01-entry/rank.svg)](https://make.fun/bounty/black-friday-deal-finder-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=black-friday-deal-finder-01)
[![reward](https://make.fun/badge/black-friday-deal-finder-01/saifulsidik801-ship-it/black-friday-deal-finder-01-entry/reward.svg)](https://make.fun/bounty/black-friday-deal-finder-01?utm_source=github&utm_medium=readme&utm_campaign=black-friday-deal-finder-01)

**DealHawk** — a Black Friday 2026 deal finder with 37 real deals, every one price-checked on Friday, Nov 27, 2026 at the store or in a deals source that names the store. Each deal shows product, store, store link, sale price, usual price, discount, the time it was checked, and an honest verdict (NEW LOW / REAL DEAL / SOLID DEAL / ROUTINE SALE) computed from the two prices. Search and filters by category, store, discount and verdict all work; sorting by biggest % off, biggest $ saved, or price.

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
