// console.log(typeof(true));
// console.log(typeof(null));
// console.log(typeof(undefined));
// console.log(typeof(2));
// console.log(typeof(`a`));
// console.log(typeof({}));

// new Datatype - symbols - a primitive datatype - a SYMBOL is something which is an identifier, 
// symbols provide totally unique something that we can assign to variables, symbol is not a constructor, 
// we can not so new Symbol(), it's just like a string

// const string1 = String('Hello');
// const string2 = "Hello";

// console.log(string1);
// console.log(string2);

// const aSymbol = Symbol();
// console.log(aSymbol);

console.log(Symbol() === Symbol())

// symbols are used to avoid name collisions in properties of an object
// we can't guarantee normally with property names specifically in objects 
// or more specifically in constructors and classes that a property name is actually private that it can't get messed with

const a = Symbol();
const b = Symbol();

console.log(a===b); // it yields false because they both reference different w=even if they look same and alike
// because we are comparing a random value with another random, symbols will guarantee that one Symbol can never get get used again

/*
class Car {
    constructor (color, make, model) {
        this.color = color;
        this.make = make;
        this.model = model;
    }
}

let myCar = new Car('Red', 'Porsche', 'Cayanne');
console.log(myCar);
myCar.color = `blue`;
console.log(myCar);
*/

const CARCOLOR = Symbol(); // give red and no see changes in below console
const CARMAKE = Symbol();
const CARMODEL = Symbol();

// console.log(CARCOLOR, CARMAKE, CARMODEL)

class Car {
    constructor(color, make, model) {
        this[CARCOLOR] = color;
        this[CARMAKE] = make;
        this[CARMODEL] = model;
    }
}

let myCar = new Car('Red', 'Porsche', 'Cayanne');
console.log(myCar);
myCar.color = `blue`;
console.log(myCar.color);
// console.log(myCar);
// console.log(Symbol.for(`test`) === Symbol.for(`test`))