function inOrderSuccessor(root, givenNode) {
    let arr = [];
    const recursiveIterator = (root, givenNode) => {
        if (!root) return;

        recursiveIterator(root.left, givenNode);
        arr.push(root.val);
        recursiveIterator(root.right, givenNode);
    }

    recursiveIterator(root, givenNode);

    for (let i = 0; i < arr.length; i++) {
        if (givenNode.val === arr[i]) {
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] > arr[i]) {
                    return arr[j];
                }
            }
            return -1;
        }
    }
    return -1;
}
