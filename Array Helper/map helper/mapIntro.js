var numbers = [1, 2, 3,];
var doubleNumbers = [];

for (var i = 0; i < numbers.length; i++) {
  doubleNumbers.push(numbers[i] * 2);
}
console.log(doubleNumbers);

var doubled = numbers.map(function(number) {
  return number * 2;
});
console.log(doubled);