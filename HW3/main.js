//--------------------------1-----------------------
Array.prototype.myFilter = function (callback, thisArg) {
  if (this === null) {
    throw new Error("Can not iterate");
  }
  if (typeof callback !== "function") {
    throw new Error("Callback is not a function");
  }

  let context = this;

  const ObjectFromArray = Object(this);

  if (arguments.length > 1) {
    context = thisArg;
  }

  const filtered = [];

  for (let i = 0; i < ObjectFromArray.length; i++) {
    if (i in ObjectFromArray) {
      if (callback.call(context, context[i], i, ObjectFromArray)) {
        filtered.push(context[i]);
      }
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
