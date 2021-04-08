const shortestToChar = require("./821")

test("The string 'loveleetcode' and character 'e' returns the array [3,2,1,0,1,0,0,1,2,2,1,0]", () => {
    expect(shortestToChar("loveleetcode", "e")).toStrictEqual([3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]);
});

test("The string 'aaab' and character 'b' returns the array [3,2,1,0]", () => {
    expect(shortestToChar("aaab", "b")).toStrictEqual([3, 2, 1, 0]);
});