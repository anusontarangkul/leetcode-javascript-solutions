/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function (nums) {
    let largest = 0;
    let largest2nd = 0;

    let smallest = Infinity;
    let smallest2nd = Infinity;

    for (let i = 0; i < nums.length; i++) {
        let currentNum = nums[i]

        // check for largest & 2nd
        if (currentNum >= largest) {
            largest2nd = largest;
            largest = currentNum;
        } else if (currentNum <= largest && currentNum >= largest2nd) {
            largest2nd = currentNum
        }

        // check for smallest & 2nd
        if (currentNum <= smallest) {
            smallest2nd = smallest;
            smallest = currentNum;
        } else if (currentNum >= smallest && currentNum <= smallest2nd) {
            smallest2nd = currentNum;
        }
    }
    return largest * largest2nd - smallest * smallest2nd;

};

// time complexity O(n) where n is the length of nums
// space complexity O(1)

// 1. Create largest variable to 0
// 2. Create largest2nd variable to 0
// 3. Create smallest variable to Infinity
// 4. Create smallest2nd variable to Infinity
// 5. Loop through nums
//      a. If nums[i] >= largest
//          i. largest2nd = largest
//          ii. largest = nums[i]
//      b. Else if nums[i] <= largest && nums[i] >= largest2nd
//          i. largest2nd = nums[i]
//      c. If nums[i] <= smallest
//          i. smallest2nd = smallest
//          ii. smallest = nums[i]
//      d. Else if nums[i] >= smallest && nums[i] <= smallest2nd
//          i. smallest2nd = nums[i]
// 6. Return (largest * largest2nd) - (smallest * smallest2nd)