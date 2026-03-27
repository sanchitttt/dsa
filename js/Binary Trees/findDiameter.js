let diameter = 0;

const findDiameter = (root) => {
    if (!root) return 0;

    let leftSum = findDiameter(root.left, ans);
    let rightSum = findDiameter(root.right, ans);

    result = Math.max(diameter, leftSum + rightSum);

    return Math.max(Math.max(leftSum, rightSum) + 1);
}
