// using reduce and find to check duplicate and return an array 
// with no duplicate
function unique(array) {
  // return the array with no duplicate
  return array.reduce(function(previous, element) {
    // push element when the number is not duplicate
    if (!previous.find(function(number) {
      return number === element;
    })) {
      previous.push(element); // push it
    }
    // return the new array
    return previous;
  }, []); // initial state []
}

// testing it 
console.log("Before: " + [1,1,2,2,3,3,4,4,5,5,6,6]);
console.log("After: " + unique([1,1,2,2,3,3,4,4,5,5,6,6]));