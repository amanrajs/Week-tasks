const user = {
    firstName: "Nagasai",
    lastName: "P",
    session: "Javascript",
    city: "Hyderabad",
    state: "telangana"
}

//how to create a new object without city property

const {...newuser} = user;
console.log(newuser);
delete newuser.city
console.log(newuser);

// const {firstName, lastName, session, state} = user
// console.log(firstName);

// const {city, ...newuser2} = user;
// console.log(newuser2);

// const {
//     city,
//     state,
//     ...newuser3
// } = user;
// console.log(newuser3);

// ----------------- Regular Expressions

// const theMatch = "Javascript is Awesome".match(/(Javascript)?.+(Awesome)/i)
// console.log(theMatch);
// const matchedString = theMatch[0];
// const language = theMatch[1];
// const experience = theMatch[2];
// console.log(matchedString, language, experience);

// const theMatch = "is Awesome".match(/(Javascript)?.+(Awesome)/i)

const RE_DATE = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/;

const matchObj = RE_DATE.exec('1999-12-31');
const year = matchObj.groups.year; // 1999
const month = matchObj.groups.month; // 12
const day = matchObj.groups.day; // 31

console.log(year, month, day);

// ----------------- Async iterators

const names = ['tyepescript', 'babel', 'traceur']

// for(let i=0; i< names.length; i++) {
//     console.log(names[i])
// }

// for(key in names) {
//     console.log(names[key])
// }

// names.forEach(name => {
//     console.log(name);
// })

// for of interface is an iterable and doesn't know anything about array or object
for (name of names) {
    console.log(name)
}

