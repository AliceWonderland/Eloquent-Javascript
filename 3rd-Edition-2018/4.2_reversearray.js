/*

Reversing an array

Arrays have a reverse method which changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method.

 */

function reverseArray(arr){
	let result=[];
	for(let i=arr.length-1; i>=0; i--){
		result.push(arr[i]);
	}
	return result;
}

function reverseArrayInPlace(arr){
	let beg=0, end=arr.length-1;
	while(beg<end){
		arr.splice(beg,0,arr.pop());
		beg++;
	}
	return arr;
}

function reverseArrayInPlace2(arr){
	// swap elements ends, 2nd from ends, etc.
	let beg=0, end=arr.length-1;
	while(end-beg > 2){
		let saved=arr[beg];
		arr[beg]=arr[end];
		arr[end]=saved;
		beg++;
		end--;
	}
	return arr;
}


console.log(reverseArray(["A", "B", "C"])); // → ["C", "B", "A"];

let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue); // → [5, 4, 3, 2, 1]