// classes array of class array
const classes = [
  [ 'Chemistry', '9AM', 'Mr. Darnick' ],
  [ 'Physics', '10:15AM', 'Mrs. Lithun'],
  [ 'Math', '11:30AM', 'Mrs. Vitalis' ]
];

// get class info
const classesAsObject = classes.map(([subject, time, teacher]) => {
    return {subject, time, teacher};
});

console.log(classesAsObject);