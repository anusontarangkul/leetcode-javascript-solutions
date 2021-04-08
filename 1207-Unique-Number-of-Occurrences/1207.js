var uniqueOccurrences = function (arr) {
    let map = {};
    for (let i = 0; i < arr.length; i++) {
        if (!map[arr[i]]) {
            map[arr[i]] = 1;
        } else {
            map[arr[i]]++
        }
    }
    let count = Object.values(map);
    return count.length === new Set(count).size

};

module.exports = uniqueOccurrences;
/*
Time Complexity: O(n)
Space Complexity: O(n)
1. Create map object.
2. Loop through arr.
    a. Create condition if the current index value is NOT inside the map,
        i. add the curent index value and set the value equal to 1.
    b. Else.
        i. Incrment the value for that key.
3. Create count variable and set equal the the values of map (as an array).
4. Return true if the length of count is equal to the size of a new set of count
*/