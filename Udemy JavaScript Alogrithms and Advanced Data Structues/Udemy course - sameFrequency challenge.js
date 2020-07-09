function sameFrequency(intA, intB) {
	console.log('sameFrequncy');
	let intAStr = intA.toString();
	let intBStr = intB.toString();

	let a = {};
	let b = {};

	for (let val of intAStr) {
		a[val] = (a[val] || 0) + 1; // if it already exist || else init to 1
	}
	for (let val of intBStr) {
		b[val] = (b[val] || 0) + 1; // if it already exist || else init to 1
	}
	if (a === b) {
		return true;
	}

	for (let key in a) {
		// check if 2nd array doens't have the value
		if (!(key in b)) {
			// return false
			return false;
		}
		// if it's there, make sure it's at the same frequncy
		if (b[key] !== a[key]) {
			return false;
		}
	}

	// all criteria met so return true
	return true;
}

// let answer = sameFrequency(182, 281); //true
let answer2 = sameFrequency(34, 14); //false
// console.log(answer);
console.log(answer2);
