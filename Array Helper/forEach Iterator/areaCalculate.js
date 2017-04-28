// create array 
var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 }
];
var areas = [];

// calculate the area of the image using for each
images.forEach(function(image) {
  areas.push(image.height * image.width);
});

// output the area
areas.forEach(function(area) {
  console.log('The area is: ' + area);
});