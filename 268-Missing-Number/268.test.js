const missingNumber = require("./268")

test("2 is the missing number from the array [3,0,1]", () => {
    expect(missingNumber([3, 0, 1])).toBe(2);
});

test("2 is the missing number from the array [0,1]", () => {
    expect(missingNumber([0, 1])).toBe(2);
});

test("8 is the missing number from the array [9,6,4,2,3,5,7,0,1]", () => {
    expect(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])).toBe(8);
});

test("1 is the missing number from the array [0]", () => {
    expect(missingNumber([0])).toBe(1);
});