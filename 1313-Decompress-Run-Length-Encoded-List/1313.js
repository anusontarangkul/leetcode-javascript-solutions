var decompressRLElist = function (nums) {
    let output = [];
    for (let i = 0; i < nums.length; i += 2) {
        const freq = nums[i];
        const val = nums[i + 1];
        output.push(...new Array(freq).fill(val))
    }
    return output;
};

module.exports = decompressRLElist;
/*
Time Complexity: O(n)
Space Complexity: O(n)
1. Create output array.
2. Loop through nums.
    a. Create freq variable.
    b. Create val variable.
    c. Push to output a new array consisting of the freq and val.
3. Return output.

*/