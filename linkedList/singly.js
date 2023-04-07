
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


class MySinglyLinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = this.tail.next;
        this.length++;

        return this;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;

        return this;
    }

    insert(index, value) {
        if (index >= this.length) return this.append(value);

        const newNode = new Node(value);
        const prevPointer = this.getElementAt(index - 1);
        newNode.next = prevPointer.next;
        prevPointer.next = newNode;
        this.length++;

        return this;
    }

    delete(index) {
        if (index >= this.length) return this;

        const prevPointer = this.getElementAt(index - 1);
        if (index === this.length - 1) {
            prevPointer.next = null;
            this.tail = prevPointer;
        } else {
            prevPointer.next = prevPointer.next.next;
        }
        
        this.length--;
        return this;
    }

    getElementAt(index) {
        let counter = 0;
        let currentNode = this.head;

        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }

        return currentNode;
    }
}


let myLinkedList = new MySinglyLinkedList(1);
myLinkedList.append(2);
myLinkedList.append(3);
myLinkedList.append(4);
myLinkedList.append(5);
