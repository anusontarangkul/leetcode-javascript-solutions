const checkRecord = require("./551")

test("For 'PPALLP', the student meets the attendance award", () => {
    expect(checkRecord("PPALLP")).toBe(true);
});

test("For 'PPALLL', the student fails the attendance award", () => {
    expect(checkRecord("PPALLL")).toBe(false);
});