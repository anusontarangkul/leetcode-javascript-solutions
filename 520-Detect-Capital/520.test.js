const detectCapitalUse = require("./520")

test("'USA' is all capitalized so it fits the rules", () => {
    expect(detectCapitalUse("USA")).toBe(true);
});

test("'FlaG' does not meet the rules", () => {
    expect(detectCapitalUse("FlaG")).toBe(false);
});