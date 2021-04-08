var halvesAreAlike = function (s) {
    let vowel = { a: "a", e: "e", i: "i", o: "o", u: "u", A: "A", E: "E", I: "I", O: "O", U: "U" }
    let count = 0;
    for (let i = 0; i < s.length / 2; i++) {
        if (vowel[s[i]]) {
            count++;
        }
    }
    for (let i = s.length / 2; i < s.length; i++) {
        if (vowel[s[i]]) {
            count--;
        }
    }
    return count === 0;
};
module.exports = halvesAreAlike;
/*
Time Complexity: O(n)
Space Complexity: O(1)

1. Create a vowels object to hold the vowels.
2. Update s to be only lower case.
3. Create count variable.
4. Loop through the first half of s.
    a. Create a condition if the current index value is inside the vowels object.
        i. Increment the count.
5. Loop through the second half of s.
    a. Create a condition if the current index value is inside the vowels object.
        i. Decrement the count.
6. Return if count is equal to 0.
*/