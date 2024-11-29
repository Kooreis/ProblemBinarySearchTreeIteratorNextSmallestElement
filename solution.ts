Here is a TypeScript solution for the problem:

```typescript
class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

class BSTIterator {
    stack: TreeNode[];

    constructor(root: TreeNode | null) {
        this.stack = [];
        this._leftmostInorder(root);
    }

    private _leftmostInorder(root: TreeNode | null) {
        while (root !== null) {
            this.stack.push(root);
            root = root.left;
        }
    }

    next(): number {
        let topmostNode = this.stack.pop();
        if (topmostNode.right !== null) {
            this._leftmostInorder(topmostNode.right);
        }
        return topmostNode.val;
    }

    hasNext(): boolean {
        return this.stack.length > 0;
    }
}

let root = new TreeNode(7);
root.left = new TreeNode(3);
root.right = new TreeNode(15);
root.right.left = new TreeNode(9);
root.right.right = new TreeNode(20);

let iterator = new BSTIterator(root);
console.log(iterator.next());    // return 3
console.log(iterator.next());    // return 7
console.log(iterator.hasNext()); // return true
console.log(iterator.next());    // return 9
console.log(iterator.hasNext()); // return true
console.log(iterator.next());    // return 15
console.log(iterator.hasNext()); // return true
console.log(iterator.next());    // return 20
console.log(iterator.hasNext()); // return false
```

This solution uses a stack to keep track of the nodes in the binary search tree. The `_leftmostInorder` method is used to push all the leftmost nodes of the tree onto the stack. The `next` method pops the top node from the stack and pushes all the leftmost nodes of its right subtree onto the stack. The `hasNext` method checks if there are any nodes left in the stack.