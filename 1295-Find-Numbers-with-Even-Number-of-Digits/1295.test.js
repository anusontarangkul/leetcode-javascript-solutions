const findNumbers = require("./1295")

test("The array [12,345,2,6,7896] contains 2 even number of digits", () => {
    expect(findNumbers([12, 345, 2, 6, 7896])).toBe(2);
});

test("The array [555,901,482,1771] contains 1 even number of digits", () => {
    expect(findNumbers([555, 901, 482, 1771])).toBe(1);
});