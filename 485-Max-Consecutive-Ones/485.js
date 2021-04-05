var findMaxConsecutiveOnes = function (nums) {
    let maxConsec = 0;
    let currentConsec = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            currentConsec++;
        } else {
            currentConsec = 0;
        }
        if (currentConsec > maxConsec) {
            maxConsec = currentConsec;
        }
    }
    return maxConsec;
};

module.exports = findMaxConsecutiveOnes;
/*
Time Complexity: O(n)
Space Complexity: O(1)

1. Create maxConsec variable.
2. Create currentConsec variable.
3. Loop through nums.
    a. Condition if value is 1.
        i. Increment currentConsec.
    b. Else
        i. Set currentConsec to 0.
    c. If currentConsec is greater than maxConsec.
        i. Set maxConsec equal to currentConsec.
4. Return maxConsec.
*/