var diStringMatch = function (S) {
    let l = 0;
    let h = S.length;
    let size = S.length + 1;
    let output = new Array(size);

    for (let i = 0; i < size; i++) {
        if (S[i] === "I") {
            output[i] = l;
            l++;
        } else {
            output[i] = h;
            h--;
        }
    }
    return output;
};

module.exports = diStringMatch;

/*
Time Complexity: O(n)
Space Complexity: O(n)
1. Create low pointer.
2. Create high pointer.
3. Create size variable.
4. Create output array.
5. Loop through S.
    a. Condition if current character is "I".
        i. Push in low pointer.
        ii. Increment low pointer.
    b. Else
        i. Push in high pointer.
        ii. Decrement high pointer.
6. Return output.
*/