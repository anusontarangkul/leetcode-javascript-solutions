const addDigits = require("./258")

test("For the num 38, the return is 2", () => {
    expect(addDigits(38)).toBe(2);
});

test("For the num 0, the return is 0", () => {
    expect(addDigits(0)).toBe(0);
});