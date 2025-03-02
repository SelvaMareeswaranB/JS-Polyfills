Function.prototype.polyfillCall = function (thisArg, ...args) {
  if (typeof this !== "function") throw new Error(this + "Is not callable");
  thisArg = thisArg || globalThis;
  const uniqueId = Symbol();
  thisArg[uniqueId] = this;
  const result = thisArg[uniqueId](...args);
  delete thisArg[uniqueId];
  return result;
};

//function definition
function Animal(name, age) {
  this.name = name;
  this.age = age;
}
