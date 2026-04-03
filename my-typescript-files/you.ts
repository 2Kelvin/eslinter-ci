// 1. Define an Interface: This acts as a blueprint/contract for an object
interface Product {
  id: number;
  name: string;
  price: number;
  tags?: string[]; // The '?' means this property is optional
}

// 2. Type an Array: This ensures the list ONLY contains 'Product' objects
const groceryCart: Product[] = [
  { id: 1, name: "Oat Milk", price: 4.5, tags: ["dairy-free"] },
  { id: 2, name: "Avocado", price: 2.0 },
  { id: 3, name: "Coffee Beans", price: 12.0, tags: ["organic", "fair-trade"] },
];

/**
 * 3. Type a Function:
 * We explicitly state that 'items' must be a Product array,
 * and the function MUST return a number.
 */
function calculateGrandTotal(items: Product[], taxRate: number): number {
  const subtotal = items.reduce((acc, item) => acc + item.price, 0);
  return subtotal * (1 + taxRate);
}

// Usage
const tax = 0.07; // 7%
const finalBill = calculateGrandTotal(groceryCart, tax);

console.log(`Your total is: $${finalBill.toFixed(2)}`);
