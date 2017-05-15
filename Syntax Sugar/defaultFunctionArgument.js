// function to create User
function User(id) {
  this.id = id;
}

// function to generate random id
function generateId() {
  return Math.random() * 9999999;
}

// function to create admin user with random ID
function createAdminUser(user = new User(generateId())) {
  user.admin = true;
  return user;
}

// create user with random id and console log it
const user = new User(generateId());
console.log(createAdminUser(user));