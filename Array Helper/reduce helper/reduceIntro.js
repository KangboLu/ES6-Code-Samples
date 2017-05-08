// create a number of array and a sum variable
var numbers = [10, 20, 30];
var sum = 0;

// using for loop to get the sum of the number array
for (var i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log("The sum of the numbers is: " + sum);

// using reduce to get the sum of the number array
numbers.reduce(function(sum, number) {
  return sum + number;
}, 0);
console.log("The sum of the numbers is: " + sum);