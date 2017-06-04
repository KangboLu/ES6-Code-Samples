const points = [
  [4, 5],
  [10, 1],
  [0, 40]
];

// get points with formated object syntax
const xyPoints = points.map(([x, y]) => {
  return {x, y};
});

// output the xyPoints
console.log(xyPoints);