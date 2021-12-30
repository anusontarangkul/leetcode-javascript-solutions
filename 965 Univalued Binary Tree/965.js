// 1. Create rootVal variable and assign it to root.val
// 2. Return traverse function
//      a. if node is null, return true
//      b. Left variable to traverse left
//      c. if node.val !== rootVal return false
//      d. Right variable to traverse right
//      e. Return left and right

// Time Complexity: O(n)
// Space Complexity: O(n)
// where n is the number of nodes

var isUnivalTree = function (root) {
    const rootVal = root.val;
    return traverse(root, rootVal)
};

const traverse = (node, rootVal) => {
    if (node === null) return true;
    let left = traverse(node.left, rootVal);
    if (node.val !== rootVal) return false;
    let right = traverse(node.right, rootVal)
    return left && right;
}
