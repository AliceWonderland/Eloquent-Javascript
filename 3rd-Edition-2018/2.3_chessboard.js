// Chess board
// Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chess board.
//
//   Passing this string to console.log should show something like this:
//
//  # # # #
// # # # #
//  # # # #
// # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.

function board(w,h){
	// create checkers
	// loop thru height
	let odd='';
	let even='';
	
	for(let i=1; i<=w; i++){
		if(i%2===0){
			odd+='#';
			even+=' ';
		}else{
			odd+=' ';
			even+='#';
		}
	}

	for(let i=1; i<=h; i++){
		if(i%2===0){
			console.log(even);
		}else{
			console.log(odd);
		}
	}

}
let width=8,height=8;
board(width,height);

// solution
// let size = 8;
// let board = "";
//
// for (let y = 0; y < size; y++) {
// 	for (let x = 0; x < size; x++) {
// 		if ((x + y) % 2 == 0) {
// 			board += " ";
// 		} else {
// 			board += "#";
// 		}
// 	}
// 	board += "\n";
// }
//
// console.log(board);