let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 3000);
  // reject();
});

promise
  .then(() => console.log("Yeah, resolved"))
  .then(() => console.log("I was also ran"))
  .catch(() => console.log("Uh no!"));