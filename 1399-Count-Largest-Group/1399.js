var countLargestGroup = function (n) {
    let output = 0;
    let maxSize = 0;
    let count = {};

    for (let i = 1; i <= n; i++) {
        let num = i;
        let sum = 0;
        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10)
        }
        count[sum] = (count[sum] | 0) + 1;
        maxSize = Math.max(maxSize, count[sum])
    }
    for (let key in count) {
        if (count[key] === maxSize) {
            output++;
        }
    }
    return output
};

module.exports = countLargestGroup;

/*
Time Complexity: O(n)
Space Complexity: O(n)
1. Create output variable.
2. Create maxSize variable.
3. Create count object.
4. Loop through n.
    a. Create a num variable.
    b. Create a sum variable.
    c. While num is greater than 0.
        i. Add sum by mod 10 of num.
        ii. Divide num by 10.
    d. Add sum as key to count and then increment.
    e. Find the maxSize with the values of count.
5. Loop through count.
    a. Condition if value is equal to maxSize.
        i. Increment output.
6. Return output.
*/