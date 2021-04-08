const replaceElements = require("./1299")

test("With the original array [17,18,5,4,6,1], the returned array is [18,6,6,6,1,-1]", () => {
    expect(replaceElements([17, 18, 5, 4, 6, 1])).toStrictEqual([18, 6, 6, 6, 1, -1]);
});

test("With the original array [400], the returned array is [-1]", () => {
    expect(replaceElements([400])).toStrictEqual([-1]);
});