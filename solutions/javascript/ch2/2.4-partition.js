/*
    Write code to partition a linked list around a value x, such that all nodes less
    than x come before all nodes greater than or equal to x. If x is contained within
    the list, the values of x only need to be after the elements less than x (see below).
    The partition element x can appear anywhere in the "right partition"; it does not need
    to appear between the left and right partitions.

    Example:

    Input  -    3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1 [partition = 5]
    Output -    3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8

    Assumptions:

    - Bi-directional Linked List
    - Contains Head and Tail
    - Aside from left and right of partition, order does not matter

    Notes:

    1. Iterate around linked list
    2. Compare each node value with partition
    3. If less than partition, place at the head
    4. If greater than or equal to partition, do nothing
    5. In theory, once traversed, then should fit the partition rules

    Improvements:

    Time Complexity - O(n)
    Space Complexity - O(n)
*/

const partition = (list, x) => {
    let newList = new LinkedList();
    let currentNode = list.head;
    while (currentNode) {
        let nextNode = currentNode.next;
        if (currentNode.value < x) {
            currentNode.next = newList.head;

            if (newList.tail === null)
                newList.tail = currentNode;
            newList.head = currentNode;
        } else {
            newList.tail.next = currentNode;

            if (newList.head === null)
                newList.head = currentNode;
            newList.tail = currentNode;
        }
        currentNode = nextNode;
    }
    newList.tail.next = null;
    return newList;
};

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
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

const testAlgorithm = (list, x) => {
    console.log(`BEFORE: ${list.printList()}`);
    const newList = partition(list, x);
    console.log(`AFTER: ${newList.printList()}`);
}

let node1 = new LinkedListNode(3);
let node2 = new LinkedListNode(5);
let node3 = new LinkedListNode(8);
let node4 = new LinkedListNode(5);
let node5 = new LinkedListNode(10);
let node6 = new LinkedListNode(2);
let node7 = new LinkedListNode(1);

let list1 = new LinkedList();
list1.add(node1);
list1.add(node2);
list1.add(node3);
list1.add(node4);
list1.add(node5);
list1.add(node6);
list1.add(node7);

testAlgorithm(list1, 5);