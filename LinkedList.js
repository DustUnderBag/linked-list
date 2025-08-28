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

    prepend(value) {
        //if(this.#head == null)
        const oldHead = this.#head;
        this.#head = new Node(value, oldHead);
    }

    append(value) {
       if(this.#head == null) {
        this.prepend(value);
        return;
       }

       let tmp = this.#head;
       while(tmp.nextNode != null) {
            tmp = tmp.nextNode;
        }
        tmp.nextNode = new Node(value, null);
    }
}
const listA = new LinkedList();
listA.append("A");

console.log(listA.head);