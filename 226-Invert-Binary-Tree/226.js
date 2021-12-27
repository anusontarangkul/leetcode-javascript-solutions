// 1. If root is null, return null
// 2. Create temp variable and assign it to root.left
// 3. Change root.left to equal root.right
// 4. Change root.right to equal to temp
// 5. invertTree(root.left)
// 6. invertTree(root.right)

// Time Complexity: O(n)
// Space Complexity: O(n)
// n is the number of nodes
var invertTree = function (root) {
    if (root === null) return null;
    let temp = root.left;
    root.left = root.right;
    root.right = temp;

    invertTree(root.left);
    invertTree(root.right);

    return root
};