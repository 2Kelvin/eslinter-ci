const product = {
  name: "Espresso Machine",
  price: 150,
  inStock: true,

  // A method: A function that belongs to the object
  applyDiscount: function (percent) {
    this.price = this.price * (1 - percent / 100);
  },
};

console.log(`Original price of ${product.name}: $${product.price}`);
product.applyDiscount(10); // 10% off
console.log(`New price after discount: $${product.price}`);
