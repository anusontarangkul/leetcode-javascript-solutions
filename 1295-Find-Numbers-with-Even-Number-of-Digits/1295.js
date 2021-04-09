var findNumbers = function (nums) {
    let evenCount = 0;
    for (let num of nums) {
        if (num.toString().length % 2 === 0) {
            evenCount++;
        }
    }
    return evenCount;
};

module.exports = findNumbers;
/*
Time Complexity: O(n)
Space Complexity: O(1)
1. Create evenCount variable to hold the count.
2. Loop through the nums array.
    a. Create a condition to see if the length of the string of the current element is divisible by 2.
        i. Increment the evenCount.
3. Return evenCount.
*/