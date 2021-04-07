const countCharacters = require("./1160")

test("The sum of lengths of all good strings formed by the chars 'attach' from the array ['cat','bt','hat','tree'] is 6", () => {
    expect(countCharacters(["cat", "bt", "hat", "tree"], "attach")).toBe(6);
});

test("The sum of lengths of all good strings formed by the chars 'welldonehoneyr' from the array ['hello','world','leetcode'] is 10", () => {
    expect(countCharacters(["hello", "world", "leetcode"], "welldonehoneyr")).toBe(10);
});