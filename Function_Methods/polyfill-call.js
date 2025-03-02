Function.prototype.polyfillCall = function (thisArg, ...args) {
  thisArg = thisArg || globalThis
  const uniqueId = Symbol()
  thisArg[uniqueId]=this
  const result = thisArg[uniqueId](...args)
  delete thisArg[uniqueId]
  return result
};

//function definition
function Animal(name, age) {
  this.name = name;
  this.age = age;
}

//function definition
function Horse(name, age) {
  Animal.polyfillCall(this, name, age);
  this.sound = "Neigh";
}

//function definition
function Snake(name, age) {
  Animal.polyfillCall(this, name, age);
  this.sound = "Hiss";
}

const snake1 = new Snake("Harry", 5);
console.log(snake1);

const horse1 = new Horse("Arnold", 8);
console.log(horse1);
