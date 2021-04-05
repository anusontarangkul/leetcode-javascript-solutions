const areAlmostEqual = require("./1790")

test("'bank' can be swap to 'kanb' with one swap", () => {
    expect(areAlmostEqual("bank", "kanb")).toBe(true);
});

test("It is impossible to make 'attack' equal to 'defend'", () => {
    expect(areAlmostEqual("attack", "defend")).toBe(false);
});

test("The two strings are already equal, so no string swap operation is required", () => {
    expect(areAlmostEqual("kelb", "kelb")).toBe(true);
});

test("It is impossible to make these 2 strings equal", () => {
    expect(areAlmostEqual("abcd", "dcba")).toBe(false);
});