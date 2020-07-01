/*
    How would you design a stack which, in addition to push and pop, has a function min
    which returns the minimum element? Push, pop and min should all operate in O(1) time

    Notes:

    When working with stack, adjust the min value whenever a push or pop operation occurs
    using a second stack that is parallel to the main stack, holding the min value each
    time you push or pop from the main stack

    Improvements:

    Time Complexity
        push - O(1)
        pop - O(1)
        peek - O(1)
        min - O(1)
        isEmpty - O(1)

    Space Complexity:
        push - O(1)
        pop - O(1)
        peek - O(1)
        min - O(1)
        isEmpty - O(1)

*/

class Stack {
    constructor() {
        this.stack = [];
        this.minValues = [];
    }

    push(item) {
        this.stack.push(item);
        if (this.isEmpty(this.minValues) || item < this.min())
            this.minValues.push(item);
        else
            this.minValues.push(this.min());
    }

    pop() {
        if (this.isEmpty(this.stack))
            throw new Error("Cannot pop in empty stack");
        this.minValues.pop();
        return this.stack.pop();
    }

    peek() {
        if (this.isEmpty(this.stack))
            throw new Error("Cannot peek in empty stack");
        return this.stack[this.stack.length - 1];
    }

    min() {
        if (this.isEmpty(this.minValues))
            throw new Error("Cannot have a min value of empty stack");
        return this.minValues[this.minValues.length - 1];
    }

    isEmpty(stack) {
        return !(stack.length && stack.length > 0);
    }
}

const stack = new Stack();
stack.push(5);                                                                  // PUSH 5
console.log(`Peeking Stack = ${stack.peek()}, Minimum Value = ${stack.min()}`); // 5, 5
stack.push(6);                                                                  // PUSH 6
console.log(`Peeking Stack = ${stack.peek()}, Minimum Value = ${stack.min()}`); // 6, 5
stack.push(2);                                                                  // PUSH 2
console.log(`Peeking Stack = ${stack.peek()}, Minimum Value = ${stack.min()}`); // 2, 2
stack.push(4);                                                                  // PUSH 4
console.log(`Peeking Stack = ${stack.peek()}, Minimum Value = ${stack.min()}`); // 4, 2
console.log(`Popped Value = ${stack.pop()}`);                                   // POP 4
console.log(`Peeking Stack = ${stack.peek()}, Minimum Value = ${stack.min()}`); // 2, 2
console.log(`Popped Value = ${stack.pop()}`);                                   // POP 2
console.log(`Peeking Stack = ${stack.peek()}, Minimum Value = ${stack.min()}`); // 6, 5
console.log(`Popped Value = ${stack.pop()}`);                                   // POP 6
console.log(`Peeking Stack = ${stack.peek()}, Minimum Value = ${stack.min()}`); // 5, 5
console.log(`Popped Value = ${stack.pop()}`);                                   // POP 5
try {
    console.log(`Peeking Stack = ${stack.peek()}, Minimum Value = ${stack.min()}`); // ERROR
} catch(e) {
    console.error(`ERROR: ${e.message}`);
}