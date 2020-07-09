/* 
Two cats one mouse, various positions on line
Given starting positions
Mouse doesn't move
if cats both arrive at the same time, mouse moves

multiple queries = q    

Cat positions A and B   (x y)
Mouse pos: C (z)

If cat A catches : print Cat A
If cat B catches : print Cat B

If arrive at same time : print Mouse C



*/
function HackerChall(x, y, z) {
	// Use Math.abs(DISTANCE) to get the numbers all as positive
	//if not the same (the mouse wins), whichever is smaller will win

	let aDist = Math.abs(x - z);
	let bDist = Math.abs(y - z);

	if (aDist === bDist) {
		return 'Mouse C';
	} else if (aDist < bDist) {
		return 'Cat A';
	} else {
		return 'Cat B';
	}
}

let x = 1;
let y = 2;
let z = 3;
console.log(HackerChall(x, y, z));

x = 1;
y = 3;
z = 2;
console.log(HackerChall(x, y, z));
