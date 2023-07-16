
 // Definition for singly-linked list.
  function ListNode(val) {
      this.val = val;
      this.next = null;
 }
 

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    
    if(!head || !head.next){
        return false
    }

    let fast = head.next;
    let slow = head;

    while(fast.next && fast.next.next){

        if(fast == slow){
            return true
        }

        fast = fast.next.next
        slow = slow.next


    }

    return false


};

//test cases
// [3,2,0,-4] => true
// [1,2] => true
// [1] => false

let head = new ListNode(3);
head.next = new ListNode(2);
head.next.next = new ListNode(0);
head.next.next.next = new ListNode(-4);
head.next.next.next.next = head.next;

console.log(hasCycle(head));