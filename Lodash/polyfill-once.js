function polyFillOnce(cb) {
  let isExecuted = false;
  return function (...arg) {
    if (!isExecuted) {
      isExecuted = true;
      const result = cb.apply(this, arg);
      return result
    }
  };
}
