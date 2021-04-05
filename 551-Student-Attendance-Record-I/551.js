var checkRecord = function (s) {
    let absent = 0;
    let consecLate = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "A") {
            absent++;
        }
        if (absent >= 2) {
            return false;
        }
        if (s[i] === "L") {
            consecLate++;
        } else {
            consecLate = 0;
        }
        if (consecLate >= 3) {
            return false;
        }
    }
    return true;
};

module.exports = checkRecord;
/*
Time Complexity: O(n)
Space Complexity: O(1)

1. Create absent variable.
2. Create consecLate variable.
3. Loop through s.
    a. Condition if value is "A".
        i. Increment absent.
    b. Condition if absent is 2 or greater.
        i. Return false.
    c. Condition if value is "L".
        i. Increment consecLate.
    d. Else.
        i. Set consecLate to 0.
    e. Condition of consecLate is 3 or more.
        i. Return false.
4. Return true.
*/