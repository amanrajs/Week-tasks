function* aGenerator(){
  for(let i=0;i<10;i++){
    console.log("I just ran");
    yield ; //PAUSE HERE
    console.log("I ran too");
  }
}
const gen = aGenerator();
console.log(gen.next('aman'));
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
