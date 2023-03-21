const _shift = (char, key) => {
  let code = char.charCodeAt(0);
  let offset = 90;
  if ((code >= 97 && code <= 122) || (code >= 65 && code <= 90)) {
    let shiftedCode = code + key;

    if (code > 90) {
      offset = 122;
    }

    let diff = offset - shiftedCode;
    if (diff > 25) {
      shiftedCode += 26;
    } else if (diff < 0) {
      shiftedCode -= 26;
    }

    return String.fromCharCode(shiftedCode);
  }
  return char;
};

const caesarCipher = (string, key) => {
  const shifted = [];
  for (let i = 0; i < string.length; i++) {
    shifted.push(_shift(string.charAt(i), key));
  }
  return shifted.join("");
};

export default caesarCipher;
