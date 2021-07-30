class Node:
    def __init__(self, value) :
        self.value = value
        self.next = None

class List:

    def __init__(self) -> None:
        self.head = None
        self.tail = None

    def addToBack(self, value):
        ref = Node(value)

        if(self.head == None):
            self.head = ref
            self.tail = ref
        else:
            self.tail.next = ref
            self.tail = ref

    def addToFront(self, value):
        ref = Node(value)
        if(self.head == None):
            self.tail = ref
        else: 
            ref.next = self.head
            
        self.head = ref

    def print(self):
        current = self.head
        while current != None:
            print(current.value)
            current = current.next

    def deleteValue(self, value):
        current = self.head
        backPointer = self.head

        while(current.value != value):
            if(current.next == None):
                print("value Not found")
                return
            backPointer = current
            current = current.next

        if(current == self.head):
            self.head = self.head.next
            return

        if(current == self.tail):
            self.tail = backPointer
            self.tail.next = None
            return

        backPointer.next = current.next
        return

        

ll = List()
ll.addToBack(10)
ll.addToBack(12)
ll.addToBack(14)
print('\nAfter Add to back')
ll.print()

ll.addToFront(15)
print('\nAfter Add to front')
ll.print()

ll.deleteValue(10)
ll.deleteValue(12)
ll.deleteValue(14)
ll.deleteValue(15)
print("After Delete")
ll.print()
