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

a.next = b;
b.next = c;
c.next = d;
d.next = e;

function reverse(head) {
   
    let currHead = head;
    let prevHead = null;

    while (currHead) {
        let temp = currHead.next;
        currHead.next = prevHead;
        prevHead = currHead;
        currHead = temp;
    }
    return prevHead;
}

module.exports = {reverse};
