const romanToInt = require("./13");

test("The integer of the roman numeral of 'III' is 3", () => {
    expect(romanToInt("III")).toBe(3);
});

test("The integer of the roman numeral of 'IV' is 4", () => {
    expect(romanToInt("IV")).toBe(4);
});

test("The integer of the roman numeral of 'IX' is 9", () => {
    expect(romanToInt("IX")).toBe(9);
});

test("The integer of the roman numeral of 'LVIII' is 58", () => {
    expect(romanToInt("LVIII")).toBe(58);
});

test("The integer of the roman numeral of 'MCMXCIV' is 1994", () => {
    expect(romanToInt("MCMXCIV")).toBe(1994);
});