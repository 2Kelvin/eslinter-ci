// Define the allowed strings
type OrderStatus = "Pending" | "Shipped" | "Delivered" | "Cancelled";

interface Order {
  id: number;
  status: OrderStatus; // Must be one of the four strings above
}

const myOrder: Order = {
  id: 101,
  status: "Pending",
};

function getOrderStatusMessage(order: Order): string {
  switch (order.status) {
    case "Pending": {
      return "Preparing...";
    }
    case "Shipped": {
      return "On the way!";
    }
    case "Delivered": {
      return "Arrived at your door.";
    }
    case "Cancelled": {
      return "This order was stopped.";
    }
    // No 'default' needed because all 4 cases are covered!
  }
}

// Simple Usage
console.log(getOrderStatusMessage(myOrder));
// Output: "Order #101 is being prepared."
