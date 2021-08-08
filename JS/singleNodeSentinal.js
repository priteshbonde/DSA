class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}

class Sentinel {
    constructor() {
        this.head = new Node(0);
        this.head.next = this.head.previous = this.head;
    }


    addNode(node, value) {
        const newNode = new Node(value);
        newNode.previous = node;
        newNode.next =node.next;
        newNode.next.previous = newNode.previous.next = newNode;

    }
    addToBack(...values) {
        values.forEach(value => {
            this.addNode(this.head.next, value);
        });
    }

    addToFront(...values) {
        values.forEach(value => {
            this.addNode(this.head, value);
        });
    }

    searchNode(value) {
        for (let current = this.head; current; current = current.next){
            if(current.value == value) {
                return current;
            }
        }
        return null;
    }

    print() {
        for (let current = this.head.next; current != this.head; current = current.next) {
            console.log(current.value);
        }
    }
}

const sll = new Sentinel();
sll.addToFront(10,20,30,40,50,60,70);
sll.print();