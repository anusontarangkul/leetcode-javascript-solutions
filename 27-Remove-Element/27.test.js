const removeElement = require('./27');

test("The length should be '2'", () => {
    expect(removeElement([3, 2, 2, 3], 3)).toBe(2);
});

test("The length should be '5'", () => {
    expect(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)).toBe(5);
});