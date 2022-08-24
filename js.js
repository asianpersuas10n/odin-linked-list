class LinkedList {
  constructor(headNodeVal) {
    this.headNode = headNodeVal;
    this.headNode.nextNode = null;
  }

  append(value) {
    const newNode = node(value);
    let temp = this.headNode;
    while (temp.nextNode !== null) {
      temp = temp.nextNode;
    }
  }

  prepend(value) {
    let newHeadNode = node(value);
    newHeadNode.nextNode = this.headNode;
    this.headNode = newHeadNode;
  }

  size() {
    let total = 0;
    let temp = this.headNode;
    while (temp !== null) {
      temp = temp.nextNode;
      total += 1;
    }
    return total;
  }

  head() {
    return this.headNode.value;
  }

  tail() {
    let temp = this.headNode;
    while (temp.nextNode !== null) {
      temp = temp.nextNode;
    }
    return temp.value;
  }

  at(index) {
    let currentIndex = 0;
    let temp = this.headNode;
    while (currentIndex !== index) {
      temp = temp.nextNode;
      currentIndex += 1;
    }
    return temp.value;
  }

  pop() {
    let temp = this.headNode;
    while (temp.nextNode.nextNode !== null) {
      temp = temp.nextNode;
    }
    temp.nextNode = null;
  }

  contains(val) {
    let temp = this.headNode;
    while (temp !== null) {
      if (temp.value === val) {
        return true;
      }
      temp = temp.nextNode;
    }
    return false;
  }

  find(val) {
    let index = 0;
    let temp = this.headNode;
    while (temp !== null) {
      if (temp.value === val) {
        return index;
      }
      index += 1;
      temp = temp.nextNode;
    }
    return null;
  }

  toString() {
    let string = "";
    while (temp !== null) {
      string = string + "(value) -> ";
    }
    string = string + "null";
    return string;
  }

  insertAt(val, index) {
    let newNode = node(val);
    let currentIndex = 0;
    let temp = this.headNode;
    const targetIndex = index - 1;

    while (currentIndex !== targetIndex) {
      temp = temp.nextNode;
      currentIndex += 1;
    }
    newNode.nextNode = temp.nextNode;
    temp.nextNode = newNode;
  }

  removeAt(index) {
    let currentIndex = 0;
    let temp = this.headNode;
    let removeNode;
    const targetIndex = index - 1;

    while (currentIndex !== targetIndex) {
      temp = temp.nextNode;
      currentIndex += 1;
    }
    removeNode = temp.nextNode;
    temp.nextNode = temp.nextNode.nextNode;
    removeNode.nextNode = null;
  }
}

function node(val = null) {
  return {
    value: val,
    nextNode: null,
  };
}
