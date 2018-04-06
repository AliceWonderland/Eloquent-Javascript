/*
Dominant writing direction
Write a function that computes the dominant writing direction in a string of text. Remember that each script object has a direction property that can be "ltr" (left-to-right), "rtl" (right-to-left), or "ttb" (top-to-bottom).

The dominant direction is the direction of a majority of the characters which have a script associated with them. The characterScript and countBy functions defined earlier in the chapter are probably useful here.

 */

var SCRIPTS = require('./5.4_scripts');

function characterCount(script) {
	return script.ranges.reduce((count, [from, to]) => {
		return count + (to - from);
}, 0);
}

console.log('Character Count - Find Language with largest set of chars: ',SCRIPTS.reduce((a, b) => {
	return characterCount(a) < characterCount(b) ? b : a;
}).name); // → {name: "Han", …}


// creates groups and count for each group, takes an arr, returns arr
function groupBy(items, groupName){
	let groups=[];
	for(let item of items){
		let name=groupName(item);
		let exists=groups.findIndex(ele => ele.name===name);
		if(exists===-1){
			groups.push({name:name, count:1});
		}else{
			groups[exists].count++;
		}
	}
	return groups;
}

// console.log('GROUPBY',groupBy([1, 2, 3, 4, 5], n => n > 2)); // → [{name: false, count: 2}, {name: true, count: 3}]

// get name of group character is in
function characterScript(code) {
	for (let script of SCRIPTS) {
		if (
		  script.ranges.some(([from, to]) => {
			  return (code >= from) && (code < to);
	})
	){
			return script;
		}
	}
	return null;
}

function dominantDirection(text) {
	let languageGroups= groupBy(text, char => {
		let script = characterScript(char.codePointAt(0));
		return script ? script.direction:'none';
	})
	.filter(ele => ele.name !== 'none');

	return languageGroups.reduce((acc, currVal) => {
		return currVal.count > acc.count ? currVal:acc;
		}
	).name;

}

function test(str){
	str.split('').forEach(ele => console.log(ele.codePointAt(0)));
}

// test("مساء الخير");

console.log(dominantDirection("Hello!")); // → ltr
console.log(dominantDirection("Hey, مساء الخير")); // → rtl