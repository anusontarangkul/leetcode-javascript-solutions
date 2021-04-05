var areAlmostEqual = function (s1, s2) {
    let charArray = new Array(26).fill(0);
    let swap = 0;

    for (let i = 0; i < s1.length; i++) {
        let temp = s1[i].charCodeAt() - "a".charCodeAt();
        charArray[temp]++;
    }
    for (let i = 0; i < s2.length; i++) {
        let temp = s2[i].charCodeAt() - "a".charCodeAt();
        if (charArray[temp] === 0) {
            return false;
        } else {
            charArray[temp]--;
        }
        if (s1[i] !== s2[i]) {
            swap++;
        }
        if (swap > 2) {
            return false;
        }
    }
    return true;
};

module.exports = areAlmostEqual

/*
Time Complexity: O(n)
Space Complexity: O(1)

1. Create a charArray variable.
2. Create a swap variable.
3. Loop through s1.
    a. Add the value to the corresponding charArray.
4. Loop through s2.
    a. Condition if current value is not inside charArray.
        i. Return false.
    b. Else
        i. Decrement the value in charArray.
    c. Condition if s1[i] != s[2].
        i. Swap++.
    d. Condition if swap is greater than 2
        i. Return false.
5. Return true.
*/