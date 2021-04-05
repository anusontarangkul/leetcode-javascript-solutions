const makeGood = require("./1544")

test("'leEeetcode' would be reduced to 'leetcode'", () => {
    expect(makeGood("leEeetcode")).toBe("leetcode");
});

test("'abBAcC' would be reduced to ''", () => {
    expect(makeGood("abBAcC")).toBe("");
});

test("'s' would be reduced to 's'", () => {
    expect(makeGood("s")).toBe("s");
});