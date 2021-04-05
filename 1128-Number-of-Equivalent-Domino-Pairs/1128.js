var numEquivDominoPairs = function (dominoes) {
    let output = 0;
    let map = {};
    for (let i = 0; i < dominoes.length; i++) {
        let low = Math.min(dominoes[i][0], dominoes[i][1]);
        let high = Math.max(dominoes[i][0], dominoes[i][1]);
        let code = high * 10 + low;
        if (map[code] === undefined) {
            map[code] = 0;
        } else {
            map[code]++;
            output += map[code];
        }
    }

    return output;
};

module.exports = numEquivDominoPairs;
/*
Time Complexity: O(n)
Space Complexity: O(n)

1. Create output variable.
2. Create map object.
3. Loop through dominoes.
    a. Create low variable.
    b. Create high variable.
    c. Create code variable equal to high*10 + low.
    d. If map[code] is undefined.
        i. Set to 0.
    e. Else.
        i. Increment map[code].
        ii. Add the output by map[code].
4. Return output.
*/