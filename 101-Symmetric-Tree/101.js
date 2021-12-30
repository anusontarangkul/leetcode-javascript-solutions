// 1. If root is null, return true
// 2. Call recursive function (root.left, root.right)
//      a. if left and right are both null, return true
//      b. If one side of tree is null while other isn't, return false.
//      c. If values aren't the same, return false;
//      d. Return recursive function(left.left, right.right) && (left.right, right.left)

// Time Complexity: O(n)
// Space Complexity: O(n)
// where n is the number of nodes
var isSymmetric = function (root) {
    if (root === null) return true;
    return compareLeftRight(root.left, root.right)
};

const compareLeftRight = (left, right) => {
    if (left === null && right === null) return true;
    if (left !== null && right === null) return false;
    if (left === null && right !== null) return false;
    if (left.val !== right.val) return false;
    return compareLeftRight(left.left, right.right) && compareLeftRight(left.right, right.left)
}
