const uncommonFromSentences = require("./884")

test("The uncommon words from 'this apple is sweet' and 'this apple is sour' are ['sweet', 'sour']", () => {
    expect(uncommonFromSentences("this apple is sweet", "this apple is sour")).toStrictEqual(["sweet", "sour"]);
});

test("The uncommon words from 'apple apple' and 'banana' is ['banana']", () => {
    expect(uncommonFromSentences("apple apple", "banana")).toStrictEqual(["banana"]);
});