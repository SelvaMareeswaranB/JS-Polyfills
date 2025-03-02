Function.prototype.polyfillBind = function (thisArg, ...args) {
    if (typeof this !== "function") throw new Error(this + "Is not callable");

  thisArg = thisArg || globalThis;
  const uniqueId = Symbol();
  thisArg[uniqueId] = this;

  return function (...rArgs) {
    const result = thisArg[uniqueId](...args, ...rArgs);
    delete thisArg[uniqueId];
    return result;
  };
};



  