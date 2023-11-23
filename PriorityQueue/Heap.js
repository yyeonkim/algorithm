/* 최소 힙 */
class Heap {
  constructor() {
    this.heap = [];
  }

  getLeftChildIndex = (parentIndex) => parentIndex * 2 + 1;
  getRightChildIndex = (parentIndex) => parentIndex * 2 + 2;
  getParentIndex = (childIndex) => Math.floor((childIndex - 1) / 2);

  peek = () => this.heap[0]; // 최상위 노드 반환

  insert = (key, value) => {
    const node = { key, value }; // key: 우선 순위, value: 노드의 값
    this.heap.push(node); // 우선 노드를 삽입한다.
    this.heapifyUp(); // 삽입된 노드를 올리며, 다시 min heap의 형태를 갖춘다.
  };

  /* 끝에 삽입된 노드를 위로 올리며 min heap의 형태를 갖춘다. */
  heapifyUp = () => {
    let index = this.heap.length - 1; // 가장 끝에 삽입된 노드의 인덱스
    const lastInsertedNode = this.heap[index];

    // 루트 노드가 되기 전까지
    while (index > 0) {
      const parentIndex = this.getParentIndex(index);

      // 부모 노드가 우선 순위가 낮다면 (key 값이 크다면)
      // 부모 노드를 아래로 내린다.
      // 원래 가장 끝에 있던 노드이므로 최소한으로 올리기(등호X)
      if (this.heap[parentIndex].key > lastInsertedNode.key) {
        this.heap[index] = this.heap[parentIndex];
        index = parentIndex;
      } else break;
    }

    // 찾은 자리에 노드를 넣어준다.
    this.heap[index] = lastInsertedNode;
  };

  remove = () => {
    const length = this.heap.length;
    const rootNode = this.heap[0];

    if (length === 0) return undefined;
    if (length === 1) this.heap = [];
    else {
      this.heap[0] = this.heap.pop(); // 우선 끝의 노드를 루트 노드로 만든다.
      this.heapifyDown(); // 노드를 아래로 내리며 min heap의 형태를 갖춘다.
    }

    return rootNode;
  };

  /* 루트로 삽입된 노드의 원래 위치를 찾고, min heap의 형태를 갖춘다. */
  heapifyDown = () => {
    let index = 0;
    const length = this.heap.length;
    const rootNode = this.heap[0];

    // left child가 있을 때까지(트리 끝에 닿을 때까지) 검사한다.
    while (this.getLeftChildIndex(index) < length) {
      const leftChildIndex = this.getLeftChildIndex(index);
      const rightChildIndex = this.getRightChildIndex(index);

      // 왼쪽, 오른쪽 노드 중 우선 순위가 더 높은 것(key가 더 작은 것)을 찾는다.
      // 오른쪽 노드가 없다면 왼쪽 노드를 선택한다.
      const smallerChildIndex =
        rightChildIndex < length &&
        this.heap[rightChildIndex].key < this.heap[leftChildIndex].key
          ? rightChildIndex
          : leftChildIndex;

      // 자식 노드의 우선 순위가 더 높다면(key가 더 작다면) 위로 끌어올린다.
      // 원래 가장 끝에 있던 노드이므로 최대한 내리기(등호 사용)
      if (this.heap[smallerChildIndex].key <= rootNode.key) {
        this.heap[index] = this.heap[smallerChildIndex];
        index = smallerChildIndex;
      } else break;
    }

    this.heap[index] = rootNode;
  };
}

module.exports = Heap;
