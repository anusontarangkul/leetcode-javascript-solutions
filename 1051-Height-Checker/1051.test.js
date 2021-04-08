const heightChecker = require("./1051")

test("The height checker for [1,1,4,2,1,3] is 3", () => {
    expect(heightChecker([1, 1, 4, 2, 1, 3])).toBe(3);
});

test("The height checker for [5,1,2,3,4] is 5", () => {
    expect(heightChecker([5, 1, 2, 3, 4])).toBe(5);
});

test("The height checker for [1,2,3,4,5] is 0", () => {
    expect(heightChecker([1, 2, 3, 4, 5])).toBe(0);
});