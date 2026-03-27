const { printList } = require("./printList");

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const a = new ListNode(1);
const b = new ListNode(2);
const c = new ListNode(2);

const d = new ListNode(3);
const e = new ListNode(3);
// const f = new ListNode(5);

a.next = b;
b.next = c;
c.next = d;
d.next = e


function removeDuplicates(head) {
    const set = new Set();
    let currHead = head.next;
    let prevHead = head;
    set.add(head.val);

    while (currHead) {
        if (set.has(currHead.val)) {
            prevHead.next = currHead.next;
        }
        else {
            set.add(currHead.val);
            prevHead = currHead;
        }
        currHead = prevHead.next;
    }
    return head;
}


removeDuplicates(a);
