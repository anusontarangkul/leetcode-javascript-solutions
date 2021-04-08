const stringMatching = require("./1408")

test("The substrings from ['mass','as','hero','superhero'] are ['as','hero']", () => {
    expect(stringMatching(["mass", "as", "hero", "superhero"])).toStrictEqual(["as", "hero"]);
});

test("The substrings from ['leetcode','et','code'] are ['et','code']", () => {
    expect(stringMatching(["leetcode", "et", "code"])).toStrictEqual(["et", "code"]);
});

test("The substrings from ['blue','green','bu'] are []", () => {
    expect(stringMatching(["blue", "green", "bu"])).toStrictEqual([]);
});