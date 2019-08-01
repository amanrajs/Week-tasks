let course = {
  trainer:'nagasai'
};
if(Reflect.defineProperty(course, 'name', {value: 'Javascript',writable: false})){
  console.log('property created!');
} else{
  console.log('property not created!');
}
if(Reflect.defineProperty(course, 'duration', {value: '3 hours',writable: false})){
console.log('property created!');
}else{
  console.log('property not created!');
}
Reflect.deleteProperty(course, 'trainer')
if(Reflect.deleteProperty(course, 'duration'))
console.log('property deleted!');

console.log(Reflect.getOwnPropertyDescriptor(course, 'duration').value);
console.log(Reflect.getOwnPropertyDescriptor(course, 'name').value);

// use  reflect API to define property,  delete a property, getOwnpropertydescriptor details
// property to define - name with value as "Javascript", make it read only (writable : false)
// property to define - duration with value as "3 hours", make it read only (writable : false)
// getOwnpropertydescriptor - check and print metadata about name property
