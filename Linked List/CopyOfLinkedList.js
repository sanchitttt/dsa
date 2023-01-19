const { printList } = require("./printList");

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.random = null;
    }
}


const a = new ListNode(1);
const b = new ListNode(2);
const c = new ListNode(3);
const d = new ListNode(4);
const e = new ListNode(5);

a.next = b;
a.random = c;
b.next = c;
b.random = a;
c.next = d;
c.random = c;
d.next = e;
d.random = b;
e.random = d;


function copyLinkedListWithRandomPointer(head) {
    let currHead = head;

    while (currHead) { // Creating duplicate nodes ie 1->2 would become 1->1->2
        let temp = currHead.next;
        let newNode = new Node(currHead.val);
        currHead.next = newNode;
        currHead.next.next = temp;
        currHead = temp;
    }

    currHead = head;

    while (currHead) {
        currHead.next.random = currHead.random? currHead.random.next : currHead.random;
        currHead = currHead.next.next;
    }

    currHead = head;
    let copyHead = head.next;
    let temp = copyHead;

    while(currHead && copyHead){
        currHead.next = currHead.next.next;
        copyHead.next = copy.next ? copy.next.next : copy.next;
        currHead = currHead.next;
        copyHead = copyHead.next;
    }

    return temp;
}


printList(copyOfLinkedList(a))
