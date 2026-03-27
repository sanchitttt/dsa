const rightView = (root) => {
    let map = new Map();

    const preOrderTraversal = (root, level = 0) => {
        if (!root) return;

        if (!map.has(level)) map.set(level, root.val);
        preOrderTraversal(root.right, level + 1)
        preOrderTraversal(root.left, level + 1)
    }
    preOrderTraversal(root);
    let result = [];
    map.forEach((value) => result.push(value));
    return result;
}