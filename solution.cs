Here is a JavaScript solution using a generator function to create an iterator for a binary search tree:

```javascript
class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    add(data) {
        const node = this.root;
        if (node === null) {
            this.root = new Node(data);
            return;
        } else {
            const searchTree = function(node) {
                if (data < node.data) {
                    if (node.left === null) {
                        node.left = new Node(data);
                        return;
                    } else if (node.left !== null) {
                        return searchTree(node.left);
                    }
                } else if (data > node.data) {
                    if (node.right === null) {
                        node.right = new Node(data);
                        return;
                    } else if (node.right !== null) {
                        return searchTree(node.right);
                    }
                } else {
                    return null;
                }
            };
            return searchTree(node);
        }
    }

    * [Symbol.iterator]() {
        function* inorder(node) {
            if (node) {
                yield* inorder(node.left);
                yield node.data;
                yield* inorder(node.right);
            }
        }
        yield* inorder(this.root);
    }
}

const bst = new BinarySearchTree();
bst.add(7);
bst.add(3);
bst.add(9);
bst.add(2);
bst.add(5);
bst.add(8);
bst.add(10);

for (let node of bst) {
    console.log(node);  // Outputs: 2, 3, 5, 7, 8, 9, 10
}
```

This solution creates a binary search tree and adds elements to it. The iterator is implemented using a generator function that performs an in-order traversal of the tree, yielding the smallest element first.