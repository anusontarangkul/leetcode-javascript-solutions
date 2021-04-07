var countGoodTriplets = function (arr, a, b, c) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (Math.abs(arr[i] - arr[j]) <= a) {
                for (let k = j + 1; k < arr.length; k++) {
                    if (Math.abs(arr[j] - arr[k]) <= b && Math.abs(arr[i] - arr[k]) <= c) {
                        count++;
                    }
                }
            }
        }

    }
    return count;
};

module.exports = countGoodTriplets;

/*
Time Complexity: O(n^3)
Space Complexity: O(1)
1. Creat count variable.
2. Loop through arr.
    a. Loop through arr again.
        i. Loop through arr again.
            1. Create condition to see if its a good triplet.
                a. Increment count.
3. Return count.
*/