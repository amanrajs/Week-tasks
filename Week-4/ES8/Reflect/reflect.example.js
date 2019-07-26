// Reflection is to examine, introspect or modify your program at run-time
// Reflect and proxy both go hand in hand
// Reflect can't be instantiated and invoked
// Reflect is a standalone global Object than has methods that are 1:1 with proxy handlers

// Standalone global Object - Math() - math is a static object with whole bunch of static methods
// static methods - they wnt attached to the instance but they are attached to class

// console.log(new Reflect());

// Reflect.get() takes 2 properties
// 1. target, 2.property

const x = {
    a:1, b:2
}

console.log(Reflect.get(x, `a`));
console.log(x[`a`]);

const arr = ["joe", "akash", "mary"];
console.log(arr[0])
console.log(Reflect.get(arr,0));


const monster1 = {
    secret: 'secret',
    counter: 4
};

const handler1 = {
    get: function (target, prop, receiver) {
        if (prop === 'secret') {
            return `You can't access secret`;
        } else {
            //console.log(Reflect.get(target, prop, receiver))
            // arguments[0][prop]
            return Reflect.get(...arguments);
            //fast and easy way, the win with reflect here is very explicit 
            //and we are accessing something inside a variable 
        }
    }
};

const proxy1 = new Proxy(monster1, handler1);

console.log(proxy1.counter);
// expected output: 4

console.log(proxy1.secret);

// ---------------- reflect.has
// works as hasownproperty and in

const obj = {
    number : 22
}

console.log(obj.hasOwnProperty('number'));
console.log('number' in obj);
console.log(Reflect.has(obj, 'number'));

// ---------------reflect.apply
function sum(...array) {
    return array.reduce((number, total)=> {
        return number + total;
    })
}

// sum.apply = function(){
//     throw new Error('I broke apply function!');
// }

console.log(sum[1,2,3]);
console.log(sum.apply(null, [1,2,3]));
console.log(Function.apply.call(sum, null, [1,2,3]));
console.log(Reflect.apply(sum, null, [1, 2, 3]));

// if proxy provides traps to change objects, Reflect provides introspection to get data about objects