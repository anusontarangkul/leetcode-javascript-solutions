var makeGood = function (s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (stack.length && Math.abs(s[i].charCodeAt() - stack[stack.length - 1].charCodeAt()) === 32) {
            stack.pop();

        } else {
            stack.push(s[i]);
        }
    }
    return stack.join("")
};

module.exports = makeGood
/*
Time Complexity: O(n)
Space Complexity: O(n)
1. Create stack array.
2. Loop through "s".
    a. Condition if the current character makes it and bad pair.
        i. Remove last element from array.
    b. Else
        i. Push the element to the array.
3. Return the stack joined to a string.
*/