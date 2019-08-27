//With the template provided, write a template tag that will validate an SQL statement:
//Only SELECT or UPDATE statements are valid - write validation logic which allows only SELECT, UPDATE
//The passwords table cannot be altered
//there is no order by clause, add it and order by asc
// When done, return the reconstructed query or a note any errors

let city = `Chicago` //data we got from somewhere else (api or database)
let userId = 3; //data we got from somewhere else (api or database)
let command = `SELECT *`;
let table = `USERS`;
let whereClauses = [
    `uid = ${2+1}`,
    `OR city = ${city}`
]
function checkQuery(identifiers,...variables) {
  let finalQuery = "";
  const queryType = variables[0].split(" ")[0];
  const table = variables[1];
  if(queryType == "UPDATE" && table == "PASSWORDS"){
    console.log("You can not change password table");
    return finalQuery;
  }
  if(queryType == 'UPDATE' || queryType == 'SELECT'){
    finalQuery = (order) ? (`${variables[0]} FROM ${table} WHERE ${variables[2][0]} ${variables[2][1]} ORDER BY city`) : (`${variables[0]} FROM ${table} WHERE ${variables[2][0]} ${variables[2][1]} ORDER BY city asc`);
    return finalQuery;
  } else{
    console.log("only update and select query can be processed");
    return finalQuery;
  }
}
var query = checkQuery `${command} FROM ${table} WHERE ${whereClauses} ${order}`;
console.log(query);
// Your code to call the tag and log the return value here...
// your output should be - SELECT * FROM USERS WHERE uid = 3 OR city = chicago ORDER BY asc
// Spread syntax is a more common and easy here if you are comfortable with it
