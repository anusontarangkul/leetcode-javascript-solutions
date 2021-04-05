const isHappy = require("./202")

test("'19' is a happy number", () => {
    expect(isHappy(19)).toBe(true);
});

test("'2' is not a happy number", () => {
    expect(isHappy(2)).toBe(false);
});