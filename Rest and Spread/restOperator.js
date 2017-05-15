// treats arguments as an array
function addNum (...numbers) {
  // use reduce operator to return the sum of elements
  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
}

console.log(`The sum of array [1, 2, 3, 4, 5] is ${addNum(1,2,3,4,5)}`);