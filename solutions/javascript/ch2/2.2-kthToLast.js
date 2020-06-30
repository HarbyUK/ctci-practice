/*
    Implement an algorithm to find the kth to last element of a singly linked list

    Assumptions:

    - LinkedList and respective Node classes need to be created

    Notes:

    1. Iterate through list with currentNode and kNode where kNode is k elements
       away from currentNode
    2. When iterating, increment both currentNode and kNode
    3. When kNode reaches the end, then return currentNode which will be the kth node

    Other Considerations:

    - Must be singly linked list, so no previous and no tail

    Improvements:

    Time Complexity - O(n)
    Space Complexity - O(1)
*/

const kthToLast = (list, k) => {
    let currentNode = list.head;
    let kNode = list.head;
    let count = 1;

    if (count > k)
        throw Error("k value cannot be less than 1");

    while (count < k) {
        if (kNode.next) {
            kNode = kNode.next;
            count++;
        } else {
            throw Error("k value provided is out of linked list range");
        }
    }

    while (kNode.next) {
        currentNode = currentNode.next;
        kNode = kNode.next;
    }
    return currentNode.value;
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

const testAlgorithm = (list, k) => {
    console.log(`list = ${list.printList()}, k = ${k}`);
    try {
        console.log(`Returned Element = ${kthToLast(list, k)}`);
    } catch (e) {
        console.error(e.message);
    }
}

let node1 = new LinkedListNode(1);
let node2 = new LinkedListNode(2);
let node3 = new LinkedListNode(3);
let node4 = new LinkedListNode(4);
let node5 = new LinkedListNode(5);

let list1 = new LinkedList();
list1.add(node1);
list1.add(node2);
list1.add(node3);
list1.add(node4);
list1.add(node5);

testAlgorithm(list1, 1);
testAlgorithm(list1, 2);
testAlgorithm(list1, 3);
testAlgorithm(list1, 4);
testAlgorithm(list1, 5);
testAlgorithm(list1, 6);
testAlgorithm(list1, 0);
testAlgorithm(list1, -1);