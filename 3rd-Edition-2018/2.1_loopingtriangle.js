// Looping a Triangle
// Write a loop that makes seven calls to console.log to output the following triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######

function triangle(n){
	let str='';
	for(var i=0; i<n; i++){
		str += '#';
		console.log(str);
	}
}
var n=7;
triangle(n);