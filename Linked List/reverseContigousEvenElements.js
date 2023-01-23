const { printList } = require("./printList");
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const a = new ListNode(2);
const b = new ListNode(4);
const c = new ListNode(6);

const d = new ListNode(8);
const e = new ListNode(1);
const f = new ListNode(2);
const g = new ListNode(4);
const h = new ListNode(6);

a.next = b;
b.next = c;
c.next = d;
d.next = e
e.next = f;
f.next = g;
g.next = h;


var reverseBetween = function (head, left, right) {
    let prev = head;
    let curr = head;

    let count = 1;

    let justBeforeLeft;
    let justAfterRight;
    let prevCopy;

    if (left === right) return head;

    if (left === 1) justBeforeLeft = head;

    while (prev) {
        if (count === left - 1) {
            justBeforeLeft = prev;
            console.log(prev.val);
        }
        if (count === left) {
            break;
        }
        prev = prev.next;
        count++;

    }
    prevCopy = prev;
    curr = prev.next;

    while (curr) {
        if (count === right - 1) justAfterRight = curr;
        if (count === right) break;
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
        count++;
    }
    // console.log(justBeforeLeft.val,prevCopy.val)
    if (left === 1) {
        justBeforeLeft.next = curr;
        return prev;
    }
    else {
       
        prevCopy.next = curr;
        justBeforeLeft.next = justAfterRight;
        return head;
    }

};

function reverseEvenElements(head) {
    let resultHead = head;
    let curr = head;
    let count = 1;

    while (curr) {
        if (curr.val % 2 === 0) {
            if (curr.next && curr.next.val % 2 === 0) {
                startOfEvenSubList = curr;
                left = count;
                while (curr && curr.val % 2 === 0) {
                    curr = curr.next;
                    count++;
                }
                endOfEvenSubList = curr;
                right = count;
                head = reverseBetween(head, left, right - 1);
            }
            else {
                curr = curr.next;
                count++;
            }
        }
        else {
            curr = curr.next;
            count++;
        }
    }

    return head;
}


// printList(reverseBetween(a,6,8))
printList(reverseEvenElements(a));
