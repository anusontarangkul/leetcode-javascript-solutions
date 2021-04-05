const check = require("./1752");

test("The array [3,4,5,1,2] can be rotated to [1,2,3,4,5] by 3", () => {
    expect(check([3, 4, 5, 1, 2])).toBe(true);
});

test("The array [2,1,3,4] can't be rotated to sorted array", () => {
    expect(check([2, 1, 3, 4])).toBe(false);
});

test("The array [1,2,3] can be rotated to sorted array by 0", () => {
    expect(check([1, 2, 3])).toBe(true);
});

test("The array [1,1,1] can be rotated to sorted array by 0", () => {
    expect(check([1, 1, 1])).toBe(true);
});

test("The array [2,1] can be rotated to sorted array by 1", () => {
    expect(check([2, 1])).toBe(true);
});