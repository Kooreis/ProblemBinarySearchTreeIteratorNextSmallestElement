```cpp
#include <iostream>
#include <stack>

using namespace std;

struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};

class BSTIterator {
public:
    BSTIterator(TreeNode *root) {
        pushAll(root);
    }

    bool hasNext() {
        return !nodeStack.empty();
    }

    int next() {
        TreeNode* tmpNode = nodeStack.top();
        nodeStack.pop();
        pushAll(tmpNode->right);
        return tmpNode->val;
    }

private:
    void pushAll(TreeNode* node) {
        for (; node != NULL; nodeStack.push(node), node = node->left);
    }

    stack<TreeNode*> nodeStack;
};

int main() {
    TreeNode* root = new TreeNode(7);
    root->left = new TreeNode(3);
    root->right = new TreeNode(15);
    root->right->left = new TreeNode(9);
    root->right->right = new TreeNode(20);

    BSTIterator* obj = new BSTIterator(root);
    int param_1 = obj->next();
    bool param_2 = obj->hasNext();

    cout << "Next smallest element: " << param_1 << endl;
    cout << "Has next: " << (param_2 ? "True" : "False") << endl;

    return 0;
}
```