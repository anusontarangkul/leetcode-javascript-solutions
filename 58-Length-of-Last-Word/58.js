var lengthOfLastWord = function (s) {
    let lastWordCount = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] !== " ") {
            for (let j = i; j >= 0; j--) {
                if (s[j] !== " ") {
                    lastWordCount++;
                } else {
                    return lastWordCount;
                }
            }
            return lastWordCount;
        }
    }
};

/*
Time Complexity: O(n)
Space Complexity: O(1)

1. Create lastWordCount variable.
2. Loop backwards s.
    a. Condition if current char is not a space.
        i. Loop backwards for current char.
            1. Condition if current char is not a space.
                a. Increment lastWordCount.
            2. Else return lastWordCount.
        ii. Return lastWordCount.
*/