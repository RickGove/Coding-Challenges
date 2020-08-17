// Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word (last word means the last appearing word if we loop from left to right) in the string.

// If the last word does not exist, return 0.

// Note: A word is defined as a maximal substring consisting of non-space characters only.

var lengthOfLastWord = function (s) {
	let i = s.length - 1,
		counter = 0;
	if (s.length === 0) return 0;
	if (s.length === 1 && s !== ' ') return 1;

	// take care of spaces at end

	while (s[i] === ' ') {
		i--;
		if (i === -1) return 0;
	}

	while (i > -1) {
		const lookedAt = s[i];
		if (lookedAt === ' ') return counter;
		counter++;
		i--;
	}

	return counter;
};

console.log(lengthOfLastWord('a '));
