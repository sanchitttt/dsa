class ListNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}

// const a = new ListNode(1);
// const b = new ListNode(2);
// const c = new ListNode(3);
// const d = new ListNode(4);
// const e = new ListNode(5);
// const f = new ListNode(6);
// const g = new ListNode(7);

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.left = f;
// c.right = g;


// const a = new ListNode('A');
// const b = new ListNode('B');
// const c = new ListNode('C');
// const d = new ListNode('D');
// const e = new ListNode('E');
// const f = new ListNode('F');
// const g = new ListNode('G');
// const h = new ListNode('H');
// const i = new ListNode('I');

// a.left = b;
// a.right = c;
// b.right = d;
// c.left = e;
// c.right = f;
// e.left = g;
// f.left = h;
// f.right = i;


// const a = new ListNode(26);
// const b = new ListNode(10);
// const c = new ListNode(31);
// const d = new ListNode(4);
// const e = new ListNode(6);
// const f = new ListNode(1);
// const g = new ListNode(3);
// const h = new ListNode(9);
// const i = new ListNode(10);
// const j = new ListNode(8);
// const k = new ListNode(2);
// const l = new ListNode(4);
// const m = new ListNode(6);

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// d.left = h;
// e.left = i;
// e.right = j;
// c.left = f;
// c.right = g;
// f.left = k;
// g.left = l;
// g.right = m;


// const a = new ListNode(10);
// const b = new ListNode(40);
// const c = new ListNode(25);
// const d = new ListNode(16);
// const e = new ListNode(15);
// const f = new ListNode(12);
// const g = new ListNode(8);
// const h = new ListNode(9);


// a.left = b;
// a.right = c;
// b.left = d;
// c.left = e;
// c.right = f;
// d.right = g;
// e.left = h;

// const a = new ListNode(5);
// const b = new ListNode(4);
// const c = new ListNode(6);

// a.left = b;
// a.right = c;

const a = new ListNode(20);
const b = new ListNode(8);
const c = new ListNode(22);
const d = new ListNode(4);
const e = new ListNode(12);
const f = new ListNode(10);
const g = new ListNode(14);


a.left = b;
a.right = c;
b.left = d;
b.right = e;;
e.left = f;
e.right = g;

// const a = new ListNode(40);
// const b = new ListNode(20);
// const c = new ListNode(10);
// const d = new ListNode(30);


// a.left = b;
// b.left = c;
// b.right =d;



let array = [];
let height = 0;

const preOrderTraversal = (root) => {
    if (!root) return;

    array.push(root.val);
    height++;
    preOrderTraversal(root.left);
    preOrderTraversal(root.right);
}

const inOrderTraversal = (root) => {
    if (!root) return;

    inOrderTraversal(root.left);
    array.push(root.val);
    inOrderTraversal(root.right);
}

const postOrderTraversal = (root) => {
    if (!root) return;

    postOrderTraversal(root.left);
    postOrderTraversal(root.right);
    array.push(root.val);
}

const findHeight = (root) => {
    if (!root) return 0;
    return Math.max(findHeight(root.left), findHeight(root.right)) + 1;
}

let diameter = 0;

const findDiameter = (root) => {
    if (!root) return 0;

    let leftSum = findDiameter(root.left, ans);
    let rightSum = findDiameter(root.right, ans);

    result = Math.max(diameter, leftSum + rightSum);

    return Math.max(Math.max(leftSum, rightSum) + 1);
}


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

const topView = (root) => {
    const levelOrderTraversal = (root) => {
        const queue = [[root, 0]];

        let map = new Map();
        while (queue.length) {
            let size = queue.length;
            for (let i = 0; i < size; i++) {
                let current = queue.shift();
                if (!map.has(current[1])) map.set(current[1], current[0].val);
                if (current[0].left) queue.push([current[0].left, current[1] - 1]);
                if (current[0].right) queue.push([current[0].right, current[1] + 1]);
            }
        }
        let result = [];
        map.forEach((value, key) => result.push([key, value]));
        result.sort((a, b) => a[0] - b[0]);
        let temp = [];
        result.forEach((item) => temp.push(item[1]));
        return temp;

    }
    return levelOrderTraversal(root);
}

const mirrorBinaryTree = (root) => {
    if (!root) return;

    let temp = root.left;
    root.left = root.right;
    root.right = temp;
    mirrorBinaryTree(root.left);
    mirrorBinaryTree(root.right);
}


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




var constructBinaryTreeFromPreorderAndInorderTraversal = function (preorder, inorder) {
    function insertIntoBST(root, value) {
        if (!root) return new ListNode(value);

        if (root.val > value) {
            root.left = insertIntoBST(root.left, value);
        }
        else {
            root.right = insertIntoBST(root.right, value);
        }

        return root;
    }

    let root = null;
    for (let i = 0; i < preorder.length; i++) {
        root = insertIntoBST(root, preorder[i]);
    }

    return root;
};

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

function kthSmallestElementInABst(root, k) {
    const recursiveIterator = () => {

    }
}


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

function buildTree(inorder, inorderStarting, inorderEnding, postorder, postOrderStarting, postOrderEnding, map) {
    if (postOrderStarting > postOrderEnding || inorderEnding < inorderStarting) return;

    let newNode = new binaryTreeBoundaryTraversal(postorder[postOrderStarting]);

    let inorderRoot = map.get(postorder[postOrderStarting]);
    let numsLeft = inorderRoot - inorderStarting;
    newNode.left = buildTree(inorder, inorderStarting, inorderRoot - 1, postorder, postOrderStarting, postOrderStarting + numsLeft - 1, map);
    newNode.right = buildTree(inorder, inorderRoot + 1, inorderEnding, postorder, postOrderStarting, + numsLeft, postOrderEnding - 1, map);

    return newNode;
}
function constructBinaryTreeFromPostorderAndInorderTraversal(postorder, inorder) {
    if (!postorder.length || !inorder.length) return null;

    let map = new Map();

    for (let i = 0; i < inorder.length; i++) {
        map.set(inorder[i], i);
    }

    return buildTree(inorder, 0, inorder.length - 1, postorder, 0, postorder.length - 1, map);
}


console.log(checkBalanced(a));
