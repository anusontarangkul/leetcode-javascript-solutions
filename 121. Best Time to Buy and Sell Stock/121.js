var maxProfit = function (prices) {
    let minPrice = Infinity;
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i]
        } else {
            maxProfit = Math.max(maxProfit, prices[i] - minPrice)
        }
    }
    return maxProfit
};

// Time Complexity: O(n) where n is the length of prices
// Space Complexity: O(1)

// 1. Create minPrice and set to Infinity
// 2. Create maxProfit and set to 0.
// 3. Loop through prices.
//      a. Check if prices[i] < minPrice
//          i. Change minPrice to prices[i]
//      b. Else
//          i. maxProfit = to the max of maxProfit or prices[i] - minPrice
// 4. Return maxProfit