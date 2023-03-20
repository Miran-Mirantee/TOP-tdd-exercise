const _checkNums = (a, b) => {
  if (a === undefined || b === undefined)
    throw new Error("Please insert two inputs");
  if (isNaN(a) || isNaN(b)) throw new Error("Number only");
};

const calculator = {
  add: (a, b) => {
    _checkNums(a, b);
    return parseFloat(a) + parseFloat(b);
  },
  subtract: (a, b) => {
    _checkNums(a, b);
    return parseFloat(a) - parseFloat(b);
  },
  divide: (a, b) => {
    _checkNums(a, b);
    return parseFloat((parseFloat(a) / parseFloat(b)).toFixed(2));
  },
  multiply: (a, b) => {
    _checkNums(a, b);
    return parseFloat(a) * parseFloat(b);
  },
};

export default calculator;
