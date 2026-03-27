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

a.next = b;
b.next = c;
c.next = d;

var swapPairs = function (head) {
    let resultNode = new ListNode();
    let dummyHead = resultNode;
    let prevHead = head;
    let currHead = head.next;

    while (currHead ) {
        dummyHead.next = currHead;
        prevHead.next = currHead.next;
        currHead.next = prevHead;
        if(!prevHead.next){
            break;
        }
        dummyHead = dummyHead.next.next;
        prevHead = prevHead.next;
        currHead = prevHead.next;
    }

    return resultNode.next;
};

swapPairs(a);