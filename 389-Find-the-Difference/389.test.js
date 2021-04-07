const findTheDifference = require("./389")

test("The letter added betweeb 'abcd' and 'abcde' is 'e'", () => {
    expect(findTheDifference("abcd", "abcde")).toBe("e");
});

test("The letter added betweeb '' and 'y' is 'y'", () => {
    expect(findTheDifference("", "y")).toBe("y");
});

test("The letter added betweeb 'a' and 'aa' is 'a'", () => {
    expect(findTheDifference("a", "aa")).toBe("a");
});

test("The letter added betweeb 'ae' and 'aea' is 'a'", () => {
    expect(findTheDifference("ae", "aea")).toBe("a");
});