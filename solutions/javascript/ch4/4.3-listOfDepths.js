/*
    Given a binary tree, design an algorithm which creates a linked list of all the nodes at each depth
    (e.g. if you have a tree with depth D, you'll have D linked lists)

    Notes:

    1. Create Tree class that has root node, an array of Linked Lists and a function to createListOfDepths
    2. Create Node class that has value, left child and right child
    3. Create LinkedList class that has head
    4. Create LinkedList node that has value and next
    5. createListOfDepths then needs to traverse a created Tree with pre order
    6. Using the level that we are on, check to see if level has been accessed before
    7. If level has been accessed, get linked list from the array contained in tree
    8. If level has not yet been accessed before, create array for level
    9. Add value to selected LinkedList
    10. Recursively continue traversal by doing left node at level++
    11. Recursively continue traversal by doing right node at level++
*/

class Tree {
    constructor(node) {
        this.root = node;
    }

    createListOfDepths() {
        this.linkedLists = [];
        this.createLinkedListForDepth(this.root, 0);
    }

    createLinkedListForDepth(node, level) {
        if (!node) return;
        if (!this.linkedLists[level]) {
            this.linkedLists[level] = new LinkedList();
        }
        
        this.linkedLists[level].add(node);
        let nextLevel = ++level;
        this.createLinkedListForDepth(node.left, nextLevel);
        this.createLinkedListForDepth(node.right, nextLevel);
    }
}

class TreeNode {
    constructor(value) {
        this.value = value;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    add(node) {
        const listNode = new LinkedListNode(node.value);
        if (this.head === null) {
            this.head = listNode;
        } else {
            let currentNode = this.head;
            while (currentNode) {
                if (currentNode.next) {
                    currentNode = currentNode.next;
                } else {
                    currentNode.next = listNode;
                    break;
                }
            }
        }
    }

    printList() {
        let currentNode = this.head; 
        const stringArray = [];
        while (currentNode) { 
            stringArray.push(currentNode.value);
            currentNode = currentNode.next;
        } 
        return "[ " + stringArray.join(", ") + " ]";
    }
}

class LinkedListNode {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

const treeNodeA = new TreeNode("a");
const treeNodeB = new TreeNode("b");
const treeNodeC = new TreeNode("c");
const treeNodeD = new TreeNode("d");
const treeNodeE = new TreeNode("e");
const treeNodeF = new TreeNode("f");

treeNodeA.left = treeNodeB;
treeNodeA.right = treeNodeC;
treeNodeB.left = treeNodeD;
treeNodeB.right = treeNodeE;
treeNodeC.left = treeNodeF;

tree = new Tree(treeNodeA);
tree.createListOfDepths();

for (let i = 0; i < tree.linkedLists.length; i++) {
    const list = tree.linkedLists[i];
    console.log(`List ${i}`);
    console.log(list.printList());
}