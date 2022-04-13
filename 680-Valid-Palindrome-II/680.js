var validPalindrome = function (s) {
    let leftPointer = 0;
    let rightPointer = s.length - 1;
    while (leftPointer < rightPointer) {
        if (s[leftPointer] !== s[rightPointer]) {
            const checkLeft = checkInnerPalindrome(leftPointer + 1, rightPointer, s)
            const checkRight = checkInnerPalindrome(leftPointer, rightPointer - 1, s)
            return checkLeft || checkRight
        }
        leftPointer++;
        rightPointer--;
    }
    return true
};

var checkInnerPalindrome = function (leftPointer, rightPointer, s) {
    while (leftPointer < rightPointer) {
        if (s[leftPointer] !== s[rightPointer]) {
            return false
        }
        leftPointer++;
        rightPointer--;
    }
    return true
}

// Time Complexity O(n)
// Space Complexity O(1)

// 1. Create leftPointer and assign it to 0.
// 2. Create rightPointer and assign it to s.length -1.
// 3. While leftPointer is less than rightPointer.
//      a. If the values of the pointer are not equal.
//          i. Find palindrome with leftPointer added one.
//          ii. Find palindrome with rightPointer minus one.
//          iii. Return if either are true
//      b. Increment leftPointer.
//      c. Decrement rightPointer.
// 4. Return true.