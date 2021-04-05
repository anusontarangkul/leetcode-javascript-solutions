const totalMoney = require("./1716")

test("After the 4th day, the total is 1 + 2 + 3 + 4 = 10", () => {
    expect(totalMoney(4)).toBe(10);
});

test("After the 10th day, the total is (1 + 2 + 3 + 4 + 5 + 6 + 7) + (2 + 3 + 4) = 37", () => {
    expect(totalMoney(10)).toBe(37);
});

test("After the 20th day, the total is (1 + 2 + 3 + 4 + 5 + 6 + 7) + (2 + 3 + 4 + 5 + 6 + 7 + 8) + (3 + 4 + 5 + 6 + 7 + 8) = 96", () => {
    expect(totalMoney(20)).toBe(96);
});