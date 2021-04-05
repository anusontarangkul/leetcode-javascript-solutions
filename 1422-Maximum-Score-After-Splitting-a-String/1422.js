var maxScore = function (s) {
    let maxScore = 0;
    let leftScore = 0;
    let rightScore = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "1") {
            rightScore++;
        }
    }
    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] === "1") {
            rightScore--;
        } else {
            leftScore++
        }
        if (maxScore < rightScore + leftScore) {
            maxScore = rightScore + leftScore;
        }
    }
    return maxScore;
};

module.exports = maxScore;

/*
Time Complexity: O(n)
Space Complexity: O(1)

1. Create maxScore variable.
2. Create leftScore variable.
3. Create rightScore variable.
4. Loop through s.
    a. Condition if value is equal to 1.
        i. Increment rightScore.
5. Loop through s again (until 2nd to last)
    a. Condition if value is equal to 1.
        i. Decrement rightScore.
    b. Else (value is equal to 0)
        i. Increment leftScore
    c. Condition if maxScore is less than leftScore + rightScore.
        i. maxScore is equal to leftScore + rightScore.
6. Return maxScore

*/