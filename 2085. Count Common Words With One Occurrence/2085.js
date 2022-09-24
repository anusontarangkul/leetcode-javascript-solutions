/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function (words1, words2) {
    const wordMap = new Map();
    let count = 0;
    for (let word of words1) {
        if (wordMap.has(word)) {
            wordMap.set(word, wordMap.get(word) + 1)
        } else {
            wordMap.set(word, 1)
        }
    }


    for (let word of words2) {
        if (wordMap.get(word) === 1) {
            count++
            wordMap.set(word, "found")
        } else if (wordMap.get(word) === "found") {
            count--;
            wordMap.set(word, "eliminated")
        }
    }
    return count;
};

// Time Complexity: O(n + m) where n is the length of words1 and m is the length of words2
// Space Complexity: O(n + m) where n is the length of words1 and m is the length of words2

// 1. Create wordMap.
// 2. Create count to 0.
// 3. Loop through words 1
//      a. If current word is not in map, add it and give it a value of 1
//      b. Else we increment the value
// 4. Loop through words 2
//      a. Check if value of word is 1.
//          i. Increment count
//          ii. Change value in map to "found"
//      b. Else if value of word is found.
//          i. Decrement count
//          ii. Change value in map to "elimated"
// 5. Return count