class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class SinglyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
	push(val) {
		var newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++;
		return this;
	}
	pop() {
		if (this.length === 1) {
			console.log('length is 0');
			this.head = null;
			this.tail = null;
			this.length = 0;
			return undefined;
		}
		if (this.length > 0) {
			console.log(this.length);
			let prev = null,
				current = this.head;
			while (current.next !== null) {
				prev = current;
				// console.log(current);
				current = current.next;
			}
			prev.next = null;
			this.tail = prev;
			this.length--;
			return current;
		}
	}

	shift() {
		if (this.length === 0) return undefined;
		let temp = this.head;
		this.head = this.head.next;
		this.length--;
		return temp;
	}
}

var list = new SinglyLinkedList();

list.push('HELLO');
list.push('RICK');
list.push('how');
list.push('are');
list.push('u');
console.log(list);

list.pop();
list.pop();
list.pop();
list.pop();
list.pop();
list.pop();
list.pop();
list.pop();
list.pop();
list.pop();
list.pop();
list.pop();
list.pop();
list.pop();

console.log(list.pop());
console.log(list);

list.push('HELLO');
list.push('RICK');
list.push('how');
list.push('are');
list.push('u');
console.log(list.shift());
console.log(list);
