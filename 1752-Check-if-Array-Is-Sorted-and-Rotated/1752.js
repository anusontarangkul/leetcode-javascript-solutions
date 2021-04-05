var check = function (nums) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > nums[(i + 1) % nums.length]) {
            count++;
        }
        if (count > 1) {
            return false;
        }
    }
    return true;
};

module.exports = check;

/*
Time Complexity: O(n)
Space Complexity: O(1)

1. Create count variable.
2. Loop through nums.
    a. Condition if current value is greater than the next value mod length of nums.
        i. Increment count.
    b. If count is greater than 1
        i. Return false.
3. Return true.
*/