var cars = [
  {mode: 'Buick', price: 'Cheap'},
  {model: 'Camero', price: 'Expensive'}
];

// create a new array with map iterator
var prices = cars.map(function(car) {
  return car.price;
});

console.log(prices);