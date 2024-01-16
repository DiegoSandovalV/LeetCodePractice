/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if (!head || !head.next) {
        return;
    }

    let mid = getMid(head);
    let reversed = reverseList(mid);
    mergeList(head, reversed);
};

// Get middle of the list
const getMid = (head) => {
    let slow = head;
    let fast = head;

    while (fast && fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let mid = slow.next;
    slow.next = null; 
    return mid;
};

// Reverse the second half of the list
const reverseList = (head) => {
    let curr = head;
    let prev = null;

    while (curr) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }

    return prev; 
};

// Merge two lists alternatively
const mergeList = (l1, l2) => {
    while (l1 && l2) {
        let l1Next = l1.next;
        let l2Next = l2.next;

        l1.next = l2;
        l2.next = l1Next;

        l1 = l1Next;
        l2 = l2Next;
    }
};
