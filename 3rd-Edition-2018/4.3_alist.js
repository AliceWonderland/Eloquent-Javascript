/*

LINKED LIST
Convert an array into a linked list
Convert a linked list back into an array using a helper
Prepend an item to a linked list
Return the item at the nth place in linked list
 */

// convert arr to linked list
function arrayToList(arr){
	// loop backwards creating the last node first
	let list=null;
	for(let i=arr.length-1; i>=0; i--){
		list={value: arr[i], rest: list};
	}
	return list;
}

// convert linked list to arr
function listToArray(list){
	let arr=[];
	while(list.rest){
		arr.push(list.value);
		list=list.rest;
	}
	arr.push(list.value);
	return arr;
}

// add item to front of linked list
function prepend(value,list){
	return {value: value, list};
}

// return item from linked list at index
function nth(list,index){
	for(let i=0; i<=index; i++){
		if(!list){
			return undefined;
		}

		if(i===index){
			return list.value;
		}

		list=list.rest;
	}

}

function nthRecursive(list, index){
	if(!list){
		return undefined;
	}else if(index===0){
		return list.value;
	}else{
		return nth(list.rest,index-1);
	}
}


console.log(arrayToList([10, 20])); // → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30]))); // → [10, 20, 30]
console.log(prepend(10, prepend(20, null))); // → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1)); // → 20