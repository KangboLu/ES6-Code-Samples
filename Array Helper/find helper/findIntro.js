// create users array
var users = [
  {name: 'Jill'},
  {name: 'Tom'},
  {name: 'Bob'},
  {name: 'Alex'},
  {name: 'Tim'}
];

// find the user and return it to the variable user
var user = users.find(function(user) {
  return user.name === 'Alex';
});

// console log the found user
console.log(user);