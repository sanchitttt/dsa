function balanceBST(root) {
    const array = [];
    const inOrderTraversal = (root) => {
        if (!root) return;

        inOrderTraversal(root.left);
        array.push(root);
        inOrderTraversal(root.right);
    }
    inOrderTraversal(root);

    const balancer = (start, end) => {
        if (start > end) return null;

        let mid = Math.floor((start + end) / 2);
        let root = array[mid];
        root.left = balancer(start, mid - 1);
        root.right = balancer(mid + 1, end);

        return root;
    }

    return balancer(0, array.length - 1)
}