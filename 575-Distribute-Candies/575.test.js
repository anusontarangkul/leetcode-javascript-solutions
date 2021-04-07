const distributeCandies = require("./575")

test("The candy type [1,1,2,2,3,3] returns 3 different types", () => {
    expect(distributeCandies([1, 1, 2, 2, 3, 3])).toBe(3);
});

test("The candy type [1,1,2,3] returns 2 different types", () => {
    expect(distributeCandies([1, 1, 2, 3])).toBe(2);
});

test("The candy type [6,6,6,6] returns 1 different types", () => {
    expect(distributeCandies([6, 6, 6, 6])).toBe(1);
});