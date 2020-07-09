function HackerChall(n, s) {
	// A valley is a sequence of consecutive steps below sea level,
	// starting with a step down from sea level and
	// ending with a step up to sea level.

	// console.log(n, ar);
	let vals = 0;
	let elevation = 0;

	let path = s.split('');
	console.log(path);

	// condtions for a valley
	// two steps down
	// must return to sea level

	for (let i = 0; i < n; i++) {
		if (path[i] === 'D') {
			elevation--;
		} else {
			if (elevation === -1) {
				vals++;
			}
			elevation++;
		}
		console.log(elevation);
	}
	console.log(`return: ${vals}`);
	return vals;
}

let n = 1000;
let ar =
	'UDDDUUDUUDDDDUUDDUDDDUUDDDUUDDUUDUDUDDDDUUDDDDDDUUUDUDUDUUDUUUUUUUUUUUDUUUUUDUDUDUDDDDUUDUUUDDDDDUUDUUDUUUUUUDDDDDUUDUUDDDUDUUUUUUUDUUUUDDUDDDDDUUUDDUUUUUUUDDDDUUUDUUUDUUUUUUUDDUUUDDDDUUDUDDDUDDDDUUDDDDDUUDUDDUDUUUDDUDUDDDUUDDUDUUUUUDDUUUDUUUUUUDDUDUUDDUUDDDUDUDDDDUDUDDUUUDDDUDDUDDUUUUDDDUDUDDDUUUUUDUUUDDUDUUDUUUDDUDUUUDUDUDUUUUDDUDDDUUUDDDUDUDDDDDDDUUUUDDUUDUUUDUDUDUDDUUUDDUDUDDUDDUDDDUDUDUDDUUDDDUUDUUDUDDDDDDDDUUDDUUDDUUUUUUDUUUDDUUDUDDUUDDDUDDUUUUUDUDUDDDUUUDDUUDDDUDUUDUUDDDUDDUUDUUUDDUUUUDUUUDDDDUDUUUDDUDDDDDDDUDDDUUDUDDUDUDUUDUDDUUDUUDUUDUUDUDDDUUDDUUUUDUUDUUDUUUUDUUUDDUUUDDUDUDDUDUDUUUDUDDDUUUUDUUDUUUDDUUDUDUDDDDUDUDDDDDUUUDUUUDUDDUUUDUUUUDDUUUDDDUDUDUUDUUUUUDUUDDDUUDDUDDDDUUUDUUUUUDDUUUUUDDUUDUDDUDUDUUUUDUUDUUUDUUDDDUUUUDDDUDUDUUDUDUUDDDUDDUUDDUDUDUUDUDUDDDUDDDUDDDDUDUUUUUDUDUDUUDUUDUDDUDUUDDUUDUDUDDDDUDDUDDUDDUUUUDUDDUUUUDUUDUDDUDDDUDUUUDUDUDUDDDUDDUUUUDDUDUDUDDUDDDUDDDUUUDUDUDUUDUUUUUDUDDDDUUDDDDUDUDDUDDDDUUUDUDUUDUDUUUDDUDUDDDDDUUDUDUUDDDDUUDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD';
HackerChall(n, ar);

/* 
let arSplit = s.split('');
  
  
  
      let upDown = [0];
      let curPos = 0;
      let vals = 0;
  
  for (var i = 0; i < arSplit.length -1; i++) {
          if (arSplit[i] === 'D' ) 
      { // track position from sealevel
              curPos ++;
      }  else {
      curPos --;}
         if (curPos === 0 && arSplit[i] === 'D'&& arSplit[i+1] === 'D'){
        vals ++};
  
  }; // ends the for
                 
// A valley is a sequence of consecutive steps below sea level, 
  // starting with a step down from sea level and ending 
  // with a step up to sea level.
 
  
  return vals;


*/
