const removeDuplicates = require("./1047");

test("The final string from 'abbaca' is 'ca'", () => {
    expect(removeDuplicates("abbaca")).toBe("ca");
});