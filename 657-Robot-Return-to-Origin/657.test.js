const judgeCircle = require("./657")

test("The robbot DOES end up in starting position through 'UD'", () => {
    expect(judgeCircle("UD")).toStrictEqual(true);
});

test("The robbot DOES NOT end up in starting position through 'LL'", () => {
    expect(judgeCircle("LL")).toStrictEqual(false);
});

test("The robbot DOES NOT end up in starting position through 'RRDD'", () => {
    expect(judgeCircle("RRDD")).toStrictEqual(false);
});

test("The robbot DOES NOT end up in starting position through 'LDRRLRUULR'", () => {
    expect(judgeCircle("LDRRLRUULR")).toStrictEqual(false);
});