var longestCommonPrefix = function (strs) {
    let prefix = "";
    for (let i = 0; i < strs[0].length; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (strs[0][i] !== strs[j][i]) {
                return prefix;
            }
        }
        prefix += strs[0][i]
    }
    return prefix;
};

// 1. Create prefix variable as an empty string
// 2. Loop over the string of first index.
//      a. Loop over the rest over strs array
//          i. Compare the character from outer loop with inner loop
//              i. If it doesn't equal, return prefix
//      b. Concate prefix with outer loop variable
// 3. Return prefix