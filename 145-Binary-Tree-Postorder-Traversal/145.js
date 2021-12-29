// left right node
// 1. Create results array
// 2. Traverse function
//      a. If null return
//      b. Traverse root.left
//      c. Traverse root.right
// 3. Return results

// Time Complexity: O(n)
// Space Complexity: O(n)
// where n is the number of nodes

var postorderTraversal = function (root) {
    let results = [];
    traverse(root, results)
    return results
};

const traverse = (root, results) => {
    if (root === null) return;
    traverse(root.left, results)
    traverse(root.right, results)
    results.push(root.val)
}
