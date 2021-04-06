var missingNumber = function (nums) {
    let sum = 0;
    for (let i = 0; i <= nums.length; i++) {
        sum += i;
        if (i < nums.length) {
            sum -= nums[i]
        }
    }
    return sum;
};

module.exports = missingNumber;

/*
Time Complexity: O(n)
Space Complexity: O(1)

1. Create sum variable.
2. Loop through nums (including length of nums)
    a. Add sum to "i"
    b. Condition if "i" is less than the length of nums.
        i. Subtract current index value from sum.
3. Return sum.
*/