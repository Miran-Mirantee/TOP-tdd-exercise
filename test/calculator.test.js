import calculator from "../src/calculator";

test("Input one string", () => {
  expect(() => calculator.add("a")).toThrow("Please insert two inputs");
});

test("Input two string", () => {
  expect(() => calculator.subtract("a", "b")).toThrow("Number only");
});

test("Input only one number", () => {
  expect(() => calculator.divide(1)).toThrow("Please insert two inputs");
});

test("Addition: Input two integers", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("Addition: Input string integers", () => {
  expect(calculator.add("1", "4")).toBe(5);
});

test("Addition: Input float and integer", () => {
  expect(calculator.add(1.5, 2)).toBe(3.5);
});

test("Addition: Input negative", () => {
  expect(calculator.add(-50, 2)).toBe(-48);
});

test("Subtraction: Input two integers", () => {
  expect(calculator.subtract(1, 2)).toBe(-1);
});

test("Subtraction: Input string integers", () => {
  expect(calculator.subtract("14", "1")).toBe(13);
});

test("Subtraction: Input float and integer", () => {
  expect(calculator.subtract(1.5, 2)).toBe(-0.5);
});

test("Subtraction: Input negative", () => {
  expect(calculator.subtract(-10, -12)).toBe(2);
});

test("Division: Input two integers", () => {
  expect(calculator.divide(12, 50)).toBe(0.24);
});

test("Division: Input string integers", () => {
  expect(calculator.divide("9", "3")).toBe(3);
});

test("Division: Input float and integer", () => {
  expect(calculator.divide(4.5, 5)).toBe(0.9);
});

test("Division: Input negative", () => {
  expect(calculator.divide(4, -3)).toBe(-1.33);
});

test("Multiplication: Input two integers", () => {
  expect(calculator.multiply(15, 5)).toBe(75);
});

test("Multiplication: Input string integers", () => {
  expect(calculator.multiply("3", "6")).toBe(18);
});

test("Multiplication: Input float and integer", () => {
  expect(calculator.multiply(9.1, 4)).toBe(36.4);
});

test("Multiplication: Input negative", () => {
  expect(calculator.multiply(9, -5)).toBe(-45);
});
