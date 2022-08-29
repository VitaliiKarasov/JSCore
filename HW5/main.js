class Stack {
  constructor(maxSize) {
    if (isNaN(maxSize)) {
      maxSize = 10;
    }

    this.maxSize = maxSize;
    this.items = [];
    this.count = 0;
  }

  static fromIterable(iterable) {
    if (!iterable[Symbol.iterator]) {
      throw new Error('Entity is not iterable');
    }

    const stack = new Stack(iterable.length);

    for (let value of iterable) {
      stack.push(value);
    }

    return stack;
  }

  push(element) {
    if (this.count >= this.maxSize) {
      throw new Error('Stack is overfull');
    }

    this.items[this.count] = element;
    this.count += 1;

    return this.count - 1;
  }

  pop() {
    if (this.count == 0) {
      throw new Error('Stack is empty');
    }

    this.count -= 1;

    const deleteItem = this.items[this.count];

    return deleteItem;
  }

  peek() {
    if (this.count == 0) {
      return null;
    }

    return this.items[this.count - 1];
  }

  isEmpty() {
    return this.count == 0;
  }

  toArray() {
    return Array.from(this.items);
  }
}

module.exports = { Stack };
