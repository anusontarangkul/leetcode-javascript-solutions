var numWaterBottles = function (numBottles, numExchange) {
    let maxDrink = numBottles;
    let remainder = 0;
    while (numBottles >= numExchange) {
        remainder = numBottles % numExchange;
        numBottles = Math.floor(numBottles / numExchange);
        maxDrink += numBottles;
        numBottles += remainder;
    }
    return maxDrink;
};

module.exports = numWaterBottles;

/*
Time Complexity: O(n)
Space Complexity: O(1)
1. Create variable for maxDrink.
2. Create remainder variable.
3. While for (numBottles is greater than or equal to numExchange)
    a. Remainder is equal to numBottles mod numExchange.
    b. Divide numBottles by numExchange.
    c. Add the numBottles to maxDrink.
    d. Add remainder to numBottles.
4. Return maxDrink.
*/