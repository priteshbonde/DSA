       newNode = Node(value)

        if(self.head == None):
            self.tail = newNode
        else:
            newNode.next = self.head
            self.head.prev = newNode
        
        self.head = newNode