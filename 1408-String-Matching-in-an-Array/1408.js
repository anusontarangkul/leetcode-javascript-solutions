var stringMatching = function (words) {
    let output = [];
    words.sort((a, b) => a.length - b.length)

    for (let i = 0; i < words.length; i++) {
        for (let j = i + 1; j < words.length; j++) {
            if (words[j].includes(words[i])) {
                output.push(words[i]);
                break;
            }
        }
    }
    return output;
};

module.exports = stringMatching;
/*
Time Complexity: O(n^2)
Space Complexity: O(n)
1. Create output array.
2. Sort words to ascending length.
3. Loop through words.
    a. Nested loop through words.
        i. Create condition if the current word is in the nested word.
            1. Push current word to output.
            2. Break.
4. Return output.
*/