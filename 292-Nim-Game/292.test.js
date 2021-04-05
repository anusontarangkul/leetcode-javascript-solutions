const canWinNim = require("./292")

test("If there are 4 turns, you can't win optimally", () => {
    expect(canWinNim(4)).toBe(false);
});

test("If there are 1 turns, you can win optimally", () => {
    expect(canWinNim(1)).toBe(true);
});

test("If there are 2 turns, you can win optimally", () => {
    expect(canWinNim(2)).toBe(true);
});