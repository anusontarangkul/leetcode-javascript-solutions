const sortString = require("./1370")

test("With the input 'aaaabbbbcccc', the reordered output is 'abccbaabccba'", () => {
    expect(sortString("aaaabbbbcccc")).toStrictEqual("abccbaabccba");
});

test("With the input 'rat', reordered is 'art'", () => {
    expect(sortString("rat")).toStrictEqual("art");
});

test("With the input 'leetcode', reordered is 'cdelotee'", () => {
    expect(sortString("leetcode")).toStrictEqual("cdelotee");
});

test("With the input 'ggggggg', reordered is 'ggggggg'", () => {
    expect(sortString("ggggggg")).toStrictEqual("ggggggg");
});

test("With the input 'spo', reordered is 'ops'", () => {
    expect(sortString("spo")).toStrictEqual("ops");
});