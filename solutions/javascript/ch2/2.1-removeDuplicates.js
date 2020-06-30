/*
    Write code to remove duplicates from an unsorted linked list

    FOLLOW UP

    How would you solve this problem if a temporary buffer is not allowed?

    Assumptions:

    - LinkedList and respective Node classes need to be created

    Notes:

    1. Get head of Linked List
    2. Add value to set/hashtable
    3. Continue through Linked List by getting next node
    4. If current Element exists in set/hashtable, remove from LinkedList

    Other Considerations:

    - If head is null, list is empty so throw error
    - Length should increase as list increases/decreases

    Improvements:

    Time Complexity - O(n)
    Space Complexity - O(n)
*/

const removeDuplicates = (list) => {
    if (list.head === null || list.head === undefined)
        throw new Error("List is empty");

    let duplicates = new Set();
    let previousNode = null;
    let currentNode = list.head;

    while (currentNode) {
        if (duplicates.has(currentNode.value)) {
            previousNode.next = currentNode.next;
            list.length--;
        } else {
            duplicates.add(currentNode.value);
            previousNode = currentNode;
        }
        currentNode = currentNode.next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    add(node) {
        if (this.tail === null) {
            this.head = node;
            this.tail = node;
        } else {
            let prevTail = this.tail;
            prevTail.next = node;
            node.previous = prevTail;
            this.tail = node;
        }
        this.length++;
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
    constructor(value) {
        this.previous = null;
        this.next = null;
        this.value = value;
    }

}

const testAlgorithm = (list) => {
    console.log(`BEFORE: ${list.printList()}`);
    removeDuplicates(list);
    console.log(`AFTER: ${list.printList()}`);
}

let node1 = new LinkedListNode(1);
let node2 = new LinkedListNode(2);
let node3 = new LinkedListNode(3);
let node4 = new LinkedListNode(3);
let node5 = new LinkedListNode(4);

let list1 = new LinkedList();
list1.add(node1);
list1.add(node2);
list1.add(node3);
list1.add(node4);
list1.add(node5);

testAlgorithm(list1);