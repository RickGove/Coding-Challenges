var removeDuplicates = function (nums) {
	console.log(nums);
	// cannot create any new arrays etc...
	// start at the end of the array with two pointers and see if the value before is the same, if so remove it;

	if (nums === [] || nums.length === 1) return nums;

	let l = nums.length - 1;
	let r = nums.length - 2;
	let dups = 0;

	while (l > 0) {
		console.log('**************');
		console.log(`L is ${l}, and the value in the array is ${nums[l]}`);
		while (r > -1) {
			console.log('*================*******');
			console.log(`comparing ${nums[l]} and ${nums[r]}`);
			console.log(`comparing position ${l} and ${r}`);
			if (nums[l] === nums[r]) {
				dups++;
				console.log(`${dups} DDDDDDuplicate found`);
				nums.splice(r, 1);
				return removeDuplicates(nums);
			}
			r--;
		}
		l--;
		r = l - 1;
	}
	return nums.length;
};

var removeDuplicatesB = function (nums) {
	if (nums === [] || nums.length === 1) return nums;
	let l = nums.length - 1;
	let r = nums.length - 2;
	while (l > 0) {
		while (r > -1) {
			if (nums[l] === nums[r]) {
				nums.splice(r, 1);
			}
			r--;
		}
		l--;
		r = l - 1;
	}
	return nums.length;
};

let n = [1, 1, 2];
console.log(removeDuplicatesB(n));
