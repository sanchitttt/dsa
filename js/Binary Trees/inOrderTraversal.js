const inOrderTraversal = (root) => {
    if (!root) return;

    inOrderTraversal(root.left);
    array.push(root.val);
    inOrderTraversal(root.right);
}