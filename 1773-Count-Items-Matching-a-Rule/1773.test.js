const countMatches = require("./1773")

test("There is only one item matching the given rule, which is ['computer','silver','lenovo']", () => {
    expect(countMatches([["phone", "blue", "pixel"], ["computer", "silver", "lenovo"], ["phone", "gold", "iphone"]], "color", "silver")).toBe(1);
});

test("There are only two items matching the given rule, which are ['phone','blue','pixel'] and ['phone','gold','iphone']. Note that the item ['computer','silver','phone'] does not match", () => {
    expect(countMatches([["phone", "blue", "pixel"], ["computer", "silver", "phone"], ["phone", "gold", "iphone"]], "type", "phone")).toBe(2);
});