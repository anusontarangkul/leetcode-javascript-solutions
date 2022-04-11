var lengthOfLongestSubstring = function (s) {
    let leftPointer = 0;
    let longestLength = 0;
    const charMap = new Map();
    for (let rightPointer = 0; rightPointer <= s.length - 1; rightPointer++) {
        const currentChar = s[rightPointer]
        const prevCharIndex = charMap.get(currentChar)
        if (prevCharIndex >= leftPointer) {
            leftPointer = prevCharIndex + 1
        }
        charMap.set(currentChar, rightPointer)
        let currentLength = rightPointer - leftPointer + 1;
        longestLength = Math.max(currentLength, longestLength)
    }
    return longestLength
};

// Time complexity O(n)
// Space complexity O(n)

// 1. Create leftPointer variable and assign it to 0.
// 2. Create longestLength variable and assign it to 0.
// 3. Create charMap {} to keep track of characters and their index
// 4. Loop through s with the right Pointer.
//      a. Create currentChar variable s[rightPointer]
//      b. Create prevCharIndex variable charMpa.get(currentChar)
//      c. if(prevCharIndex >= leftPointer)
//          i. Update the leftPointer to prevCharIndex + 1/
//      d. Update charMap with currentChar and rightPointer
//      e. Find length between pointers.
//      f. Update longestLength of max currentLength and longestLength
// 5. Return longestLength