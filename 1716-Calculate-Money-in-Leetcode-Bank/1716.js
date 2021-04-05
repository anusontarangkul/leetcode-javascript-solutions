var totalMoney = function (n) {
    let output = 0;
    let deposit = 1;
    let newMon = 1;

    for (let i = 1; i <= n; i++) {
        output += deposit;
        deposit++;
        if (i % 7 === 0) {
            newMon++;
            deposit = newMon;
        }
    }
    return output;
};

module.exports = totalMoney

/*
Time Complexity: O(n)
Space Complexity: O(1)

1. Create output variable.
2. Create the deposit variable.
3. Create newMon variable.
4. Loop through n.
    a. Add to the output the deposit.
    b. Increment deposit.
    c. Condition if "i" mod 7 is equal to 0.
        i. Increment newMon.
        ii. Set deposit to newMon.
5. Return output.
*/