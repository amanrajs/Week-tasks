
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
        return this._name;
    }
    get strength() {
        return this._strength;
    }
    get speed() {
        return this._speed;
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
    this._city = city;
    this._state = state;
  }
  get healthpoints() {
      console.log("get healthh");
      return this._healthpoints;
  }
  set healthpoints(healthpoints) {
      this._healthpoints = healthpoints;
  }
  get name() {
    return `Mr ${this._name}` ;
   }
   set name(newname){s
    this._name=newname
   }

   editName = () => {
    this._name = `Mr ${this._name}`;
}
powerUp = () =>{
    this._strength += 2; 
}
speedDown = () => {
    this._speed /= 2;
}
}
const details = [20,"unnao","uttar pradesh","Bill", 10, 8];
var hero3 = new Human(...details);
console.log(hero3.name);
hero3.name='abcd';
console.log(hero3.name)