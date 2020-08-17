// Given a non-empty array of digits representing a non-negative integer, increment one to the integer.

// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.

// You may assume the integer does not contain any leading zero, except the number 0 itself.

// Example 1:

// Input: [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.

// Example 2:

// Input: [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.

// var plusOne = function (digits) {
// 	let str = digits.toString();
// 	str = str.replace(/,/g, '');
// 	let int = parseInt(str);
// 	int++;
// 	str = int.toString();
// 	let newArr = [];
// 	i = str.length - 1;
// 	while (i > -1) {
// 		newArr.unshift(str[i]);
// 		i--;
// 	}
// 	return newArr;
// };

var plusOne = function (digits) {
	let i = digits.length - 1;
	// remove later
	let current = digits[i];
	//
	if (digits[i] !== 9) digits[i] = digits[i] + 1;
	else {
		while (digits[i] === 9) {
			i--;
		}
		// digits[i] = digits[i] + 1;
		// i++;
		// while (i < digits.length - 1) {
		// 	digits[i] === 0;
		// }
	}
	return digits;
};

input = [5, 9, 9, 9];

console.log('input:', input);

answer = plusOne(input);

console.log(answer);
