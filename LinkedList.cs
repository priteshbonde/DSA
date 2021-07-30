class Node
{
    public int Value { get; set; }
    public Node next { get; set; }
    Node(int value)
    {
        this.Value = value;
        this.next = null;
    }
}

class LinkedList
{
    private Node _head;
    private Node _tail;

    LinkedList()
    {
        this._head = null;
        this._tail = null;
    }

    public void add(int value)
    {
        var reff = new Node(value);

        if(this._head == null)
        {
            this._head = reff;
            this._tail = reff;
        }
        else 
        {
            this._tail.next = reff;
            this._tail = reff;
        }
    }

    public void Print()
    {
        for (var current =this._head; current!=null; current=current.next)
        {
            Console.WriteLine(current.Value);
        }
    }
}


