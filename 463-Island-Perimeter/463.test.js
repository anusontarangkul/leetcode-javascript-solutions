const islandPerimeter = require("./463")

test("The perimeter for [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]] is 16", () => {
    expect(islandPerimeter([[0, 1, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0], [1, 1, 0, 0]])).toBe(16);
});

test("The perimeter for [[1]] is 4", () => {
    expect(islandPerimeter([[1]])).toBe(4);
});

test("The perimeter for [[1,0]] is 4", () => {
    expect(islandPerimeter([[1, 0]])).toBe(4);
});