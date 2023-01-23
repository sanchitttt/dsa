const {printList} = require('./printList');

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const a = new ListNode(5);
const b = new ListNode(3);
const c = new ListNode(2);
const d = new ListNode(1);
const e = new ListNode(6);
const f = new ListNode(9);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
// f.next = g;

const mergeTwoSortedLists = (head1, head2) => {
    let curr1 = head1;
    let curr2 = head2;
    let resultHeadCopy = new ListNode();
    let resultHead = resultHeadCopy;

    while (curr1 || curr2) {
        if (!curr1 && curr2) {
            let newNode = new ListNode(curr2.val);
            resultHead.next = newNode;
            resultHead = resultHead.next;
            curr2 = curr2.next;
        }
        else if (curr1 && !curr2) {
            let newNode = new ListNode(curr1.val);
            resultHead.next = newNode;
            resultHead = resultHead.next;
            curr1 = curr1.next;
        }
        else {
            if (curr1.val < curr2.val) {
                let newNode = new ListNode(curr1.val); 
                resultHead.next = newNode;
                resultHead = resultHead.next;
                curr1 = curr1.next;
            }
            else {
                let newNode = new ListNode(curr2.val);
                resultHead.next = newNode;
                resultHead = resultHead.next;
                curr2 = curr2.next;
            }
        }
    }
    return resultHeadCopy.next;
}

function sortList(head) {
    if (!head || !head.next) return head;

    let temp = null;
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        temp = slow;
        slow = slow.next;
        fast = fast.next.next;
    }

    temp.next = null;

    let l1 = sortList(head);
    let l2 = sortList(slow);

    return mergeTwoSortedLists(l1,l2);
}


printList(sortList(a));