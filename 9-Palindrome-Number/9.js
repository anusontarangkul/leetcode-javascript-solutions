var isPalindrome = function (x) {
    if (x < 0) {
        return false;
    }
    let reversed = 0;
    let current = x;
    while (current !== 0) {
        reversed = reversed * 10 + current % 10;
        current = Math.floor(current / 10);
    }
    return x === reversed;
};

module.exports = isPalindrome

/*
Time Complexity: O(n)
Space Complexity: O(1)
1. Condition if "x" is negative.
    a. Return false.
2. Create reversed variable.
3. Create current variable equal to x.
4. While loop for current doesn't equal to 0.
    a. Set reveresed equal to reversed * 10 + current mod 10.
    b. Divide current by 10.
5. Return if "x" is equal to reversed.
*/