require('../dist/index.html');
import style from './css/app.sass';
import Grid from './js/grid.js';
import print from './js/print.js';
import gridElement from './js/gridElement.js'

//	Initialize the grid
const grid = new Grid(10, 10);
grid.populate();

// Transform every grid.array string in a gridElement instance
grid.array = grid.array.map((current, index) => {
	return new gridElement(current, index, grid);
});

// Grid.prototype.turn = function() {
// 	setTimeout(function() {
// 		grid.array.forEach(function(elem) {
// 			elem.move();
// 			print(grid);
// 		});
// 	}, 1000);
// };
print(grid);

setTimeout(function() {
	grid.array.forEach(function(elem) {
		elem.move();
		print(grid);
	});
}, 1000);