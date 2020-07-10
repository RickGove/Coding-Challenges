var isValid = function (s) {
	// global vars
	let newStr,
		l = 0,
		r = 0,
		openBrackets = ['(', '[', '{'],
		closeBrackets = [')', ']', '}'];
	//// helpers/////////////////////////////////////////
	//
	//
	function isOpen(char) {
		for (openB of openBrackets) {
			if (openB === char) {
				return true;
			}
		}
		return false;
	}

	function isClosed(char, r) {
		console.log(`===isClosed=== `);
		console.log(`find ${char} in ${closeBrackets}`);
		for (let z = 0; z < closeBrackets.length; z++) {
			console.log(`checking ${z}`);
			if (closeBrackets[z] === char) {
				console.log(
					`${char} is ${closeBrackets[z]} at position ${z} of closeBrakets`
				);
				if (openBrackets[z] === s[r - 1]) {
					console.log('brackets are closed');
					console.log(`s needs to be sliced from ${z}-${z + 1}`);
					s = s.slice(0, r - 1) + s.slice(r + 1);

					return true;
				} else {
					return false;
				}
			}
		}
		console.log('here');
	}

	// edge cases
	if (s === '') return true;
	if (!isOpen(s[0]) || s.length === 1) {
		return false;
	}
	//

	// check all chars starting at 0 to see if they are opening brackets
	for (char of s) {
		if (s.lenth === 0) return true;
		if (isOpen(char)) {
		} else {
			if (!isClosed(char, r)) {
				return false;
			} else {
				if (s.length === 0) {
					return true;
				} else {
					return isValid(s);
				}
			}
		}
		r++;
	}
	return false;
};

/////////////////////////////////
//
/* Example 1:

Input: "()"
Output: true

Example 2:

Input: "()[]{}"
Output: true

Example 3:

Input: "(]"
Output: false

Example 4:

Input: "([)]"
Output: false

Example 5:

Input: "{[]}"
Output: true */

function learnSlice() {
	var str = 'Hello World';
	let z = 6;
	console.log(str.slice(0, z) + str.slice(z + 2));
	// console.log(str.slice(z + 1));
	// first one removes
	// console.log(str);
}

const str = '[[';
const str2 = '{[]}';

const t0 = performance.now();
// learnSlice();
console.log(isValid(str));

const t1 = performance.now();
console.log('Fn took ' + (t1 - t0) + ' milliseconds.');
