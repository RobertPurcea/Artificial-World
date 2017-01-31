export default class gridElement {

	// Add (x,y) coordinates to each element
	constructor(current, index, grid) {
		this.type = current;
		this.x = index % grid.width;
		this.y = parseInt(index / grid.width);
		this.grid = grid;
		this.alreadyMoved = false;
	}

	// returns an array that contains information about each square immediately around this one
	look() {
		// store all information
		let elementsAround = [];

		// retrieve information from a square and push it to elementsAround
		function lookInOneSide(x, y) {
			//	make sure the current (x,y) coordinates are not out of grid
			if (x >= 0 && y >= 0 && x < this.grid.width && y < this.grid.height) {
				// transform x,y position in grid array index
				const index = x + this.grid.width * y;
				elementsAround.push({
					type: this.grid.array[index].type,
					index: index
				});
			}
		}
		lookInOneSide = lookInOneSide.bind(this);

		// retrieve and push data for all squares immediately around
		lookInOneSide(this.x, this.y + 1);
		lookInOneSide(this.x, this.y - 1);
		lookInOneSide(this.x + 1, this.y - 1);
		lookInOneSide(this.x + 1, this.y);
		lookInOneSide(this.x + 1, this.y + 1);
		lookInOneSide(this.x - 1, this.y - 1);
		lookInOneSide(this.x - 1, this.y);
		lookInOneSide(this.x - 1, this.y + 1);

		//console.log(elementsAround);
		return elementsAround;
	}

	move() {
		// filter the array for only empty spaces. Return if no spaces are found
		let emptyElementsAround = this.look().filter(curr => curr.type === " " ? true : false);
		if (emptyElementsAround.length === 0 || this.type === " ") {
			return;
		}
				
		//	random an empty space
		const randomSquare = emptyElementsAround[Math.floor(Math.random() * emptyElementsAround.length)];

		// replace the targeted empty space with this object
		this.grid.array[randomSquare.index].type = this.type;
		this.grid.array[randomSquare.index].alreadyMoved = true;
				
		//empty the old space
		this.type = " ";
	}
}
