// a function to return info of signup
// function to signup user with ES6 destruturing feature
function signup({username, email, password, dateOfBirth, city}) {
  console.log(`Sign up sucess! Hi, ${username}!\nHere is your info:`);
  console.log(`1. email: ${email}`);
  console.log(`2. dateOfBirth: ${dateOfBirth}`);
  console.log(`3. city: ${city}`);
}

// create user and sign it up
const user = {
  username: 'Mike',
  password: '123',
  email: 'yourEmail@example.com',
  dateOfBirth: '1/1/2000',
  city: 'SF',
}
signup(user);