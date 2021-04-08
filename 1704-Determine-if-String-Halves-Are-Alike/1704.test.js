const halvesAreAlike = require("./1704")

test("The string 'book' halves are alike", () => {
    expect(halvesAreAlike("book")).toBe(true);
});

test("The string 'textbook' halves are NOT alike", () => {
    expect(halvesAreAlike("textbook")).toBe(false);
});

test("The string 'MerryChristmas' halves are NOT alike", () => {
    expect(halvesAreAlike("MerryChristmas")).toBe(false);
});

test("The string 'AbCdEfGh' halves are alike", () => {
    expect(halvesAreAlike("AbCdEfGh")).toBe(true);
});
