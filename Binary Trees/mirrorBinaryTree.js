const mirrorBinaryTree = (root) => {
    if (!root) return;

    let temp = root.left;
    root.left = root.right;
    root.right = temp;
    mirrorBinaryTree(root.left);
    mirrorBinaryTree(root.right);
}
