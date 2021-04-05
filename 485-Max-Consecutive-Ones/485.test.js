const findMaxConsecutiveOnes = require("./485")

test("For '[1, 1, 0, 1, 1, 1]', the maximum number of consecutive 1s is 3", () => {
    expect(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])).toBe(3);
});