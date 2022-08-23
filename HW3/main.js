//--------------------------1-----------------------
Array.prototype.myFilter = function (callbackFn) {
  const filtered = [];

  for (let i = 0; i < this.length; i++) {
    const element = callbackFn(this[i], i, this);

    if (element) {
      filtered.push(element);
    }
  }

  return filtered;
};
//------------------------2------------------------
function createDebounceFunction(callbackFn, ms) {
  let counter = null;

  return function () {
    clearTimeout(counter);

    counter = setTimeout(() => {
      callbackFn.apply(this, arguments);
    }, ms);
  };
}
