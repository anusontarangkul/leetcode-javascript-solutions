var heightChecker = function (heights) {
    let heightsOrdered = heights.slice().sort((a, b) => a - b);
    let count = 0;
    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== heightsOrdered[i]) {
            count++;
        }
    }
    return count;
};

module.exports = heightChecker;

/*
Time Complexity: O(n log n)
Space Complexity: O(n)
1. Create new array in ascending order.
2. Create count variable.
3. Loop through heights.
    a. Condition if they are not equal.
        i. Increment count.
4. Return count.
*/