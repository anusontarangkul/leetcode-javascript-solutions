var threeConsecutiveOdds = function (arr) {
    let oddCount = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            oddCount++;
            if (oddCount === 3) {
                return true;
            }
        } else {
            oddCount = 0;
        }
    }
    return false;
};

module.exports = threeConsecutiveOdds;
/*
Time Complexity: O(n).
Space Comlexity: O(1).

1. Create oddCount variable.
2. Loop through arr.
    a. Create condition to see if current index value is odd.
        i. Increment oddCount.
        ii. If oddCount is equal to 3.
            1. Return true.
    b. Else
        i. Set oddCount to 0.
3. Return false.
*/