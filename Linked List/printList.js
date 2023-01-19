function printList(head){
    try {
        let str = ''
        let dummyHead = head;
        while(dummyHead){
            str += dummyHead.val + " -> ";
            dummyHead = dummyHead.next;
        }
        str += 'null'
        console.log(str);
    } catch (error) {
        return error;
    }
}

module.exports = {printList};