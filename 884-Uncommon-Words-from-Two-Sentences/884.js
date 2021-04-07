var uncommonFromSentences = function (A, B) {
    A = A.split(" ");
    B = B.split(" ");
    let mapA = {};
    let mapB = {};
    let output = [];

    for (let i = 0; i < A.length; i++) {
        mapA[A[i]] = (mapA[A[i]] | 0) + 1;
    }

    for (let i = 0; i < B.length; i++) {
        mapB[B[i]] = (mapB[B[i]] | 0) + 1;
    }

    for (let key in mapA) {
        if (mapA[key] === 1 && !mapB[key]) {
            output.push(key)
        }
    }
    for (let key in mapB) {
        if (mapB[key] === 1 && !mapA[key]) {
            output.push(key)
        }
    }
    return output

};

module.exports = uncommonFromSentences;

/*
Time Complexity: O(n + m)
Space Complexity: O(n + m)
1. Turn A into array.
2. Turn B into array.
3. Create map object for A.
4. Create map object for B.
5. Create output array.
6. Loop through A.
    a. Add the words as keys in map and the frequencies as values.
7. Loop through B.
    a. Add the words as keys in map and the frequencies as values.
8. Loop through mapA.
    a. If the frequency is 1 and the key doesn't exist in mapB.
        i. Push the key to output.
9. Loop through mapB.
    a. If the frequency is 1 and the key doesn't exist in mapA.
        i. Push the key to output.
10. Return output.
*/