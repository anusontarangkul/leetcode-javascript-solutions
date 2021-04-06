const majorityElement = require("./169")

test("The majority element in [3,2,3] is 3", () => {
    expect(majorityElement([3, 2, 3])).toBe(3);
});

test("The majority element in [2,2,1,1,1,2,2] is 2", () => {
    expect(majorityElement([2, 2, 1, 1, 1, 2, 2])).toBe(2);
});