console.log("Script running");

export class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

const nodeA = new Node("A", null);
const nodeB = new Node("B", null);
const nodeC = new Node("C", nodeA);

nodeA.nextNode = nodeB;

console.log(nodeC);