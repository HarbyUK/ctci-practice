/*
    Given a sorted (increasing order) array with unique integer elements, write an
    algorithm to create a binary search tree with minimal height

    Notes:

    - To achieve minimal height, each left and right of a node must be filled where
      possible
    - However as it is a binary search tree, respect must also be given to the order
    - As it is already sorted, get the middle. All values to the left of middle go
      left, and all values right go to the right recursively

    1. Create Tree Class with root node and function to create min tree recursively
    2. Create TreeNode Class with value, left and right
    3. Create min tree function should take array and mid point
    4. Mid point is calculated as array length over 2
    5. Using this, get left and right of array recursively
*/

class Tree {
    constructor(array) {
        this.root = this.createMinSearchTree(array, 0, array.length - 1);
    }

    createMinSearchTree(array, start, end) {
        if (end < start)
            return null;

        let middle = (start + end) / 2;
        let treeNode = new TreeNode(array[middle]);
        treeNode.left = this.createMinSearchTree(array, start, middle - 1);
        treeNode.right = this.createMinSearchTree(array, middle + 1, end);

        return treeNode;
    }
}

class TreeNode {
    constructor(value) {
        this.value = value;
    }
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const tree = new Tree(array);
console.log(tree.root);