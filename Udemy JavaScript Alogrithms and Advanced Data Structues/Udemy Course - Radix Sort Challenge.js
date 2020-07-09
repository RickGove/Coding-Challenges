// getDigit helper
function getDigit(number, n, fromLeft) {
	const location = fromLeft ? getDigitCount(number) + 1 - n : n;
	return Math.floor((number / Math.pow(10, location - 1)) % 10);
}

//digitCount helper
function getDigitCount(number) {
	return Math.max(Math.floor(Math.log10(Math.abs(number))), 0) + 1;
}

//mostDigits helper
function mostDigits(arr) {
	//find the largest number
	return Math.max(...arr);
}

function radixSort(arr) {
	let origArr = arr;

	let largest = mostDigits(arr);

	let maxDigits = getDigitCount(largest);

	let k = 1;

	while (k < maxDigits + 1) {
		let buckets = [[], [], [], [], [], [], [], [], [], []];

		arr.map((val, i) => {
			let lastDig = getDigit(val, k, false);

			buckets[lastDig].push(val);
		});

		// arr = buckets.concat();
		arr = [].concat(...buckets);

		k++;
	}
	return arr;
}

const arr = [15, 82, 9332, 549, 43, 34, 253];

const answer = radixSort(arr);
console.log(answer);
