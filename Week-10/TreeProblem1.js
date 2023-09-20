// Problem 10.1: Maximum Depth of Binary Tree
// Given the root of a binary tree, return its maximum depth.
// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
// Example 1: Input: root = [3,9,20,null,null,15,7]
// Output: 3
// Example 2: Input: root = [1,null,2]
// Output: 2
// Constraints:●The number of nodes in the tree is in the range [0, 104].●100 <= Node.val <= 100

class Node  // A binary tree node
{
	constructor(value)
	{
		this.data=value;
		this.left=null;
    this.right=null;
	}
}

	let root;
	
	function maxDepth(node)
	{
		if (node == null)
			return 0;
		else
		{
			/* compute the depth of each subtree */
			let lDepth = maxDepth(node.left);
			let rDepth = maxDepth(node.right);

			/* use the larger one */
			if (lDepth > rDepth)
				return (lDepth + 1);
			else
				return (rDepth + 1);
		}
	}

	
		root = new Node(3);//Root Node
		root.left = new Node(9);//Left Child-1
		root.right = new Node(20);//Right Child-1
		root.left.left = new Node(null);//Left child of Left Child-1
		root.left.right = new Node(null);//Right child of Left Child-1
    root.right.left = new Node(15);//Left child of Right Child-1
		root.right.right = new Node(7);//Right child of Right Child-1

	console.log("Maximum Depth is: "+maxDepth(root));

