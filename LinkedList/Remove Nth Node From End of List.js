/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    
    //One element case
    if(head.next === null){
        return null;
    }

    let fast = head;
    let slow = head;
    let prev = head;


    for(let i = 0; i < n; i++){
        fast = fast.next;
    }

    while(fast){
        fast = fast.next;
        prev = slow;
        slow = slow.next;
    }

    prev.next = slow.next;

    return head;

};

//test cases
class ListNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  // Crear una lista enlazada [1,2,3,4,5]
  const head = new ListNode(1);
  head.next = new ListNode(2);
  head.next.next = new ListNode(3);
  head.next.next.next = new ListNode(4);
  head.next.next.next.next = new ListNode(5);
  
  const n = 2;
  console.log(removeNthFromEnd(head, n));