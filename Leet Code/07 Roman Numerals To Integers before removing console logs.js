function romanToInt(int, rom = '') {
	function binarySearch(arr, q, le, ri) {
		// set left right middle
		let l = le || 0,
			r = ri || arr.length - 1,
			m = Math.floor((r + l) / 2);

		// check if the middle is q
		if (arr[m] === q) {
			return m;
		}

		if (arr[l] === q) {
			return l;
		}

		if (arr[r] === q) {
			return r;
		}

		if (q > arr[m] && m + 1 < r) {
			return binarySearch(arr, q, m, ri);
		}

		if (q < arr[m] && m - 1 > l) {
			return binarySearch(arr, q, le, m);
		}
		console.log(arr[l], arr[m], arr[r]);
		let numToUse = '0';
		let lTemp = 500000000000000000000000000000,
			rTemp = 500000000000000000000000000000,
			mTemp = 500000000000000000000000000000;

		console.log(`${arr[l]}, ${arr[m]}, ${arr[r]}`);

		if (arr[l] - q < 0) {
			lTemp = Math.abs(arr[l] - q);
			console.log(`L is ${lTemp} away and it's ${arr[l]}`);
		}
		if (arr[m] - q < 0) {
			mTemp = Math.abs(arr[m] - q);
			console.log(`m is ${mTemp} away and it's ${arr[m]}`);
		}
		if (arr[r] - q < 0) {
			rTemp = Math.abs(arr[r] - q);
			console.log(`r is ${rTemp} away  and it's ${arr[r]}`);
		}

		console.log(
			`whatever is closest to Q with a negative value is the value you should use`
		);

		let tempToFind = Math.min(lTemp, mTemp, rTemp);
		// console.log(tempToFind);
		if (lTemp === tempToFind) {
			return l;
		}
		if (rTemp === tempToFind) {
			return r;
		}
		if (mTemp === tempToFind) {
			return m;
		}
		return `pending`;
	}

	let convArr = [
			[1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000],
			['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
		],
		romanNumeral = rom;

	console.log(`Binary search for ${int} in the array`);
	console.log(binarySearch(convArr[0], int));
	let returnedVal = binarySearch(convArr[0], int);
	console.log(`return ${returnedVal}`);
	console.log(convArr[1][returnedVal]);
	romanNumeral = romanNumeral + convArr[1][returnedVal];
	console.log(romanNumeral);
	let newQ = int - convArr[0][returnedVal];
	console.log(
		`finding new integer to search as ${int} - ${convArr[0][returnedVal]}`
	);
	console.log(
		`Will now search for ${newQ}, if zero will return ${romanNumeral}`
	);
	if (newQ > 0) {
		romanToInt(newQ);
	} else {
		return romanNumeral;
	}
}

const rom = 2328;
let answer = romanToInt(rom);

// 6 closest to 5, -1 from it (closest)
// 8 closest to 5, -3 from it @ M (closest negative)
// 25 closest to 10,
//

console.log(answer);
