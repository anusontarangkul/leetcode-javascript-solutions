const createTargetArray = require("./1389")

test("With the nums [0, 1, 2, 3, 4] and index [0, 1, 2, 2, 1], the target array is [0, 4, 1, 3, 2]", () => {
    expect(createTargetArray([0, 1, 2, 3, 4], [0, 1, 2, 2, 1])).toStrictEqual([0, 4, 1, 3, 2]);
});

test("With the nums [1,2,3,4,0] and index [0,1,2,3,0], the target array is [0,1,2,3,4]", () => {
    expect(createTargetArray([1, 2, 3, 4, 0], [0, 1, 2, 3, 0])).toStrictEqual([0, 1, 2, 3, 4]);
});

test("With the nums [1] and index [0], the target array is [1]", () => {
    expect(createTargetArray([1], [0])).toStrictEqual([1]);
});