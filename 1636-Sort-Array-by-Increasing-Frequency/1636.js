var frequencySort = function (nums) {
    const numsFrequencyMap = new Map();
    for (let n of nums) {
        numsFrequencyMap.set(n, (numsFrequencyMap.get(n) || 0) + 1)
    }
    return nums.sort((a, b) => {
        if (numsFrequencyMap.get(a) === numsFrequencyMap.get(b)) {
            return b - a
        }
        return numsFrequencyMap.get(a) - numsFrequencyMap.get(b)
    })
};

// Time Complexity O(nlog(n))
// Space Complexity O(n)

// 1. Create map, numsFrequencyMap.
// 2. Loop through nums
//      a. Set the numsFrequencyMap with the current number increment the frequency
// 3. Sort nums based on
//      a. if the value of the numsFrequencyMap at that index are equal, return descending.
//      b. Return a-b based of the values from numsFrequencyMap