/*
    Describe how you could use a single array to implement three stacks

    Notes:

    - JavaScript allows arrays to be dynamic in size, therefore as more elements get pushed
      into the array, the size grows.
    - This logic can be applied to stacks

    1. Create three stack class
    2. The array needs to know:
        a. The start point of each stack
        b. The end point of each stack
    3. The three stack class will also need to be able push, pop, peek and isEmpty check each stack

    Other Considerations:

    - When length = 0, then a stack is empty
    - If an attempt to pop an empty stack happens, then an error must be thrown
    - There needs to be checks that stacks belonging to the class are being passed
    - You could turn this into n-stacks instead of 3 if you initialise stacks from the
      constructor. It would be recommended to create a "StackData" class though to
      ensure the length and endPos are declared every time

    Improvements:

    Time Complexity
        push - O(n)
        pop - O(n)
        peek - O(n)
        stackIsEmpty - O(1)
        allStacksAreEmpty - O(1)

    Space Complexity
        push - O(1)
        pop - O(1)
        peek - O(1)
        stackIsEmpty - O(1)
        allStacksAreEmpty - O(1)

*/

class ThreeStack {
    constructor() {
        this.array = [];
        this.stacks = [{
            length: 0,
            endPos: -1
        }, {
            length: 0,
            endPos: -1
        }, {
            length: 0,
            endPos: -1
        }];
    }

    push(item, stackId) {
        let runningLength = 0;
        for (let i = 0; i < this.stacks.length; i++) {
            if (i === stackId) {
                this.stacks[i].length++;
                runningLength += this.stacks[i].length;
                this.stacks[i].endPos = runningLength - 1;
                this.array.splice(this.stacks[i].endPos, 0, item);
            } else if (i > stackId) {
                runningLength += this.stacks[i].length;
                this.stacks[i].endPos = runningLength - 1;
            } else {
                runningLength += this.stacks[i].length;
            }
        }
    }

    pop(stackId) {
        if (this.stackIsEmpty(stackId))
            throw new Error("Stack provided is empty and cannot be popped");

        let runningLength = 0;
        let poppedItem = null;
        for (let i = 0; i < this.stacks.length; i++) {
            if (i === stackId) {
                poppedItem = this.array.splice(this.stacks[i].endPos, 1);
                this.stacks[i].length--;
                runningLength += this.stacks[i].length;
                this.stacks[i].endPos = runningLength - 1;
            } else if (i > stackId) {
                runningLength += this.stacks[i].length;
                this.stacks[i].endPos = runningLength - 1;
            } else {
                runningLength += this.stacks[i].length;
            }
        }
        return poppedItem;
    }

    peek(stackId) {
        for (let i = 0; i < this.stacks.length; i++) {
            if (i === stackId)
                return this.array[this.stacks[i].endPos];
        }
    }

    stackIsEmpty(stackId) {
        return this.stacks[stackId].length === 0;
    }

    allStacksAreEmpty() {
        return this.array.length === 0;
    }
}

const testAddDivider = () => {
    console.log("\n--------------------\n");
};

const testEmptyStacks = (threeStack) => {
    console.log(`All stacks are empty? ${threeStack.allStacksAreEmpty()}`);
    console.log(`Stack 1 is empty? ${threeStack.stackIsEmpty(0)}`);
    console.log(`Stack 2 is empty? ${threeStack.stackIsEmpty(1)}`);
    console.log(`Stack 3 is empty? ${threeStack.stackIsEmpty(2)}`);
};

const testPushToStack = (threeStack, item, stackId) => {
    console.log(`Add item "${item}" to stack "${stackId + 1}".`);
    threeStack.push(item, stackId);
};

const testPeekInStack = (threeStack, stackId) => {
    console.log(`Peek at last element of stack "${stackId + 1}" = ${threeStack.peek(stackId)}`);
};

const testPopItemFromStack = (threeStack, stackId) => {
    console.log(`Pop last element of stack "${stackId + 1}"`);
    console.log(`Popped item = "${threeStack.pop(stackId)}"`);
};

const threeStack = new ThreeStack();
testAddDivider();

// Test Operations to ensure pushing to stack works
testEmptyStacks(threeStack);
testPushToStack(threeStack, 2, 2);
testPeekInStack(threeStack, 2);
testEmptyStacks(threeStack);
testPushToStack(threeStack, 15, 2);
testPeekInStack(threeStack, 2);
testPushToStack(threeStack, 200, 2);
testPeekInStack(threeStack, 2);
testAddDivider();

// Test Operations to ensure popping from stack works
testPopItemFromStack(threeStack, 2);
testPeekInStack(threeStack, 2);
testPopItemFromStack(threeStack, 2);
testPeekInStack(threeStack, 2);
testAddDivider();

// Test Operations to ensure pushing to a fully popped stack works
testPushToStack(threeStack, 15, 2);
testPushToStack(threeStack, 200, 2);
testPeekInStack(threeStack, 2);
testAddDivider();

// Test Operations to ensure pushing to a second stack works
testPushToStack(threeStack, 1952, 0);
testPeekInStack(threeStack, 0);
testAddDivider();

// Test Operations to ensure pushing to a third stack works
testPushToStack(threeStack, "a", 1);
testPushToStack(threeStack, "b", 1);
testPushToStack(threeStack, "c", 1);
testPeekInStack(threeStack, 1);
testAddDivider();

// Test Operations to ensure popping from three non-empty stacks works
testPopItemFromStack(threeStack, 1);
testPeekInStack(threeStack, 0);
testPeekInStack(threeStack, 1);
testPeekInStack(threeStack, 2);
testPopItemFromStack(threeStack, 0);
testPeekInStack(threeStack, 0);
testPeekInStack(threeStack, 1);
testPeekInStack(threeStack, 2);
testAddDivider();

// Test Operations to ensure pushing to stack works after a collection of popping operations
testPushToStack(threeStack, 1953, 0);
testPeekInStack(threeStack, 0);
testAddDivider();