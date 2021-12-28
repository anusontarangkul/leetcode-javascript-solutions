// 1. Create half variable and assign it to head
// 2. Create end variable and assign it to head
// 3. Iterate through linked list (while end is not null and end.next is null)
//      a. half = half.next
//      b. end = end.next.next
// 4. Return half

// Time Complexity: O(n)
// Space Complexity: O(1)
// Where n is the number of nodes
var middleNode = function (head) {
    let half = head;
    let end = head;
    while (end !== null && end.next !== null) {
        half = half.next;
        end = end.next.next;
    }
    return half;
};