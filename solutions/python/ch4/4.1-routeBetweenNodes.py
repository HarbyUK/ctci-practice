"""
Given a directed graph, design an algorithm to find out whether there is a route between two nodes.a

Assumptions:
    Directed graph is a one way street.
    Can potentially be cyclic - but not always
    Parent nodes can have any number of child nodes.


1. implement node data structure class.
    class node()
        name/value
        list of children nodes


2. implement graph data structure class.
    class graph()
        list of nodes


function takes arguments, node a and node b. Find route between the two.

    Iterate through each node using breadth first search

    We must visit each of node a's neighbours, before visiting any of their neighbours. 
    We check if any of those match node b.
    if not, We need to put neighbours children nodes in the queue.
    Once we've visted each of node a's neighbours. We visit all the nodes in the queue
    repeat until we find node B.
    If we find node B, return true


    Once we've visited a node we mark it as visited
    if  a node isn't marked, we add it to the queue

"""

class node(object):
    def __init__(self):
        self.marked = False
        self.children = []

    def addChild(self,node):
        self.children.append(node)


class graph(object):
    def __init__(self,key):
        self.nodes = []


def search(currentNode, targetNode):  
    if currentNode == targetNode:
        return True
    
    queue = []    
    queue.insert(0, currentNode)

    while len(queue) > 0:
        if queue[-1] == targetNode:
            return True
        if queue[-1].marked != True:
            for i in queue[-1].children:
                queue.insert(0, i)
            queue[-1].marked = True
        queue.pop()

    return False

a = node()
b = node()
c = node()
d = node()

def test1():
    a.addChild(b)
    a.addChild(c)
    b.addChild(d)
    print search(a,d)

def test2():
    a.addChild(b)
    a.addChild(c)
    b.addChild(a)
    print search(a,d)

test1()
test2()
