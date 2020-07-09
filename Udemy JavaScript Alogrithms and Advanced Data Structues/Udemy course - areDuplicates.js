function areThereDuplicates() {
	// good luck. (supply any arguments you deem necessary.)
	let args = arguments;
	let left = 0;
	let right = args.length - 1;
	while (left < args.length - 1) {
		if (args[left] === args[right]) {
			return true;
		}
		if (left > right + 1) {
			left--;
		}
		left++;
		right = args.length - 1;
	}
	return false;
}

let answer = areThereDuplicates(1, 2, 3); //false
// let answer2 = areThereDuplicates(1, 2, 2); //true
console.log(answer);
// console.log(answer2);
