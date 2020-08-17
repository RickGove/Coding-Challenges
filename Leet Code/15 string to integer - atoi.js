var myAtoi = function (str) {
	let newStr = str.trim(),
		index = 0,
		begin = -1,
		end = -1,
		current,
		answer = undefined;

	if (newStr[index] === '-') begin = index;
	else if (newStr[index] === '+') begin = index + 1;
	else {
		current = parseInt(newStr[index]);
		if (isNaN(current)) return 0;
	}
	let next = newStr[index + 1];
	if (
		next === '-' ||
		next === '+' ||
		(next === undefined && index === newStr.length)
	)
		return 0;
	index++;
	while (end === -1 && index < newStr.length) {
		current = parseInt(newStr[index]);
		if (isNaN(current)) end = index;
		index++;
	}

	if (end !== -1) newStr.slice(0, end);
	answer = parseInt(newStr);
	if (isNaN(answer)) return 0;
	if (answer > 2 ** 31 - 1) answer = 2 ** 31 - 1;
	if (answer < -(2 ** 31)) answer = -(2 ** 31);
	if (answer === undefined) return 0;
	return answer;
};

// Example 1:
let inp;

// Input: "42"

// console.log('42 in expect 42 out');
inp = '42';
// console.log(myAtoi(inp));
exp = 42;
console.log(exp === myAtoi(inp));
// console.log('*******');

// // Output: 42

// // Example 2:

// Input: "   -42"
// console.log('      -42 in expect 42 out');

// inp = '   -42';
// exp = -42;
// console.log(myAtoi(inp));
// console.log('*******');

// // Output: -42
// // Explanation: The first non-whitespace character is '-', which is the minus sign.
// //              Then take as many numerical digits as possible, which gets 42.

// // Example 3:

// // Input: "4193 with words"

// inp = '   -4193 with words';
// console.log(`${inp} in expect -4193`);
// exp = -4193;
// console.log(exp === myAtoi(inp));
// console.log('*******');

// // Output: 4193

// // Example 4:

// // Input: "words and 987"
// inp = 'words and 987';
// console.log(`${inp} in expect 0`);

// // console.log(myAtoi(inp));
// exp = 0;
// console.log(exp === myAtoi(inp));
// console.log('*******');

// // Output: 0
// // Explanation: The first non-whitespace character is 'w', which is not a numerical
// //              digit or a +/- sign. Therefore no valid conversion could be performed.

// // Example 5:

// // Input: "-91283472332"

// inp = '-91283472332';
// console.log(`${inp} in expect -2147283648`);
// console.log(myAtoi(inp));
// exp = -2147483648;
// console.log(exp === myAtoi(inp));
// console.log('*******');
// // Output: -2147483648
// // Explanation: The number "-91283472332" is out of the range of a 32-bit signed integer.
// //  Thefore INT_MIN (−231) is returned.

// inp = 'hello my darling';
// console.log(`${inp} in expect 0`);

// console.log(myAtoi(inp));
// exp = 0;
// console.log(exp === myAtoi(inp));
// console.log('*******');

// inp = '3.14159';
// console.log(`${inp} in expect 3`);

// console.log(myAtoi(inp));
// exp = 3;
// console.log(exp === myAtoi(inp));
// console.log('*******');

// inp = '-';
// console.log(`${inp} in expect 0`);
// console.log(myAtoi(inp));
// exp = 0;
// console.log(exp === myAtoi(inp));
// console.log('*******');

// inp = '+155550 my baby';
// console.log(`${inp} in expect 1555550`);
// console.log(myAtoi(inp));
// exp = 155550;
// console.log(exp === myAtoi(inp));
// console.log('*******');

// inp = '+-2';
// console.log(`${inp} in expect 0`);
// console.log(myAtoi(inp));
// exp = 0;
// console.log(exp === myAtoi(inp));
// console.log('*******');

// inp = '+1';
// console.log(`${inp} in expect 1`);
// console.log(myAtoi(inp));
// exp = 1;
// console.log(exp === myAtoi(inp));
// console.log('*******');

// inp = '-abc';
// console.log(`${inp} in expect 0`);
// console.log(myAtoi(inp));
// exp = 0;
// console.log(exp === myAtoi(inp));
// console.log('*******');

// inp = '               +BABA';
// console.log(`${inp} in expect 0`);
// console.log(myAtoi(inp));
// exp = 0;
// console.log(exp === myAtoi(inp));

// inp = '1';
// console.log(`${inp} in expect 1`);
// console.log(myAtoi(inp));
// exp = 1;
// console.log(exp === myAtoi(inp));
// console.log('*******');
