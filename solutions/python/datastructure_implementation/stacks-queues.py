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

    def pop():
        self.items.pop()
    
    def push(self,val):
        self.items.append(val)

    def peek(self)
        return self.items[-1]

mystack = stack()
mystack.push(1)
print(mystack.items)
    