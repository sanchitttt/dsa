function validateBinarySearchTree(root) {
    const recursiveIterator = (root, min = Number.MIN_VALUE, max = Number.MAX_VALUE) => {
        if (!root) return true;
        if (root.val < min || root.val > max) return false;

        let leftValidate = recursiveIterator(root.left, min, root.val);
        let rightValidate = recursiveIterator(root.right, root.val, max);

        if (!leftValidate || !rightValidate) return false;

        return true;
    }

    return recursiveIterator(root);
}