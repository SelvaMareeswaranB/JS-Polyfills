Function.prototype.polyfillApply = function (thisArg, args) {
  thisArg = thisArg || globalThis;
  const uniqueId = Symbol();
  thisArg[uniqueId] = this;
  const result = thisArg[uniqueId](...args);
  delete thisArg[uniqueId];
  return result;
};
  