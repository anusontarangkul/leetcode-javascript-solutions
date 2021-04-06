var sortString = function (s) {
    let output = [];
    let charCount = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        charCount[s[i].charCodeAt() - 97]++
    }
    let count = s.length;
    while (count > 0) {
        for (let i = 0; i < charCount.length; i++) {
            if (charCount[i] > 0) {
                output.push(String.fromCharCode(i + 97))
                charCount[i]--;
                count--;
            }
        }
        for (let i = charCount.length - 1; i >= 0; i--) {
            if (charCount[i] > 0) {
                output.push(String.fromCharCode(i + 97))
                charCount[i]--;
                count--;
            }
        }
    }
    return output.join('')
};

module.exports = sortString;

/*
Time Complexity: O(n)
Space Compelexity: O(n)
charCodeAt()
String.fromCharCode()

1. Create output array.
2. Create charCount array.
3. Loop through s.
    a. Fill up the charCount with the corresponding count for each letter.
4. Create count variable.
5. While count is greater than 0.
    a. Loop through charCount.
        i. Condition if value is greater than 0.
            1. Push to output.
            2. Decrement the charCount.
            3. Decrement the count.
    b. Loop backwards through charCount.
         i. Condition if value is greater than 0.
            1. Push to output.
            2. Decrement the charCount.
            3. Decrement the count.
6. Return output as string.
*/