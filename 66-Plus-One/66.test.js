const plusOne = require("./66")

test("The array [1,2,3] plus one is [1,2,4]", () => {
    expect(plusOne([1, 2, 3])).toStrictEqual([1, 2, 4]);
});

test("The array [4,3,2,1] plus one is [4,3,2,2]", () => {
    expect(plusOne([4, 3, 2, 1])).toStrictEqual([4, 3, 2, 2]);
});

test("The array [0] plus one is [1]", () => {
    expect(plusOne([0])).toStrictEqual([1]);
});