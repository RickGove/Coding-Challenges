function power(base, exponent) {
	// return the base to the power of the exponent recursively
	if (exponent === 0) {
		return 1;
	}
	if (exponent === 1) {
		return base;
	}
	// set final value
	let final = base;
	// set how many times to run
	let runsLeft = exponent - 1;
	doMath(base, runsLeft);

	function doMath(base, runsLeft) {
		// if runsLeft = 0 exit
		if (runsLeft === 0) {
			return;
		}
		final = final * base;
		runsLeft--;
		doMath(base, runsLeft);
	}
	return final;
}
console.log('expect 1 4 16');

let base = 2,
	exponent = 0;
// let answer = power(base, exponent);
// console.log(answer);

(base = 2), (exponent = 2);
// answer = power(base, exponent);
// console.log(answer);

(base = 2), (exponent = 4);
// answer = power(base, exponent);
// console.log(answer);

(base = 12), (exponent = 12);
answer = power(base, exponent);
console.log(answer === 8916100448256);
console.log(answer);
