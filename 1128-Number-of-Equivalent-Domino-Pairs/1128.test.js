const numEquivDominoPairs = require("./1128")

test("With the set[[1,2],[2,1],[3,4],[5,6]], there is 1 pair [1,2]", () => {
    expect(numEquivDominoPairs([[1, 2], [2, 1], [3, 4], [5, 6]])).toBe(1);
});