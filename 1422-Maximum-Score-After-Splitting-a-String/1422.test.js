const maxScore = require("./1422")

test("For '011101', the score can be split to a left '0' and right '11101' to a score of 1 + 4 = 5", () => {
    expect(maxScore("011101")).toBe(5);
});

test("For '00111', the score can be split to a left '00' and right '111' to a score of 2 + 3 = 5", () => {
    expect(maxScore("00111")).toBe(5);
});

test("For '1111', the score can be split to a left '1' and right '111' to a score of 0 + 3 = 3", () => {
    expect(maxScore("1111")).toBe(3);
});