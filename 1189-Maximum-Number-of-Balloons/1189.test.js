const maxNumberOfBalloons = require("./1189")

test("The maximum number of instances that 'balloon' can be formed from 'nlaebolko' is 1", () => {
    expect(maxNumberOfBalloons("nlaebolko")).toStrictEqual(1);
});

test("The maximum number of instances that 'balloon' can be formed from 'loonbalxballpoon' is 2", () => {
    expect(maxNumberOfBalloons("loonbalxballpoon")).toStrictEqual(2);
});

test("The maximum number of instances that 'balloon' can be formed from 'leetcode' is 0", () => {
    expect(maxNumberOfBalloons("leetcode")).toStrictEqual(0);
});