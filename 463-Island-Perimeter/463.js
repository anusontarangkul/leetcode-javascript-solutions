var islandPerimeter = function (grid) {
    let perimeter = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) {
                perimeter += 4;
                if (j > 0 && grid[i][j - 1] === 1) {
                    perimeter -= 2;
                }
                if (i > 0 && grid[i - 1][j] === 1) {
                    perimeter -= 2;
                }
            }
        }
    }
    return perimeter;
};

module.exports = islandPerimeter;

/*
Time Complexity: O(n*m)
Space Complexity: O(1)

1. Create perimeter variable.
2. Loop through grid.
    a. Loop through inner array.
        i. Condition if value is "1".
            1. Add perimeter by 4.
            2. If the block before is "1."
                a. Subtract perimeter by 2.
            3. If the block above is "1."
                a. Subtract perimter by 2.
3. Return perimeter.
*/