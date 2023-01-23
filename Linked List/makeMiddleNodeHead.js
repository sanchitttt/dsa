const { printList } = require("./printList");

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const a = new ListNode(1);
const b = new ListNode(2);
const c = new ListNode(3);
const d = new ListNode(4);
const e = new ListNode(5);
// const f = new ListNode(5);

a.next = b;
b.next = c;
// c.next = d;
// d.next = e

function moveMiddleToHead(head) {
    let count = 0;
    let curr = head;
    while (curr) {
        count++;
        curr = curr.next;
    }

    let middle = Math.floor(count / 2);
    let justBeforeMiddleNode;
    count = 0;
    curr = head;
    while (curr) {
        if (count === middle - 1) {
            if(!justBeforeMiddleNode) justBeforeMiddleNode = curr;
            break;
        }
        count++;
        curr = curr.next;
        justBeforeMiddleNode = curr;
    }

    let middleNode = justBeforeMiddleNode.next;
    justBeforeMiddleNode.next = justBeforeMiddleNode.next.next;
    middleNode.next = head;
    return middleNode;
}

printList(moveMiddleToHead(a));