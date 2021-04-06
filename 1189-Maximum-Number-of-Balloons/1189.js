var maxNumberOfBalloons = function (text) {
    let count = 0;
    let map = {};
    for (let i = 0; i < text.length; i++) {
        switch (text[i]) {
            case "b": map[text[i]] = (map[text[i]] | 0) + 1;
                break;
            case "a": map[text[i]] = (map[text[i]] | 0) + 1;
                break;
            case "l": map[text[i]] = (map[text[i]] | 0) + 1;
                break;
            case "o": map[text[i]] = (map[text[i]] | 0) + 1;
                break;
            case "n": map[text[i]] = (map[text[i]] | 0) + 1;
                break;
        }
    }
    while (map["b"] >= 1 && map["a"] >= 1 && map["l"] >= 2 && map["o"] >= 2 && map["n"] >= 1) {
        count++;
        map["b"]--;
        map["a"]--;
        map["l"] -= 2;
        map["o"] -= 2;
        map["n"]--;
    }
    return count;
};

module.exports = maxNumberOfBalloons;

/*
Time Complexity: O(n)
Space Complexity: O(n)
1. Create count variable.
2. Create map object.
3. Loop through text.
    a. Create case to add to map for each letter.
4. While loop with conditions of each letter being the minimum in balloon
    a. Increment count.
    b. Decrement the respective values in the map.
5. Return count.
*/