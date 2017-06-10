// let url = "https://jsonplaceholder.typicode.com/posts/";
// fetch(url)
//   .then(response => response.json())
//   .then(data => console.log(data));

let url = "https://jsonplaceholder.typicode.com/posts/";
fetch(url)
  .then(response => console.log(response))
  .catch(error => console.log('BAD', error));