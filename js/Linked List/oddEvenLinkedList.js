const { printList } = require("./printList");
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const a = new ListNode(1);
const b = new ListNode(5);
const c = new ListNode(3);

const d = new ListNode(4);
const e = new ListNode(8);
// const f = new ListNode(5);

a.next = b;
b.next = c;
c.next = d;
d.next = e

function oddEvenLinkedList(head) {
    let curr = head;
    let oddHeadCopy = new ListNode();
    let evenHeadCopy = new ListNode();
    let oddHead = oddHeadCopy;
    let evenHead = evenHeadCopy;

    while (curr) {
        console.log(curr.val);
        oddHead.next = curr;
        evenHead.next = curr.next;
        if(curr.next) curr = curr.next.next;
        else curr = curr.next;
        oddHead = oddHead.next;
        evenHead = evenHead.next;
    }

    oddHead.next = evenHeadCopy.next;
    return oddHeadCopy.next;

}

oddEvenLinkedList(a);