class HashTableKv {
    size = 0;
    table = [];

    constructor(size) {
        this.size = size;
        this.table = new Array(size);
    }

    hash(key) {
        return key % 10;
    }
    putItem(key, value) {
        const offset = this.hash(key);

        for (let current = this.table[offset]; current; current = current.next) {
            if(current.key == key) {
                current.value = value;
                return;
            }
        }
        let newNode = {key, value}
        newNode.next= this.table[offset]
        this.table[offset] = newNode;
    }

    removeItem(key) {
        const offset = this.hash(key);
        let back = this.table[offset];
        for (let current = this.table[offset]; current; current = current.next) {
            if(current.key == key) {
                //? Found the value to be removed
                if(current == this.table[offset]) {
                    this.table[offset] = this.table[offset].next;
                    return true;
                }

                back.next = current.next;
                return true;
            }
            back = current;
        }
    }

    getItem(key) {
        const offset = this.hash(key);
        for (let current = this.table[offset]; current ; current = current.next) {
            if(current.key == key) {
                return current.value;

            }
        }

        return undefined;

    }

    print() {

        for (let index = 0; index < this.table.length; index++) {
            for (let current = this.table[index]; current ; current = current.next) {
                console.log(`{${current.key} : ${current.value}}`);
            }
        }
    }

}

const htKv = new HashTableKv(10);

htKv.putItem(420, 'Sachin tendulkar');
htKv.putItem(421, 'MSD');
htKv.putItem(422, 'Virat Kohli');
htKv.putItem(423, 'Yuvraj singh');
htKv.putItem(424, 'ABD');
htKv.print();
console.log(`Search for 420 ${htKv.getItem(420)}`);

htKv.removeItem(424);
htKv.print()