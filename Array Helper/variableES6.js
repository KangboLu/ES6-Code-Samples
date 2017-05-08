const name = "Alex";
let age = 25;
let hourRate = 50;

console.log("age is " + age);
age+=1;
console.log("age is now " + age + ", it is mutable");

console.log("hourRate is " + hourRate);
hourRate+=10;
console.log("hourRate is now " + hourRate + ", it is mutable");

console.log("name is " + name);
try {name = "Adam";}
catch (err) {
  console.log("name is " + name + ", it is not mutable")
}
