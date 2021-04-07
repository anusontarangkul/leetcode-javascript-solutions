var commonChars = function (A) {
    let output = [];
    let commonChar = Array(26).fill(0);


    for (let i = 0; i < A[0].length; i++) {
        let count = A[0][i].charCodeAt(0) - "a".charCodeAt(0)
        ++commonChar[count]
    }
    for (let i = 1; i < A.length; i++) {
        let commonTempChar = Array(26).fill(0);
        for (let j = 0; j < A[i].length; j++) {
            let count = A[i][j].charCodeAt(0) - "a".charCodeAt(0)
            ++commonTempChar[count]

        }
        for (let k = 0; k < commonChar.length; k++) {
            commonChar[k] = Math.min(commonChar[k], commonTempChar[k])
        }
    }
    for (let i = 0; i < commonChar.length; i++) {
        while (commonChar[i] > 0) {
            output.push(String.fromCharCode(i + "a".charCodeAt(0)))
            --commonChar[i]
        }
    }
    return output
};

module.exports = commonChars;

/*
Time Complexity: O(n^2)
Space Complexity: O(n^2)

1. Use ASCII to keep track
2. Create array of 26 indicies and keep count of how many times they occur.
*/