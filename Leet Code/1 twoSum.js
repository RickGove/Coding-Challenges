function twoSum(nums, target) {
	let right = nums.length - 1;
	let left = 0;

	// as long as left > nums.lenth - 2
	while (left < nums.length) {
		if (nums[left] + nums[right] === target) {
			return [right, left];
		}
		if (right > left + 1) {
			right--;
		} else {
			left++;
			right = nums.length - 1;
		}
	}
}

var twoSumBest = function (nums, target) {
	let numsMap = {};
	for (let index = 0; index < nums.length; index++) {
		const current = nums[index];
		console.log(numsMap);
		console.log(index, current);
		console.log([numsMap[target - current], index]);
		if (numsMap[target - current] !== undefined) {
			return [numsMap[target - current], index];
		}
		numsMap[current] = index;
		console.log(numsMap);
	}
	return [];
};

let nums = [2, 8, 7, 10],
	target = 9;
let answer = twoSumBest(nums, target);
console.log(answer);
