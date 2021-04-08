const findTheDistanceValue = require("./1385")

test("With the arr1 [4,5,8], arr2 [10,9,1,8], and d=2, the distance value between the two arrays is 2", () => {
    expect(findTheDistanceValue([4, 5, 8], [10, 9, 1, 8], 2)).toBe(2);
});

test("With the arr1 [1,4,2,3], arr2 [-4,-3,6,10,20,30], and d=3, the distance value between the two arrays is 2", () => {
    expect(findTheDistanceValue([1, 4, 2, 3], [-4, -3, 6, 10, 20, 30], 3)).toBe(2);
});

test("With the arr1 [2,1,100,3], arr2 [-5,-2,10,-3,7], and d=6, the distance value between the two arrays is 1", () => {
    expect(findTheDistanceValue([2, 1, 100, 3], [-5, -2, 10, -3, 7], 6)).toBe(1);
});