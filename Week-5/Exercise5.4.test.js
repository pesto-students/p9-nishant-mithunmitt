const mathOperations = require('./Exercise5.4');

describe("Calculator tests", () => {
  test('adding 1 + 2 should return 3', () => {
   var result = mathOperations.sum(1,2);
   // assert
   expect(result).toBe(3);
  });
 })

 describe("Calculator tests", () => {
  test('Difference of 3-2 should return 1', () => {
    expect(mathOperations.diff(3, 2)).toBe(1);
  });
 })

 describe("Calculator tests", () => {
  test('Product of 3 and 2 should return 6', () => {
    expect(mathOperations.product(3, 2)).toBe(6);
  });
 })

 describe("Calculator tests", () => {
  test('Product of 3 and 2', () => {
    expect(mathOperations.product(3, 2)).toBe(5);
  });
 })