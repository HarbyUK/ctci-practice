/*
    Given a directed graph, design an algorithm to find out whether there is a route between two nodes

    Notes:

    - We can approach with either Depth First, Breadth First or Bi-Directional Searches
    - Going to attempt each one. This is the Depth First Search

    1. Construct a graph class that performs the search
    2. Construct a Node class containing a value, the children it contains and whether it has been
       visited before

    Time Complexity - O(n). Assuming that graphs do not require edges and only vertices
    Space Complexity - O(n)
*/

class Graph {
    search(sourceNode, targetNode) {
        if (sourceNode === targetNode)
            return true;
        
        for (let i = 0; i < sourceNode.children.length; i++) {
            const childNode = sourceNode.children[i];
            if (childNode.visited)
                continue;
            childNode.visited = true;
            if (this.search(childNode, targetNode))
                return true;
        }
        return false;
    }
}

class GraphNode {
    constructor(value) {
        this.value = value;
        this.children = [];
        this.visited = false;
    }

    addChild(childNode) {
        this.children.push(childNode);
    }
}

const graph = new Graph();

// Test 1

const a = new GraphNode("a");
const b = new GraphNode("b");
const c = new GraphNode("c");
const d = new GraphNode("d");

a.addChild(b);
a.addChild(c);
b.addChild(d);

console.log(`Is there a route between nodes "a" and "d"? ${graph.search(a, d)}`); // TRUE

// Test 2

const e = new GraphNode("e");
const f = new GraphNode("f");
const g = new GraphNode("g");
const h = new GraphNode("h");

e.addChild(f);
e.addChild(g);
f.addChild(e);

console.log(`Is there a route between nodes "e" and "h"? ${graph.search(e, h)}`); // FALSE