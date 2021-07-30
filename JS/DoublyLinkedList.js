class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addToBack(value) {
        let newNode = new Node(value);

        if(this.head === null){
            this.head = newNode
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
        }
        this.tail = newNode
    }

    addToFront(value) {
        let newNode = new Node(value);

        if(this.head === null) {
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
        }

        this.head = newNode;
    }

    insertAfter(valueToSearch, valueToInsert) {
        if(!this.head) {
            console.error("Head is not present");
            return;
        }
        // let current = this.head;

        // while(current.value != valueToSearch){
        //     current = current.next;
        //     if(!current?.value) {
        //         console.error("Value not found");
        //         return;
        //     }
        // }
        for (let current = this.head; current; current = current.next) {
            
            if(current.value === valueToSearch) {
                if(current == this.tail) {
                    return (this.addToBack(valueToInsert), true);
                }
        
                let newNode = new Node(valueToInsert);
                // newNode.prev = current;
              
                // current.next.prev = newNode;
                // newNode.next = current.next;     
                // current.next = newNode;

                //? Optimized code
                // newNode.prev = current;
                // newNode.next = current.next;

                // newNode.next.prev = newNode.prev.next = newNode;
                
                //? More Optimized code
                current.next.prev = new Node(valueToInsert);
                current.next.prev.prev = current;
                current.next.prev.next = current.next;
                current.next = current.next.prev;

                return true;


            }
        }
        console.error("Value not found");
        return;
    }

    insertBefore(valueToSearch, valueToInsert) {
        if(!this.head) {
            console.error("Head not found");
            return;
        }

        for (let current = this.head; current ; current = current.next) {
        
            if(current.value == valueToSearch) {
                if(current == this.head) {
                    this.addToFront();
                    return;
                }

                current.prev.next = new Node(valueToInsert);
                current.prev.next.prev = current.prev;
                current.prev.next.next = current;
                current.prev = current.prev.next;
                return;

            }
            
        }

        console.error("Key not found");
        return;
    }

    deleteValue(value) {

        if(!this.head) {
            console.log("Head is not there");
            return;
        }

        for (let current = this.head; current ; current = current.next) {
            
            if(current.value == value) {
                //? Edge case 1 where only one node
                if(this.head === this.tail) {
                    this.head = null;
                    this.tail = null;
                    return;
                }

                //? Edge case when current is the head
                if(this.head === current) {
                    this.head = this.head.next;
                    // current.next.prev = null;
                    this.head.prev = null;
                    return;
                }

                //? Edge case where current is the tail
                if(this.tail === current) {
                    this.tail = this.tail.prev;
                    this.tail.next = null;
                    return;
                }
                current.prev.next = current.next;
                current.next.prev = current.prev;
            }
            
        }

        console.log("Value not found");
    }

    printForward() {
        for (let current =  this.head; current ; current = current.next) {
            console.log(`Previous ${current.prev?.value}, Current value ${current.value}, Next ${current.next?.value}, Type: ${current == this.head? 'Head' : current == this.tail? 'Tail': 'Node'}`);
            
        }
    }
    printBackward() {
        for (let current = this.tail; current; current = current.prev) {
            console.log(`Previous ${current.prev?.value}, Current value ${current.value}, Next ${current.next?.value}, Type: ${current == this.head? 'Head' : current == this.tail? 'Tail': 'Node'}`);
            
        }
    }
}

let dll = new DoublyLinkedList();
dll.addToBack(10)
dll.addToBack(12)
dll.addToBack(14)
// dll.printBackward();

// console.log("ForwarPrint");
// dll.printForward();

dll.addToFront(15)
console.log("After add to to front");
dll.printForward();

dll.insertAfter(14, 13);
dll.insertAfter(15, 09);
console.log("After insert in");
dll.printForward();

dll.insertBefore(9, 8);
console.log("After insert before");
dll.printForward();
dll.deleteValue(19);
dll.deleteValue(15);
dll.deleteValue(8);
dll.deleteValue(9);
dll.deleteValue(10);
dll.deleteValue(12);
dll.deleteValue(14);
dll.deleteValue(13);

console.log("After delete");
dll.printForward();


