// Main Class
class Toy {
  run(): void {
    console.log('Toy is running...')
  }
}

// Sub-Class 
class SpecialToy extends Toy {
  doSomethingSpecial(): void {
    console.log('Lets do something more special than regular');
  }
}

// Creating Objects
const regularToy = new Toy();
regularToy.run();

const specialToy = new SpecialToy();
specialToy.run();
specialToy.doSomethingSpecial()