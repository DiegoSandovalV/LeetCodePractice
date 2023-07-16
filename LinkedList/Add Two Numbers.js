/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let val1 = "";
    let val2 = "";
  
    while (l1) {
      let val = l1.val;
      val = val.toString();
      val1 += val;
      l1 = l1.next;
    }
  
    while (l2) {
      let val = l2.val;
      val = val.toString();
      val2 += val;
      l2 = l2.next;
    }
  
    let sum = BigInt(val1) + BigInt(val2);
  
    let sumArray = sum.toString().split("");
  
    let resultHead = new ListNode(parseInt(sumArray[0]));
    let aux = resultHead;
  
    for (let i = sumArray.length; i >= 0; i++) {
      aux.next = new ListNode(parseInt(sumArray[i]));
      aux = aux.next;
    }
  
    return resultHead;
  };

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
}


//test cases
// [2,4,3] + [5,6,4] => [7,0,8]
console.log(addTwoNumbers([2,4,3], [5,6,4]));