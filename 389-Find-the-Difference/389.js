var findTheDifference = function (s, t) {
    let map = {};
    for (let i = 0; i < s.length; i++) {
        map[s[i]] = (map[s[i]] | 0) + 1
    }
    for (let i = 0; i < t.length; i++) {
        if (map[t[i]] !== undefined && map[t[i]] > 0) {
            map[t[i]]--
        } else {
            return t[i]
        }
    }
};

module.exports = findTheDifference;

/*
Time Complexity: O(m)
Space Complexity: O(n)
1. Create map object.
2. Loop through s.
    a. Add the characters as keys and the frequencies as values.
3. Loop through t.
    a. Create condition if the current index value is not undefiend and has a value greater than 0.
        i. Decrement the value.
    b. Else
        i. Return the current index value.
*/