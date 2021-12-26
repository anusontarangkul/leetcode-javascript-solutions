// left, node, right
// 1. Create results array
// 2. Create traverse function
//      a. if node is null, return
//      b. if node.left exists, call traverse (node.left)
//      c. Push node.val into results
//      d. if node.right exists, call traverse (node.right)
// 3. Call traverse function
// 4. Return results

// Time Complexity: O(n)
// Space Complexity: O(n)

var inorderTraversal = function (root) {
    let results = [];
    const traverse = (node) => {
        if (node === null) return;
        if (node.left) traverse(node.left)
        results.push(node.val)
        if (node.right) traverse(node.right)
    }
    traverse(root)
    return results
};