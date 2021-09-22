const {
  returnTwo,
  greeting,
  add,
  subtract,
  multiply,
  divide,
} = require("./functions");
describe("Greeting Functions", () => {
  test("Should return two", () => {
    expect(returnTwo()).toBe(2);
  });

  test("Should return Hello, James", () => {
    expect(greeting("James")).toBe("Hello, James");
  });

  test("Should return Hello, Jill", () => {
    expect(greeting("Jill")).toBe("Hello, Jill");
  });
});

describe("math functions", () => {
  test("Should return 3", () => {
    expect(add(1, 2)).toBe(3);
  });
  test("Should return 14", () => {
    expect(add(5, 9)).toBe(14);
  });

  test("should return 7", () => {
    expect(subtract(10, 3)).toBe(7);
  });

  test("should return 45", () => {
    expect(multiply(9, 5)).toBe(45);
  });

  test("should return 7", () => {
    expect(divide(21, 3)).toBe(7);
  });
});
