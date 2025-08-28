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

        if(this.size === 1) {
            this.#head = null;
            return;
        }
        
        let tmp = this.#head;
        while(tmp.nextNode.nextNode != null) {
            tmp = tmp.nextNode;
        }
        tmp.nextNode = null;

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

console.log("Head: ", list.head);
console.log("Tail: ", list.tail);
console.log("Size: ", list.size);