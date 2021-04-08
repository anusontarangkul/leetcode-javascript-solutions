var replaceElements = function (arr) {
    let max = -1;
    for (let i = arr.length - 1; i >= 0; i--) {
        let temp = arr[i];
        arr[i] = max;
        max = Math.max(temp, max)
    }
    return arr;
};

module.exports = replaceElements;
/*
Time Complexity: O(n)
Space Complexity: O(1)

1. Create max variable and set to -1.
2. Loop through backwards.
    a. Create temp variable to hold the current index value.
    b. Change current index value to the max variable.
    c. Change the max variable to whatever is greater between the max and temp.
3. Return arr.
*/