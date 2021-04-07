var countMatches = function (items, ruleKey, ruleValue) {
    let count = 0;
    if (ruleKey === 'type') {
        for (let i = 0; i < items.length; i++) {
            if (items[i][0] === ruleValue) {
                count++
            }
        }
    }
    if (ruleKey === 'color') {
        for (let i = 0; i < items.length; i++) {
            if (items[i][1] === ruleValue) {
                count++
            }
        }
    }
    if (ruleKey === 'name') {
        for (let i = 0; i < items.length; i++) {
            if (items[i][2] === ruleValue) {
                count++
            }
        }
    }
    return count;

};

module.exports = countMatches;

/*
Time Complexity: O(n)
Space Complexity: O(1)
1. Create count variable.
2. Condition for ruleKey to "type".
    a. Loop through items.
        i. Condition if the ruleValue is equal to the index 0 of each item.
            1. Increment count.
3. Condition for ruleKey to "color".
    a. Loop through items.
        i. Condition if the ruleValue is equal to the index 1 of each item.
            1. Increment count.
4. Condition for ruleKey to "name".
    a. Loop through items.
        i. Condition if the ruleValue is equal to the index 2 of each item.
            1. Increment count.
5. Return count.
*/