
// create an array of numbers
var numbers = [1, 2, 3, 4, 5];

// create a variable to hold the sum
var sum = 0;

// function to add the sum
function adder(number) {
  sum += number;
}
// loop over the array, increament the sum 
numbers.forEach(adder);

// print the sum variable
console.log('The sum is: ' + sum);