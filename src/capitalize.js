import checkString from "./checkString";

const capitalize = (input) => {
  let string = checkString(input);

  return (string =
    string.charAt(0).toUpperCase() + string.slice(1).toLowerCase());
};

export default capitalize;
