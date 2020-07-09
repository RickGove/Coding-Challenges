function sortArrays(arr1, arr2) {
	// good luck. (supply any arguments you deem necessary.)

	let i = 0,
		j = 0,
		newArr = [],
		lastChanged = 0;

	if (arr1.length === 0) return arr2;
	if (arr2.length === 0) return arr1;

	while (i < arr1.length && j < arr2.length) {
		if (arr1[i] < arr2[j]) {
			newArr.push(arr1[i]);
			i++;
		} else {
			newArr.push(arr2[j]);
			j++;
			// shift arr2[j] and add it to new array
		}
	}
	while (i < arr1.length) {
		newArr.push(arr1[i]);
		i++;
	}
	//when finished pop completed arr to end of newArray
	while (j < arr2.length) {
		newArr.push(arr2[j]);
		j++;
	}
	return newArr;
}

function mergeSort(arr) {
	// base case = <=1
	if (arr.length <= 1) return arr;

	let mid = Math.floor(arr.length / 2);
	// break into 2 halves
	let fH = mergeSort(arr.slice(0, mid));
	let sH = mergeSort(arr.slice(mid));
	// call merge sort again
	return sortArrays(fH, sH);

	// then merge using the sortArrays fn
}

let arr1 = [0, 15, 16, 25];
let arr2 = [1, 33, 66, 99];
// [1, 10, 50], [2, 14, 99, 100]

// let answer = sortArrays(arr1, arr2);
// console.log(answer);

unsorted = [2, 50, 6, 999, 84, 65, 3];
let answer2 = mergeSort(unsorted);
console.log(answer2);
