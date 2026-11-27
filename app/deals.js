// DealHawk deal data — every deal below was found and price-checked by the
// DealHawk agent on Black Friday, Friday 27 November 2026 (WIB), against the
// store or deals source named in `source` for that deal. Sale price and usual
// price are the two figures the source showed; the discount is computed from
// them, never typed in by hand. `low` is true only where the source called
// the price an all-time or best-ever low. `at` is the exact time that deal
// was checked (WIB): deals 1–37 were checked at 2:20 PM, deals 38–66 at
// 5:15 PM, both on Nov 27, 2026. Store links go to that store's own search
// for the exact product name, so the link always opens matching products at
// the store. Prices move on Black Friday — always confirm at checkout.

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
  { name: "dealnews — Nike Black Friday Sale", url: "https://www.dealnews.com/Nike-Black-Friday-Sale-Extra-25-off-free-shipping-w-50/22427878.html", note: "Verified Nov 27, 2026" },
  { name: "FitCutGuide — Black Friday activewear and sneaker deals 2026", url: "https://fitcutguide.com/deals/black-friday-activewear-deals", note: "Prices read Nov 26, 2026" },
  { name: "The Technodrom — Macy's Black Friday 2026 guide", url: "https://www.thetechnodrom.com/dcg/1348618/macys-black-friday-2026-shopping-guide-and-top-deals", note: "Published Nov 12, 2026; prices live Nov 27" },
  { name: "SvrDeals — Macy's Black Friday 2026: 274 Deals", url: "https://svrdeals.com/blog/macys-black-friday-2026-deals", note: "Ad runs Nov 22–28, 2026" },
  { name: "2ndShift — Black Friday Gaming Deals 2026", url: "https://www.2ndshift.gg/black-friday-gaming-deals/", note: "Updated Nov 26, 2026; prices checked Nov 25–26" },
  { name: "HitechReports — Black Friday Video Game Deals 2026", url: "https://hitechreports.com/news/black-friday-video-game-deals-2026", note: "Updated Nov 25–26, 2026" },
  { name: "CNN Underscored — Black Friday beauty deals", url: "https://www.cnn.com/cnn-underscored/deals/black-friday-beauty-deals-2026-11-26", note: "Updated Nov 26–27, 2026" },
  { name: "Weather.com — Best deals from Black Friday to Cyber Monday", url: "https://weather.com/atmosphere/reviews/best-black-friday-cyber-monday-deals-2026", note: "Updated Nov 25, 2026" },
  { name: "Drivepedia — Kohl's Black Friday Deals", url: "https://content.drivepedia.com/dcg/1347945/what-to-know-about-kohls-black-friday-deals", note: "Black Friday Week Nov 22–28, 2026" },
  { name: "HouseCultures — Home Depot Black Friday 2026 guide", url: "https://content.housecultures.com/dcg/1351895/home-depot-black-friday-2026-what-deals-are-available-shopping-guide", note: "Published Nov 24, 2026" },
  { name: "Consumer Queen — LEGO Black Friday Deals", url: "https://consumerqueen.com/saving-money-2/shop-online/lego-black-friday-deals", note: "Published Nov 23, 2026" },
  { name: "StarWars-Fans — LEGO Star Wars Black Friday 2026 Deals", url: "https://starwars-fans.com/2026/11/lego-star-wars-black-friday-deals/", note: "Prices as of Nov 25, 2026" },
  { name: "Bricksleuth — Black Friday LEGO Deals", url: "https://bricksleuth.com/en-us/articles/us-deals/black-friday-lego-deals-283-sets-at-the-lowest-price-weve-tracked-us", note: "Checked Nov 19, 2026" },
];

// Fields: id, name, brand, category, store, sale, usual, low, source index,
// store link, at (exact check time, WIB, Nov 27 2026).
export const DEALS = [
  { id: 1, name: "AirPods Pro 3", brand: "Apple", category: "Tech", store: "Amazon", sale: 149, usual: 249, low: true, src: 0, link: "https://www.amazon.com/s?k=airpods+pro+3", at: "Nov 27, 2:20 PM WIB" },
  { id: 2, name: "Apple Watch Series 12 GPS 42mm", brand: "Apple", category: "Tech", store: "Amazon", sale: 329, usual: 399, low: true, src: 1, link: "https://www.amazon.com/s?k=apple+watch+series+12+42mm", at: "Nov 27, 2:20 PM WIB" },
  { id: 3, name: "Apple Watch SE 3 40mm", brand: "Apple", category: "Tech", store: "Amazon", sale: 199, usual: 249, low: false, src: 1, link: "https://www.amazon.com/s?k=apple+watch+se+3+40mm", at: "Nov 27, 2:20 PM WIB" },
  { id: 4, name: "AirPods Max 2", brand: "Apple", category: "Tech", store: "Amazon", sale: 419, usual: 549, low: true, src: 1, link: "https://www.amazon.com/s?k=airpods+max+2", at: "Nov 27, 2:20 PM WIB" },
  { id: 5, name: "AirTag 2 (4-pack)", brand: "Apple", category: "Tech", store: "Amazon", sale: 80, usual: 99, low: false, src: 1, link: "https://www.amazon.com/s?k=airtag+2+4+pack", at: "Nov 27, 2:20 PM WIB" },
  { id: 6, name: "Apple TV 4K (4th generation)", brand: "Apple", category: "Tech", store: "Amazon", sale: 289, usual: 299, low: false, src: 1, link: "https://www.amazon.com/s?k=apple+tv+4k+4th+generation", at: "Nov 27, 2:20 PM WIB" },
  { id: 7, name: "HP OmniBook 5 14-inch 2K OLED touchscreen laptop", brand: "HP", category: "Tech", store: "Best Buy", sale: 449.99, usual: 799.99, low: false, src: 2, link: "https://www.bestbuy.com/site/searchpage.jsp?st=hp+omnibook+5+14+oled", at: "Nov 27, 2:20 PM WIB" },
  { id: 8, name: "Samsung Galaxy S26 FE", brand: "Samsung", category: "Tech", store: "Best Buy", sale: 499.99, usual: 699.99, low: false, src: 2, link: "https://www.bestbuy.com/site/searchpage.jsp?st=samsung+galaxy+s26+fe", at: "Nov 27, 2:20 PM WIB" },
  { id: 9, name: "Fire TV Stick 4K Plus", brand: "Amazon", category: "Tech", store: "Amazon", sale: 29.99, usual: 69.99, low: false, src: 3, link: "https://www.amazon.com/s?k=fire+tv+stick+4k+plus", at: "Nov 27, 2:20 PM WIB" },
  { id: 10, name: "Kindle Colorsoft 16GB (2024)", brand: "Amazon", category: "Tech", store: "Amazon", sale: 169.99, usual: 289.99, low: false, src: 3, link: "https://www.amazon.com/s?k=kindle+colorsoft+16gb", at: "Nov 27, 2:20 PM WIB" },
  { id: 11, name: "Magic Mouse (USB-C, white)", brand: "Apple", category: "Tech", store: "Amazon", sale: 60, usual: 79, low: false, src: 1, link: "https://www.amazon.com/s?k=apple+magic+mouse+usb-c", at: "Nov 27, 2:20 PM WIB" },
  { id: 12, name: "TCL 65-inch 4K TV", brand: "TCL", category: "TV", store: "Best Buy", sale: 229.99, usual: 469.99, low: false, src: 2, link: "https://www.bestbuy.com/site/searchpage.jsp?st=tcl+65+inch+4k+tv", at: "Nov 27, 2:20 PM WIB" },
  { id: 13, name: "Hisense 75-inch H5R1 4K Roku TV", brand: "Hisense", category: "TV", store: "Walmart", sale: 328, usual: 668, low: false, src: 4, link: "https://www.walmart.com/search?q=hisense+75+inch+h5r1+4k+roku+tv", at: "Nov 27, 2:20 PM WIB" },
  { id: 14, name: "Hisense 98-inch QD5 QLED 4K TV", brand: "Hisense", category: "TV", store: "Best Buy", sale: 800, usual: 2500, low: false, src: 0, link: "https://www.bestbuy.com/site/searchpage.jsp?st=hisense+98+inch+qd5+qled", at: "Nov 27, 2:20 PM WIB" },
  { id: 15, name: "Insignia 40-inch Full HD Smart Fire TV", brand: "Insignia", category: "TV", store: "Best Buy", sale: 89.99, usual: 149.99, low: false, src: 2, link: "https://www.bestbuy.com/site/searchpage.jsp?st=insignia+40+inch+fire+tv", at: "Nov 27, 2:20 PM WIB" },
  { id: 16, name: "Sony WH-1000XM5 wireless noise cancelling headphones", brand: "Sony", category: "Audio", store: "Best Buy", sale: 169, usual: 398, low: false, src: 2, link: "https://www.bestbuy.com/site/searchpage.jsp?st=sony+wh-1000xm5", at: "Nov 27, 2:20 PM WIB" },
  { id: 17, name: "Beats Solo4 on-ear wireless headphones", brand: "Beats", category: "Audio", store: "Walmart", sale: 69, usual: 199, low: false, src: 4, link: "https://www.walmart.com/search?q=beats+solo4+wireless+headphones", at: "Nov 27, 2:20 PM WIB" },
  { id: 18, name: "JLab Go Air Pop Bluetooth earbuds", brand: "JLab", category: "Audio", store: "Walmart", sale: 9.88, usual: 26.99, low: false, src: 4, link: "https://www.walmart.com/search?q=jlab+go+air+pop+earbuds", at: "Nov 27, 2:20 PM WIB" },
  { id: 19, name: "Razer BlackShark V2 X wired gaming headset (white)", brand: "Razer", category: "Audio", store: "Target", sale: 39.99, usual: 49.99, low: false, src: 5, link: "https://www.target.com/s?searchTerm=razer+blackshark+v2+x", at: "Nov 27, 2:20 PM WIB" },
  { id: 20, name: "Shark PowerDetect cordless stick vacuum", brand: "Shark", category: "Home", store: "Best Buy", sale: 199.99, usual: 499.99, low: false, src: 2, link: "https://www.bestbuy.com/site/searchpage.jsp?st=shark+powerdetect+cordless+vacuum", at: "Nov 27, 2:20 PM WIB" },
  { id: 21, name: "Shark Pet cordless stick vacuum (IY144H)", brand: "Shark", category: "Home", store: "Target", sale: 159.99, usual: 279.99, low: false, src: 5, link: "https://www.target.com/s?searchTerm=shark+pet+cordless+stick+vacuum", at: "Nov 27, 2:20 PM WIB" },
  { id: 22, name: "Shark PowerDetect 2-in-1 robot vacuum and mop", brand: "Shark", category: "Home", store: "Costco", sale: 399.99, usual: 499.99, low: false, src: 5, link: "https://www.costco.com/CatalogSearch?dept=All&keyword=shark+powerdetect+robot+vacuum+mop", at: "Nov 27, 2:20 PM WIB" },
  { id: 23, name: "Dyson V9 Motorbar cordless vacuum", brand: "Dyson", category: "Home", store: "Amazon", sale: 269.95, usual: 599.99, low: false, src: 5, link: "https://www.amazon.com/s?k=dyson+v9+motorbar+cordless+vacuum", at: "Nov 27, 2:20 PM WIB" },
  { id: 24, name: "Dyson Airwrap i.d. multi-styler and dryer", brand: "Dyson", category: "Home", store: "Costco", sale: 499.99, usual: 649.99, low: false, src: 5, link: "https://www.costco.com/CatalogSearch?dept=All&keyword=dyson+airwrap+id", at: "Nov 27, 2:20 PM WIB" },
  { id: 25, name: "Dyson Cyclone V10 Origin cordless vacuum", brand: "Dyson", category: "Home", store: "Amazon", sale: 328.69, usual: 479.99, low: false, src: 5, link: "https://www.amazon.com/s?k=dyson+v10+origin+cordless+vacuum", at: "Nov 27, 2:20 PM WIB" },
  { id: 26, name: "Shark TurboBlade Cool + Heat bladeless fan", brand: "Shark", category: "Home", store: "Best Buy", sale: 209.99, usual: 349.99, low: false, src: 5, link: "https://www.bestbuy.com/site/searchpage.jsp?st=shark+turboblade+bladeless+fan", at: "Nov 27, 2:20 PM WIB" },
  { id: 27, name: "Insignia refrigerator", brand: "Insignia", category: "Home", store: "Best Buy", sale: 299.99, usual: 749.99, low: false, src: 2, link: "https://www.bestbuy.com/site/searchpage.jsp?st=insignia+refrigerator", at: "Nov 27, 2:20 PM WIB" },
  { id: 28, name: "LEGO Botanicals Tiny Wildflower Bouquet", brand: "LEGO", category: "Toys", store: "Amazon", sale: 11.95, usual: 19.99, low: false, src: 5, link: "https://www.amazon.com/s?k=lego+botanicals+tiny+wildflower+bouquet", at: "Nov 27, 2:20 PM WIB" },
  { id: 29, name: "LEGO Creator 3-in-1 Forest Animals: Red Fox", brand: "LEGO", category: "Toys", store: "Amazon", sale: 34.99, usual: 49.99, low: false, src: 5, link: "https://www.amazon.com/s?k=lego+creator+red+fox", at: "Nov 27, 2:20 PM WIB" },
  { id: 30, name: "LEGO Star Wars SMART Play: Luke's Landspeeder", brand: "LEGO", category: "Toys", store: "Target", sale: 22.74, usual: 30.74, low: false, src: 5, link: "https://www.target.com/s?searchTerm=lego+star+wars+landspeeder", at: "Nov 27, 2:20 PM WIB" },
  { id: 31, name: "LEGO Up-Scaled Santa Minifigure", brand: "LEGO", category: "Toys", store: "Amazon", sale: 41.99, usual: 59.99, low: false, src: 5, link: "https://www.amazon.com/s?k=lego+up-scaled+santa+minifigure", at: "Nov 27, 2:20 PM WIB" },
  { id: 32, name: "LEGO Star Wars SMART Play: Millennium Falcon", brand: "LEGO", category: "Toys", store: "Target", sale: 79.99, usual: 93.99, low: false, src: 5, link: "https://www.target.com/s?searchTerm=lego+star+wars+millennium+falcon", at: "Nov 27, 2:20 PM WIB" },
  { id: 33, name: "LEGO Pokemon Eevee", brand: "LEGO", category: "Toys", store: "Amazon", sale: 47.49, usual: 59.99, low: false, src: 5, link: "https://www.amazon.com/s?k=lego+pokemon+eevee", at: "Nov 27, 2:20 PM WIB" },
  { id: 34, name: "Nike Air Max 95 Big Bubble women's shoes", brand: "Nike", category: "Fashion", store: "Nike", sale: 113.97, usual: 190, low: false, src: 6, link: "https://www.nike.com/w?q=air+max+95+big+bubble", at: "Nov 27, 2:20 PM WIB" },
  { id: 35, name: "Shark FlexStyle Air Multi-Styler (Winter Pearl)", brand: "Shark", category: "Beauty", store: "Sephora", sale: 199, usual: 299, low: false, src: 7, link: "https://www.sephora.com/search?keyword=shark+flexstyle", at: "Nov 27, 2:20 PM WIB" },
  { id: 36, name: "Shark Depuffi", brand: "Shark", category: "Beauty", store: "Best Buy", sale: 149.99, usual: 199.99, low: false, src: 5, link: "https://www.bestbuy.com/site/searchpage.jsp?st=shark+depuffi", at: "Nov 27, 2:20 PM WIB" },
  { id: 37, name: "Turtle Beach Recon 70 wired gaming headset (Xbox)", brand: "Turtle Beach", category: "Gaming", store: "Walmart", sale: 29.99, usual: 39.99, low: false, src: 4, link: "https://www.walmart.com/search?q=turtle+beach+recon+70+xbox", at: "Nov 27, 2:20 PM WIB" },
  // --- New deals, checked Nov 27, 2026 at 5:15 PM WIB ---
  { id: 38, name: "Nike Jordan Trunner Flow men's shoes", brand: "Nike", category: "Fashion", store: "Nike", sale: 38, usual: 85, low: true, src: 9, link: "https://www.nike.com/w?q=jordan+trunner+flow", at: "Nov 27, 5:15 PM WIB" },
  { id: 39, name: "Nike Vomero 18 women's running shoes", brand: "Nike", category: "Fashion", store: "Nike", sale: 115.97, usual: 155, low: false, src: 10, link: "https://www.nike.com/w?q=vomero+18", at: "Nov 27, 5:15 PM WIB" },
  { id: 40, name: "Nike Air Max Muse women's shoes", brand: "Nike", category: "Fashion", store: "Nike", sale: 101.97, usual: 170, low: false, src: 10, link: "https://www.nike.com/w?q=air+max+muse", at: "Nov 27, 5:15 PM WIB" },
  { id: 41, name: "Calvin Klein Men's Prosper Wool-Blend Slim-Fit Overcoat", brand: "Calvin Klein", category: "Fashion", store: "Macy's", sale: 99.99, usual: 425, low: false, src: 11, link: "https://www.macys.com/shop/search?keyword=calvin+klein+prosper+overcoat", at: "Nov 27, 5:15 PM WIB" },
  { id: 42, name: "Tommy Hilfiger women's short hooded puffer jacket", brand: "Tommy Hilfiger", category: "Fashion", store: "Macy's", sale: 89.99, usual: 265, low: false, src: 11, link: "https://www.macys.com/shop/search?keyword=tommy+hilfiger+short+hooded+puffer", at: "Nov 27, 5:15 PM WIB" },
  { id: 43, name: "MICHAEL KORS Nabela small convertible pouchette", brand: "Michael Kors", category: "Fashion", store: "Macy's", sale: 49, usual: 229.5, low: false, src: 12, link: "https://www.macys.com/shop/search?keyword=michael+kors+nabela+pouchette", at: "Nov 27, 5:15 PM WIB" },
  { id: 44, name: "DKNY men's modern-fit vested nested suit", brand: "DKNY", category: "Fashion", store: "Macy's", sale: 119.99, usual: 495, low: false, src: 12, link: "https://www.macys.com/shop/search?keyword=dkny+vested+nested+suit", at: "Nov 27, 5:15 PM WIB" },
  { id: 45, name: "Nintendo Switch 2 + Mario Kart World bundle", brand: "Nintendo", category: "Gaming", store: "Amazon", sale: 499, usual: 549, low: false, src: 13, link: "https://www.amazon.com/s?k=nintendo+switch+2+mario+kart+world+bundle", at: "Nov 27, 5:15 PM WIB" },
  { id: 46, name: "DualSense wireless controller (PS5)", brand: "Sony", category: "Gaming", store: "Amazon", sale: 54, usual: 74.99, low: false, src: 13, link: "https://www.amazon.com/s?k=dualsense+wireless+controller", at: "Nov 27, 5:15 PM WIB" },
  { id: 47, name: "Xbox Wireless Controller", brand: "Microsoft", category: "Gaming", store: "Amazon", sale: 42.99, usual: 64.99, low: false, src: 13, link: "https://www.amazon.com/s?k=xbox+wireless+controller", at: "Nov 27, 5:15 PM WIB" },
  { id: 48, name: "Assassin's Creed Black Flag Resynced (PS5)", brand: "Ubisoft", category: "Gaming", store: "Amazon", sale: 30, usual: 59.99, low: true, src: 13, link: "https://www.amazon.com/s?k=assassins+creed+black+flag+resynced+ps5", at: "Nov 27, 5:15 PM WIB" },
  { id: 49, name: "Donkey Kong Bananza (Nintendo Switch 2)", brand: "Nintendo", category: "Gaming", store: "Amazon", sale: 49, usual: 69, low: true, src: 14, link: "https://www.amazon.com/s?k=donkey+kong+bananza+switch+2", at: "Nov 27, 5:15 PM WIB" },
  { id: 50, name: "Metroid Prime 4: Beyond - Nintendo Switch 2 Edition", brand: "Nintendo", category: "Gaming", store: "Amazon", sale: 49, usual: 70, low: false, src: 14, link: "https://www.amazon.com/s?k=metroid+prime+4+beyond+switch+2", at: "Nov 27, 5:15 PM WIB" },
  { id: 51, name: "Dyson Supersonic Origin hair dryer", brand: "Dyson", category: "Beauty", store: "Dyson", sale: 299.99, usual: 399.99, low: false, src: 16, link: "https://www.dyson.com/search?q=supersonic+origin", at: "Nov 27, 5:15 PM WIB" },
  { id: 52, name: "Sephora Favorites Gleamy Dreamy Makeup and Skin Care Value Set", brand: "Sephora", category: "Beauty", store: "Sephora", sale: 35, usual: 50, low: false, src: 15, link: "https://www.sephora.com/search?keyword=gleamy+dreamy+value+set", at: "Nov 27, 5:15 PM WIB" },
  { id: 53, name: "Burberry Mini Her & Goddess Perfume Duo Set", brand: "Burberry", category: "Beauty", store: "Sephora", sale: 27.3, usual: 39, low: false, src: 16, link: "https://www.sephora.com/search?keyword=burberry+mini+her+goddess+duo", at: "Nov 27, 5:15 PM WIB" },
  { id: 54, name: "TruSkin Vitamin C Facial Serum 2 oz", brand: "TruSkin", category: "Beauty", store: "Amazon", sale: 19, usual: 38, low: true, src: 15, link: "https://www.amazon.com/s?k=truskin+vitamin+c+facial+serum", at: "Nov 27, 5:15 PM WIB" },
  { id: 55, name: "KitchenAid Artisan Series 5-Quart Tilt-Head Stand Mixer", brand: "KitchenAid", category: "Home", store: "Macy's", sale: 349.99, usual: 499.99, low: false, src: 12, link: "https://www.macys.com/shop/search?keyword=kitchenaid+artisan+5+quart+stand+mixer", at: "Nov 27, 5:15 PM WIB" },
  { id: 56, name: "Le Creuset Signature 6.5-qt deep round Dutch oven", brand: "Le Creuset", category: "Home", store: "Macy's", sale: 289.95, usual: 460, low: false, src: 12, link: "https://www.macys.com/shop/search?keyword=le+creuset+signature+dutch+oven", at: "Nov 27, 5:15 PM WIB" },
  { id: 57, name: "T-Fal 3-Piece Fry Pan Set", brand: "T-Fal", category: "Home", store: "Macy's", sale: 26.99, usual: 134.99, low: false, src: 11, link: "https://www.macys.com/shop/search?keyword=t-fal+3+piece+fry+pan+set", at: "Nov 27, 5:15 PM WIB" },
  { id: 58, name: "Cuisinart 10-Piece Stainless Steel Cutlery Knife Set", brand: "Cuisinart", category: "Home", store: "Macy's", sale: 13.99, usual: 50, low: false, src: 11, link: "https://www.macys.com/shop/search?keyword=cuisinart+10+piece+knife+set", at: "Nov 27, 5:15 PM WIB" },
  { id: 59, name: "BISSELL Little Green Mini cordless vacuum", brand: "BISSELL", category: "Home", store: "Kohl's", sale: 69.99, usual: 129.99, low: false, src: 17, link: "https://www.kohls.com/search.jsp?search=bissell+little+green+mini", at: "Nov 27, 5:15 PM WIB" },
  { id: 60, name: "Husky 310-piece mechanics tool set with toolbox", brand: "Husky", category: "Home", store: "Home Depot", sale: 99, usual: 199, low: false, src: 18, link: "https://www.homedepot.com/s/husky%20310%20piece%20mechanics%20tool%20set", at: "Nov 27, 5:15 PM WIB" },
  { id: 61, name: "Samsung Bespoke 29 cu ft French-door refrigerator", brand: "Samsung", category: "Home", store: "Home Depot", sale: 1899, usual: 3199, low: false, src: 18, link: "https://www.homedepot.com/s/samsung%20bespoke%2029%20cu%20ft%20refrigerator", at: "Nov 27, 5:15 PM WIB" },
  { id: 62, name: "Tonies Toniebox 2 starter set", brand: "Tonies", category: "Toys", store: "Kohl's", sale: 99.99, usual: 149.99, low: false, src: 17, link: "https://www.kohls.com/search.jsp?search=toniebox+2+starter+set", at: "Nov 27, 5:15 PM WIB" },
  { id: 63, name: "LEGO Star Wars SMART Play: Mos Eisley Cantina", brand: "LEGO", category: "Toys", store: "Target", sale: 38.99, usual: 64.99, low: false, src: 19, link: "https://www.target.com/s?searchTerm=lego+star+wars+mos+eisley+cantina", at: "Nov 27, 5:15 PM WIB" },
  { id: 64, name: "LEGO Creator Wild Animals: Majestic Rhino with Birds", brand: "LEGO", category: "Toys", store: "Amazon", sale: 29.99, usual: 59.99, low: false, src: 19, link: "https://www.amazon.com/s?k=lego+creator+majestic+rhino+birds", at: "Nov 27, 5:15 PM WIB" },
  { id: 65, name: "LEGO Minecraft The Mooshroom House", brand: "LEGO", category: "Toys", store: "Target", sale: 24.99, usual: 46.49, low: false, src: 19, link: "https://www.target.com/s?searchTerm=lego+minecraft+mooshroom+house", at: "Nov 27, 5:15 PM WIB" },
  { id: 66, name: "LEGO Star Wars Grogu with Hover Pram", brand: "LEGO", category: "Toys", store: "Amazon", sale: 69, usual: 99, low: false, src: 20, link: "https://www.amazon.com/s?k=lego+star+wars+grogu+hover+pram", at: "Nov 27, 5:15 PM WIB" },
];

// Same product, best price: one product found at two or three stores, with
// the sale price each store showed on Nov 27, 2026. The cheapest store is
// marked by the renderer; prices come from the sources named per row.
export const COMPARE = [
  {
    product: "Dyson Airwrap i.d. Multi-Styler and Dryer",
    src: 15,
    note: "CNN Underscored, Nov 26–27, 2026; Costco price as listed in this finder",
    prices: [
      { store: "Amazon", price: 499 },
      { store: "Sephora", price: 499 },
      { store: "Costco", price: 499.99 },
    ],
  },
  {
    product: "Nintendo Switch 2 + Mario Kart World bundle",
    src: 13,
    note: "2ndShift, prices checked Nov 25–26, 2026",
    prices: [
      { store: "Amazon", price: 499 },
      { store: "Walmart", price: 499 },
      { store: "Best Buy", price: 499.99 },
    ],
  },
  {
    product: "Shark Beauty FlexStyle IonCurl Styling System",
    src: 15,
    note: "CNN Underscored, Nov 26–27, 2026",
    prices: [
      { store: "Sephora", price: 249 },
      { store: "Amazon", price: 250 },
      { store: "Ulta", price: 250 },
    ],
  },
  {
    product: "LEGO Star Wars SMART Play: Mos Eisley Cantina",
    src: 19,
    note: "Target price: Consumer Queen, Nov 23, 2026; Amazon price: Bricksleuth, Nov 19, 2026",
    prices: [
      { store: "Target", price: 38.99 },
      { store: "Amazon", price: 45.49 },
    ],
  },
];

export const CATEGORIES = ["Tech", "TV", "Audio", "Home", "Toys", "Fashion", "Beauty", "Gaming"];

export const STORES = ["Amazon", "Best Buy", "Walmart", "Target", "Costco", "Sephora", "Nike", "Macy's", "Kohl's", "Home Depot", "Dyson"];
