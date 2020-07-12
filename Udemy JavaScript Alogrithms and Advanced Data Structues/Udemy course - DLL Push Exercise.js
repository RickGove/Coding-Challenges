class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
		this.prev = null;
	}
}

class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
	shift() {
		if (!this.head) return null;
		//remove old head
		if (length == 0) {
			this.head = null;
			this.tail = null;
		}
		let oldHead = this.head;

		// change the head
		this.head = this.head.next;
		// decrement the length
		this.length--;

		return oldHead;
	}
}

var x = new DoublyLinkedList();
console.log(x);
console.log(x.tail);
x.push('WTF');
// console.log(x);
// x.push('you');
// console.log(x);
