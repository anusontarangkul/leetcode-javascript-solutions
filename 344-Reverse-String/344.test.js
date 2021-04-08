const reverseString = require("./344")

test("The reverse of ['h','e','l','l','o'] is ['o','l','l','e','h']", () => {
    expect(reverseString(["h", "e", "l", "l", "o"])).toStrictEqual(["o", "l", "l", "e", "h"]);
});

test("The reverse of ['H','a','n','n','a','h'] is ['h','a','n','n','a','H']", () => {
    expect(reverseString(["H", "a", "n", "n", "a", "h"])).toStrictEqual(["h", "a", "n", "n", "a", "H"]);
});