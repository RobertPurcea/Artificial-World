export default function print(grid) {

	// Calculate the size necessary for every grid element, so that the cumulative size of all of them is exactly as wide as the container they are in
	const container = document.querySelector('#gameWrapper');
	const elementWidth = container.clientWidth / grid.width;
	const elementHeight = container.clientHeight / grid.height;

	// If the #container is empty(this is the first time running print()), create the divs in which each grid element is located, and attach them to the #container section
	if (!container.getElementsByTagName('div').length) {
		grid.array.forEach(current => {
			let div = document.createElement('div');
			div.style.width = elementWidth + "px";
			div.style.height = elementHeight + "px";
			container.append(div);
		})
	}

	//	If the divs are already created, iterate over them and apply the style classes necessary(herbivore => green, carnivore => red)
	let divs = Array.from(container.getElementsByTagName('div'));
	divs.forEach((element, index) => {
		switch (grid.array[index].type) {
			case "o":
				element.className = "herbivore";
				break;
			case "x":
				element.className = "carnivore";
				break;
			case "@":
				element.className = "stone";
				break;
			case "|":
				element.className = "grass";
				break;
			default:
				element.className = "empty";
		}
	})
}
