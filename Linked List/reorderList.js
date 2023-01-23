const { printList } = require("./printList");

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const a = new ListNode(3);
const b = new ListNode(1);
const c = new ListNode(7);

const d = new ListNode(9);
const e = new ListNode(15);
const f = new ListNode(7);
const g = new ListNode(1);
// const f = new ListNode(5);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;


function listIntersectionPoint(head1, head2) {
    let map = new Map();

    while (head1) {
        if (map.has(head1.val)) {
            let arr = map.get(head1.val);
            arr.push(head1);
            map.set(head1.val, arr);
        }
        else {
            map.set(head1.val, [head1]);
        }
        head1 = head1.next
    }

    while (head2) {
        if (map.has(head2.val)) {
            let arr = map.get(head2.val);
            for (let i = 0; i < arr.length; i++) {
                if(arr[i] === head2){
                    return head2;
                }
            }
        }
        head2 = head2.next;
    }
}

listIntersectionPoint(a)

