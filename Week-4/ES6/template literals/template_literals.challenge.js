// using template literals build a JS program to check if a person is eligible for a price discount or not
// check if
// if a registered member - discount is 5%
// if not registered member - discount is 4%
const users=['aman','vijay','bharath','gagan'];
function registeredMember(name){
  if(users.indexOf(name) !=-1){
  discount=5;
  }
  else{
    discount=4;
  }
  return `discount is ${discount}%`
}
console.log(registeredMember('aman'));
console.log(registeredMember('xyz'));
