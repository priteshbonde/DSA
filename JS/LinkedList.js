class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class List {

    constructor() {
        this.head = null;
        this.tail = null;
    }

    addToBack(value) {
        //! IMP Allocating memory in heap
        let ref = new Node(value);

        //? If its the first time
        if(this.head == null) {
            this.head = ref;
            this.tail = ref;
        } else {
            this.tail.next = ref;
            this.tail = ref
        }
    }

    addToFront(value) {
        let ref = new Node(value);
        
        if(this.head == null) {
            this.tail = ref
        } else {
            ref.next = this.head;
        }
        this.head = ref
    }

    deleteValue(value) {

        if(value == this.head.value) {
            this.head = this.head.next;
            return;
        }

        // let current = this.head;
        let backPointer= this.head;
        // while(current.value != value)
        //     backPointer = current;
        //     current = current.next;

        // backPointer.next = current.next;
        
        for (let current = this.head; current; current = current.next) {
            
            if(current.value == value) {
                if(current == this.head) {
                    this.head = this.head.next;
                    return;
                }

                if(current == this.tail) {
                    this.tail = backPointer;
                    this.tail.next = null;
                    return;
                }
                backPointer.next = current.next
                return;
            }
            backPointer = current;
           
        }

        console.log("Value Not found");
        return;
    }
    print() {
        for (let current = this.head; current ; current = current.next) {
            console.log(current.value);
        }
    }
}
// scriptcs
let ll = new List();
ll.addToBack(10);
ll.addToBack(12);
ll.addToBack(14);
console.log("\nLinked list after Add to back");
ll.print();

ll.addToFront(15);
console.log("\nLinked list after Add to Front");
ll.print();

ll.deleteValue(10);
ll.deleteValue(15);
ll.deleteValue(14);
ll.deleteValue(12);
console.log("After delete");
ll.print();