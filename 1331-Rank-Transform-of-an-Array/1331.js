var arrayRankTransform = function (arr) {
    let output = [];
    let ordered = [...arr].sort((a, b) => a - b);
    let map = {};
    let rank = 1;
    for (let i = 0; i < ordered.length; i++) {
        if (!map[ordered[i]]) {
            map[ordered[i]] = rank++;
        }
    }
    for (let i = 0; i < arr.length; i++) {
        output.push(map[arr[i]]);
    }
    return output;
};

module.exports = arrayRankTransform;

/*
Time Complexity: O(nlog(n))
Space Complexity: O(n)
1. Create new "ordered" array that is sorted.
2. Create map object.
3. Create rank variable starting at 1.
4. Loop through ordered.
    a. If the value is not in the map.
        i. Set the value to rank ++.
5. Create output array.
6. Loop through arr.
    a. Push to output the map value.
7. Return output.

*/