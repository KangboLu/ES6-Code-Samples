// create an array of primary colors
var primaryColors = [
  {color: 'red'},
  {color: 'yellow'},
  {color: 'blue'},
];

// using reduce helper to get all the colors from primaryColors
var colors = primaryColors.reduce(function(previous, primaryColor) {
  previous.push(primaryColor.color);
  return previous;
}, []);

console.log(colors);