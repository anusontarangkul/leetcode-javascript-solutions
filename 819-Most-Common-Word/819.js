var mostCommonWord = function (paragraph, banned) {
    let bannedSet = new Set(banned)
    let map = {};
    let wordArray = paragraph.toLowerCase().match(/[a-z]+/g)
    for (let i = 0; i < wordArray.length; i++) {
        if (!bannedSet.has(wordArray[i])) {
            map[wordArray[i]] = (map[wordArray[i]] | 0) + 1;
        }
    }
    let maxCount = 0;
    let maxWord = "";

    for (let key in map) {
        if (map[key] > maxCount) {
            maxWord = key;
            maxCount = map[key];
        }
    }
    return maxWord;
};

module.exports = mostCommonWord
/*
Time Complexity: O(n+m)
Space Complexity: O(n+m)
1. Create bannedSet from banned.
2. Create map object.
3. Create wordArray from paragraph.
4. Loop through wordArray.
    a. Condition if current word is not in the bannedSet.
        i. Add it to the map object and increment the count.
5. Create maxCount variable.
6. Create maxWord variable.
7. Loop through each in map.
    a. Condition if the value is greater than the maxCount.
        i. Change the maxWord to the map key.
        ii. Change the maxCount to the key value.
8. Return maxWord.
*/