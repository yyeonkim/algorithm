class Queue {
  constructor() {
    this.items = {};
    this.head = 0;
    this.tail = 0;
  }

  enqueue(item) {
    this.items[this.tail] = item;
    this.tail++;
  }

  dequeue() {
    const item = this.items[this.head];
    delete this.items[this.head];
    this.head++;

    return item;
  }

  peek() {
    return this.items[this.head];
  }

  isEmpty() {
    const length = this.tail - this.head;
    return length === 0;
  }
}

module.exports = Queue;
