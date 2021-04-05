const isPalindrome = require("./9")

test("'121' is a palindrome", () => {
    expect(isPalindrome(121)).toBe(true);
});

test("'10' is not a palindrome", () => {
    expect(isPalindrome(10)).toBe(false);
});

test("'-101' is not a palindrome", () => {
    expect(isPalindrome(-101)).toBe(false);
});

