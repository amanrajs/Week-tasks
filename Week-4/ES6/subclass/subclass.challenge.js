
// inheritance - subclasses

//implement methods in subclass (Human) which will override parent class functionality

//1. implement a custom function which will add "Mr" to name property in subclass
//2. implement a method in subclass which will increment the power by 2
//3. implement a method in subclass to reduce the power by half
//4. add 2 more properties to Human class - city and state (private to human class)
class superhero {
    constructor(name, strength, speed) {
        this._name = name;
        this._strength = strength;
        this._speed = speed;
        // this.goodHero = true; // focus on this
    }
    powerUp() {
        this.strength += 5;
    }
    get name() {
        console.log("get name");
        return this._name;
    }
    set name(newname) {
        this._name = newname;
    }
    static goodHero() {
        return true;
    }
}

class Human extends superhero {
  constructor(healthpoints,city,state,...superherostuff) {
    super(...superherostuff);
    this._healthpoints=healthpoints;
    this._city=city;
    this._state=state;
  }
  get healthpoints() {
      console.log("get healthh");
      return this._healthpoints;
  }
  set healthpoints(healthpoints) {
      this._healthpoints = healthpoints;
  }
  get city() {
      console.log("get city");
      return this.city;
  }
  set city(city) {
      this.city=city;
  }
  get state() {
      console.log("get sate");
      return this._state;
  }
  set state(state) {
      this._state = state;
  }
  newName() {
     this._name=`Mr ${this._name}`;
   }
   powerHalf() {
     this._strength /= 2;
   }
   powerDouble() {
     this._strength *= 2;
   }
}
function newName() {
   this._name=`Mr ${this._name}`;
 }
const details = [20,"unnao","uttar pradesh","Bill", 10, 8];
const hero3 = new Human(...details);
console.log(hero3);
hero3.newName();
hero3.powerHalf();
console.log(hero3.name);
// hero3.name = "sai";
// console.log(hero3)
// const hero4 = new superhero(20, "abc", 8);
// console.log(hero4);
