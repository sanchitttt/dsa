const { printList } = require("./printList");

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const a = new ListNode(1);
// const b = new ListNode(5);
// const c = new ListNode(7);
// const d = new ListNode(0);
// const e = new ListNode(1);
// const f = new ListNode(2);
// const g = new ListNode(3);
// const h = new ListNode(4);

// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;
// e.next = f;
// f.next = g;
// g.next = h;
// h.next = a;


function insertIntoSortedCircularList(head, insertVal) {
    let newNode = new ListNode(insertVal);

    if (!head) {
        newNode.next = newNode;
        return newNode;
    }
    if (!head.next) {
        if (head.val > insertVal) {
            newNode.next = head;
            head.next = newNode;
            return newNode;
        }
        else{
            head.next = newNode;
            return head;
        }
    }
    let map = new Map();
    let curr = head;
    let lastNode;
    


    map.set(curr.val, [{ val: curr.val, next: curr.next }]);
    curr = head.next;
    while (curr) {
        if (!map.has(curr.next.val)) {
            map.set(curr.next.val, [{ val: curr.next.val, next: curr.next }]);
            curr = curr.next;
        }
        else {
            let arr = map.get(curr.next.val);
            let found = false;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] === curr.next) {
                    found = true;
                }
            }
            if (found) break;
            else {
                arr.push(curr.next);
                map.set(curr.next.val, arr);
            }
            curr = curr.next;
        }
    }

    lastNode = curr;

    if (insertVal <= head.val) {
        if (insertVal >= lastNode.val) {
            lastNode.next = newNode;
            newNode.next = head;
            return newNode;
        }
    }

    if (insertVal >= lastNode.val && insertVal <= head.val) {
        lastNode.next = newNode;
        newNode.next = head;
        return head;
    }

    curr = head;



    while (curr) {
        if (curr.val <= insertVal && insertVal <= curr.next.val) {
            let temp = curr.next;
            curr.next = newNode;
            newNode.next = temp;
            return head;
        }
        else if (curr.val <= insertVal && insertVal >= curr.next.val && curr.val > curr.next.val) {
            let temp = curr.next;
            curr.next = newNode;
            newNode.next = temp;
            return head;
        }
        else if(curr.val >= insertVal && curr.next.val >= insertVal && curr.val >= curr.next.val){
            let temp = curr.next;
            curr.next = newNode;
            newNode.next = temp;
            return head;
        }
        curr = curr.next;
    }
}


printList(insertIntoSortedCircularList(a, 7))