// Abstract Class
abstract class AbstractShape {
  protected abstract getArea(): number;
}

class MainCircle extends AbstractShape {
  constructor(private radius: number) {
    super();
  }

  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class MainRectangle extends AbstractShape {
  constructor(private width: number, private height: number) {
    super();
  }

  getArea(): number {
    return this.width * this.height;
  }
}

const circle = new MainCircle(9);
const rectangle = new MainRectangle(3, 4);

console.log(`Circle area: ${circle.getArea()}`);
console.log(`Rectangle area: ${rectangle.getArea()}`);