

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}


const a = new ListNode(6);
const b = new ListNode(1);
const c = new ListNode(7);

const d = new ListNode(2);
const e = new ListNode(9);
const f = new ListNode(5);

a.next = b;
b.next = c;

d.next = e
e.next = f;

function reverse(head) {
   
    let currHead = head;
    let prevHead = null;

    while (currHead) {
        let temp = currHead.next;
        currHead.next = prevHead;
        prevHead = currHead;
        currHead = temp;
    }
    return prevHead;
}


const addTwoLinkedLists = (head1, head2) => {
    let reversedHead1 = reverse(head1);
    let reversedHead2 = reverse(head2);

    let resultHead = new ListNode(null);
    let dummyHead = resultHead;


    let carry = 0;


    while (reversedHead1 || reversedHead2) {
        let sum;
        if (reversedHead1 && reversedHead2) {
            sum = reversedHead1.val + reversedHead2.val + carry;
            if (carry > 0) carry--;
            let ans = sum % 10;
            if (sum >= 10) carry++;
            let newNode = new ListNode(ans);
            dummyHead.next = newNode;
            dummyHead = dummyHead.next;
            reversedHead1 = reversedHead1.next;
            reversedHead2 = reversedHead2.next;
        }
        else if (!reversedHead1 && reversedHead2) {
            sum = reversedHead2.val + carry;
            if (carry > 0) carry--;
            let ans = sum % 10;
            if (sum >= 10) carry++;
            let newNode = new ListNode(ans);
            dummyHead.next = newNode;
            dummyHead = dummyHead.next;
            reversedHead2 = reversedHead2.next;
        }
        else if (reversedHead1 && !reversedHead2) {
            sum = reversedHead1.val + carry;
            if (carry > 0) carry--;
            let ans = sum % 10;
            if (sum >= 10) carry++;
            let newNode = new ListNode(ans);
            dummyHead.next = newNode;
            dummyHead = dummyHead.next;
            reversedHead1 = reversedHead1.next;
        }
    }

    return reverse(resultHead.next);
}
