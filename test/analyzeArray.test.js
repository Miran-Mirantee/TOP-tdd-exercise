import analyzeArray from "../src/analyzeArray";

test("test", () => {
  expect(analyzeArray()).toMatchObject({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
