var findContentChildren = function (g, s) {
    let contentChildren = 0;
    const sortedG = g.sort(function (a, b) { return a - b })
    const sortedS = s.sort(function (a, b) { return a - b })

    for (let i = g.length - 1; i >= 0; i--) {
        if (g[i] <= s[s.length - 1]) {
            contentChildren++;
            s.pop()
        }
    }
    return contentChildren

};

// Time Complexity: O(nlog(n)) + O(mlog(m)) where n is the length of g and m is the length of s.
// Space Complexity: O(1)

// 1. Create contentChildren = 0;
// 2. Sort g in ascending
// 3. Sort s in ascending
// 4. Backward loop g
//      a. If current value is less than or equal to the last index value of s.
//          i. Increment contentChildren
//          ii. Pop of s
// 5. Return contentChildren