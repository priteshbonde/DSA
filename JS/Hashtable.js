class HashTable {
    constructor(size =10) {
        this.size = size;
        this.table = Array(size);
    }

    hash(input) {
        return input % 10;
    }

    getItem(input) { //? Search the item from hash Table
        // return this.table[this.hash(input)] == input;
        const index = this.hash(input);
        for (let current = this.table[index]; current; current = current.next) {
            if (current.value == input) {
                return current.value;
            }
        }

        return undefined;
    }

    putItem(key, value) { //? Put the item in Hash table
        const offset = this.hash(key);
        const newNode =  {key, value, next: this.table[offset].next}; // new Node(input); //! this is called as entry
        // if(this.table[index]) {
        //    newNode.next = this.table[index];
        // }

        // this.table[index] = newNode;
    }

    removeItem(input) { //? Deletes the item from hash table
        // this.table[this.hash(input)] = undefined;
        const index = this.hash(input);
        let back = this.table[index];

        for (let current = this.table[index]; current; current = current.next) {
            if(current.value == input) {
                if(current == this.table[index]) { //! if the value is the head node
                    this.table[index] = current.next;
                    return true;
                }
                back.next = current.next;
                return true;
            }
            back = current;
        }
        return false;
    }

    print() {
        for (let index = 0; index < this.table.length; index++) {
            let str = `${index}: [`
            // console.log(`${index}: ${this.table[index]}`);
            for (let current = this.table[index]; current; current = current.next) {
                str += current.value + ", "
            }

            console.log(str + ']');
            
        }
    }
}

const ht = new HashTable();

ht.putItem(420);
ht.putItem(220);
ht.putItem(520);
ht.putItem(6720);
ht.putItem(533);
ht.putItem(224);
ht.putItem(2015);
ht.putItem(2018);
ht.removeItem(2018);

ht.print();

console.log(`Is member: ${ht.getItem(2015)}`);
console.log(`Is member: ${ht.getItem(2021)}`);
