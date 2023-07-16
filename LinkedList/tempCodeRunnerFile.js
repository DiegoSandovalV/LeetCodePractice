    let curr = head;
    let prev = null;

    

    while(curr.next !== null){
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }

    return prev;