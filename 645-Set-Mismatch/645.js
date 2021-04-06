var findErrorNums = function (nums) {
    let output = [];
    for (let num of nums) {
        num = Math.abs(num);
        if (nums[num - 1] < 0) {
            output.push(num)
        } else {
            nums[num - 1] *= -1;
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            output.push(i + 1);
            return output;
        }
    }
};

module.exports = findErrorNums;

/*
Time Complexity: O(n)
Space Complexity: O(1)

1. Create output array.
2. Loop through nums.
    a. Turn nums negative where its supposed and have it positive when duplicated.
    b. Push duplicate to output.
3. Loop through nums again.
    a. Find where value is positive.
        i. Push that index value + 1 to the output.
        ii. Return output.
*/