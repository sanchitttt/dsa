const binaryTreeBoundaryTraversal = (root) => {
    if (!root.left && !root.right) return [root];
    const leftSideValues = [];
    const rightSideValues = [];
    const leafNodes = [];

    const getLeftSideValues = (root) => {
        if (!root) return;

        if (root.left || root.right) leftSideValues.push(root.val);

        if (root.left) {
            getLeftSideValues(root.left);
        }
        else if (root.right) {
            getLeftSideValues(root.right);
        }
    }

    const getLeafNodeValues = (root) => {
        if (!root) {
            return;
        }
        if (root.left) getLeafNodeValues(root.left);
        if (root) {
            if (!root.left && !root.right) {
                leafNodes.push(root.val);
            }
        }
        if (root.right) getLeafNodeValues(root.right);

    }

    const getRightSideValues = (root) => {
        if (!root) return;

        if (root.left || root.right) rightSideValues.push(root.val);

        if (root.right) {
            getRightSideValues(root.right);
        }
        else if (root.left) {
            getRightSideValues(root.left);
        }
    }

    getLeftSideValues(root.left);
    getRightSideValues(root.right);
    getLeafNodeValues(root);

    return [root.val].concat(leftSideValues.concat(leafNodes).concat(rightSideValues.reverse()));
}
