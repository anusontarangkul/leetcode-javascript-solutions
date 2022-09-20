/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function (num) {
    for (let i = num.length - 1; i >= 0; i--) {
        if (+num[i] % 2 !== 0) {
            return num.slice(0, i + 1)
        }
    }
    return ""
};

// Time complexity: O(n) where n is the length of n
// Space Complexity: O(n) where n is the length of n

// 1. Loop through num backwards
//      a. We check if the currentNum is odd (parse to Int, check if mod 2 !== 0)
//          i. Return num.slice(0, i+1)
// 2. Return ""