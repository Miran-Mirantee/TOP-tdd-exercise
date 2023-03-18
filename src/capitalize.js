const capitalize = (input) => {
  let string = String(input);

  // clear space in front
  for (let char of string) {
    if (char.includes(" ")) {
      string = string.slice(1);
    } else break;
  }

  // check if input exists
  if (!input || string.length === 0) {
    throw new Error("Input cannot be blank");
  }

  // check if character is letter of space
  for (let char of string) {
    let result = char.match(/[a-z|\s]/i);
    if (!result) {
      throw new Error("Letters only");
    }
  }

  return (string =
    string.charAt(0).toUpperCase() + string.slice(1).toLowerCase());
};

export default capitalize;
