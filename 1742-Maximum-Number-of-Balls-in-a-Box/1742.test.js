const countBalls = require("./1742");

test("Box 1 has the most number of balls with 2 balls", () => {
    expect(countBalls(1, 10)).toBe(2);
});

test("Boxes 5 and 6 have the most number of balls with 2 balls in each", () => {
    expect(countBalls(5, 15)).toBe(2);
});

test("Box 10 has the most number of balls with 2 balls", () => {
    expect(countBalls(19, 28)).toBe(2);
});

