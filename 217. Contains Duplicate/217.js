var containsDuplicate = function (nums) {
    const numSet = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (numSet.has(nums[i])) {
            return true;
        }
        numSet.add(nums[i])
    }
    return false;
};

// time complexity: O(n) where n is the length of nums
// space complexity: O(n) where n is the length of nums

// 1. Create a new numSet.
// 2. Loop through nums
//      a. If numSet has current num.
//          i. Return true.
//      b. Add current num to numSet.
// 3. Return falses