/*
Recursion

Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean.

Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?
 */

function isEvenNoRecursion(num){
	if(num===0 || num%2===0){return true;}
	return false;
}

function isEven(num) {
	// 0=even
	// 1=odd
	// -n = -(-n)
	// n = n-2

	if(num===0){return true;}
	else if(num===1){return false;}
	else if(num<0){return isEven(-num);}
	else{return isEven(num-2);}
}

console.log(isEven(50)); // → true
console.log(isEven(75)); // → false
console.log(isEven(-1)); // → ??
console.log(isEven(1)); // → false