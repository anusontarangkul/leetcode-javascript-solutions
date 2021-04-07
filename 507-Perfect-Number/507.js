var checkPerfectNumber = function (num) {
    if (num === 1) {
        return false;
    }
    let sum = 1;
    for (let i = 2; i < Math.sqrt(num); i++) {
        if (num % i === 0) {
            sum = sum + i + num / i
        }
    }
    return sum === num
};

module.exports = checkPerfectNumber;

/*
Time Complexity: O(sqrt(n))
Space Complexity: O(1)
1. Return false if num is 1.
2. Create sum to 1.
3. Loop through num (until sqrt of num)
    a. Condition if the current num is divisible.
        i. Add the current num and it's pair.
4. Return sum = num.
*/