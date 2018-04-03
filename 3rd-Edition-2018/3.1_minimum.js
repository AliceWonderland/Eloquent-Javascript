// Minimum
// Built Math.min - compares arguments returns the lowest one

function min(a,b) {
	if(a-b < a){return a}
	return b;
}

console.log(min(0, 10)); // → 0
console.log(min(0, -10)); // → -10