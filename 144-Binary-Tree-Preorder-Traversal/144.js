// node left right
// 1.Create results array
// 2. Create traverse function (root, results)
//      a. If null, return 
//      b. Push node.val to results
//      c. traverse(root.left)
//      d. traverse(root.right)

// Time Complexity O(n)
// Space Complexity O(n)
// where n is the number of nodes

var preorderTraversal = function (root) {
    let results = [];
    traverse(root, results)
    return results;
};

const traverse = (root, results) => {
    if (root === null) return
    results.push(root.val);
    traverse(root.left, results)
    traverse(root.right, results)
}
