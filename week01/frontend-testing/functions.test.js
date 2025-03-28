const each = require("jest-each").default;

const { findLargest } = require("./functions.js");

describe("findLargest", () => {
  // test and it are interchangeable
  xtest("Exists", () => {
    expect(findLargest).toBeDefined();
  });

  xtest("is a function", () => {
    expect(findLargest instanceof Function).toEqual(true);
  });

  xtest("returns a number", () => {
    expect(typeof findLargest() == "number").toEqual(true);
  });

  test("identify the largest value's index", () => {
    expect(findLargest([1, 1, 4, 1])).toEqual(2);
    //Arrange
    const arr = [1, 1, 4, 1];

    //Act
    const result = findLargest(arr);

    //Assert
    expect(result).toEqual(2);
  });

  xtest("returns -1 if no values are passed in", () => {
    expect(findLargest([])).toEqual(-1);
  });

  each([
    [2, [1, 1, 4, 1]],
    [0, [-1, -10, -100]],
    [0, [1]],
    [-1, []],
    [-1, null],
    [0, [0]],
  ]).test(`returns %s when passed %s`, (expected, arr) => {
    // Arrange
    const numbers = arr;

    // Act
    const result = findLargest(numbers);

    // Assert
    expect(result).toBe(expected);
  });
});
