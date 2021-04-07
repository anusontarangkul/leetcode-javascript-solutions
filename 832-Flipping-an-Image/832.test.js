const flipAndInvertImage = require("./832")

test("The flipped image from [[1,1,0],[1,0,1],[0,0,0]] is [[1,0,0],[0,1,0],[1,1,1]]", () => {
    expect(flipAndInvertImage([[1, 1, 0], [1, 0, 1], [0, 0, 0]])).toStrictEqual([[1, 0, 0], [0, 1, 0], [1, 1, 1]]);
});

test("The flipped image from [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]] is [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]", () => {
    expect(flipAndInvertImage([[1, 1, 0, 0], [1, 0, 0, 1], [0, 1, 1, 1], [1, 0, 1, 0]])).toStrictEqual([[1, 1, 0, 0], [0, 1, 1, 0], [0, 0, 0, 1], [1, 0, 1, 0]]);
});