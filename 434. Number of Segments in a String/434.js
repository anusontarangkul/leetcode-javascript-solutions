var countSegments = function (s) {

    let segment = 0;
    let pointer = 0;

    while (pointer < s.length) {
        let currentChar = s[pointer]
        if (currentChar !== " ") {
            segment++;
            for (let i = pointer + 1; i < s.length; i++) {
                let currentInnerChar = s[i];
                if (currentInnerChar === " ") {
                    pointer = i;
                    break;
                }
                if (i === s.length - 1) {
                    pointer = s.length;
                }
            }

        }
        pointer++;
    }
    return segment;
};

// time complexity: O(n)
// space complexity: O(1)

// 1. Create segment variable to 0.
// 2. Create pointer variable to 0.
// 3. While loop for pointer being less than the length of s.
//      a. If currentChar is not a " ".
//          i. Increment segment.
//          ii. For loop starting at i (currentChar +1 ) until the length of s
//                  1. If currentInnerChar === " "
//                      a. Update pointer to i
//                      b. Break
//          iii. If i == s.length -1
//              1. pointer = length of s
//      b. pointer ++
// 4, Return segment
