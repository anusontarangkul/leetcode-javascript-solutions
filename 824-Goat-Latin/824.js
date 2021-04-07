var toGoatLatin = function (S) {
    let arrayS = S.split(" ");
    for (let i = 0; i < arrayS.length; i++) {
        let word = arrayS[i].split("");
        let firstChar = word[0].toLowerCase();
        if (firstChar === "a" || firstChar === "e" || firstChar === "i" || firstChar === "o" || firstChar === "u") {
            word.push("ma");
        } else {
            word.push(word[0]);
            word.splice(0, 1);
            word.push("ma");
        }
        let countA = i + 1;
        while (countA > 0) {
            word.push("a")
            countA--
        }
        arrayS[i] = word.join("")
    }
    return arrayS.join(" ")
};

module.exports = toGoatLatin;
/*
Time Complexity: O(n * m)
Space Complexity: O(n * m)
1. Split S into array by each word.
2. Loop through S.
    a. Split each word by character.
    b. Condition if first character is vowel.
        i. Add "ma".
    c. Else, character is consonant.
        i. Add first letter to end.
        ii. Remove first letter at beginning.
        iii. Add "ma".
    d. Create variable for countA.
    e. While loop for count A is greater than 0.
        i. Add "a".
        ii. Decrement countA.
    f. Change S array index to new word joined.
3. Return S array joined by space.
*/