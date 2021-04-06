const findErrorNums = require("./645")

test("For the array [1,2,2,4], the duplicate and missing number is [2,3]", () => {
    expect(findErrorNums([1, 2, 2, 4])).toStrictEqual([2, 3]);
});

test("For the array [1,1], the duplicate and missing number is [1,2]", () => {
    expect(findErrorNums([1, 1])).toStrictEqual([1, 2]);
});