const capitalize = (input) => {
  let string = String(input);

  for (let char of string) {
    if (char.includes(" ")) {
      string = string.slice(1);
    } else break;
  }

  if (!input || string.length === 0) {
    throw new Error("Input cannot be blank");
  }

  for (let char of string) {
    let result = char.match(/[a-z]/i);
    if (!result) {
      throw new Error("Letters only");
    }
  }

  return string;
};

export default capitalize;
