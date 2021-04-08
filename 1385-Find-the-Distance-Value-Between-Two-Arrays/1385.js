var findTheDistanceValue = function (arr1, arr2, d) {

    let count = 0;
    for (let i = 0; i < arr1.length; i++) {
        let passes = true;
        for (let j = 0; j < arr2.length; j++) {
            if (Math.abs(arr1[i] - arr2[j]) <= d) {
                passes = false;
            }
        }
        if (passes) {
            count++;
        }
    }
    return count;
};

module.exports = findTheDistanceValue;

/*
Time Complexity: O(n*m)
Space Complexity: O(1)
1. Create variable to hold the count.
2. Loop through arr1.
    a. Create variable "passes" to true.
    b. Loop through arr2.
        i. Find absoulte value of the difference between element of arr2 to             arr1. If the difference is <= d.
            1. Change passes to false.
    c. If passes is true
        i. Incrment count.
3. Return count.

*/