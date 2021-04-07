var flipAndInvertImage = function (image) {

    for (let i = 0; i < image.length; i++) {
        let l = 0;
        let r = image[i].length - 1;
        while (l < r) {
            let temp = image[i][l];
            image[i][l] = image[i][r];
            image[i][r] = temp;
            l++;
            r--
        }
    }
    for (let i = 0; i < image.length; i++) {
        for (let j = 0; j < image[i].length; j++) {
            if (image[i][j] === 0) {
                image[i][j] = 1;
            } else if (image[i][j] === 1) {
                image[i][j] = 0;
            }
        }
    }
    return image;
};

module.exports = flipAndInvertImage;

/*
Time Complexity: O(n*m)
Space Complexity: O(1)
1. Loop through image.
    a. Create left pointer.
    b. Create right pointer.
    c. While left is less than right.
        i. Replace the values in the left pointer with the ones in the right.
        ii. Increment left.
        iii. Decrement right.
2. Loop through image.
    a. Nested loop.
        i. Condition if value is 0.
            1. Change to 1.
        ii. Else if value is 1.
            2. Change to 0.
3. Return image.

*/