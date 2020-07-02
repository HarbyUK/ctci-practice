"""
Trees.

Implement a Tree data strcuture.

Implement methods/functions for:
    - In order traversal
        Where we visit the left child first, then the root, then the right child.

    - Pre order traversal
        Where we visit the root first, then the left child, then the right child
    
    - Post order traversal
        Where we visit the left child first, then the right child, then root.


"""

class tree(object):
    def __init__(self,key):
        self.key = key
        self.left = None
        self.right = None

    def insertLeft(self,newNode):
        if self.left == None:
            self.left = tree(newNode)
        else:
            t = tree(newNode)               # If the node already has a child, we have to move it one level down
            t.left = self.left              # Create a new node object, move current left child to left child of new
            self.left = t                   # then set the current node's left child to this object

    def insertRight(self,newNode):
        if self.right == None:
            self.right = tree(newNode)
        else:
            t = tree(newNode)
            t.right = self.right
            self.right = t

    def getLeft(self):
        return self.left

    def getRight(self):
        return self.right
    
    def setRootVal(self,obj):
        self.key = obj
    
    def getRootVal(self):
        return self.key


r = tree('a')
#print(r.getRootVal())



def inOrder(tree):
    if tree:
        inOrder(tree.getLeft())
        print(tree.getRootVal())
        inOrder(tree.getRight())




r.insertLeft('b')
r.insertRight('c')
r.getLeft().insertLeft('d')
#print(r.getLeft().getLeft().getRootVal())

print(inOrder(r))

"""
                    a
                  /   \
                 b     c
                /
               d     
"""