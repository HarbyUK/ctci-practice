"""
Write an algorithm to find the next node (ie in order successor) of a given node in a binary search tree.

Assumptions:
	Each node has a link to its parent.

In Order traversal:
	go to left child,
	go to root
	go to right child.
	keep doing this until no children left.


Initialise an array.
In order traversal of tree. Append each found node to the array.

Write function to find given element in the array.
Return that element index + 1

If it is the last element in the array throw error.


"""

class Node(object):
    def __init__(self,key):
        self.key = key
        self.left = None
        self.right = None

# Make like a tree and get outta here - biff, 1955
t = Node(5)
t.left = Node(3)
t.right = Node(7)
t.left.left = Node(2)
t.left.right = Node(4)

arr = []

def inOrder(node):
    global arr
    if node:
        inOrder(node.left)
        arr.append(node.key)
        inOrder(node.right)

def findSuccessor(val, arr):
    if val in arr:
        return arr[arr.index(val) + 1]

inOrder(t)
print(arr)
print(findSuccessor(2,arr))