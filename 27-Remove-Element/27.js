var removeElement = function (nums, val) {
    let index = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[index] = nums[i];
            index++;
        }
    }
    return index;
};

module.exports = removeElement
/*
Time Complexity: O(n)
Space Complexity: O(1)

1. Create index variable (starting at 0.
2. Loop through index.
    a. Condition if current value doesn't equal "val".
        i. Set nums[index] to nums[i].
        ii. Increment index.
3. Return index.
*/