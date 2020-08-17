var longestPalindrome = function (s, longest) {
	if (s.length === 1) {
		return s;
	} else {
		return find(s, longest);
	}
	function find(s, longest) {
		longest = longest || '';
		origS = s;
		if (s === '') return '';
		if (s.length < longest.length && longest) return longest;
		testForPalindrome(s);
		function testForPalindrome(s) {
			if (s.length < longest.length && longest) return longest;

			if (s.length <= 1) return s.length;
			// check each string to see if it's a palindrome, make a substring and send it through this again

			let l = 0,
				r = s.length - 1,
				canContinue = true;

			while (canContinue) {
				if (r > l) {
					if (s[l] === s[r]) {
						l++, r--;
					} else {
						canContinue = false;
					}
				} else {
					if (s.length > longest.length) longest = s;
					if (longest.length === origS.length) return longest;
					canContinue = false;
				}
			}
			let newStr = s.substring(0, s.length - 1);
			return testForPalindrome(newStr);
		}
		let subToSearch = origS.substring(1, origS.length);

		if (subToSearch.length > longest.length) {
			return longestPalindrome(subToSearch, longest);
		} else return longest;
	}
};

// let s = '';
let s = 'abasdaaadss';
// let s= 'cbbd'
console.log(longestPalindrome(s));
// console.log(longestPalindrome(s));

console.log('return');
