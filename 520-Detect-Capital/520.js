var detectCapitalUse = function (word) {
    let capCount = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i].toUpperCase() === word[i]) {
            capCount++;
        }
    }
    return capCount === word.length || capCount === 0 || (capCount === 1 &&
        word[0].toUpperCase() === word[0]);
};

module.exports = detectCapitalUse
/*
Time Complexity: O(n)
Space Complexity: O(1)

1. Create capCount variable.
2. Loop through word.
    a. If current letter is capitalized.
        i. Increment capCount.
3. Return true if it meets one of these conditions.
    a. capCount is equal to the length of word.
    b. capCount is 0.
    c. capCount is 1 and also the first letter is capitalized.
*/