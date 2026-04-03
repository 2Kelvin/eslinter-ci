// Data: Individual prices
const priceA = 10;
const priceB = 25;
const priceC = 15;

// Store them in a simple list (array)
const prices = [priceA, priceB, priceC];
let total = 0;

// The Loop: Add each price to the total
for (const price of prices) {
  total += price;
}

console.log(`Total cost using a loop: $${total}`);
