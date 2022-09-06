/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function (s) {
    const wordArray = s.split(" ")
    const orderedSentence = []
    for (let i = 0; i < wordArray.length; i++) {
        const idx = wordArray[i].slice(-1) - 1
        orderedSentence[idx] = wordArray[i].slice(0, -1)
    }
    return orderedSentence.join(" ")
};

// Time Complexity: O(n)
// Space Complexity: O(n)

// 1. Create wordArray by splitting s.
// 2. Create an orderedSentence array.
// 2. Loop through wordArray
//      a. Get index value by slicing the current word by -1. Then minus 1.
//      b. Update orderedSentence[idx] to current word slice (0, -1)
// 3. Return wordArray joined as a string