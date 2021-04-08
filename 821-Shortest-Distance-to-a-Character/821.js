var shortestToChar = function (s, c) {
    let output = [];
    for (let i = 0; i < s.length; i++) {
        let distance = findDistance(i, s, c)
        output.push(distance)
    }
    return output;
};

var findDistance = function (i, s, c) {
    if (s[i] === c) {
        return 0
    }
    let j = 1;
    while (j >= 0 || j < s.length) {
        if (s[i - j] === c || s[i + j] === c) {
            return j;
        }
        j++;
    }
}

module.exports = shortestToChar;
/*
Time Complexity: O(n^2)
Space Complexity: O(n)

shortestToChar function:
1. Create an output array.
2. Loop through s.
    a. Create variable distance to equal to a helper function findDistance, to find distance.
    b. Push distance to output array.
3. Return output.

findDistance function:
1. Create condition if the current character is equal to target "c", return 0.
2. Create j pointer variable to 1.
    a. Create while for j to be inside the length of s.
        i. Create condition to see if j is the distance to target on both sides.
            1. Return j.
        ii. Increment j.
*/