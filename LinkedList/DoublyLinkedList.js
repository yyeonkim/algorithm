const Node = new require("./Node.js");

class DoublyLinkedList {
  constructor() {
    this.head = new Node("head");
    this.length = 0;
  }

  print() {
    let current = this.head;
    let result = [];
    while (current !== null) {
      result.push(current.value);
      current = current.next;
    }
    console.log(result.join("->"));
  }

  find(value) {
    let current = this.head;

    while (current !== null && current.value !== value) {
      current = current.next;
    }
    return current;
  }

  insert(value, prevValue) {
    let newNode = new Node(value);
    let current = this.find(prevValue);

    if (current.next === null) {
      newNode.prev = current;
      newNode.next = null;
      current.next = newNode;
    } else {
      newNode.next = current.next;
      newNode.prev = current;
      current.next.prev = newNode;
      current.next = newNode;
    }
    this.length++;
  }

  remove(item) {
    let current = this.find(item);

    if (current.next !== null) {
      current.next.prev = current.prev;
      current.prev.next = current.next;
      current.next = null;
      current.prev = null;
    } else {
      current.prev.next = null;
      current.prev = null;
    }
    this.length--;
  }
}

module.exports = DoublyLinkedList;
