import analyzeArray from "../src/analyzeArray";

test("Input nothing", () => {
  expect(() => analyzeArray()).toThrow("Input is required");
});

test("Input non-array", () => {
  expect(() => analyzeArray(123)).toThrow("Please input an array");
});

test("Input string array", () => {
  expect(() => analyzeArray([1, "a", 3, "asasd"])).toThrow(
    "The content inside array must be number only"
  );
});

test("Input array (1)", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toMatchObject({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("Input array (2)", () => {
  expect(analyzeArray([6, 9, 3, 5])).toMatchObject({
    average: 5.75,
    min: 3,
    max: 9,
    length: 4,
  });
});

test("Input array (3)", () => {
  expect(analyzeArray([5, 6, 9, 1, 3, 9, 5, 0])).toMatchObject({
    average: 4.75,
    min: 0,
    max: 9,
    length: 8,
  });
});
