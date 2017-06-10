class Car {
  constructor({title}) {
    this.title = title;
  }

  drive() {
    return 'vroom';
  }
}

// Toyota class inherit the function and constructor from Car class
class Toyota extends Car {
  constructor(options) {
    super(options);
    this.color = options.color;
  }

  honk() {
    return 'beep';
  }
}

const toyota = new Toyota({color: 'red'});
console.log(toyota);
console.log(toyota.honk());
console.log(toyota.drive());