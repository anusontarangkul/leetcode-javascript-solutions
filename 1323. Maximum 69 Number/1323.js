/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
    const arrayNum = Array.from(num.toString())

    for (let i = 0; i < arrayNum.length; i++) {
        if (arrayNum[i] === '6') {
            arrayNum[i] = '9'
            break
        }
    }
    return +arrayNum.join("")


};

// time complexity O(n) where n is the size of num
// space complexity O(n) where n is the size of num

// 1. Create an arrayNum with each number being a string
// 2. Loop through arrayNum
//      a. If the currentNum is 6, change it to 9. Break
// 3. Join the arrayNum to string.
// 4. Parse the string to an integer
// 5. Return integer