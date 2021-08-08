class Node{
    constructor(value) {
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}


class SentinelList {
    constructor() {
        this.head = new Node(0);
        this.tail = new Node(0);

        this.head.next = this.tail;
        this.tail.previous = this.head;
    }

    printForward() {
        for (let current = this.head.next; current != this.tail; current = current.next) {
            console.log(current.value);
        }
    }

    addToBack(value) {
        let newNode = new Node(value);
        //? Put the hands
        this.addBack(newNode);
    }

    addBack(newNode) {
        newNode.next = this.tail;
        newNode.previous = this.tail.previous;

        newNode.next.previous = newNode.previous.next =newNode;
    }

    addFront(newNode) {
        
    }

    addToFront(value, current = this.head) {
        let newNode = new Node(value);
        
        newNode.previous = current;
        newNode.next = current.next;

        newNode.previous.next = newNode.next.previous = newNode;
    }

    insert(node, value) {
        const newNode = new Node(value);

        newNode.previous = node.previous;
        newNode.next = node;
        newNode.previous.next = newNode.next.previous = newNode;

        return true;
    }

    insertBefore(valueToSearch, valueToInsert)  {
        let current = this.searchNode(valueToSearch);
        if(!current) {
            console.error("Value not found");
            return;
        }

        this.insert(current, valueToInsert);
        current = current.next;
        
        // current.previous.next = newNode;
        // current.previous = newNode;
        // this.addToFront(valueToInsert, current);
    }

    insertAfter(valueToSearch, valueToInsert) {
        let current = this.searchNode(valueToSearch);

        if(!current) {
            console.error("Value not found");
            return;
        }

        this.insert(current, valueToInsert);
        current=current.next;

        // let newNode = new Node(valueToInsert);

        // newNode.previous = current;
        // newNode.next = current.next;
        // newNode.next.previous = newNode;
        // newNode.previous.next = newNode;

        // this.addBack(new Node(valueToInsert));
    }

    insertAfterMultiple(valueToSearch, ...valueToInsert) {
        let current = this.searchNode(valueToSearch);
        if(!current) {
            console.error("Value not found");
            return;
        }

        valueToInsert.forEach(value => {
            this.insert(current, value);
            current=current.next;
        });
    }

    insertBeforeMultiple(valueToSearch, ...valueToInsert) {
        let current = this.searchNode(valueToSearch);
        if(!current) {
            console.error("Value not found");
            return;
        }
        
        valueToInsert.forEach(value => {
            this.insert(current, value);
            current=current.next;
        });
    }

    addToBackMultiple(...values) {
        values.forEach((value) => {
            this.addBack(new Node(value));
        });
    }

    addToFrontMultiple(...values) {
        values.forEach((value) => {
            this.addFront(new Node(value));
        });
    }

    searchNode(value) {
        for (let current = this.head.next; current != this.tail; current = current.next) {
            if (current && current.value === value) {
                return current;
            }
        }
        return null;
    }

    removeNode(value) {
        let current = this.searchNode(value);

        if(!current) {
            console.error("Value not found");
            return;
        }
        current.next.previous = current.previous;
        current.previous.next = current.next
    }
}

let sl = new SentinelList();

sl.addToBack(10);
sl.addToBack(20);
sl.addToBack(30);
sl.addToBack(40);
sl.addToBack(50);
sl.addToFront(60);
// sl.removeNode(60);
sl.insertBefore(20, 15);
sl.insertAfter(20, 25);
sl.insertBeforeMultiple(25, 14,17,18,19,16,13);
sl.printForward();