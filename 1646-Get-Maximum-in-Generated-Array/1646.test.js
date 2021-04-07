const getMaximumGenerated = require("./1646")

test("The maximum integer from 7 is 3", () => {
    expect(getMaximumGenerated(7)).toBe(3);
});

test("The maximum integer from 2 is 1", () => {
    expect(getMaximumGenerated(2)).toBe(1);
});

test("The maximum integer from 3 is 2", () => {
    expect(getMaximumGenerated(3)).toBe(2);
});