var longestCommonPrefix = function (strs) {
	if (strs.length === 0) return '';
	if (strs.length === 1) return strs[0];

	let count = 0,
		currentLetterToCheck = 'init',
		pref = '',
		same = true;
	while (same === true) {
		for (let i = 0; i < strs.length; i++) {
			// check the first letter of each string
			if (strs[i][count] === undefined) return pref;
			if (strs[i] === '') return '';
			if (currentLetterToCheck === 'init') {
				// first word, so just set the letter to check
				currentLetterToCheck = strs[i][count];
			} else if (currentLetterToCheck !== strs[i][count]) {
				return pref;
			}
		}
		pref = pref + currentLetterToCheck;
		count++;
		currentLetterToCheck = 'init';
	}
};
let x = ['car', 'car', 'card'];
// let x=["dog","racecar","car"]
console.log(longestCommonPrefix(x)); // false;
