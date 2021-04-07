const toGoatLatin = require("./824")

test("The Goat language for 'I speak Goat Latin' is 'Imaa peaksmaaa oatGmaaaa atinLmaaaaa'", () => {
    expect(toGoatLatin("I speak Goat Latin")).toBe("Imaa peaksmaaa oatGmaaaa atinLmaaaaa");
});

test("The Goat language for 'The quick brown fox jumped over the lazy dog' is 'heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa'", () => {
    expect(toGoatLatin("The quick brown fox jumped over the lazy dog")).toBe("heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa");
});