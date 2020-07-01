/*
    Imagine a (literal) stack of plates. If the stack gets too high, it might topple. Therefore
    in real life, we would likely start a new stack when the previous stack exceeds some threshold.
    Implement a data structure SetOfStacks that mimics this. SetOfStacks should be composed of
    several stacks and should create a new stack once the previous one exceeds capacity.
    SetOfStacks.push() and SetOfStacks.pop() should behave identically to a single stack (that is,
    pop() should return the same values as it would if there were just a single stack).

    FOLLOW UP

    Implement a function popAt(int index) which performs a pop operation on a specific sub-stack

    Notes:

    1. Constructor should have a stack capacity and a way to store stacks (an array of stacks?)
       as well as a way to know what the current stack is
    2. Push should push element into current stack. If stack is at capacity, create new stack
       and push item into new stack instead
    3. Pop should pop and return element from current stack. Check first to see if current stack
       size is equal to zero. If true, reduce current stack index by 1.
    4. For the follow up, if popAt is on current stack, perform as normal
    5. If popAt is on stack that is less than current stack, either:
        a. Iterate around each stack, take current Element and move into index-1
        b. Pop at given stack, then shift all stacks after popped at stack and append shifted
           value into previous stack.

    Other Considerations:

    - If you try to pop a stack where current stack index is equal to 0 and this stack has no items in
      then throw an error
*/

class Stack {
    constructor(capacity) {
        this.capacity = capacity;
        this.array = [[]];
        this.currentStack = 0;
    }

    push(item) {
        if (this.array[this.currentStack].length === this.capacity) {
            this.currentStack++;
            this.array[this.currentStack] = [];
        }
        this.array[this.currentStack].push(item);
    }

    pop() {
        if (this.array[this.currentStack].length === 0) {
            if (this.currentStack === 0)
                throw new Error("Unable to pop from empty stack");
            this.array.pop();
            this.currentStack--;
        }
        return this.array[this.currentStack].pop();
    }

    popAt(stackIndex) {
        if (stackIndex > this.currentStack)
            throw new Error("Cannot pop element from stack index higher than the current stack");
        if (stackIndex === this.currentStack)
            return this.pop();
        if (this.array[this.currentStack].length === 0) {
            if (this.currentStack === 0)
                throw new Error("Unable to pop from empty stack");
            this.array.pop();
            this.currentStack--;
        }
        let poppedItem = this.array[stackIndex].pop();
        let shiftedItem = null;
        for (let i = this.currentStack; i >= stackIndex; i--) {
            if (shiftedItem)
                this.array[i].push(shiftedItem);
            if (i !== stackIndex)
                shiftedItem = this.array[i].shift();
        }
        return poppedItem;
    }
}

const testPush = (stack, item) => {
    stack.push(item);
    testLogging(stack);
};

const testPop = (stack) => {
    try {
        stack.pop();
        testLogging(stack);
    } catch (e) {
        console.error(`ERROR: ${e.message}`);
    }
};

const testPopAt = (stack, stackIndex) => {
    try {
        stack.popAt(stackIndex);
        testLogging(stack);
    } catch (e) {
        console.error(`ERROR: ${e.message}`);
    }
};

const testLogging = (stack) => {
    console.log(`Stack Capacity = ${stack.capacity}, Current Stack Index = ${stack.currentStack}`);
    console.log(stack.array);
}

const stack = new Stack(2);
console.log("--------------\nTesting Main Solution:\n");

testLogging(stack);     // [ [ ] ]
testPush(stack, "a");   // [ [ "a" ] ]
testPush(stack, "b");   // [ [ "a", "b" ] ]
testPush(stack, "c");   // [ [ "a", "b" ], [ "c" ] ]
testPush(stack, "d");   // [ [ "a", "b" ], [ "c", "d" ] ]
testPush(stack, "e");   // [ [ "a", "b" ], [ "c", "d" ], [ "e" ] ]
testPop(stack);         // [ [ "a", "b" ], [ "c", "d" ] ]
testPop(stack);         // [ [ "a", "b" ], [ "c" ] ]
testPop(stack);         // [ [ "a", "b" ] ]
testPop(stack);         // [ [ "a" ] ]
testPop(stack);         // [ [ ] ]
testPop(stack);         // ERROR

console.log("\n--------------\nTesting Follow Up:\n");

testPush(stack, "a"); // [ [ "a" ] ]
testPush(stack, "b"); // [ [ "a", "b" ] ]
testPush(stack, "c"); // [ [ "a", "b" ], [ "c" ] ]
testPush(stack, "d"); // [ [ "a", "b" ], [ "c", "d" ] ]
testPush(stack, "e"); // [ [ "a", "b" ], [ "c", "d" ], [ "e" ] ]
testPopAt(stack, 0);  // [ [ "a", "c" ], [ "d", "e" ] ]
testPopAt(stack, 1);  // [ [ "a", "c" ], [ "d" ] ]
testPopAt(stack, 0);  // [ [ "a", "d" ] ]
testPopAt(stack, 0);  // [ [ "a" ] ]
testPopAt(stack, 0);  // [ [ ] ]