var rotateString = function (A, B) {
    if (A.length !== B.length) {
        return false;
    }
    return ((A + A).indexOf(B) !== -1)
};

module.exports = rotateString;

/*
Time Complexity:O(n)
Space Complexity: O(n)
1. Condition if A and B are different lengths.
    a. Return false.
2. Add A to A.
    a. See if B is an index of A.
    b. Return true or false.
*/