const {printList} = require('./printList');

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const a = new ListNode(4);
const b = new ListNode(5);
const c = new ListNode(6);


const d = new ListNode(10);
const e = new ListNode(11);
const f = new ListNode(12);

a.next = b;
b.next = c;

d.next = e;
e.next = f;


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
    return resultHeadCopy;
}

printList(mergeTwoSortedLists(a, d));