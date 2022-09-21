/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
var mergeSimilarItems = function (items1, items2) {
    const integerMap = new Map();
    for (let i = 0; i < items1.length; i++) {
        integerMap.set(items1[i][0], items1[i][1])
    }

    for (let j = 0; j < items2.length; j++) {
        if (integerMap.has(items2[j][0])) {
            integerMap.set(items2[j][0], integerMap.get(items2[j][0]) + items2[j][1])
        } else {
            integerMap.set(items2[j][0], items2[j][1])
        }
    }

    return Array.from(integerMap.entries()).sort((a, b) => a[0] - b[0])

};

// Time Complexity: O(nlog(n)) + O(mlog(m)) where n is the length of items1 and m is the length of items2
// Space Complexity: O(n) + O(m)here n is the length of items1 and m is the length of items2



// 1. Create integerMap
// 2. Loop through items 1
//      a. Add first index as key, 2nd index as value
// 3. Loop through items 2
//      a. If map has first index, add the weight to the value
//      b. Else add first index as key, 2nd index as value
// 4. Sort the keys of the map
// 5. Create an array from the map.