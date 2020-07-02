/*
  Using a binary search tree, print all the node values in order using iterator (ie not recursion)

      3
     / \
    2   8
   /   / \
  1   5   9
     / \
    4   7
*/

class Stack {
    constructor() {
      this.stack = [];
    }
  
    push(item) {
      this.stack.push(item);
    }
  
    pop() {
      return this.stack.pop();
    }
  }
  
  class TreeNode {
    constructor(value) {
      this.left = null;
      this.right = null;
      this.value = value;
    }
  }
  
  const printBstInOrder = (node) => {
    let currentNode = node;
    const processor = new Stack();
    while (currentNode != null || processor.stack.length > 0) {
  
      while (currentNode != null) {
        processor.push(currentNode);
        currentNode = currentNode.left;
      }
  
      currentNode = processor.pop();
      console.log(`Value = ${currentNode.value}`);
  
      currentNode = currentNode.right;
    }
  }
  
  const treeNode1 = new TreeNode(1);
  const treeNode2 = new TreeNode(2);
  const treeNode3 = new TreeNode(3);
  const treeNode4 = new TreeNode(4);
  const treeNode5 = new TreeNode(5);
  const treeNode6 = new TreeNode(6);
  const treeNode7 = new TreeNode(7);
  const treeNode8 = new TreeNode(8);
  const treeNode9 = new TreeNode(9);
  
  treeNode3.left = treeNode2;
  treeNode2.left = treeNode1;
  treeNode3.right = treeNode8;
  treeNode8.left = treeNode5;
  treeNode5.left = treeNode4;
  treeNode5.right = treeNode7;
  treeNode8.right = treeNode9;
  
  printBstInOrder(treeNode3);