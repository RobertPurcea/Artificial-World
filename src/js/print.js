export default function print(grid) {

	// Calculate the size necessary for every element, so that all of them are as wide as the container they are in
	const container = document.querySelector('#gameWrapper');
	const elementWidth = container.clientWidth / grid.width;
	const elementHeight = container.clientHeight / grid.height;

	// If this it's the first time running this(#container is an empty element), create the divs in which each element is located, and attach them to the #container section
	if (!container.getElementsByTagName('div').length) {
		grid.array.forEach(current => {
			let div = document.createElement('div');
			div.style.width = elementWidth + "px";
			div.style.height = elementHeight + "px";
			container.append(div);
		})
	}

	//	If the divs are already created and attached to the DOM, iterate over them and apply the classes necessary for each type(herbivore => green, carnivore => red)
	let divs = Array.from(container.getElementsByTagName('div'));
	divs.forEach((element, index) => {
		switch (grid.array[index].type) {
			case "o":
				element.className = "herbivore";
				break;
			case "x":
				element.className = "carnivore";
				break;
			default:
				element.className = "empty";
		}
	})
}
