import checkString from "./checkString";

const reverseString = (input) => {
  let string = checkString(input);

  return [...string].reverse().join("");
};

export default reverseString;
