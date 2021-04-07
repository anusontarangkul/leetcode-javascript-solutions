var selfDividingNumbers = function (left, right) {
    let output = [];
    for (let i = left; i <= right; i++) {
        if (checkDigits(i)) {
            output.push(i)
        }
    }
    return output;
};

var checkDigits = function (num) {
    if (num < 10) {
        return true;
    }
    let temp = num;
    while (temp > 0) {
        let cur = temp % 10;
        if (cur === 0 || num % cur !== 0) {
            return false;
        }
        temp = Math.floor(temp / 10)
    }
    return true;
}

module.exports = selfDividingNumbers;
/*
Time Complexity: O(n*m)
Space Complexity: O(n)
selfDividingNumbers function
1. Create output array.
2. Loop from left to right.
    a. Check if num meets the helper function.
        i. Push num to the array.
3. Return output.

checkDigits function
1. Return true if num is less than 10.
2. Create temp variable.
3. While loop for temp is greater than 0.
    a. Create current variable for the temp mod by 10.
    b. If current is equal to 0 or not divisible by num.
        i. Return false.
    c. Divide temp by 10.
4. Return true.

*/