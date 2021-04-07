const countLargestGroup = require("./1399")

test("With the integer 13, there are 4 groups", () => {
    expect(countLargestGroup(13)).toBe(4);
});

test("With the integer 2, there are 2 groups", () => {
    expect(countLargestGroup(2)).toBe(2);
});

test("With the integer 15, there are 6 groups", () => {
    expect(countLargestGroup(15)).toBe(6);
});

test("With the integer 24, there are 5 groups", () => {
    expect(countLargestGroup(24)).toBe(5);
});