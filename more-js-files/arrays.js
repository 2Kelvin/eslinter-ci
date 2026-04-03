const cart = [5.99, 12.5, 45.0, 2.0];

// 1. Filter: Keep only items over $10
const expensiveItems = cart.filter((price) => price > 10);

// 2. Reduce: Sum the filtered items
const total = expensiveItems.reduce((sum, price) => sum + price, 0);

console.log("Items over $10:", expensiveItems);
console.log("Sum of expensive items:", total);
