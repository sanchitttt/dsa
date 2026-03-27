
var reverseBetween = function (head, left, right) {
    let prev = head;
    let curr = head;

    let count = 1;

    let justBeforeLeft;
    let justAfterRight;
    let prevCopy;

    if(left===right) return head;

    if (left === 1) justBeforeLeft = head;

    while (prev) {
        if (count === left - 1) justBeforeLeft = prev;
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
    if (left === 1) {
        justBeforeLeft.next = curr;
        printList(prev)
        return prev;
    }
    else {
        prevCopy.next = curr;
        justBeforeLeft.next = justAfterRight;
        return head;
    }

};
