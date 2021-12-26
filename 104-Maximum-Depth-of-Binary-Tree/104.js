// if root is null, return 0
// return the max of maxDepth(left) +1 or maxDepth(right) + 1
// Time Complexity: O(n)
// Space Complexity: O(n)
var maxDepth = function (root) {
    if (root === null) return 0
    return Math.max(maxDepth(root.left) + 1, maxDepth(root.right) + 1)
};