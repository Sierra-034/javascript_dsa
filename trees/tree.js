
class TNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


class BinnarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newTNode = new TNode(value);
        if(!this.root) this.root = newTNode;
        else {
            let currentNode = this.root;
            while(true) {
                if(value < currentNode.value) {
                    if(!currentNode.left) {
                        currentNode.left = newTNode;
                        return this; 
                    }

                    currentNode = currentNode.left;
                } else {
                    if (!currentNode.right) {
                        currentNode.right = newTNode;
                        return this;
                    }

                    currentNode = currentNode.right;
                }
            }
        }
    }

    search(value) {
        if (!this.root) return null;
        let currentNode = this.root;
        while (true) {
            if (value === currentNode.value) return currentNode;
            if (value < currentNode.value) {
                if (!currentNode.left) return null;
                currentNode = currentNode.left;
            }
            if (value > currentNode.value) {
                if (!currentNode.right) return null;
                currentNode = currentNode.right;
            }
        }
    }
}


const tree = new BinnarySearchTree();
tree.insert(10);
tree.insert(4);
tree.insert(20);
tree.insert(2);
tree.insert(8);
tree.insert(17);
tree.insert(170);
