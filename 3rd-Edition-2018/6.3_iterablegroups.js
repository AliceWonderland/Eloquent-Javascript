/*

Make the Group class from the previous exercise iterable. Refer back to the section about the iterator interface earlier in the chapter if you aren’t clear on the exact form of the interface anymore.


  If you used an array to represent the group’s members, don’t just return the iterator created by calling the Symbol.iterator method on the array. That would work, but it defeats the purpose of this exercise.

  It is okay if your iterator behaves strangely when the group is modified during iteration.

 */



class Group {
	constructor(){
		this.members=[];
	}

	add(item){
		if(!this.has(item)){
			this.members.push(item);
		}
	}

	delete(item){
		this.members=this.members.filter(v => v !== item);
	}

	has(item){
		return this.members.includes(item);
	}

	static from(arr) {
		// convert arr into 'group'
		let group=new Group();
		for(var item of arr){
			group.add(item);
		}
		return group;
	}

	[Symbol.iterator]() {
		return new GroupIterator(this);
	}
}

class GroupIterator {
	constructor(group){
		this.group=group;
		this.position=0;
	}

	next(){
		if(this.position >= this.group.members.length){
			return {done:true};
		}

		let result={value:this.group.members[this.position],done:false};

		this.position++;

		return result;
	}
}




for (let value of Group.from(["a", "b", "c"])) {
	console.log(value);
}
// → a
// → b
// → c
