import reverseString from "../src/reverseString";

test("Numbers and special characters", () => {
  expect(() => reverseString("1!@#23")).toThrow("Letters only");
});
