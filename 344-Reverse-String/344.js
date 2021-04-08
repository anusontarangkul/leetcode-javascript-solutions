var reverseString = function (s) {
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        let temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        left++;
        right--;
    }
    return s;
};

module.exports = reverseString;

/*
Time Complexity: O(n/2);
Space Complexity: O(1)
1. Create left pointer variable.
2. Create right pointer variable.
3. While loop for (left < right).
    a. Create temp variable to the value of s index of left.
    b. Change the s index of left value to the right value.
    c. Change the right value to the temp.
    d. Increment left.
    e. Decrement right.
*/