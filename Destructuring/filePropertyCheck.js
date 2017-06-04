// create object to save file info
var fileInfo = {
  name: 'repost',
  extension: 'jpg',
  size: 14040
};

// function using ES6 destructuring feature to display info
function fileSummary({name, extension, size}, {color}) {
  return `The ${color} file ${name}.${extension} has size ${size}.`;
}

// console log the summary 
console.log(fileSummary(fileInfo, {color: 'red'}));