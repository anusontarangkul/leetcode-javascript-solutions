var addDigits = function (num) {
    let sum = 0;
    while (num >= 10) {
        sum += num % 10;
        num = Math.floor(num / 10);
        if (num < 10) {
            num += sum;
            sum = 0;
        }
    }
    return num;
};

module.exports = addDigits;

/*
Time Complexity: O(n)
Space Complexity: O(1)

1. Create sum variable.
2. While loop for num is greater than or equal to 10.
    a. Add num % 10 to sum.
    b. Num divide by 10.
    c. If num is less than 10.
        i. Add sum to num.
        ii. Set sum to 0.
3. Return num.
*/