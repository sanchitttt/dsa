function constructBinaryTreeFromPostorderAndInorderTraversal(postorder, inorder) {
    if (!postorder.length || !inorder.length) return null;

    let map = new Map();

    for (let i = 0; i < inorder.length; i++) {
        map.set(inorder[i], i);
    }

    return buildTree(inorder, 0, inorder.length - 1, postorder, 0, postorder.length - 1, map);
}