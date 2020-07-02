"""

Implement a stack datastrcutre.

A stack is a datastrcuture that follows the last in, first out principle.

    █  <= Last oject in, gets placed on the top, and removed first, like a stack of plates.
    
    █
    █
    █

################################

Impelement a queue datastrucutre.

A queue is a datstructure that implements first in first out principle

        █  =>  [ █ █ █ █   ]  =>   █


"""


class stack(object):

    def __init__(self):
        self.items = []

    def isEmpty(self):
        return self.items == []

    def size(self):
        return len(self.items)

    def pop(self):
        return self.items.pop()
    
    def push(self,val):
        self.items.append(val)

    def peek(self):
        return self.items[-1]

mystack = stack()
mystack.push(1)
print("Stack contents: ", mystack.items)



"""

Queue implementation

"""

class queue(object):

    def __init__(self):
        self.items = []

    def isEmpty(self):
        return self.items == []

    def size(self):
        return len(self.items)

    def enqueue(self,val):
        self.items.insert(0, val)

    def dequeue(self):
        return self.items.pop()

myqueue = queue()
myqueue.enqueue(1)
print("Queue contents: ",myqueue.items)
print()

## Testing removal

mystack.pop()
myqueue.dequeue()
print("After running pop and dequeue:")
print("Stack contents: ", mystack.items)
print("Queue contents: ", myqueue.items)



    