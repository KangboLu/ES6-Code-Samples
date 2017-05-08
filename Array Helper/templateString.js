// using template string to get the year
function getYear() {
  const year = new Date().getFullYear();
  return `This year is ${year}`;
}
console.log(getYear());