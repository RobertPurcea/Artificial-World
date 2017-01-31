require('../dist/index.html');
import style from './css/app.sass';
import Grid from './js/grid.js';
import print from './js/print.js';
import gridElement from './js/gridElement.js'

//	Initialize the grid and populate it
const grid = new Grid(10, 10);
grid.populate();

// Transform every grid.array string in a gridElement instance
grid.array = grid.array.map((current, index) => {
	return new gridElement(current, index, grid);
});

//first stage output
grid.output();

// Run world
setInterval(function() {

	grid.array.filter(current => (current.type === "o") || (current.type === "x")).forEach(current1 => {
		current1.act("move")
	});
	grid.output();

	setTimeout(function() {
		grid.array.filter(current => current.type === "x").forEach(current1 => {
			current1.act("eatMeat")
		});
		grid.output();
	}, 800);

	setTimeout(function() {
		grid.array.filter(current => current.type === "o").forEach(current1 => {
			current1.act("eatGrass")
		}), 800
	});
	grid.output();

}, 2000);
