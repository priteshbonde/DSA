class Node:
    def __init__(self, value):
        self.value = value
        self.next = None
        self.previous = None

class SentinelList:
    def __init__(self):
        self.head = Node(0)
        self.tail = Node(0)

        self.head.next = self.tail
        self.tail.previous = self.head

    def printForward(self):
        current = self.head.next
        while(current != self.tail):
            print(current.value)
            current = current.next

    def addToBack(self, value):
        newNode = Node(value)
        
        newNode.next = self.tail
        newNode.previous = self.tail.previous

        newNode.next.previous = newNode.previous.next = newNode


sl = SentinelList()

sl.addToBack(10)
sl.addToBack(20)
sl.addToBack(30)
sl.addToBack(40)
sl.addToBack(50)
sl.addToBack(60)
sl.addToBack(70)
sl.printForward();
