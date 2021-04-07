const selfDividingNumbers = require("./728")

test("With a lower bound of 1 and upper bound of 22, every possible self dividing number is [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]", () => {
    expect(selfDividingNumbers(1, 22)).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]);
});