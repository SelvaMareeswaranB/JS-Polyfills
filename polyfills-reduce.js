Array.prototype.polyfillReduce = function (cb, initial) {
  const initialProvided = initial !== undefined;
  const len = this.length
  if (!len && !initialProvided)
    throw new TypeError("Reduce of empty array with no initial value");
  if (!len) return initial;
  let acc = initialProvided ? initial : this[0];
  for (let i = initialProvided ? 0 : 1; i < this.length; i++) {
    acc = cb(acc, this[i], i, this);
  }
  return acc;
};

console.log([].polyfillReduce((acc, curr) => Math.max(acc, curr)),);
