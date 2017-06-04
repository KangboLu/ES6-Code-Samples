// get a sub element from an array's object 
const companies = [
  {name: 'Google', location: 'Mountain View'},
  {name: 'Facebook', location: 'Menlo Park'},
  {name: 'Amazon', location: 'Seattle'},
  {name: 'Uber', location: 'San Francisco'}
];
const [{location}] = companies;
console.log(`Get first location: ${location}`);


// // get a sub element from an object's array 
// const Google = [
//   {name: 'Google', Googlelocation: ['Mountain View', 'New York', 'London']}
// ];
// const {locations: [Googlelocation]} = Google;
// console.log(`Get first Google Location: ${Googlelocation}`);