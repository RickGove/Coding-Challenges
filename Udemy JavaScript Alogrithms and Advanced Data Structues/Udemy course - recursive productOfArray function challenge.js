function productOfArray(arr) {
	// return the base to the power of the exponent recursively
	if (arr.length === 0) {
		return 0;
	}
	if (arr.length === 1) {
		return arr[0];
	}
	// set final value
	let final = 0;
	let newArr = arr;
	// set how many times to run

	doMath(final, newArr);

	function doMath(int, newArr) {
		// if runsLeft = 0 exit

		if (newArr.length === 0) {
			return;
		}
		final = final + newArr[newArr.length - 1];
		newArr.pop();
		doMath(final, newArr);
	}
	return final;
}

let arr = [5];
console.log(productOfArray(arr));
