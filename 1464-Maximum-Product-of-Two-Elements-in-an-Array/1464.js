var maxProduct = function (nums) {
    let max = 1;
    let max2 = 1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > max && nums[i] > max2) {
            max2 = max;
            max = nums[i];
        } else if (nums[i] > max2) {
            max2 = nums[i];
        }
    }
    return (max - 1) * (max2 - 1)
};

module.exports = maxProduct;
/*
Time Complexity: O(n)
Space Complexity: O(1)
1. Create a max variable.
2. Create a max2 variable.
3. Loop through nums.
    a. Create condition if current index value is greater than max and max2.
        i. Change max2 to max
        ii. Change the max to current index value.
    b. Else if the current index value is greater than max2.
        i. Change max2 to the current index value.
4. Return (max -1) * (max2 -1)
*/