var longestPalindrome = function (s, longest) {
	longest = longest || s[0];
	origS = s;

	if (s.length === 0) console.log('length is 0');
	testForPalindrome(s);
	function testForPalindrome(s) {
		console.log('DDDDDDDDDDDDDDDDDDDDDD');
		console.log(s);
		if (s.length <= 1) return s.length;
		// check each string to see if it's a palindrome, make a substring and send it through this again

		let l = 0,
			r = s.length - 1,
			canContinue = true;

		while (canContinue) {
			console.log(l, r);
			console.log(`l is ${l} and letter is ${s[l]}`);
			console.log(`r is ${r} and letter is ${s[r]}`);
			if (r > l) {
				console.log('no overlap so can continue, checking the two characterss');
				if (s[l] === s[r]) {
					console.log('is same can continue');
					l++, r--;
				} else {
					canContinue = false;
					console.log('NO PALINDROME FOUND!');
				}
			} else {
				console.log(':) :) Palindrome is found ' + s);
				console.log('checking if its the longest yet');
				if (s.length > longest.length) longest = s;
				console.log(longest);
				canContinue = false;
				console.log('hereB');
			}
		}
		console.log('loop exitd');
		console.log(
			`here we would start again with the substring ${s.substring(
				0,
				s.length - 1
			)}`
		);
		let newStr = s.substring(0, s.length - 1);
		return testForPalindrome(newStr);
	}
	console.log(`orig s is ${origS}`);
	let subToSearch = origS.substring(1, origS.length);
	console.log('new substring is ' + subToSearch);
	if (subToSearch.length > longest.length) {
		console.log('running whole thing again on ' + subToSearch);
		return longestPalindrome(subToSearch, longest);
	} else return longest;
};

// let s = '';
let s = 'cbbd';
// let s= 'cbbd'
console.log(longestPalindrome(s));
// console.log(longestPalindrome(s));

console.log('return');
