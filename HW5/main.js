class Node {
  constructor(current) {
    this.current = current;
    this.previous = null;
  }
}

class Stack {
  constructor(maxSize) {
    if (isNaN(maxSize)) {
      maxSize = 10;
    }

    this.maxSize = maxSize;
    this.head = null;
    this.count = 0;
  }

  static fromIterable(iterable) {
    if (!iterable[Symbol.iterator]) {
      throw new Error("Entity is not iterable");
    }

    const stack = new Stack(iterable.length);

    for (let value of iterable) {
      stack.push(value);
    }

    return stack;
  }

  push(element) {
    if (this.count >= this.maxSize) {
      throw new Error("Stack is overfull");
    }

    const node = new Node(element);

    node.previous = this.head;
    this.head = node;
    this.count += 1;

    return this.count - 1;
  }

  pop() {
    if (this.count == 0) {
      throw new Error("Stack is empty");
    }

    if (this.head !== null) {
      const popValue = this.head.current;
      this.head = this.head.previous;
      this.count -= 1;

      return popValue;
    }

    return null;
  }

  peek() {
    if (this.head == null) {
      return null;
    }

    return this.head.current;
  }

  isEmpty() {
    return this.count == 0;
  }

  toArray() {
    const nodes = [];

    let currentNode = this.head;

    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.previous;
    }

    return nodes;
  }
}

module.exports = { Stack };
