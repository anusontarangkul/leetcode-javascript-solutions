const checkPerfectNumber = require("./507")

test("28 is a perfect number", () => {
    expect(checkPerfectNumber(28)).toBe(true);
});

test("6 is a perfect number", () => {
    expect(checkPerfectNumber(6)).toBe(true);
});

test("496 is a perfect number", () => {
    expect(checkPerfectNumber(496)).toBe(true);
});

test("8128 is a perfect number", () => {
    expect(checkPerfectNumber(8128)).toBe(true);
});

test("2 is NOT a perfect number", () => {
    expect(checkPerfectNumber(2)).toBe(false);
});