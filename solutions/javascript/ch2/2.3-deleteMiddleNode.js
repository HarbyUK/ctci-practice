/*
    Implement an algorithm to delete a node in the middle (i.e. any node but the first
    and last node, not necessarily the exact middle) of a singly linked list, given only
    access to that node

    Example:

    Input - The node c from the linked list a->b->c->d->e->f
    Result - Nothing is returned, but the new linked list looks like a->b->d->e->f

    Notes:

    1. Iterate around list once to get the count
    2. Divide by 2 and floor value
    3. Iterate a second time with new count
    4. When count reaches half count, delete node
    5. Exit function

    Improvements:

    Time Complexity - O(n)
    Space Complexity - O(1)
*/

const deleteMiddleNode = (list) => {
    let currentNode = list.head;
    let count = 1;
    
    while (currentNode.next) {
        currentNode = currentNode.next;
        count++;
    }

    if (count === 1 || count === 2)
        return;

    let middle = Math.ceil(count / 2);
    currentNode = list.head;
    count = 1;
    
    while (currentNode) {
        count++;
        if (count === middle) {
            currentNode.next = currentNode.next.next;
            break;
        }
        currentNode = currentNode.next;
    }
};

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    add(node) {
        if (this.head === null) {
            this.head = node;
        } else {
            let currentNode = this.head;
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = node;
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
        this.next = null;
        this.value = value;
    }
}

const testAlgorithm = (list) => {
    console.log(`BEFORE: ${list.printList()}`);
    try {
        deleteMiddleNode(list);
        console.log(`AFTER: ${list.printList()}\n---------------\n`);
    } catch (e) {
        console.error(e.message);
    }
}

let node1 = new LinkedListNode("a");
let node2 = new LinkedListNode("b");
let node3 = new LinkedListNode("c");
let node4 = new LinkedListNode("d");
let node5 = new LinkedListNode("e");
let node6 = new LinkedListNode("f");

let list1 = new LinkedList();
list1.add(node1);
list1.add(node2);
list1.add(node3);
list1.add(node4);
list1.add(node5);
list1.add(node6);

let node7 = new LinkedListNode("a");
let node8 = new LinkedListNode("b");
let node9 = new LinkedListNode("c");
let node10 = new LinkedListNode("d");
let node11 = new LinkedListNode("e");

let list2 = new LinkedList();
list2.add(node7);
list2.add(node8);
list2.add(node9);
list2.add(node10);
list2.add(node11);

let node12 = new LinkedListNode("a");
let node13 = new LinkedListNode("b");

let list3 = new LinkedList();
list3.add(node12);
list3.add(node13);

let node14 = new LinkedListNode("a");

let list4 = new LinkedList();
list4.add(node14);

testAlgorithm(list1);
testAlgorithm(list2);
testAlgorithm(list3);
testAlgorithm(list4);