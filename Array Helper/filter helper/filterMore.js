// create an array of items
var products = [
  {name: "cucumber", type: 'vegetable', quantity: 0, price: 1},
  {name: "banana", type: 'fruit', quantity: 10, price: 15},
  {name: "apple", type: 'fruit', quantity: 30, price: 9},
  {name: "spinach", type: 'vegetable', quantity: 3, price: 5}
];

// create filteredWithFilter with filter 
var filteredWithFilter = products.filter(function(product) {
  return product.type === 'fruit'
      && product.quantity > 0
      && product.price < 10;
});
console.log(filteredWithFilter);