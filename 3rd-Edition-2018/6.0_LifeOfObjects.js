function Rabbit(type, line){
	this.type=type;
	this.line=line;

	this.speak=function (line){
		console.log(`The ${this.type} rabbit says '${this.line}'`);
	}
}
let niceRabbit = new Rabbit('niceRabbit', 'Poo!');
niceRabbit.speak();