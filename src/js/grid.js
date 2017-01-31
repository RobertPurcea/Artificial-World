import print from './print.js';

export default class Grid {

	//build an array of width * height elements. Assign " " to every element
	constructor(width, height) {
		this.width = width;
		this.height = height;

		this.array = Array.apply(null, { length: (this.width * this.height) });
		this.array = this.array.map(current => " ");
	}

	//	return the index of an empty random element from grid.array
	randomEmptySpace() {
		var index = Math.floor(Math.random() * this.array.length);
		
		while (this.array[index] !== " ") {
			index = Math.floor(Math.random() * this.array.length);
		}
		return index;
	}

	//	random how many elements of each type there will be on the grid(some elements have a higher chance of being more numerous than others)
	random(type) {
		var divideArrayLength;
		switch (type) {
			case "o":
				divideArrayLength = 15;
				break;
			case "x":
				divideArrayLength = 25;
				break;
			case "@":
				divideArrayLength = 7;
				break;
			case "|":
				divideArrayLength = 4;
				break;
			default:
				alert("FUNCTION RANDOM");
		}
		return Math.floor(Math.random() * this.array.length / divideArrayLength + 1);
	}

	//	place elements on randomly picked empty spaces
	replaceEmptySpaceWithElement(number, type) {
		while (number > 0) {
			this.array[this.randomEmptySpace()] = type;
			number--;
		}
	}

	// populate the grid with random elements
	populate() {
		let herbivoreNumber = this.random("o");
		let carnivoreNumber = this.random("x");
		let stoneNumber = this.random("@");
		let grassNumber = this.random("|");

		this.replaceEmptySpaceWithElement(herbivoreNumber, "o");
		this.replaceEmptySpaceWithElement(carnivoreNumber, "x");
		this.replaceEmptySpaceWithElement(stoneNumber, "@");
		this.replaceEmptySpaceWithElement(grassNumber, "|");
	}

	// print the current state of the grid
	output() {
		print(this);
	}
}
