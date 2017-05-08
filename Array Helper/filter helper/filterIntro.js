// create an array of items
var products = [
  {name: "cucumber", type: 'vegetable'},
  {name: "banana", type: 'fruit'},
  {name: "apple", type: 'fruit'},
  {name: "spinach", type: 'vegetable'}
];

// create filteredProducts with for loop comparision
var filteredProducts = [];
for (var i = 0; i < products.length; i++) {
  if (products[i].type === 'fruit')
    filteredProducts.push(products[i]);
}
console.log(filteredProducts);

// create filteredWithFilter with filter 
var filteredWithFilter = products.filter(function(product) {
  return product.type === 'fruit';
});
console.log(filteredWithFilter);