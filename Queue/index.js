const Queue = require("./Queue.js");

const queue = new Queue();

queue.enqueue(5);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(7);
queue.dequeue();
queue.enqueue(1);
queue.enqueue(4);
queue.dequeue();

while (!queue.isEmpty()) {
  console.log(queue.dequeue()); // 3, 7, 1, 4
}
