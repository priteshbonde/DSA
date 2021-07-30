class Node:
    def __init__(self, value):
        self.value = value
        self.next = None
        self.prev = None
    
class DoubleList:
    def __init__(self):
        self.head = None
        self.tail = None

    def addToBack(self, value):
        newNode = Node(value)

        if(self.head == None):
            self.head = newNode
        else: 
            self.tail.next = newNode
            newNode.prev = self.tail

        self.tail = newNode

    def addToFront(self, value):
        newNode = Node(value)

        if(self.head == None):
            self.tail = newNode
        else:
            newNode.next = self.head
            self.head.prev = newNode
        
        self.head = newNode                                      

    def printBackward(self):
        current = self.tail
        while current != None:
            print(current.value)    
            current = current.prev

    def printForward(self):
        current = self.head
        while current != None:
            print(current.value)
            current = current.next

    def insertAfter(self, valueToSearch, valueToInsert):
        current = self.head
        while(current.value != valueToSearch):
            current = current.next

        if(current == self.tail):
            self.addToBack(valueToInsert)
            return

        newNode = Node(valueToInsert)
        # newNode.prev = current

        # current.next.prev = newNode
        # newNode.next = current.next
        # current.next = newNode
        #? Optimized code
        newNode.prev = current
        newNode.next = current.next
        newNode.next.prev = newNode.prev.next = newNode


    def insertBefore(self, valueToSearch, valueToInsert):
        if(self.head == None):
            print("Head not found")
            return

        current = self.head
        while(current.value != valueToSearch):
            current = current.next

        if(current == self.head):
            self.addToFront(valueToInsert)
            return
        
        current.prev.next = Node(valueToInsert)
        current.prev.next.prev = current.prev
        current.prev.next.next = current
        current.prev = current.prev.next

    def deleteValue(self, value):
        current = self.head
        while(current.value != value):
            if(current.next == None):
                print("Value not found", value)
                return
            current = current.next

        if(self.head == self.tail):
            self.head = None
            self.tail = None
            return

        if(current == self.head):
            self.head = self.head.next
            self.head.prev = None
            return

        if(current == self.tail):
            self.tail = self.tail.prev
            self.tail.next = None
            return

        current.prev.next = current.next
        current.next.prev = current.prev

dll = DoubleList()
dll.addToBack(10)
dll.addToBack(12)
dll.addToBack(14)

# print('\n After add to back')
# dll.printBackward()
dll.printForward()
dll.addToFront(9)
# dll.printBackward()
dll.insertAfter(14, 13)
dll.printForward()

dll.insertBefore(9, 8)
dll.printForward()

# dll.deleteValue(12)
dll.printForward()

dll.printForward()
dll.deleteValue(19)
dll.deleteValue(15)
dll.deleteValue(8)
dll.deleteValue(9)
dll.deleteValue(10)
dll.deleteValue(12)
dll.deleteValue(14)
dll.deleteValue(13)
print('After Delete')
dll.printForward()
        

