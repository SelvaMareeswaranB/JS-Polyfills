Function.prototype.polyfillBind = function (thisArg, ...args) {
  thisArg = thisArg || globalThis;
  const uniqueId = Symbol();
  thisArg[uniqueId] = this;

  return function (...rArgs) {
    const result = thisArg[uniqueId](...args, ...rArgs);
    delete thisArg[uniqueId];
    return result;
  };
};



  