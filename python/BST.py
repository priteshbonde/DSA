class Node:
    def __init__(self, value) -> None:
        self.value = value
        self.left = None
        self.right = None


class BST:
    def __init__(self):
        # self.root = None
        pass

    def addNode(self, node, value):
        current = node

        if(current == None):
            return Node(value)

        if(value > current.value):
            current.right = self.addNode(current.right, value)
        else:
            current.left = self.addNode(current.left, value)

        return current

    def print(self, node):
        if(node != None):
            self.print(node.left)
            print(node.value)
            self.print(node.right)

    

bst = BST()
bst.root = bst.addNode(None, 5)
bst.addNode(bst.root, 1)
bst.addNode(bst.root, 6)
bst.addNode(bst.root, 2)
bst.addNode(bst.root, 8)
bst.addNode(bst.root, 4)
bst.addNode(bst.root, 7)
bst.addNode(bst.root, 88)

bst.print(bst.root)