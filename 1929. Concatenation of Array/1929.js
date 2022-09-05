var getConcatenation = function (nums) {
    const originalNumsLength = nums.length;
    for (let i = 0; i < originalNumsLength; i++) {
        nums.push(nums[i])
    }
    return nums
};

// Time Complexity: O(n) where n is the length of nums
// Space Complexity: O(n) where n is the length of nums

// 1. Create originalNumsLength = nums.length
// 2. Loop through nums
//      a. Push nums[i] to nums
// 3. Return nums