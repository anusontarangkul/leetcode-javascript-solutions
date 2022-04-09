var maxArea = function (height) {
    let leftPointer = 0;
    let rightPointer = height.length - 1;
    let maxAreaCalculated = findArea(leftPointer, rightPointer, height)
    while (leftPointer < rightPointer) {
        if (height[leftPointer] < height[rightPointer]) {
            leftPointer++
        } else {
            rightPointer--
        }

        const currentArea = findArea(leftPointer, rightPointer, height)
        maxAreaCalculated = Math.max(currentArea, maxAreaCalculated)
    }
    return maxAreaCalculated
};

var findArea = function (leftPointer, rightPointer, height) {

    const width = rightPointer - leftPointer
    const length = Math.min(height[leftPointer], height[rightPointer])
    const area = width * length;
    return area
}

// Time Complexity O(n)
// Space Complexity O(1)

// 1. Create left pointer and assign it to 0.
// 2. Create right pointer and assign it to the height.length -1.
// 3. Create maxAreaCalculated variable and assign it to the current area with the starting pointers
// 4. While left pointer is less than right pointer
//      a. If the index value at left pointer is less than the index value at the right                 pointer, increment left pointer
//      b. Else decrement the right pointer.
//      c. Calculate the area and then take the max of current area and maxAreaCalculated
//  5. Return maxAreaCalculated