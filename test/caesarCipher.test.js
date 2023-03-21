import caesarCipher from "../src/caesarCipher";

test("Input char", () => {
  expect(caesarCipher("a", 2)).toMatch(/c/);
});

test("Input string", () => {
  expect(caesarCipher("defend the east wall of the castle", 1)).toMatch(
    /efgfoe uif fbtu xbmm pg uif dbtumf/
  );
});

test("Input string (2)", () => {
  expect(caesarCipher("abc", -3)).toMatch(/xyz/);
});

test("Input string (3)", () => {
  expect(caesarCipher("What the...", -3)).toMatch(/Texq qeb.../);
});

test("Input string (4)", () => {
  expect(caesarCipher("abcdefghijklmnopqrstuvwxyz", 1)).toMatch(
    /bcdefghijklmnopqrstuvwxyza/
  );
});

test("Input string (5)", () => {
  expect(caesarCipher("xyz", 3)).toMatch(/abc/);
});

test("Input string (6)", () => {
  expect(caesarCipher("XYZ", 3)).toMatch(/ABC/);
});

test("Input string (7)", () => {
  expect(caesarCipher("dascsdwewqcsdcsd", 20)).toMatch(/xumwmxqyqkwmxwmx/);
});
