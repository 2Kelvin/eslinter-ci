// A function that calculates tax
function calculateTotal(price, taxRate) {
  const taxAmount = price * taxRate;
  return price + taxAmount;
}

// Using the function
const finalPrice = calculateTotal(100, 0.08); // 8% tax

console.log(`The total with tax is: $${finalPrice}`);
