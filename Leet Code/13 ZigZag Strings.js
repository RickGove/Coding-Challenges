var convert = function (s, numRows) {
	if (numRows === 1) return s;

	let newStr = '';

	let mapped = {},
		x = 0;
	while (x < numRows) {
		mapped[x] = '';
		x++;
	}

	let char = 0;
	let key = 0;
	let up = true;

	while (char < s.length) {
		mapped[key] = mapped[key] + s[char];

		if (up) {
			if (key !== numRows - 1) {
				key++;
			} else {
				key--;
				up = false;
			}
		} else {
			if (key !== 0) {
				key--;
			} else {
				key++;
				up = true;
			}
		}

		char++;
	}

	key = 0;

	while (key < numRows) {
		newStr = newStr + mapped[key];
		key++;
	}

	return newStr;
};

// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R

// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string s, int numRows);

// Example 1:

// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"

// Example 2:

// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:

// P     I    N
// A   L S  I G
// Y A   H R
// P     I

let s = 'AB',
	// numRows = 3;
	numRows = 1;

console.log(convert(s, numRows));
