// 1. If p and q are both null, return true
// 2. If p is null while q isn't OR q is null while p isn't OR vals are not the same, return false
// 3. Return isSameTree(left for both) and is SameTree(right for both)

// Time Complexity: O(n)
// Space Complexity : O(n)
// where n is the shortest number of nodes between q and p
var isSameTree = function (p, q) {
    if (p === null && q === null) return true;
    if ((p === null && q !== null) || (p !== null && q === null) || (p.val !== q.val)) {
        return false;
    }
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};