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

    while (fast && fast.next) {
        if (slow === fast) {
            cycleExists = true;
            break;
        }
        slow = slow.next;
        fast = fast.next.next;
    }

    if (!cycleExists) {
        return false;
    }

    let map = new Map();

    let currHead = head;

    while (currHead) {
        if (!map.has(currHead.next.val)) {
            map.set(currHead.val, [currHead]);
        }
        else {
            let value = map.get(currHead.next.val);
            for (let i = 0; i < value.length; i++) {
                if (currHead.next === value[i]) {
                    currHead.next = null;
                }
            }
            break;
        }
        currHead = currHead.next;
    }
    printList(a);
    return true;

}

detectAndRemoveCycle(a);