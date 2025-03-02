Function.prototype.polyfillApply = function (thisArg, args) {
  if (typeof this !== "function") throw new Error(this + "Is not callable");
  if (!Array.isArray(args))
    throw new TypeError(" CreateListFromArrayLike called on non-object");
  thisArg = thisArg || globalThis;
  const uniqueId = Symbol();
  thisArg[uniqueId] = this;
  const result = thisArg[uniqueId](...args);
  delete thisArg[uniqueId];
  return result;
};
