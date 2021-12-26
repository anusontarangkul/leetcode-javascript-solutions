// 1. Create prev variable and assign it to null.
// 2. Loop through the linked list (while head !== null)
//      a. Create nextNode variable and assign it to head.next
//      b. Assign head.next to prev
//      c. Assign prev to head
//      d. Assign head to nextNode
// 3. Return prev

// Time Complexity: O(n)
// Space Complexity: O(1)

var reverseList = function (head) {
    let prev = null;
    while (head !== null) {
        let nextNode = head.next;
        head.next = prev;
        prev = head;
        head = nextNode;
    }
    return prev;
};