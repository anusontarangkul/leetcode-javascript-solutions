var countCharacters = function (words, chars) {
    let output = 0;
    let charArray = new Array(26).fill(0);

    for (let i = 0; i < chars.length; i++) {
        charArray[chars[i].charCodeAt(0) - "a".charCodeAt(0)]++
    }
    for (let i = 0; i < words.length; i++) {
        let tempArray = charArray.slice();
        let charCount = 0;
        for (let j = 0; j < words[i].length; j++) {
            let curr = words[i][j].charCodeAt(0) - "a".charCodeAt(0);
            if (tempArray[curr] > 0) {
                charCount++;
                tempArray[curr]--;
            }
        }
        if (words[i].length === charCount) {
            output += charCount;
        }
    }
    return output;
};

module.exports = countCharacters;

/*
Time Complexity: O(n*m)
Space Complexity: O(n)
1. Create output variable.
2. Create new array of 26 indicies to 0.
3. Loop through chars.
    a. Change to ASCII and increment at the corresponding value.
4. Loop through words.
    a. Create a new temp array from the old array.
    b. Create charCount variable.
    c. Loop through the word.
        i. Condition to see if that current value is in the array.
            1. Increment CharCount.
            2. Minus the index value from it.
    d. Create condition if charCount is equal to the length of the word.
        i. Add output the length.
*/