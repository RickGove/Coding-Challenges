function romanToInt(int, rom = '') {
	function binarySearch(arr, q, rom, le, ri) {
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
			return binarySearch(arr, q, rom, m, ri);
		}

		if (q < arr[m] && m - 1 > l) {
			return binarySearch(arr, q, rom, le, m);
		}
		let numToUse = '0';
		let lTemp = 500000000000000000000000000000,
			rTemp = 500000000000000000000000000000,
			mTemp = 500000000000000000000000000000;

		if (arr[l] - q < 0) {
			lTemp = Math.abs(arr[l] - q);
		}
		if (arr[m] - q < 0) {
			mTemp = Math.abs(arr[m] - q);
		}
		if (arr[r] - q < 0) {
			rTemp = Math.abs(arr[r] - q);
		}

		let tempToFind = Math.min(lTemp, mTemp, rTemp);
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
	let returnedVal = binarySearch(convArr[0], int);
	romanNumeral = romanNumeral + convArr[1][returnedVal];

	let newQ = int - convArr[0][returnedVal];
	if (newQ === 0) {
		return romanNumeral;
	} else {
		romanToInt(newQ, romanNumeral);
	}

	return romanNumeral;
}

const rom = 2328;
console.log(romanToInt(rom));
// let answer = romanToInt(rom);
// console.log(`The solution is ${answer}`);

// 6 closest to 5, -1 from it (closest)
// 8 closest to 5, -3 from it @ M (closest negative)
// 25 closest to 10,
//
