export default class Grid {

	//build an empty array with length = width * height
	constructor(width, height) {
		this.width = width;
		this.height = height;

		this.array = Array.apply(null, { length: (this.width * this.height) });
		this.array = this.array.map(current => " ");
	}

	//	returns the index of a random empty space from this.array. If none is available, return false
	randomEmptySpace() {
		// return false if no empty space is available
		if (this.array.indexOf(" ") === -1 ? true : false) {
			return false;
		}

		let index = Math.floor(Math.random() * this.array.length);

		//	if the space was not empty run the function again else return
		if (this.array[index] === " ") {
			return index;
		} else {
			this.randomEmptySpace();
		}
	}

	replaceEmptySpaceWithElement(number, type) {
		while (number > 0) {
			this.array[this.randomEmptySpace()] = type;
			number--;
		}
	}

	//	get a random number of elements based on their type(ex: herbivores are twice as many as carnivores)
	random(type) {
		var helper;
		switch (type) {
			case "o":
				helper = 2;
				break;
			case "x":
				helper = 4;
				break;
			default:
				alert("FUNCTION RANDOM");
		}
		return Math.floor(Math.random() * this.array.length / helper + 1);
	}

	// populate the grid with random elements
	populate() {
		let herbivoreNumber = this.random("o");
		let carnivoreNumber = this.random("x");

		this.replaceEmptySpaceWithElement(herbivoreNumber, "o")
		this.replaceEmptySpaceWithElement(carnivoreNumber, "x")
	}
}
