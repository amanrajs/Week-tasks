const name = "Rob";
const hello = "hello" + name;
console.log(hello);

const selectQuery = 'SELECT * FROM users WHERE name ="' + name + '" AND city = "' + name + '"';
console.log(selectQuery);
//use Graveney ``, interchangable with '' and "", it gives the string some more power
const tryit = `hello, ${name}`;
console.log(tryit);

const name1 = "Javascript";
const city = "Hyderabad";

const selectQuery1 = `SELECT * from users WHERE name = "${name1}" AND city = "${city}"`;
console.log(selectQuery1);

//Multi line feature
// const string = "Yesterday was a rainy day,
// lot of traffic"
const string1 = "Yesterday was a rainy day,"+
"lot of traffic";
console.log(string1);

const string2 = "Yesterday was a rainy day, \n" +
    "lot of traffic";
console.log(string2);

const string3 = `Yesterday was a rainy day,
    lot of traffic`;
console.log(string3);

const newHTML = `
<div class="text">
${name}
</div>`

console.log(newHTML);

//Expressions
const anExpression = `43 ** 23 = ${43*23}`;
console.log(anExpression);
