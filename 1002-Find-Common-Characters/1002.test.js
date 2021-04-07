const commonChars = require("./1002")

test("From the array ['bella','label','roller'], the characters that show up in all strings are ['e', 'l', 'l']", () => {
    expect(commonChars(["bella", "label", "roller"])).toStrictEqual(["e", "l", "l"]);
});

test("From the array ['cool','lock','cook']], the characters that show up in all strings are ['c','o']", () => {
    expect(commonChars(["cool", "lock", "cook"])).toStrictEqual(["c", "o"]);
});