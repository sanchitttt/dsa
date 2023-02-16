let array = [];


const postOrderTraversal = (root) => {
    if (!root) return;

    postOrderTraversal(root.left);
    postOrderTraversal(root.right);
    array.push(root.val);
}

