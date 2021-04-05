var fairCandySwap = function (A, B) {
    let output = new Array(2);
    let mapB = {};
    let TotalA = 0;
    let TotalB = 0;

    for (let i = 0; i < A.length; i++) {
        TotalA += A[i];
    }

    for (let i = 0; i < B.length; i++) {
        TotalB += B[i];
        mapB[B[i]] = true;
    }
    let delta = (TotalB - TotalA) / 2;
    for (let i = 0; i < A.length; i++) {
        if (mapB[A[i] + delta]) {
            output[0] = A[i];
            output[1] = A[i] + delta
            return output;
        }
    }
};

module.exports = fairCandySwap

/*
Time Complexity: O(n + m)
Space Complexity: O(m)

TotalA - A + B = TotalB - B + A
2B + TotalA - A = TotalB + A
2B = TotalB - TotalA + 2A
B = (TotalB - TotalA) / 2 + A

1. Create output array.
2. Create mapB object.
3. Create TotalA variable.
4. Create TotalB variable.
5. Loop through A.
    a. Add values to TotalA.
6. Loop through B.
    a. Add values to TotalB.
    b. Add values to mapB.
 7. Create delta variable equal to (TotalB - TotalA) / 2.
 8. Loop through A.
    a. Find if the delta value + current A value exists in B.
        i. Add the first index value of output to "i".
        ii. Add the value from the mapB to second index value.
        iii. Return output.

*/