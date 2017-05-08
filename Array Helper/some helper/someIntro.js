// create computers array
var computers = [
  {name: 'Mac', ram: '16'},
  {name: 'PC', ram: '8'},
  {name: 'Linux', ram: '4'},
  {name: 'Chromebook', ram: '2'}
];

// check if some computer has ram better than 8
var isEvery = computers.some(function(computer) {
  return computer.ram > 8;
});

// console out
console.log("Is some computer has ram greater than 8GB: " + isEvery);