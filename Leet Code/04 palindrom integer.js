var isPalindrome = function (x) {
	// if it reads the same from back to front, it's a isPalindrome

	//pseudocode
	// if negative is false
	if (x < 0) {
		return false;
	}

	// make string
	let str = x.toString();

	//one for loop i = 0
	// every iteration check if str[1] and if str[str.length-i+1] are same
	// if not same: false
	// once they overlap in the middle return true

	let i = 0;
	let finished = false;
	for (let i = 0; finished === false; i++) {
		let j = i + 1;
		if (i >= str.length - j) {
			finished = true;
		}
		if (str[i] !== str[str.length - j]) {
			return false;
		}
	}
	return true;
};
let x = -665566;
// console.log(isPalindrome(121)); // true
// console.log(isPalindrome(-121)); // false
// console.log(isPalindrome(10)); // false;
console.log(isPalindrome(x)); // false;
