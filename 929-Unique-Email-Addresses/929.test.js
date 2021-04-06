const numUniqueEmails = require("./929")

test("There are 2 different addresses from ['test.email+alex@leetcode.com','test.e.mail+bob.cathy@leetcode.com','testemail+david@lee.tcode.com']", () => {
    expect(numUniqueEmails(["test.email+alex@leetcode.com", "test.e.mail+bob.cathy@leetcode.com", "testemail+david@lee.tcode.com"])).toStrictEqual(2);
});

test("There are 3 different addresses from ['a@leetcode.com','b@leetcode.com','c@leetcode.com']", () => {
    expect(numUniqueEmails(["a@leetcode.com", "b@leetcode.com", "c@leetcode.com"])).toStrictEqual(3);
});
