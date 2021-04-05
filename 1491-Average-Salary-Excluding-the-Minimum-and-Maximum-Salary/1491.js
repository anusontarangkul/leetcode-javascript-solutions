var average = function (salary) {
    let max = Math.max(...salary)
    let min = Math.min(...salary);
    let total = 0;

    for (let i = 0; i < salary.length; i++) {
        if (salary[i] !== max && salary[i] !== min) {
            total += salary[i]
        }
    }
    return total / (salary.length - 2)
};

module.exports = average

/*
Time Complexity: O(n)
Space Complexity: O(1)

1. Find the max.
2. Find the min.
3. Create total variable.
4. Loop through salary.
    a. If the current doesn't equal to min and max.
        i. Add to total.
5. Return total divided by length of salary minus 2.
*/