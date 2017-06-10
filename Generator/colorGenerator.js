function* colors() {
  yield 'red';
  yield 'blue';
  yield 'green';
}

const Colors = [];
for (let color of colors()) {
  Colors.push(color);
}
console.log(Colors);