var constructBinaryTreeFromPreorderAndInorderTraversal = function (preorder, inorder) {
    function insertIntoBST(root, value) {
        if (!root) return new ListNode(value);

        if (root.val > value) {
            root.left = insertIntoBST(root.left, value);
        }
        else {
            root.right = insertIntoBST(root.right, value);
        }

        return root;
    }

    let root = null;
    for (let i = 0; i < preorder.length; i++) {
        root = insertIntoBST(root, preorder[i]);
    }

    return root;
};