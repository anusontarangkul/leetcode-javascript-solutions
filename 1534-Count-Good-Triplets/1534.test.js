const countGoodTriplets = require("./1534")

test("There are 4 good triplets: [(3,0,1), (3,0,1), (3,1,1), (0,1,1)]", () => {
    expect(countGoodTriplets([3, 0, 1, 1, 9, 7], 7, 2, 3)).toBe(4);
});

test(" No triplet satisfies all conditions", () => {
    expect(countGoodTriplets([1, 1, 2, 2, 3], 0, 0, 1)).toBe(0);
});