const arrayRankTransform = require("./1331")

test("The array [40,10,20,30] gets transformed to [4,1,2,3]", () => {
    expect(arrayRankTransform([40, 10, 20, 30])).toStrictEqual([4, 1, 2, 3]);
});

test("The array [100,100,100] gets transformed to [1,1,1]", () => {
    expect(arrayRankTransform([100, 100, 100])).toStrictEqual([1, 1, 1]);
});

test("The array [37,12,28,9,100,56,80,5,12] gets transformed to [5,3,4,2,8,6,7,1,3]", () => {
    expect(arrayRankTransform([37, 12, 28, 9, 100, 56, 80, 5, 12])).toStrictEqual([5, 3, 4, 2, 8, 6, 7, 1, 3]);
});