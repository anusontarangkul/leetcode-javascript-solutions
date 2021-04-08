var removeDuplicates = function (S) {
    S = S.split('')
    let l = 0;
    let r = 1;
    while (r < S.length) {
        if (S[l] === S[r] && l >= 0) {
            l--;
            r++;
        } else {
            l++;
            S[l] = S[r];
            r++;
        }
    }
    S = S.join("")
    return S.substr(0, l + 1)
};

module.exports = removeDuplicates;
/*
Time Complexity: O(n)
Space Complexity: O(n)
1. Turn S into an array.
2. Create "l" pointer.
3. Create "r" pointer.
4. While r is less than the length of S.
    a. Create condition if current index value of l and r are equal && l is greater or equal to 0.
        i. Decrement l.
        ii. Increment r.
    b. Else case.
        i. Increment l.
        ii. Change current index value of l to current index value of r.
        iii. Increment r.
5. Turn S back to string.
6. Return substring of S from 0 to l+ 1.
*/