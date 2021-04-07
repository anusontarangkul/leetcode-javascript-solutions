var createTargetArray = function (nums, index) {
    let target = [];
    for (let i = 0; i < index.length; i++) {
        target.splice(index[i], 0, nums[i])
    }
    return target;
};

module.exports = createTargetArray;

/*
Time Complexity: O(n^2)
Space Complexity: O(n)

1. Create target array.
2. Loop through index.
    a. Insert the appropriate values.
3. Return target
*/