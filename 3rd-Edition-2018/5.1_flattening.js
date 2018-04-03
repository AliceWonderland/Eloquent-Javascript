/*
FLATTENING

Use Array.reduce();

 */

function flatten(arr){
	return arr.reduce((acc,currVal) =>{
		return acc.concat(currVal);
	},[]);
}

let arrays = [[1, 2, 3], [4, 5], [6]];

console.log(flatten(arrays)); // → [1, 2, 3, 4, 5, 6]