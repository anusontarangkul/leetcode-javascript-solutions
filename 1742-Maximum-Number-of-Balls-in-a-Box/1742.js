var countBalls = function (lowLimit, highLimit) {
    let map = {};
    for (let i = lowLimit; i <= highLimit; i++) {
        let curSum = digitSum(i);
        map[curSum] = (map[curSum] | 0) + 1;
    }
    let allSum = Object.values(map);
    return Math.max(...allSum)

};
var digitSum = function (num) {
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}

module.exports = countBalls;

/*
Time Complexity: O(n)
Space Complexity: O(n)
1. Create map object.
2. Loop through lowLimit to highLimit.
    a. Helper function to get sum.
    b. Add the sum and increment the count to map.
3. Create array of values from map.
4. Return the max of the array.

Helper
1. Create sum variable.
2. While loop for num is greater than 0.
    a. Add num % 10 to sum.
    b. num / 10.
3. Return num.
*/