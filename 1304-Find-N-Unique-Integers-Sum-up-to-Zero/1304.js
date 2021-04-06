var sumZero = function (n) {
    let output = [];
    if (n % 2 !== 0) {
        output.push(0);
    }
    while (output.length < n) {
        let index = output.length + 1;
        output.push(index);
        output.push(-index);
    }
    return output;
};

module.exports = sumZero;

/*
Time Complexity: O(n)
Space Complexity: O(n)
1. Create output array.
2. Condition if "n" is odd.
    a. Push 0.
3. While loop for length of output is less than "n".
    a. Create index variable as length of output + 1.
    b. Push the index to output.
    c. Push the negative index to output.
4. Return output.
*/