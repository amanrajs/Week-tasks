// 1. SET 
// Rewrite the sample code below so that every time a property is set a callback runs.
// your callback will check if the property changed is employees.

//If it is employees, make sure if it is an Array, a string or null.
//If anything else comes, respond with an appropriate message
//If not employees, let it pass

let manager = {
    office: `Dubai`,
    dept: `sales`,
    employees: 0
}

manager.office = `London` //updates
manager.employees = ['Jim', 'Patrick', 'Mary']; //updates
manager.employees = 3; // doesn't update
manager.employees = null; // updates
manager.employees = {name:'Jim'} // doesn't update

// 2. GET
// adjust the following code so that anytime an internal object with accessLevel of 1 is accessed,
//"Access Denied" is returned.

const users = [
    {
        username: `bob`,
        accessLevel: 1,
        accessCode: 1234
    },
    {
        username: `Mary`,
        accessLevel: 2,
        accessCode: 2345
    },
    {
        username: `Harold`,
        accessLevel: 2,
        accessCode: 9999
    }
]

console.log(users[0].username)  // Access Denied
console.log(users[0].accessCode) // Access Denied
console.log(users[1].accessCode) // 2345
console.log(users[2].username) // Harold