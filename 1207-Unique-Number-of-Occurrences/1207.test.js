const uniqueOccurrences = require("./1207");

test("The number of occurrences in [1,2,2,1,1,3] is unique", () => {
    expect(uniqueOccurrences([1, 2, 2, 1, 1, 3])).toBe(true);
});

test("The number of occurrences in [1,2] is NOT unique", () => {
    expect(uniqueOccurrences([1, 2])).toBe(false);
});

test("The number of occurrences in [-3,0,1,-3,1,1,1,-3,10,0] is unique", () => {
    expect(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0])).toBe(true);
});