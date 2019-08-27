const x = 2 * 2 * 2 * 2 * 2;
console.log(x);

const x2 = 2 ** 5;

const a = 3 ** 2.5;

const b = 100* -1;

const d = 2 ** 3 ** 4;

const e = (2 ** 3) ** 4;
const f = 2 ** (3 ** 4);
console.log(d , e ,f);


// includes is essentially same as indexof except it returns a boolean

// const arr = [1,2,3,4,5];
// if(arr.indexOf(22)> -1) {
//     console.log("found");
// } else {
//     console.log("not found");
// }

// const inArr = arr.includes(2);
// console.log(inArr);

//indexof uses strict comparision, compares with every single value internally

console.log(NaN === NaN)

const arr = [1, 2, 3, 4, 5, NaN];
if (arr.indexOf(NaN) > -1) {
    console.log("found");
} else {
    console.log("not found");
}

const inArr = arr.includes(NaN);
console.log(inArr);

// destructuring rest paramaters

const someJSON = {
    name: "Wayne Rooney",
    position: "Forward",
    club: "Manchester United"
}

const {name, position, club} = someJSON;

console.log(name, position, club);

function sum(...array) {
    return array.reduce((number, total) => {
        return number + total;
    })
}

console.log(sum(1,4,7,3));
