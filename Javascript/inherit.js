class Quad {
  constructor(length, breadth) {
    this.length = length;
    this.breadth = breadth;
  }

  area() {
    return this.breadth * this.length;
  }
}

class Square extends Quad {
  constructor(side) {
    super(side, side); // call the super class constructor and pass in the name parameter
    this.side = side;
  }

  area() {
    return this.side * this.side;
  }
}

let s = new Square(4);
console.log(s.area());
