var majorityElement = function (nums) {
    let half = nums.length / 2;
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] = (map[nums[i]] | 0) + 1;
        if (map[nums[i]] > half) {
            return nums[i]
        }
    }

};

module.exports = majorityElement;

/*
Time Complexity: O(n)
Space Complexity: O(n)

1. Create half variable.
2. Create map object.
3. Loop through nums.
    a. Add the key and count to the map.
    b. Condition if the count is greater than half.
        i. Return that key.
*/