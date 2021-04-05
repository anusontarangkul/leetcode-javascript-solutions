var isHappy = function (n) {
    let map = {};

    while (n !== 1) {
        let current = n;
        let sum = 0;
        while (current !== 0) {
            sum += (current % 10) ** 2;
            current = Math.floor(current / 10);
        }
        if (map[sum]) {
            return false;
        }
        map[sum] = true;
        n = sum;
    }
    return true;
};

module.exports = isHappy;

/*
Time Complexity: O(n^2)
Space Complexity: O(n)

1. Create map object.
2. While loop through "n" being not equal to 1.
    a. Create a current variable equal to "n".
    b. Create sum variable.
    c. While loop for current being not equal to 0.
        i. Add to sum the squared of (current mod 10).
        ii. Divide current by 10.
    d. Condition if sum is in the map.
        i. Return false.
    e. Add sum to map with a value of true.
    f. Set n = sum.
3. Return true.

*/