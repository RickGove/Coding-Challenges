var strStr = function (haystack, needle) {
	if (!needle) {
		return 0;
	}
	let l = 0,
		r = l + 1;
	while (l < haystack.length) {
		if (haystack[l] === needle[0]) {
			if (haystack.substring(l, l + needle.length) == needle) {
				return l;
			}
		}
		l++;
		r = l + 1;
	}
	return -1;
};

var strStrOld = function (haystack, needle) {
	if (needle.length === 0) {
		return 0;
	}
	let l = 0,
		r = l + 1;
	while (l < haystack.length) {
		// console.log(`******Left moved`);
		// console.log(l);
		// console.log(haystack[l]);
		// console.log(
		// `checking needle at 0: ${needle[0]} and haystack[l]: ${haystack[l]}`
		// );
		if (haystack[l] === needle[0]) {
			// console.log('!!!!!!!!!match');
			r = l + 1;
			let needlePoint = 1;

			while (needlePoint < needle.length) {
				if (needle[needlePoint] === haystack[r]) {
					// console.log(
					// `needle[needlePoint] === haystack[r]; ${needle[needlePoint]} === ${haystack[r]}`
					// );
					r++;
					needlePoint++;
				} else {
					// console.log(
					// `! needle[needlePoint] != haystack[r]; ${needle[needlePoint]} != ${haystack[r]}`
					// );
					needlePoint = needle.length + 10;
				}
			}
			// console.log('Check if the whole string was found...');
			// console.log(l, r, needlePoint, needle.length);
			// !!!!!!!!!!!!!!!!!!!!!! add matches var
			if (needlePoint === needle.length) return l;
		} // end of  the while r loop
		l++;
		r = l + 1;
	}
	return -1;
};

let h =
		'apapapapapapapapapapapapapapapapapapappapappappappapappapapappapapredapappapaapapapapapa',
	n = 'red';

let a = performance.now();
console.log(strStrOld(h, n));
let b = performance.now();
console.log(`Time: ${b - a}`);

a = performance.now();
console.log(strStr(h, n));
b = performance.now();
console.log(`Time: ${b - a}`);
