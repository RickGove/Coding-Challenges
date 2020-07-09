function HackerChall(keyboards, drives, b) {
	let spent = 0;
	for (let i = 0; i < keyboards.length; i++) {
		for (let ii = 0; ii < drives.length; ii++) {
			let option = keyboards[i] + drives[ii];
			if (option <= b && option > spent) {
				spent = option;
			}
		}
	}
	if (spent != 0) {
		return spent;
	} else {
		return -1;
	}
}

let k = [3, 1];
let d = [5, 2, 8];
let b = 10;
HackerChall(k, d, b);
