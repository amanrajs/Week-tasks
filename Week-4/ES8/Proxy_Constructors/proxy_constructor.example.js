// proxy constructor and can be invoked with new - allows us to re-architecture our code
// proxy in english is a middle man
// ex: Microsoft stock
// proxy constructor allows us to cut off almost any part of object change process
// this is new because all of this stuff happens internally and we can't see it by any hooks
// and hence we are creating a middleware (traps!!)- ex: express.js
// using ths we can hijack get, set processes - intercept
// not same as setters and getters in class system, they work little bit different
// API exposes get set has construct etc - total 13 methods
// getPropertyOf()
// setPropertyOf()
// isExtensible()
// preventExtensions()
// getOwnPropertyDescriptor()
// defineProperty()
// deleteProperty()
// has()
// get()
// set()
// ownKeys()
// apply()
// construct()

// tis gives exclusive control over objects - to get and set
// validations
// logic / Middleware

//proxy is a constructor and takes 2 args
// 1. Object to proxy and 2. Object serving as the handler

let handler = {
    // this has all the above properties to trap
    // get trap // takes 2 args - target object and the property asked for 
    get: (target, propName) => {
        // console.log(target, propName);
        //return undefined;
        return target[propName];
    },
    // set takes 3 args - target obj, property and new val of property
    set: (target, propName, newVal) => {
        console.log(target, propName, newVal);
        target[propName] = newVal;
    },
    // has: (target, propName) => {
    //     // we can use reflex here - pending for next
    //     console.log("check");
    // }
}

let newObj = new Proxy({}, handler);
newObj.name = "rob";
newObj.job = "Instructor";
console.log(newObj.name); //  WHAT'S GOING ON HERE?? WHY UNDEFINED??
console.log(newObj.job);
newObj.age = 99;
console.log(newObj.age); // change the get-return part to send something for age property too
console.log(newObj);

// if("name" in newObj) {
//     console.log("I found it!!");
// }

// restrict user to set non-numeric values for age
// check if the property is existed in object 


// ---------- another example

// class Car {
//     constructor(make, model) {
//         this.make = make;
//         this.model = model;
//     }
//     printInfo() {
//         console.log(this.make, this.model);
//     }
// }

// let handler1 = {
//     get: (target, propName) => {
//         console.log(`someone is trying to access ${propName} property`)
//     }
// }

// let myCar = new Car(`toyota`, `camry`);
// let carProxy = new Proxy(myCar, handler1);
// console.log(carProxy.make);


// --------------------- another example ---------------

function sum (x,y){
    return x+y;
}

let handler2 = {
    //apply trap takes 3 args - target, the this, argumentlist
    apply: (target, thisArg, argsList) => {
        console.log("someone called this function");
        // return target(argsList[0], argsList[1]) * 100
    }
}

const sumProxy = new Proxy(sum, handler2);

console.log(sum(2,3));
console.log(sumProxy(2, 3));