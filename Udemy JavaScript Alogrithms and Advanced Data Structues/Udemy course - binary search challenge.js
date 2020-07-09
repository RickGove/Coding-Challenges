function binarySearch(arr, q, le, ri) {
	// set left right middle
	let l = le || 0,
		r = ri || arr.length - 1,
		m = Math.floor((r + l) / 2);
	console.log(l, m, r);

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

	return -1;
}

function binarySearchB(arr, k, s, e) {
	s = s || 0;
	e = e || arr.length;
	m = s + Math.floor((e - s) / 2);

	console.log(s, m, e);
	if (arr[m] === k) return m;

	if (k > arr[m]) {
		return m + 1 < e ? binarySearch(arr, k, m + 1, e) : -1;
	} else if (m - 1 >= s) {
		return binarySearch(arr, k, s, m - 1);
	}

	return -1;
}

let arr = [1, 2, 3, 55, 66, 88, 100, 652, 999, 5000, 66666, 9898989],
	q = 1;

console.log(binarySearch(arr, q));
