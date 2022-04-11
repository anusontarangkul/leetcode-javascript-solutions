var backspaceCompare = function (s, t) {
    let sPointer = s.length - 1;
    let tPointer = t.length - 1;

    while (sPointer >= 0 || tPointer >= 0) {
        if (s[sPointer] === '#') {
            let skip = 2;
            while (skip > 0) {
                skip--
                sPointer--
                if (s[sPointer] === '#') {
                    skip += 2
                }
            }
            continue
        }
        if (t[tPointer] === '#') {
            let skip = 2;
            while (skip > 0) {
                skip--
                tPointer--
                if (t[tPointer] === '#') {
                    skip += 2
                }
            }
            continue
        }
        if (s[sPointer] !== t[tPointer]) {
            return false;
        }
        sPointer--;
        tPointer--;
    }
    return true
};

// Time Complexity O(n + m)
// Space Complexity O(1)

// 1. Create sPointer and assign it to s.length -1.
// 2. Create tPointer and assign it to t.length -1.
// 3. While sPointer or tPointer is greater than or equal to 0
//      a. Check if the value at s index sPointer is a hashtag.
//          i. Create skip variable and assign to 2
//          ii. While skip is greater than 0
//              1. Decrement sPointer by 1
//              2. Decrement skip by 1
//              3. If current value is hashtag
//                  a. Increment skip by 2 
//          iii. Continue
//      b. Repeat the same process for t
//      c. If the pointer values are not equal, return false
//      d. Decrement both pointers
// 4. Return true