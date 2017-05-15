// function to represent the shopping list
function validateShoppingList(...item) {
  // if milk is not on the shopping list, add it with the
  // shopping items
  if (item.indexOf('milk') < 0) {
    return ['milk', ...item];
  }
  return item;
}

console.log(validateShoppingList('orange', 'apple', 'eggs'));