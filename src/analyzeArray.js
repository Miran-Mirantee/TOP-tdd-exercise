const analyzeArray = (array) => {
  if (array === undefined) throw new Error("Input is required");
  if (!Array.isArray(array)) throw new Error("Please input an array");
  for (let num of array) {
    if (isNaN(num))
      throw new Error("The content inside array must be number only");
  }

  let length = array.length;
  let average =
    array.reduce((accumulator, currentValue) => accumulator + currentValue, 0) /
    length;
  let min = 999;
  let max = -999;

  for (let num of array) {
    if (num < min) min = num;
    if (num > max) max = num;
  }

  const object = {
    average,
    min,
    max,
    length,
  };
  return object;
};

export default analyzeArray;
