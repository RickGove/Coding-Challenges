var removeDuplicates = function (nums, le, count = 0) {
	console.log(`==============================`);
	console.log(`==============================`);
	console.log(`==============================`);

	console.log(`====== new call ${count} ========`);
	console.log(nums, le);
	// cannot create any new arrays etc...
	// start at the end of the array with two pointers and see if the value before is the same, if so remove it;

	if (nums === [] || nums.length === 1) return nums;

	let l = le || nums.length - 1;
	let r = le - 1 || nums.length - 2;

	let dups = 0;

	while (l > 0) {
		// console.log('NNNNNNNNNNNNNNNNNNNNNNN');
		// console.log(`L is ${l}, and the value in the array is ${nums[l]}`);
		while (r > -1) {
			// console.log('MMMMMMMMMMMMMMMMMMMMMMMMM');
			console.log(`comparing ${nums[l]} and ${nums[r]}`);
			console.log(`comparing position ${l} and ${r}`);
			if (nums[l] === nums[r]) {
				console.log(
					`DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDuplicate found`
				);

				console.log('checking for more duplicates');
				dups++;
				let x = l - 1;
				k = nums[r];
				let done = false;
				while (done === false || x > -1) {
					k = nums[x];

					if (k === nums[r]) {
						dups++;
						console.log(`found another duplicate, that makes ${dups}`);
					} else {
						done = true;
					}
					// console.log(done);
					x--;
				}
				console.log(nums);
				// nums.splice(r, 1); // original way
				// console.log(dups);
				console.log(
					`------------------------------SLICING FROM ${l - dups} until ${dups}`
				);
				nums.splice(l - dups, dups);

				console.log(nums);

				// return nums;
				console.log(nums);
				let newLeft = r - 1 - dups;
				console.log(`Recursive call with ${newLeft} as the starting position`);
				return removeDuplicates(nums, newLeft, count + 1);
			}
			r--;
		}
		l--;
		r = l - 1;
	}
	console.log(`****final nums:  ${nums}`);
	return nums.length;
};

let n = [1, 1, 2, 2, 5, 5, 5, 5, 5, 6, 7];

const t0 = performance.now();
console.log(n);
console.log(removeDuplicates(n));
const t1 = performance.now();
console.log('Fn took ' + (t1 - t0) + ' milliseconds.');
