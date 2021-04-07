var getMaximumGenerated = function (n) {
    if (n < 2) {
        return n;
    }
    let a = new Array(n + 1).fill(0);
    let max = 0;
    a[1] = 1;

    for (let i = 2; i <= n; i++) {
        if (i % 2 === 0) {
            a[i] = a[Math.floor(i / 2)];
            max = a[i] > max ? a[i] : max;
        } else {
            a[i] = a[Math.floor(i / 2)] + a[Math.floor(i / 2) + 1];
            max = a[i] > max ? a[i] : max;
        }
    }
    return max;
};

module.exports = getMaximumGenerated;

/*
Time Complexity: O(n)
Space Complexity: O(n)
1. Condition if "n" is less than 2.
    a. Return "n".
2. Create new "a" array.
    a. Set length to "n+1"
    b. Fill to 0.
3. Create max variable.
4. Change thea a[1] to 1.
5. Loop through n.
    a. Condition if current is even.
        i. Follow the rules.
        ii. Check to see if it's a new max.
    b. Else
        i. Follow the odd rules.
        ii. Check for new max.
6. Return max.
*/