var distributeCandies = function (candyType) {
    let candySet = new Set(candyType);

    return Math.min(candySet.size, candyType.length / 2);
};

module.exports = distributeCandies;

/*
Time Complexity: O(n)
Space Complexity: O(n)
1. Create a set from candyType.
2. Find the minimum between the allowed candy and different types.
*/