/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {

    const wordArray = Array.from(s)
    const vowelSet = new Set(['a', 'e', 'i', 'o', 'u', "A", "E", "I", "O", "U"])
    let left = 0;
    let right = wordArray.length - 1;

    while (left < right) {
        if (vowelSet.has(wordArray[left])) {
            while (right > left) {
                if (vowelSet.has(wordArray[right])) {
                    let temp = wordArray[left];
                    wordArray[left] = wordArray[right];
                    wordArray[right] = temp
                    right--
                    break
                }
                right--
            }
        }
        left++
    }
    return wordArray.join("")
};

// 1. Create left and right pointer
// 2. While the pointers aren't =
// 3. Check if left is vowel
//       a. Check if right is vowel
//          i. switch if it is
// 4. return array