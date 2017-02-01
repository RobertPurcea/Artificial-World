export default class gridElement {

	// Add (x,y) coordinates to each element
	constructor(current, index, grid) {
		this.type = current;
		this.x = index % grid.width;
		this.y = parseInt(index / grid.width);
		this.grid = grid;
		this.reproduceCounter = 0;
	}

	// returns an array that contains information about each square immediately around this one
	look() {
		// store here all the information about the elements around
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

		return elementsAround;
	}

	// moves the animated elements(not grass, stones, or empty space)
	act(action) {
		// choose the type of square we are looking for(ex: if it's a carnivore's turn, it will look for herbivore type squares)
		var preference;
		switch(action) {
			case "move":
				preference = " ";
				break;
			case "eatGrass":
				preference = "|";
				break;
			case "eatMeat":
				preference = "o";
				break;
			case "reproduce":
				preference = " ";
				break;
		}

		//	filter the this.look() array to only the squares that match the current preference
		let elementsAroundPreference = this.look().filter(curr => curr.type === preference);
		if (elementsAroundPreference.length === 0) {
			return;
		}
				
		//	random a square around
		const randomSquarePreference = elementsAroundPreference[Math.floor(Math.random() * elementsAroundPreference.length)];

		// replace the targeted square with this object
		this.grid.array[randomSquarePreference.index].type = this.type;
						
		//empty the old space if not in reproduce case
		if(action !== "reproduce") {
			this.type = " ";
		}
	}
}
