var strStr = function (haystack, needle) {
    for (let i = 0; i < haystack.length; i++) {
        let match = true;
        for (let j = 0; j < needle.length; j++) {
            if (haystack[i + j] !== needle[j]) {
                match = false;
                break
            }
        }
        if (match) {
            return i
        }
    }
    return -1
};

// Time Complexity O(n * m)
// Space Complexity O(1)

// 1. Loop through haystack
//      a. Create match variable and set it to true
//      b. Loop through needle
//          i. Compare if outer character doesn't equal inner character
//                1. Change match to false
//                2. Break
//      c. If match is true, return index
// 2. Return -1