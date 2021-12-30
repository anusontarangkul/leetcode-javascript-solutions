// 1. if root is null, return empty array
// 2. Create results array
// 3. Create traverse helper function (node, stringPath, results)
//      a. concate node.val to stringPath
//      b. if left and right node are both null, push the stringPath to results
//      c. if left is not null, traverse (left)
//      d. if right is not null, traverse (right)
// 4. Return results

// Time Complexity: O(n)
// Space Complexity: O(n)
// where n is the number of nodes

var binaryTreePaths = function (root) {
    if (root === null) return []
    let results = []
    traverse(root, results)
    return results;
};

const traverse = (node, results, stringPath = "") => {
    stringPath += node.val;
    if (node.left === null && node.right === null) {
        results.push(stringPath)
    }
    if (node.left !== null) {
        traverse(node.left, results, stringPath + "->")
    }
    if (node.right !== null) {
        traverse(node.right, results, stringPath + "->")
    }
}
