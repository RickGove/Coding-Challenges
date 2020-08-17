// Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You may assume no duplicates in the array.

// Example 1:

// Input: [1,3,5,6], 5
// Output: 2

// Example 2:

// Input: [1,3,5,6], 2
// Output: 1

// example 3:
// Input: [1,3,5,6], 7
// Output: 4

// Example 4:

// Input: [1,3,5,6], 0
// Output: 0

var searchInsert = function (nums, target) {
	let pointer = 0;
	if (nums.length === 1) {
		if (target > nums[0]) {
			return 1;
		} else {
			return 0;
		}
	}
	while (pointer < nums.length) {
		if (nums[pointer] === target || nums[pointer] > target) {
			return pointer;
		}
		pointer++;
	}
	return nums.length;
};

// let n = [1, 3, 5, 6],
// t = 5;
let n = [1, 3],
	t = 2;
// let n = [1],
// t = 0;

console.log(searchInsert(n, t));
