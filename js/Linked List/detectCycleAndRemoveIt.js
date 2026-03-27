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
e.next = b;

function detectAndRemoveCycle(head) {
    let cycleExists = false;
    let slow = head;
    let fast = head;

    let firstPointer;

    while (fast && fast.next) {
        if (slow === fast) {
            cycleExists = true;
            firstPointer = slow;
            break;
        }
        slow = slow.next;
        fast = fast.next.next;
    }

    if (!cycleExists) {
        return false;
    }

    let secondPointer = head;

    while (true) {
        if (firstPointer === secondPointer) {
            break;
        }
        firstPointer = firstPointer.next;
        secondPointer = secondPointer.next;
    }

    while (true) {
        if (firstPointer.next === secondPointer) {
            firstPointer.next = null;
            return true;
        }
        firstPointer = firstPointer.next;
    }

}

detectAndRemoveCycle(a);