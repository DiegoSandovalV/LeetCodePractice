/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function(head) {
  
    //Find the middle node

    let fast = head;
    let slow = head;

    let midIndex = 0;

    while(fast.next !== null){
        fast = fast.next.next;
        slow = slow.next;
        midIndex++;
    }


    //Linked the middle -1 node to the middle +1 node

    let prev = head;

    for(let i = 0; i < midIndex - 1; i++){
        prev = prev.next;
    }

    prev.next = prev.next.next;

    return head;

};

//test cases
// [1,2,3,4,5] => [1,2,4,5]
console.log(deleteMiddle([1,2,3,4,5]));

// [1,2,3,4,5,6] => [1,2,3,5,6]
console.log(deleteMiddle([1,2,3,4,5,6]));