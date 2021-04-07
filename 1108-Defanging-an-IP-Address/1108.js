var defangIPaddr = function (address) {
    let addressArray = address.split('');
    for (let i = 0; i < addressArray.length; i++) {
        if (addressArray[i] === '.') {
            addressArray[i] = '[.]';
        }
    }
    return addressArray.join('');
};

module.exports = defangIPaddr;
/*
Time Complexity: O(n)
Space Complexity: O(n)

1. Change address to array.
2. Loop through adress array.
    a. Condition if the current index value is a ".".
        i. Change it to "[.]"
3. Return address as a string.
*/