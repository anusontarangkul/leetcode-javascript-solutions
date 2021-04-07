const rotateString = require("./796")

test("The string 'abcde' can be rotated to 'cdeab'", () => {
    expect(rotateString("abcde", "cdeab")).toBe(true);
});

test("The string 'abcde' can't be rotated to 'abced'", () => {
    expect(rotateString("abcde", "abced")).toBe(false);
});