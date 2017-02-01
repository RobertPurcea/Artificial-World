export default function dragAndDrop(grid) {

	//	load data on drag start
	document.querySelectorAll('#tools div img').forEach(current => {
		current.addEventListener("dragstart", onDragStart);
	});
	function onDragStart() {
		event.dataTransfer.setData("text", event.target.id);
	}

	// allow drop event on all grid elements
	// on drop, modify the type of the target grid element to match the one from each of the droppable images on #tools section
	document.querySelectorAll('#gameMap div').forEach(current => {
		current.addEventListener("drop", onDrop);
		current.addEventListener("dragover", allowDrop);
	})

	function onDrop() {
		const data = event.dataTransfer.getData("text");
		const arrayElement = grid.array[this.index];
		switch (data) {
			case "herbivore":
				arrayElement.type = "o";
				break;
			case "carnivore":
				arrayElement.type = "x";
				break;
			case "stone":
				arrayElement.type = "@";
				break;
			case "grass":
				arrayElement.type = "|";
				break;
		};
		grid.output();
	}

	function allowDrop() {
		event.preventDefault();
	}
}
