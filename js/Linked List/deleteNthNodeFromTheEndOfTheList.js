const { printList } = require("./printList");

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const a = new ListNode(1);

function deleteKthToLast(head, k) {
    if(!head) return null;
    let slow = head;
    let fast = head;

    for (let i = 0; i < k + 1; i++) {
        if(!fast){
            return null;
        }
         fast = fast.next;
    }

    while(fast){
         slow = slow.next;
         fast = fast.next;
    } 

    if(!slow) return null;
    // slow.next = slow.next.next;

    return head;
}

printList(deleteKthToLast(1));
