function checkBalanced(root) {
    const findHeight = (root, height = 0) => {
        if (!root) return 0;

        let leftHeight = findHeight(root.left);
        let rightHeight = findHeight(root.right);

        if (!leftHeight || !rightHeight) return false;

        return Math.abs(leftHeight - rightHeight) >= 2 ? false : Math.max(leftHeight, rightHeight) + 1;
    }

    return findHeight(root)
}