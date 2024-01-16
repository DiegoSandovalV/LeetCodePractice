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
var reorderList = function (head) {
  const arr = linkListToArray(head)

  let l = 0
  let r = arr.length - 1

  while (l < r) {
    arr[l].next = arr[r]
    l++
    if (l === r) {
      break
    }
    arr[r].next = arr[l]
    r--
  }
  arr[l].next = null
}

const linkListToArray = (head) => {
  const arr = []
  let curr = head
  while (curr) {
    arr.push(curr)
    curr = curr.next
  }
  return arr
}
