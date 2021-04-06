var numUniqueEmails = function (emails) {
    let emailSet = new Set();
    for (let i = 0; i < emails.length; i++) {
        let [local, domain] = emails[i].split("@");
        local = local.replace(/\./g, "").split("+");
        let uniqueEmail = local[0] + "@" + domain;
        emailSet.add(uniqueEmail);
    }
    return emailSet.size;
};

module.exports = numUniqueEmails;
/*
Time Complexity: O(n*m)
Space Compelxity: O(n*m)
1. Create empty set.
2. Loop through emails.
    a. Create variable local and domain from split at "@".
    b. Delete "." from local.
    c. Split local from "+".
    d. Create new uniqueEmail variable to hold local + "a" + domain.
    e. Add uniqueEmail to set.
3. Return the size of the set.
*/