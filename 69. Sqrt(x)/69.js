var mySqrt = function (x) {
    if (x <= 1) {
        return x
    }
    for (let i = 2; i <= x; i++) {
        if (i * i === x) {
            return i;
        }
        if (i * i > x) {
            return i - 1;
        }
    }
};

// Time Complexity O(log(n))
// Space Complexity O(1)

// 1. If x is 0 or 1, return x.
// 2. Loop through x (from 2 to x)
//      a. If i * i === x. Return x
//      b. If i * i > x. Return i - 1