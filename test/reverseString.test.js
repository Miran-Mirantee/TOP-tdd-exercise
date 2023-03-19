import reverseString from "../src/reverseString";

test("Numbers and special characters", () => {
  expect(() => reverseString("1!@#23")).toThrow("Letters only");
});

test("Integer", () => {
  expect(() => reverseString(123)).toThrow("Letters only");
});

test("Letters and numbers", () => {
  expect(() => reverseString("123abc")).toThrow("Letters only");
});

test("Input nothing", () => {
  expect(() => reverseString()).toThrow("Input cannot be blank");
});

test("Input empty string", () => {
  expect(() => reverseString("")).toThrow("Input cannot be blank");
});

test("Input space string", () => {
  expect(() => reverseString("     ")).toThrow("Input cannot be blank");
});

test("input lowercase string", () => {
  expect(reverseString("abcdefg")).toMatch(/gfedcba/);
});
