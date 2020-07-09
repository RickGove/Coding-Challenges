var romanToInt = function (s) {
	// convert a roman numeral to an integer
	// Symbol       Value
	// I             1
	// V             5
	// X             10
	// L             50
	// C             100
	// D             500
	// M             1000

	// I can be placed before V (5) and X (10) to make 4 and 9.
	// X can be placed before L (50) and C (100) to make 40 and 90.
	// C can be placed before D (500) and M (1000) to make 400 and 900.

	let conversion = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000,
		IV: 4,
		IX: 9,
		XL: 40,
		XC: 90,
		CD: 400,
		CM: 900,
	};

	// pseudo code
	let i = 0;
	total = 0;
	while (i < s.length) {
		// run through the string with a while loop (i), if it's an I,X,C then check if the next char is V,L, or D.
		// if so then the value is in the object with both chars
		// if not then the value is in the obj with one char
		// also i must increase by 2, not one
		// console.log(s[i] + s[i + 1]);
		if (conversion[s[i] + s[i + 1]] === undefined) {
			total += conversion[s[i]];
			i++;
		} else {
			total += conversion[s[i] + s[i + 1]];
			i += 2;
		}
	}
	return total;
};
// let x = 'III';
let x = 'MCMXCIV';
console.log(romanToInt(x)); // false;
