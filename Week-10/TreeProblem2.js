// Problem 10.2 : Validate a Binary Tree
// Given the root of a binary tree, determine if it is a valid binary search tree (BST).
// A valid BST is defined as follows:
// The left subtree of a node contains only nodes with keys less than the node's key. 
// The right subtree of a node contains only nodes with keys greater than the node's key. 
// Both the left and right subtrees must also be binary search trees


// BST- left<root<right and each node at max can have 2 child.
// every left child has a smaller value than its parent
// every right child has a larger value than its parent
// every node can contain from 0 to 2 children.

 function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val);
     this.left = (left===undefined ? null : left);
     this.right = (right===undefined ? null : right);
  }

  const isValidBST = (root) => {
    const helper = (node, min, max) => {
        if (!node) {
          return true;
        }
        if (node.val <= min || node.val >= max) {
          return false;
        }
        return helper(node.left, min, node.val) && helper(node.right, node.val, max);
    }
    return helper(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
}
    new TreeNode(2,1,3);
    console.log(isValidBST(2));
