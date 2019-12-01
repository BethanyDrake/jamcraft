//customers enter the store at regular(ish) intervals. They will look at items in a random order, and will have a chance of buying it.

// if the item is priced at the value of the item, they might buy it.
//if the price is "too high" (double the asking price? ) wont buy it.
// if it is free, they will almost definitely buy it.

//after looking at an item, they have a chance of leaving the store. if they have looked at all the items, they will leave the store.

import {getRandomItemInArray} from './util'
import {items} from './items'
const chanceOfBuying = (price, value) => {
  const chance = 0.9 - (0.4 * price / value);
  return chance > 0 ? chance : 0;
}



export const examineRandomItem = (inventory, buy, itemPrices) => {
  const forSaleItems = inventory.filter(item => item.isForSale);
  if (forSaleItems.length === 0) return;
  const item = getRandomItemInArray(forSaleItems);
  const price = itemPrices[item.itemName];
  const value = items.filter(i => i.name === item.itemName)[0].value;
  const chanceOfBuyingItem = chanceOfBuying(price, value);
  if (Math.random() < chanceOfBuyingItem) {
    buy(item);
  }
}
