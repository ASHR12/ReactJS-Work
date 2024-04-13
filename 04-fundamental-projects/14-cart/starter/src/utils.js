// utils.js
export function calculateCartTotals(cart) {
  let totalCost = 0;
  let totalItems = 0;

  for (let item of cart.values()) {
    totalCost += item.price * item.amount;
    totalItems += item.amount;
  }

  return { totalCost, totalItems };
}
