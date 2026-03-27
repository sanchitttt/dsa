function buildTree(inorder, inorderStarting, inorderEnding, postorder, postOrderStarting, postOrderEnding, map) {
    if (postOrderStarting > postOrderEnding || inorderEnding < inorderStarting) return;

    let newNode = new binaryTreeBoundaryTraversal(postorder[postOrderStarting]);

    let inorderRoot = map.get(postorder[postOrderStarting]);
    let numsLeft = inorderRoot - inorderStarting;
    newNode.left = buildTree(inorder, inorderStarting, inorderRoot - 1, postorder, postOrderStarting, postOrderStarting + numsLeft - 1, map);
    newNode.right = buildTree(inorder, inorderRoot + 1, inorderEnding, postorder, postOrderStarting, + numsLeft, postOrderEnding - 1, map);

    return newNode;
}