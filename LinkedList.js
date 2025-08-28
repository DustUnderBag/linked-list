import { Node } from "./Node.js";

export class LinkedList {
    #head = null;

    get head() {
        return this.#head;
    }

    get tail() {
        //Empty list
        if(this.#head == null) return null;
        
        let tmp = this.#head;

        while(tmp.nextNode != null) {
            tmp = tmp.nextNode;
        }
        return tmp;
    }

    get size() {
        if(this.#head == null) return 0;

        let count = 1;
        let tmp = this.#head;
        while(tmp.nextNode != null) {
            tmp = tmp.nextNode;
            count++;
        }
        return count;
    }

    append(value) {
       if(this.#head == null) {
        this.prepend(value);
        return;
       }
       
       this.tail.nextNode = new Node(value, null);
    }
    
    prepend(value) {
        this.#head = new Node(value, this.#head);
    }

    pop() {
        if(this.size === 0) return;

        //If list has only ONE element
        if(this.#head.nextNode == null) {
            this.#head = null;
            return;
        }
        
        let tmp = this.#head;
        while(tmp.nextNode.nextNode != null) {
            tmp = tmp.nextNode;
        }
        tmp.nextNode = null;
    }

    contains(value) {
        if(this.size === 0) return false;

        let tmp = this.#head;
        /*
        Traverser cannot go past last node, and stops if it 
        finds the matching value.
        */
        while( tmp.nextNode != null && tmp.value !== value) {
            tmp = tmp.nextNode;
        }

        console.log("Checking: ", tmp.value);
        return tmp.value === value;
        /*
        Case 1: Reaches last node, can't find target value
          - returns false;
        Case 2: Reaches last node, finds target value.
          - returns true;
        Case 3: Hasn't reached last node, finds target value.
          - returns true;
        */
    }

    toString() {
        if(this.#head == null) return "null";

        let tmp = this.#head;
        let str = `( ${tmp.value} )`
        while(tmp.nextNode !== null) {
            tmp = tmp.nextNode;
            str += ` -> ( ${tmp.value} )`;
        }
        str += ` -> null`;
        return str;

    }

}
const list = new LinkedList();

list.prepend("C");
list.prepend("B");
list.prepend("A");

list.append("D");
list.append("E");
list.append("F");
list.append("G");
list.append("H");

list.pop();
list.pop();

/*
console.log("Head: ", list.head);
console.log("Tail: ", list.tail);
console.log("Size: ", list.size);
*/
console.log("Has G: ", list.contains("G"));
console.log("Has D: ", list.contains("D"));

console.log(list.toString());