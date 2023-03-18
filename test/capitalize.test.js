import capitalize from "../src/capitalize";

test("Numbers and special characters", () => {
  expect(() => capitalize("1!@#23")).toThrow("Letters only");
});

test("Integer", () => {
  expect(() => capitalize(123)).toThrow("Letters only");
});

test("Letters and numbers", () => {
  expect(() => capitalize("123abc")).toThrow("Letters only");
});

test("Input nothing", () => {
  expect(() => capitalize()).toThrow("Input cannot be blank");
});

test("Input empty string", () => {
  expect(() => capitalize("")).toThrow("Input cannot be blank");
});

test("Input space string", () => {
  expect(() => capitalize("     ")).toThrow("Input cannot be blank");
});

test("Input lowercase string", () => {
  expect(capitalize("abc")).toMatch(/Abc/);
});

test("Input uppercase string", () => {
  expect(capitalize("ABC")).toMatch(/Abc/);
});

test("Input string with space in front", () => {
  expect(capitalize("      abc")).toMatch(/Abc/);
});

test("Input string with space in between", () => {
  expect(capitalize("i CAnNot TyPE at ALL")).toMatch(/I cannot type at all/);
});
