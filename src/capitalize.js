const capitalize = (input) => {
  if (!input) {
    throw new Error("Input cannot be blank");
  }

  let string = String(input);
  for (let char of string) {
    let result = char.match(/[a-z]/i);
    if (!result) {
      throw new Error("Letters only");
    }
  }
};

export default capitalize;
