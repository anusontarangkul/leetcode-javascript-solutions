const checkStraightLine = require("./1232")

test("The coordinates [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]] makes a straight line", () => {
    expect(checkStraightLine([[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7]])).toBe(true);
});

test("The coordinates [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]] makes a straight line", () => {
    expect(checkStraightLine([[1, 1], [2, 2], [3, 4], [4, 5], [5, 6], [7, 7]])).toBe(false);
});