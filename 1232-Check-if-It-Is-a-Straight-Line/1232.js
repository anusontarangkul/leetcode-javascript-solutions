var checkStraightLine = function (coordinates) {
    if (coordinates.length === 2) {
        return true;
    }
    let x1 = coordinates[0][0];
    let x2 = coordinates[1][0];
    let y1 = coordinates[0][1];
    let y2 = coordinates[1][1];

    if (x2 === x1) {
        for (let i = 2; i < coordinates.length; i++) {
            if (coordinates[i][0] !== x1) {
                return false;
            }
        }
        return true;
    }

    let slope = (y2 - y1) / (x2 - x1);

    for (let i = 2; i < coordinates.length; i++) {
        let currentSlope = (coordinates[i][1] - coordinates[i - 1][1]) / (coordinates[i][0] - coordinates[i - 1][0])
        if (slope !== currentSlope) {
            return false;
        }
    }
    return true;
};

module.exports = checkStraightLine;

/*
Time Complexity: O(n)
Space Complexity: O(1)

(y2-y1)/(x2-x1)
1. Return true if length of coordinates is 2.
2. Condition if x2 and x1 are equal.
    a. Loop through coordinates.
        i. Condition if the x value is not equal x1.
            1. Return false.
    b. Return true.
3. Find slope for first 2 coordinates.
4. Loop through coordinates.
    a. Condition if current slope is not equal to slope.
        i. Return false.
5. Return true.
*/