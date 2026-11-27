// DealHawk deal data — every deal below was found and price-checked by the
// DealHawk agent on Black Friday, Friday 27 November 2026 (WIB), against the
// store or deals source named in `source` for that deal. Sale price and usual
// price are the two figures the source showed; the discount is computed from
// them, never typed in by hand. `low` is true only where the source called
// the price an all-time or best-ever low. Store links go to that store's own
// search for the exact product name, so the link always opens matching
// products at the store. Prices move on Black Friday — always confirm at
// checkout. Checked stamp for the whole set: Nov 27, 2026, 14:20 WIB.

export const CHECKED_AT = "Nov 27, 2026 · 2:20 PM WIB";

export const SOURCES = [
  { name: "TrendThread Black Friday diary", url: "https://trendthread.space/black-friday-deals-diary-2026.html", note: "Updated Nov 27, 2026" },
  { name: "9to5Mac — Best Apple Black Friday deals", url: "https://9to5mac.com/2026/11/20/best-apple-black-friday-deals-now-live/", note: "Updated through Nov 27, 2026" },
  { name: "Best Buy Black Friday ad (via Redding.com)", url: "https://www.redding.com/story/money/2026/11/26/black-friday-sales-in-redding-what-to-see-at-macys-target-walmart/92944018007/", note: "Published Nov 26, 2026" },
  { name: "Iddeya — Black Friday deals at Best Buy, Amazon, Target, Walmart", url: "https://www.iddeya.com/2026/11/black-friday-2026-deals-dates-and-prices-at-best-buy-amazon-target-and-walmart.html", note: "Prices checked Nov 25, 2026; re-confirmed Nov 27" },
  { name: "ComicBook — Walmart Black Friday deals", url: "https://comicbook.com/crate/walmart-early-black-friday-deals-2026/", note: "Walmart waves Nov 12–29, 2026" },
  { name: "Houston News Network — Black Friday ad scan", url: "https://houstonnewsnetwork.com/black-friday-2026-ads-see-the-ads-and-best-deals-from-amazon-costco-home-depot-walmart-target-and-more", note: "Ad prices, Nov 2026" },
  { name: "DealsnFreebies — Black Friday 2026 deals hub", url: "https://dealsnfreebies.com/black-friday-2026-deals-hub/", note: "Refreshed Nov 25, 2026" },
  { name: "BlackFriday.ltd — Christmas gift deals", url: "https://blackfriday.ltd/christmas-gift-deals/", note: "Checked Nov 10–12, 2026 on brand pages" },
  { name: "Aktualita — Best Black Friday deals 2026", url: "https://aktualita.co/en/money/best-black-friday-deals-2026-save-big-on-tvs-apple-products-laptops-and-holiday-gifts", note: "Updated Nov 27, 2026" },
];

// Fields: id, name, brand, category, store, sale, usual, low, source index, store link.
export const DEALS = [
  { id: 1, name: "AirPods Pro 3", brand: "Apple", category: "Tech", store: "Amazon", sale: 149, usual: 249, low: true, src: 0, link: "https://www.amazon.com/s?k=airpods+pro+3" },
  { id: 2, name: "Apple Watch Series 12 GPS 42mm", brand: "Apple", category: "Tech", store: "Amazon", sale: 329, usual: 399, low: true, src: 1, link: "https://www.amazon.com/s?k=apple+watch+series+12+42mm" },
  { id: 3, name: "Apple Watch SE 3 40mm", brand: "Apple", category: "Tech", store: "Amazon", sale: 199, usual: 249, low: false, src: 1, link: "https://www.amazon.com/s?k=apple+watch+se+3+40mm" },
  { id: 4, name: "AirPods Max 2", brand: "Apple", category: "Tech", store: "Amazon", sale: 419, usual: 549, low: true, src: 1, link: "https://www.amazon.com/s?k=airpods+max+2" },
  { id: 5, name: "AirTag 2 (4-pack)", brand: "Apple", category: "Tech", store: "Amazon", sale: 80, usual: 99, low: false, src: 1, link: "https://www.amazon.com/s?k=airtag+2+4+pack" },
  { id: 6, name: "Apple TV 4K (4th generation)", brand: "Apple", category: "Tech", store: "Amazon", sale: 289, usual: 299, low: false, src: 1, link: "https://www.amazon.com/s?k=apple+tv+4k+4th+generation" },
  { id: 7, name: "HP OmniBook 5 14-inch 2K OLED touchscreen laptop", brand: "HP", category: "Tech", store: "Best Buy", sale: 449.99, usual: 799.99, low: false, src: 2, link: "https://www.bestbuy.com/site/searchpage.jsp?st=hp+omnibook+5+14+oled" },
  { id: 8, name: "Samsung Galaxy S26 FE", brand: "Samsung", category: "Tech", store: "Best Buy", sale: 499.99, usual: 699.99, low: false, src: 2, link: "https://www.bestbuy.com/site/searchpage.jsp?st=samsung+galaxy+s26+fe" },
  { id: 9, name: "Fire TV Stick 4K Plus", brand: "Amazon", category: "Tech", store: "Amazon", sale: 29.99, usual: 69.99, low: false, src: 3, link: "https://www.amazon.com/s?k=fire+tv+stick+4k+plus" },
  { id: 10, name: "Kindle Colorsoft 16GB (2024)", brand: "Amazon", category: "Tech", store: "Amazon", sale: 169.99, usual: 289.99, low: false, src: 3, link: "https://www.amazon.com/s?k=kindle+colorsoft+16gb" },
  { id: 11, name: "Magic Mouse (USB-C, white)", brand: "Apple", category: "Tech", store: "Amazon", sale: 60, usual: 79, low: false, src: 1, link: "https://www.amazon.com/s?k=apple+magic+mouse+usb-c" },
  { id: 12, name: "TCL 65-inch 4K TV", brand: "TCL", category: "TV", store: "Best Buy", sale: 229.99, usual: 469.99, low: false, src: 2, link: "https://www.bestbuy.com/site/searchpage.jsp?st=tcl+65+inch+4k+tv" },
  { id: 13, name: "Hisense 75-inch H5R1 4K Roku TV", brand: "Hisense", category: "TV", store: "Walmart", sale: 328, usual: 668, low: false, src: 4, link: "https://www.walmart.com/search?q=hisense+75+inch+h5r1+4k+roku+tv" },
  { id: 14, name: "Hisense 98-inch QD5 QLED 4K TV", brand: "Hisense", category: "TV", store: "Best Buy", sale: 800, usual: 2500, low: false, src: 0, link: "https://www.bestbuy.com/site/searchpage.jsp?st=hisense+98+inch+qd5+qled" },
  { id: 15, name: "Insignia 40-inch Full HD Smart Fire TV", brand: "Insignia", category: "TV", store: "Best Buy", sale: 89.99, usual: 149.99, low: false, src: 2, link: "https://www.bestbuy.com/site/searchpage.jsp?st=insignia+40+inch+fire+tv" },
  { id: 16, name: "Sony WH-1000XM5 wireless noise cancelling headphones", brand: "Sony", category: "Audio", store: "Best Buy", sale: 169, usual: 398, low: false, src: 2, link: "https://www.bestbuy.com/site/searchpage.jsp?st=sony+wh-1000xm5" },
  { id: 17, name: "Beats Solo4 on-ear wireless headphones", brand: "Beats", category: "Audio", store: "Walmart", sale: 69, usual: 199, low: false, src: 4, link: "https://www.walmart.com/search?q=beats+solo4+wireless+headphones" },
  { id: 18, name: "JLab Go Air Pop Bluetooth earbuds", brand: "JLab", category: "Audio", store: "Walmart", sale: 9.88, usual: 26.99, low: false, src: 4, link: "https://www.walmart.com/search?q=jlab+go+air+pop+earbuds" },
  { id: 19, name: "Razer BlackShark V2 X wired gaming headset (white)", brand: "Razer", category: "Audio", store: "Target", sale: 39.99, usual: 49.99, low: false, src: 5, link: "https://www.target.com/s?searchTerm=razer+blackshark+v2+x" },
  { id: 20, name: "Shark PowerDetect cordless stick vacuum", brand: "Shark", category: "Home", store: "Best Buy", sale: 199.99, usual: 499.99, low: false, src: 2, link: "https://www.bestbuy.com/site/searchpage.jsp?st=shark+powerdetect+cordless+vacuum" },
  { id: 21, name: "Shark Pet cordless stick vacuum (IY144H)", brand: "Shark", category: "Home", store: "Target", sale: 159.99, usual: 279.99, low: false, src: 5, link: "https://www.target.com/s?searchTerm=shark+pet+cordless+stick+vacuum" },
  { id: 22, name: "Shark PowerDetect 2-in-1 robot vacuum and mop", brand: "Shark", category: "Home", store: "Costco", sale: 399.99, usual: 499.99, low: false, src: 5, link: "https://www.costco.com/CatalogSearch?dept=All&keyword=shark+powerdetect+robot+vacuum+mop" },
  { id: 23, name: "Dyson V9 Motorbar cordless vacuum", brand: "Dyson", category: "Home", store: "Amazon", sale: 269.95, usual: 599.99, low: false, src: 5, link: "https://www.amazon.com/s?k=dyson+v9+motorbar+cordless+vacuum" },
  { id: 24, name: "Dyson Airwrap i.d. multi-styler and dryer", brand: "Dyson", category: "Home", store: "Costco", sale: 499.99, usual: 649.99, low: false, src: 5, link: "https://www.costco.com/CatalogSearch?dept=All&keyword=dyson+airwrap+id" },
  { id: 25, name: "Dyson Cyclone V10 Origin cordless vacuum", brand: "Dyson", category: "Home", store: "Amazon", sale: 328.69, usual: 479.99, low: false, src: 5, link: "https://www.amazon.com/s?k=dyson+v10+origin+cordless+vacuum" },
  { id: 26, name: "Shark TurboBlade Cool + Heat bladeless fan", brand: "Shark", category: "Home", store: "Best Buy", sale: 209.99, usual: 349.99, low: false, src: 5, link: "https://www.bestbuy.com/site/searchpage.jsp?st=shark+turboblade+bladeless+fan" },
  { id: 27, name: "Insignia refrigerator", brand: "Insignia", category: "Home", store: "Best Buy", sale: 299.99, usual: 749.99, low: false, src: 2, link: "https://www.bestbuy.com/site/searchpage.jsp?st=insignia+refrigerator" },
  { id: 28, name: "LEGO Botanicals Tiny Wildflower Bouquet", brand: "LEGO", category: "Toys", store: "Amazon", sale: 11.95, usual: 19.99, low: false, src: 5, link: "https://www.amazon.com/s?k=lego+botanicals+tiny+wildflower+bouquet" },
  { id: 29, name: "LEGO Creator 3-in-1 Forest Animals: Red Fox", brand: "LEGO", category: "Toys", store: "Amazon", sale: 34.99, usual: 49.99, low: false, src: 5, link: "https://www.amazon.com/s?k=lego+creator+red+fox" },
  { id: 30, name: "LEGO Star Wars SMART Play: Luke's Landspeeder", brand: "LEGO", category: "Toys", store: "Target", sale: 22.74, usual: 30.74, low: false, src: 5, link: "https://www.target.com/s?searchTerm=lego+star+wars+landspeeder" },
  { id: 31, name: "LEGO Up-Scaled Santa Minifigure", brand: "LEGO", category: "Toys", store: "Amazon", sale: 41.99, usual: 59.99, low: false, src: 5, link: "https://www.amazon.com/s?k=lego+up-scaled+santa+minifigure" },
  { id: 32, name: "LEGO Star Wars SMART Play: Millennium Falcon", brand: "LEGO", category: "Toys", store: "Target", sale: 79.99, usual: 93.99, low: false, src: 5, link: "https://www.target.com/s?searchTerm=lego+star+wars+millennium+falcon" },
  { id: 33, name: "LEGO Pokemon Eevee", brand: "LEGO", category: "Toys", store: "Amazon", sale: 47.49, usual: 59.99, low: false, src: 5, link: "https://www.amazon.com/s?k=lego+pokemon+eevee" },
  { id: 34, name: "Nike Air Max 95 Big Bubble women's shoes", brand: "Nike", category: "Fashion", store: "Nike", sale: 113.97, usual: 190, low: false, src: 6, link: "https://www.nike.com/w?q=air+max+95+big+bubble" },
  { id: 35, name: "Shark FlexStyle Air Multi-Styler (Winter Pearl)", brand: "Shark", category: "Beauty", store: "Sephora", sale: 199, usual: 299, low: false, src: 7, link: "https://www.sephora.com/search?keyword=shark+flexstyle" },
  { id: 36, name: "Shark Depuffi", brand: "Shark", category: "Beauty", store: "Best Buy", sale: 149.99, usual: 199.99, low: false, src: 5, link: "https://www.bestbuy.com/site/searchpage.jsp?st=shark+depuffi" },
  { id: 37, name: "Turtle Beach Recon 70 wired gaming headset (Xbox)", brand: "Turtle Beach", category: "Gaming", store: "Walmart", sale: 29.99, usual: 39.99, low: false, src: 4, link: "https://www.walmart.com/search?q=turtle+beach+recon+70+xbox" },
];

export const CATEGORIES = ["Tech", "TV", "Audio", "Home", "Toys", "Fashion", "Beauty", "Gaming"];

export const STORES = ["Amazon", "Best Buy", "Walmart", "Target", "Costco", "Sephora", "Nike"];
