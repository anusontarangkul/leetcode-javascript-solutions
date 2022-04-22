var minRemoveToMakeValid = function (s) {
    const sArray = s.split('')
    const stack = []

    for (let i = 0; i < sArray.length; i++) {
        if (sArray[i] === "(") {
            stack.push(i)
        } else if (sArray[i] === ")" && stack.length) {
            stack.pop()
        } else if (sArray[i] === ")") {
            sArray[i] = ""
        }
    }

    for (let j = 0; j < stack.length; j++) {
        sArray[stack[j]] = ""
    }
    return sArray.join('')
};

// Time Complexity: O(n)
// Space Complexity: O(n)

// 1. Convert s to sArray
// 2. Create stack
// 3. Loop through sArray
//      a. Check if value is "("
//          i. Push the index to the stack
//      b. Check if value is ")" and stack.length
//          i. Pop off the stack
//      c. Check if value is ")" and no stack length
//          i. Change the value to ""
// 4. Loop through the stack
//      a. Change the sArray values of those indexes to ""
//  5. Return the sArray joined