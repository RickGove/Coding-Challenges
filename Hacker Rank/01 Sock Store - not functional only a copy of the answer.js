function HackerChall(keyboards, drives, b) {}

let sorted_arr = ar.slice().sort();

//
// [10,10,10,10,20,20,20,30,50]
//

let matches = 0;
for (var i = 0; i < sorted_arr.length - 1; i++) {
	if (sorted_arr[i + 1] === sorted_arr[i]) {
		sorted_arr.splice(i, 1);

		matches += 1;
	} else {
	}
}
return matches;

HackerChall();
