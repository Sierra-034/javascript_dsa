
class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}


class MyDoublyLinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
        this.length++;

        return this;
    }
}


let myList = new MyDoublyLinkedList(1);
