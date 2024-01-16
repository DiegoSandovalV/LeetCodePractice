class node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

function insertNodeAtPosition(llist, data, position) {
  for (let i = 0; i < position; i++) {
    if (i == position - 1) {
      let temp = llist.next
      llist.next = new node(data)
      llist.next.next = temp
    }
    llist = llist.next
  }
    return llist
}

