let height = 0;

const findHeight = (root) => {
    if (!root) return 0;
    return Math.max(findHeight(root.left), findHeight(root.right)) + 1;
}
