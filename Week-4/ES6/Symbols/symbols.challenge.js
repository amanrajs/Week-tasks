const CARCOLOR = Symbol(); // give red and no see changes in below console
const CARMAKE = Symbol();
const CARMODEL = Symbol();

class Car {
    constructor(color, make, model) {
        this[CARCOLOR] = color;
        this[CARMAKE] = make;
        this[CARMODEL] = model;
    }
    set color(color){
      this[CARCOLOR] = color;
    }
    set model(model){
      this[CARMODEL] = model;
    }
    set make(make){
      this[CARMAKE] = make;
    }
    get color() {
      return this[CARCOLOR];
    }
    get model() {
        return this[CARMODEL];
    }
    get make() {
      return this[CARMAKE];
    }
}
let myCar = new Car('Red', 'Porsche', 'Cayanne');
console.log(myCar);
myCar.color = `black`;
myCar.make = `Jaguar`;
myCar.model = `Land Rover`;
console.log(myCar);

// implement the functionality to set and get values to car color - Black, car model - Land Rover and car maker - Jaguar
// you should assign values to those private variables inside class - use setter and getter methods
