var wordPattern = function (pattern, s) {
    const sWord = s.split(" ")
    if (sWord.length !== pattern.length) {
        return false
    }
    const patternMap = new Map();
    const uniqueSet = new Set();
    for (let i = 0; i < pattern.length; i++) {
        if (!patternMap.has(pattern[i])) {
            if (uniqueSet.has(sWord[i])) {
                return false;
            }
            patternMap.set(pattern[i], sWord[i])
            uniqueSet.add(sWord[i])
        } else {
            if (sWord[i] !== patternMap.get(pattern[i])) {
                return false
            }
        }
    }
    return true
};

// Time Complexity: O(n + m) where n is the length of s and m is the length of pattern
// Space Complexity: O(n + m) where n is the length of s and m is the length of pattern

// 1. Split s into array by space (sWord)
// 2. Return false if length of pattern !== sWord length
// 3. Create patternMap.
// 4. Create uniqueSet
// 5. Loop through pattern
//      a. Check if pattern[i] is it the patternMap.
//          i. If not in, Return false if sWord[i] is in the set
//          ii. If not in, add pattern[i] to map with sWord[i] as value.
//          iii. If not in, add sWord[i] to set
//      b. If  pattern[i] 