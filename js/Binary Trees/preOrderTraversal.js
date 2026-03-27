const preOrderTraversal = (root) => {
    if (!root) return;

    array.push(root.val);
    height++;
    preOrderTraversal(root.left);
    preOrderTraversal(root.right);
}