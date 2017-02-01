require('../dist/index.html');
import style from './css/app.sass';
import Grid from './js/grid.js';
import print from './js/print.js';
import gridElement from './js/gridElement.js'
import dragAndDrop from './js/dragAndDrop.js'

//	Initialize the grid and populate it
const grid = new Grid(20, 20);
grid.populate();

// Transform every grid.array string in a gridElement instance
grid.array = grid.array.map((current, index) => {
	return new gridElement(current, index, grid);
});


//Attach every grid element to the DOM and apply the classes necessary for each type of grid element
grid.output();


// Add onclick delete event on every grid element. Every time the user clicks on one gridElement, that element will become an empty space
document.querySelectorAll('#gameMap div').forEach((current, index) => {
	current.addEventListener("click", scopePreserver(index));
});
// save the index for referencing to the grid.array element
function scopePreserver(index) {
	return function() {
		grid.array[index].type = " ";
		grid.output();
	}
}

function animateWorld() {
	let reproduceCounter = 0;
	
	setInterval(function() {

		// Move all animated elements if they got empty space around them
		grid.array.filter(current => (current.type === "o") || (current.type === "x")).forEach(current1 => {
			current1.act("move");
		});
		grid.output();

		// If they got the chance, the carnivores will eat surrounding herbivores
		setTimeout(function() {
			grid.array.filter(current => current.type === "x").forEach(current1 => {
				current1.act("eatMeat");
			});
			grid.output();

			// If they got the chance, the herbivores will eat surrounding grass. Enable reproducing() every 5 turns
			setTimeout(function() {
				grid.array.filter(current => current.type === "o").forEach(current1 => {
					current1.act("eatGrass");
					if (reproduceCounter === 5) {
						current1.act("reproduce");
					}
				});
			}, 1000);
			grid.output();
		}, 500);
		if (reproduceCounter === 5) {
			reproduceCounter = 0;
		}
		reproduceCounter++;
	}, 1500);
}



// Let the user place additional elements on the map via drag & drop events
dragAndDrop(grid);


// On start game button press, fade out the startGamePanel and animate the world
document.querySelector('#startGamePanel button:first-of-type').onclick = startGame;
function startGame() {
	document.querySelector('#startGamePanel').style.display = "none";
	animateWorld();
}

// Display instructions on button press
document.querySelector('#startGamePanel button ~ button').onclick = showInstructions;
function showInstructions() {
	document.querySelector('#startGamePanel #instructions').style.display = "block";
}

// Hide instructions on button press
document.querySelector('#startGamePanel #instructions button').onclick = hideInstructions;
function hideInstructions() {
	document.querySelector('#startGamePanel #instructions').style.display = "none";
}