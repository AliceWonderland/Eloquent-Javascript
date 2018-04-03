/*

Deep Comparison

Write a function deepEqual that takes two values and returns true only if they are the same value or are objects with the same properties, where the values of the properties are equal when compared with a recursive call to deepEqual.

 */

function deepEqual(a,b){
	if(a===b){
		return true;
	}

	if(a===null || b===null || typeof a !== 'object' || typeof b !== 'object'){
		return false;
	}

	let keysA=Object.keys(a), keysB=Object.keys(b);

	if(keysA.length !== keysB.length){
		return false;
	}

	for(let key of keysA){
		// if key does not exist
		if(!b[key]){return false;}
		// or val is an object
		if(!deepEqual(a[key],b[key])){
			return false;
		}
	}
	
	return true;
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj)); // → true
console.log(deepEqual(obj, {here: 1, object: 2})); // → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2})); // → true