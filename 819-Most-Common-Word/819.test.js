const mostCommonWord = require('./819');

test("ball to be most common word", () => {
    expect(mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.", ["hit"])).toBe("ball");
});