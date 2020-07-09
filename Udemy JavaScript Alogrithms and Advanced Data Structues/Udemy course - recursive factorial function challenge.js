function factorial(int) {
	// return the base to the power of the exponent recursively
	if (int === 1) {
		return 1;
	}
	if (int === 0) {
		return 1;
	}
	// set final value
	let final = int;
	// set how many times to run
	let runsLeft = int - 1;
	doMath(int, runsLeft);

	function doMath(int, runsLeft) {
		// if runsLeft = 0 exit
		if (runsLeft === 0) {
			return;
		}
		final = final * runsLeft;
		runsLeft--;
		doMath(int, runsLeft);
	}
	return final;
}

let int = 8;
console.log(factorial(int));
