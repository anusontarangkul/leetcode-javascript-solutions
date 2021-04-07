const decompressRLElist = require("./1313")

test("The decompressed list from [1,2,3,4] is [2,4,4,4]", () => {
    expect(decompressRLElist([1, 2, 3, 4])).toStrictEqual([2, 4, 4, 4]);
});

test("The decompressed list from [1,1,2,3] is [1,3,3]", () => {
    expect(decompressRLElist([1, 1, 2, 3])).toStrictEqual([1, 3, 3]);
});