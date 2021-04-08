var busyStudent = function (startTime, endTime, queryTime) {
    let count = 0;
    for (let i = 0; i < startTime.length; i++) {
        if (queryTime >= startTime[i] && queryTime <= endTime[i]) {
            count++;
        }
    }
    return count
};

module.exports = busyStudent;
/*
Time Complexity: O(n)
Space Complexity: O(1)
1. Create count variable.
2. Loop through startTime.
    a. Create condition if queryTime is inbetween the index of the startTime and endTime.
        i. Increment count.
3. Return count.
*/