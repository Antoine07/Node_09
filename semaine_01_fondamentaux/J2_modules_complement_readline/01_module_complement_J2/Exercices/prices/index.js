const { priceTTC } = require("./utils");

console.log(priceTTC(10, 0.2));

const prices = [
  { name: "Apple", priceHT: 1.0, priceTTC: null }, // réf
  { name: "Orange", priceHT: 1.2, priceTTC: null },
  { name: "Rasberry", priceHT: 2.5, priceTTC: null },
];

// 1 . Expressive avec JS
// prices.map((p) => ({ ...p, priceTTC: priceTTC(p.priceHT, 0.2) }));

// 2.

for(const p of prices){

    // on modifie chacune des références dans le tableau prices
    p.priceTTC = priceTTC(p.priceHT, 0.2) ;
}

console.table(prices)