const numWaterBottles = require("./1518")

test("With 9 bottles and 3 exchanges, You can drink 13 bottles", () => {
    expect(numWaterBottles(9, 3)).toBe(13);
});

test("With 15 bottles and 4 exchanges, You can drink 19 bottles", () => {
    expect(numWaterBottles(15, 4)).toBe(19);
});

test("With 5 bottles and 5 exchanges, You can drink 6 bottles", () => {
    expect(numWaterBottles(5, 5)).toBe(6);
});

test("With 2 bottles and 3 exchanges, You can drink 2 bottles", () => {
    expect(numWaterBottles(2, 3)).toBe(2);
});