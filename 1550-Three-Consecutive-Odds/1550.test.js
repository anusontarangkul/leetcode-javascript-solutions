const threeConsecutiveOdds = require("./1550");

test("The array [2,6,4,1] does not have 3 consecutive odd numbers", () => {
    expect(threeConsecutiveOdds([2, 6, 4, 1])).toBe(false);
});

test("The array [1,2,34,3,4,5,7,23,12] does have 3 consecutive odd numbers", () => {
    expect(threeConsecutiveOdds([1, 2, 34, 3, 4, 5, 7, 23, 12])).toBe(true);
});