// class to represent field
function Field(value) {
  this.value = value;
}

// function to check if the field is not empty
Field.prototype.validate = function() {
  return this.value.length > 0;
}

// all the input fields
var username = new Field("name");
var password = new Field("12345");
var birthdate = new Field("1/1/1111");

// array represntation of all the fields
var fields = [username, password, birthdate];

// check if every input field is valid
var isValid = fields.every(function(field) {
  return field.validate;
});

// output the result of validation check
console.log("Are all input field valid: " + isValid);