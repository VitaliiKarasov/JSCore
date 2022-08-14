// -----------------1---------------------
const makeObjectDeepCopy = (obj) => {
  if (typeof obj !== "object" || obj === null) return obj;

  const newObject = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    const value = obj[key];
    newObject[key] = makeObjectDeepCopy(value);
  }

  return newObject;
};
// -----------------2---------------------
function selectFromInterval(arr, num1, num2) {
  if (
    typeof num1 !== "number" ||
    typeof num2 !== "number" ||
    arr.some((el) => typeof el !== "number")
  ) {
    throw new Error("Error!");
  }

  const numOneIsGreater = num1 > num2;
  const selection = [];
  const sortArray = arr.sort((a, b) => a - b);

  for (const elem of sortArray) {
    if (numOneIsGreater && elem >= num2 && elem <= num1) {
      selection.push(elem);
    } else if (!numOneIsGreater && elem >= num1 && elem <= num2) {
      selection.push(elem);
    }
  }

  return selection;
}
// -----------------3---------------------
function myIterable(obj) {
  const iterable = [];

  if (obj.from > obj.to) {
    throw new Error("TO key cannot be greater than FROM!!!");
  } else if (isNaN(obj.from) || isNaN(obj.to)) {
    throw new Error("Error");
  }

  const toNum = obj.to;
  const fromNum = obj.from;

  for (let i = fromNum; i <= toNum; i++) {
    iterable.push(i);
  }

  return iterable;
}
