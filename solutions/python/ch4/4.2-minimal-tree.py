"""
Minimal Tree.

Given a sorted (increasing order) array with unique integer elements, write an algorithm to create a binary search tree with minimal height.


Assumptions: 
	Array is a sorted list of ints.
	BST has all left nodes less than the parent node and all right nodes greater than the parent:


Create node object class with:
	value
	left child pointer
	right child pointer


1. Take middle item in list. Create a node object with children set to null.

Recursion:

Base case - if there is nothing left, (ie no new nodes to make) return None
Recursive case:
1. Take the middle of the array, Set value of this to "root"
2. Set root.left to makeTree(first half of the array up to mid)
3. Set root.right to makeTree(second half of the array after mid)
4. Return root.



"""



class node(object):
    def __init__(self,key):
        self.val = key
        self.left = None
        self.right = None

def makeTree(arr): 
    if not arr:
        return None
        

    mid = len(arr) // 2
    root = node(arr[mid])
	
    root.left = makeTree(arr[:mid])
    root.right = makeTree(arr[mid+1:])
    return root


def preOrder(node):
    if not node:
        return
    print(node.val)
    preOrder(node.left)
    preOrder(node.right)

tree = makeTree([2,3,4,5,7,8,11])
print(preOrder(tree))