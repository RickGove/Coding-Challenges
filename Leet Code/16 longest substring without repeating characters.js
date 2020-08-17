var lengthOfLongestSubstringBROKEN = function (s) {
	//  delete before submission
	let string = s;
	// /////////////////////////
	if (s.length <= 1) return s.length;
	let longest = 1;
	let canContinue = true,
		left = 0,
		right = 0;

	while (left < s.length) {
		let currentBase = s[left];
		let map = {},
			canContinue = true;
		map[left] = currentBase;
		right = left + 1;
		while (canContinue || right > s.length) {
			let currentEval = s[right];

			//move the righr cursor one at time to see if the new letter is a repeat
			if (!Object.values(map).includes(currentEval)) {
				// if not, add it to the map
				map[right] = currentEval;
			} else {
				// if it's a duplicate
				canContinue = false;
			}
			right++;
		}
		// check if the length of the new substring is longer than the current longest
		if (Object.values(map).length > longest)
			// update longest
			longest = Object.values(map).length;
		//move over and repeat
		left++;
	}
	return longest;
};

var lengthOfLongestSubstring = function (s) {
	if (s.length <= 1) return s.length;

	let Pleft = 0,
		longest = 1,
		currentLong,
		canContinue,
		currentBase,
		Pright = 1,
		subStr = [],
		currentEval;

	while (Pleft < s.length - longest) {
		currentLong = 1;

		canContinue = true;

		currentBase = s[Pleft];

		subStr = [currentBase];

		Pright = Pleft + 1;

		while (canContinue) {
			currentEval = s[Pright];

			if (!subStr.includes(currentEval)) {
				subStr.push(currentEval);
				currentLong++;
				if (Pright >= s.length - 1) canContinue = false;
				Pright++;
			} else {
				canContinue = false;
			}
		}
		longest = Math.max(currentLong, longest);
		Pleft++;
	}
	return longest;
};

// currentBase = s[left],
// currentEval,
// right = left;
// longest = longest;
// if (s.length - left < s.length - longest) return longest;
// while (canContinue && right < s.length) {
// currentEval = s[right];
// if (!Object.values(map).includes(currentEval)) {
// 	map[right] = currentEval;
// 	right++;
// } else {
// 	left++;
// 	canContinue = false;
// 	return analyze(s, left, longest);
// }
// return longest;
// }
// return longest;

let Input, Output;

/// test

Input = 'abcabcbb';
Output = 3;
// Explanation: The answer is "abc", with the length of 3.
// let x = lengthOfLongestSubstring(Input);
// console.log(x);
// console.log(Output === x);

// Example 2:

// Input = 'bbbbb';
// Output = 1;
// Explanation: The answer is "b", with the length of 1.
// console.log(Output === lengthOfLongestSubstring(Input));

// Example 3:

// Input = 'pwwkew';
// Output = 3;
// let x = lengthOfLongestSubstring(Input);
// console.log(x);
// console.log(Output === x);

Input = 'a';
Output = 1;
let x = lengthOfLongestSubstring(Input);
console.log(x);
console.log(Output === x);

// Explanation: The answer is "wke", with the length of 3.
//  Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
