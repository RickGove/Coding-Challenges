function swapArr(arr, a, b) {
	let temp = arr[a];
	arr[a] = arr[b];
	arr[b] = temp;
}

function pivotHelper(arr, start = 0, end = arr.length + 1) {
	console.log(`pivotHelper ran with ${arr}, start at${start}, end at ${end}`);

	let pivot = arr[start]; //28
	let swapIdx = start;

	for (let i = start + 1; i < arr.length; i++) {
		if (pivot > arr[i]) {
			swapIdx++;
			swapArr(arr, swapIdx, i);
		}
	}
	swapArr(arr, start, swapIdx);
	console.log(
		`pivotHelper finsihed wiht new of ${arr}, swap Indexof ${swapIdx}`
	);
	return swapIdx;
}

function quickSort(arr, start, end = arr.length - 1) {
	console.log('orig array');
	console.log(arr);

	let mid = pivotHelper(arr, start, end);

	console.log('mid from pivothelper');
	console.log(mid);

	let leftArr = arr.slice(0, mid);
	let leftStart = 0;
	let leftEnd = mid - 1;
	console.log('leftArr');
	console.log(leftArr);

	let rightArr = arr.slice(mid + 1);
	let rightStart = 0;
	let rightEnd = mid - 1;
	console.log('rightArr');
	console.log(rightArr);

	console.log('arr now');
	console.log(arr);

	console.log(
		`if left and right are lengt of < 1 return final arr above ${
			leftArr.length <= 1 && rightArr.length <= 1
		}`
	);
	if (leftArr.length <= 1 && rightArr.length <= 1) return arr;

	console.log(
		`if left length > 1 run qucik sort on that array again with ${leftStart} as start, and ${leftEnd} as end: ${
			leftArr.length > 1
		}`
	);
	if (leftArr.length > 1) {
		quickSort(leftArr, leftStart, leftEnd);
		// console.log(`will now change arr index of ${change} with array zero place`);
		// swapArr(arr, change, arr[0]);
	}

	console.log(
		`if right length > 1 run quick sort  on that array again with ${rightStart} as start, and ${rightEnd} as end: ${
			rightArr.length > 1
		}`
	);
	if (rightArr.length > 1) {
		qucikSort(rightArr, rightStart, rightEnd);
		console.log(`will now change arr index of ${change} with array mid place`);
		swapArr(arr, change, arr[mid]);
	}
}

let arr = [28, 41, 1, 11];
let answer = quickSort(arr); // 2
console.log(answer);
