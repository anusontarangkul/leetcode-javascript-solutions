const maxProduct = require("./1464")

test("The maximum value from [3,4,5,2] is 12", () => {
    expect(maxProduct([3, 4, 5, 2])).toBe(12);
});

test("The maximum value from [1,5,4,5] is 16", () => {
    expect(maxProduct([1, 5, 4, 5])).toBe(16);
});

test("The maximum value from [3,7] is 12", () => {
    expect(maxProduct([3, 7])).toBe(12);
});