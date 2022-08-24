//----------------------2------------------------
class Calculator {
  constructor(x, y) {
    const condition =
      !x || !y || typeof x !== "number" || typeof y !== "number";

    if (condition) {
      throw new Error("Invalid data");
    }

    this.x = x;
    this.y = y;
  }

  setX = (number) => {
    if (!number || typeof number !== "number") {
      throw new Error("Invalid number");
    }

    this.x = number;
  };

  setY = (number) => {
    if (!number || typeof number !== "number") {
      throw new Error("Invalid number");
    }

    this.y = number;
  };

  logSum = () => {
    return this.x + this.y;
  };

  logMul = () => {
    return this.x * this.y;
  };

  logSub = () => {
    return this.x - this.y;
  };

  logDiv = () => {
    if (this.y === 0) {
      throw new Error("Can not divide by zero");
    }

    return this.x / this.y;
  };
}
//----------------------------1------------------------
function concatStrings(str, separator) {
  let combineStrings = str; 
  const separatorCondition = typeof separator === 'string' ? separator : '';
  
  function getConcatStrings(nextStr) {
    if (typeof nextStr !== 'string') {
      return combineStrings;
    }

    combineStrings += separatorCondition + nextStr;

    return getConcatStrings;
  }

  return getConcatStrings;
}







