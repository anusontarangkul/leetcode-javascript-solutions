const fairCandySwap = require('./888');

test("output would be '[1,2]'", () => {
    expect(fairCandySwap([1, 1], [2, 2])).toStrictEqual([1, 2]);
});

test("output would be '[2,3]'", () => {
    expect(fairCandySwap([1, 2], [2, 3])).toStrictEqual([1, 2]);
});

test("output would be '[2,3]'", () => {
    expect(fairCandySwap([2], [1, 3])).toStrictEqual([2, 3]);
});

test("output would be '[5,4]'", () => {
    expect(fairCandySwap([1, 2, 5], [2, 4])).toStrictEqual([5, 4]);
});
