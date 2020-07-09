function reverse(x) {
	// return 0 if you overflow
	let max = 0x7fffffff,
		neg = false,
		xString = '',
		revString = '',
		revInt = 0;

	if (x > max || x === 0) {
		return 0;
	}
	// account for negatives
	if (x < 0) {
		neg = true;
	}

	// reverse the order of an integer
	// turn x into a string
	xString = x.toString();
	// reverse loop through x

	for (let i = xString.length - 1; i > -1; i--) {
		// place the last of x at the last of revString
		revString = revString + xString[i];
	}

	// convert to integer
	revInt = parseInt(revString);

	// account for max;
	// account for negatives

	if (revInt > max) {
		return 0;
	}

	if (neg === true) {
		revInt = -revInt;
	}

	// return an integer
	return revInt;

	// zero at start not shown
}

const x = 1534236469;
const answer = reverse(x);
console.log(answer);
