class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    //? BST has two important rules
    //? First element goes to the root and Start with the root
    //? 1. Smaller values to left
    //? 2. Greater values to right

    constructor() {
        // this.root = null;
        this.level = 4;
    }

    addNode(node, value) {
        let current = node;

        if(current == null) {
            return new Node(value);
        }

        if(value > current.value) {
            current.right = this.addNode(current.right, value);
        } else {
            current.left = this.addNode(current.left, value);
        }

        return current;
    }

    print(node) {
        if(node) {
            this.print(node.left);
            console.log(node.value);
            this.print(node.right);
        }
    }

    //! Left-Node-Right
    //! R-N-L
    inOrder(node) {
        if(node) {
            this.inOrder(node.left);
            console.log(node.value);
            this.inOrder(node.right);
        }
    }
    
    //! N-L-R
    preOrder(node) {
        if(node) {
            console.log(node.value);
            this.preOrder(node.left);
            this.preOrder(node.right);
        }
    }

    //! L-R-N
    postOrder(node) {
        if(node) {
            this.postOrder(node.left);
            this.postOrder(node.right);
            console.log(node.value);
        }
    }

    remove(value) {

        const removeNode = (current) => {
            if(current == null)  {
                return null;
            }
     
            if(value> current.value) {
                current.right = removeNode(current.right)
            } else if(value < current.value) {
                current.left = removeNode(current.left);
            } else {
                //~ case 1 Has no children
                if(current.left == null && current.right == null) {
                    console.log(`Case 1 ${current.value} has No children`);
                    return null;
                } 
                
                //~ case 2 node has right child
                //~ case 3 node has left child
                if(!current.right || !current.left) {
                    console.log(`Case 2 & 3 ${current.value} has child ${current.left?"To left " + current.left.value: "to right " + current.right.value}`);
                    return current.right ?? current.left
                }
                //~ case 4 : Node has both children
                console.log(`Case 4 for ${current.value}`);
                let successor = current.right; //? starting point to find successor.
                while(successor.left !=null)
                    successor = successor.left;
               current.value = successor.value;
               value = successor.value;
               current.right = removeNode(current.right);
            }
            return current;
        }

        this.root = removeNode(this.root);
    }

    printBst() {
        const printTree = (node) => {
            if(node) {
                this.level++;
                printTree(node.right);
                console.log(`${" ".repeat(this.level * 4)}${node.value}`);
                printTree(node.left);
                this.level--;
            }
        }

        printTree(this.root)
    }
}

let bst = new BinarySearchTree();
bst.root  = bst.addNode(null,6);
bst.addNode(bst.root, 5);
bst.addNode(bst.root, 1);
bst.addNode(bst.root, 50);
bst.addNode(bst.root, 89);
bst.addNode(bst.root, 90);
bst.addNode(bst.root, 88);
// bst.addNode(bst.root, 52);
// bst.addNode(bst.root, 36);
// bst.addNode(bst.root, 78);
// bst.print(bst.root);

// console.log("In Order");
// bst.inOrder(bst.root)
// console.log("\npre Order");
// bst.preOrder(bst.root)
// console.log("\nPost Order");
// bst.postOrder(bst.root)
bst.printBst();
bst.remove(1);
bst.remove(6);
bst.printBst();