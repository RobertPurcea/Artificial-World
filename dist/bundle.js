/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _print = __webpack_require__(2);

var _print2 = _interopRequireDefault(_print);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Grid = function () {

	//build an array of width * height elements. Assign " " to every element
	function Grid(width, height) {
		_classCallCheck(this, Grid);

		this.width = width;
		this.height = height;

		this.array = Array.apply(null, { length: this.width * this.height });
		this.array = this.array.map(function (current) {
			return " ";
		});
	}

	//	return the index of an empty random element from grid.array


	_createClass(Grid, [{
		key: "randomEmptySpace",
		value: function randomEmptySpace() {
			var index = Math.floor(Math.random() * this.array.length);

			while (this.array[index] !== " ") {
				index = Math.floor(Math.random() * this.array.length);
			}
			return index;
		}

		//	random how many elements of each type there will be on the grid(some elements have a higher chance of being more numerous than others)

	}, {
		key: "random",
		value: function random(type) {
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

	}, {
		key: "replaceEmptySpaceWithElement",
		value: function replaceEmptySpaceWithElement(number, type) {
			while (number > 0) {
				this.array[this.randomEmptySpace()] = type;
				number--;
			}
		}

		// populate the grid with random elements

	}, {
		key: "populate",
		value: function populate() {
			var herbivoreNumber = this.random("o");
			var carnivoreNumber = this.random("x");
			var stoneNumber = this.random("@");
			var grassNumber = this.random("|");

			this.replaceEmptySpaceWithElement(herbivoreNumber, "o");
			this.replaceEmptySpaceWithElement(carnivoreNumber, "x");
			this.replaceEmptySpaceWithElement(stoneNumber, "@");
			this.replaceEmptySpaceWithElement(grassNumber, "|");
		}

		// print the current state of the grid

	}, {
		key: "output",
		value: function output() {
			(0, _print2.default)(this);
		}
	}]);

	return Grid;
}();

exports.default = Grid;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var gridElement = function () {

	// Add (x,y) coordinates to each element
	function gridElement(current, index, grid) {
		_classCallCheck(this, gridElement);

		this.type = current;
		this.x = index % grid.width;
		this.y = parseInt(index / grid.width);
		this.grid = grid;
		this.reproduceCounter = 0;
	}

	// returns an array that contains information about each square immediately around this one


	_createClass(gridElement, [{
		key: "look",
		value: function look() {
			// store here all the information about the elements around
			var elementsAround = [];

			// retrieve information from a square and push it to elementsAround
			function lookInOneSide(x, y) {
				//	make sure the current (x,y) coordinates are not out of grid
				if (x >= 0 && y >= 0 && x < this.grid.width && y < this.grid.height) {
					// transform x,y position in grid array index
					var index = x + this.grid.width * y;
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

	}, {
		key: "act",
		value: function act(action) {
			// choose the type of square we are looking for(ex: if it's a carnivore's turn, it will look for herbivore type squares)
			var preference;
			switch (action) {
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
			var elementsAroundPreference = this.look().filter(function (curr) {
				return curr.type === preference;
			});
			if (elementsAroundPreference.length === 0) {
				return;
			}

			//	random a square around
			var randomSquarePreference = elementsAroundPreference[Math.floor(Math.random() * elementsAroundPreference.length)];

			// replace the targeted square with this object
			this.grid.array[randomSquarePreference.index].type = this.type;

			//empty the old space if not in reproduce case
			if (action !== "reproduce") {
				this.type = " ";
			}
		}
	}]);

	return gridElement;
}();

exports.default = gridElement;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = print;
function print(grid) {

	// Calculate the size necessary for every grid element, so that the cumulative size of all of them is exactly as wide as the container they are in
	var container = document.querySelector('#gameMap');
	var elementWidth = container.clientWidth / grid.width;
	var elementHeight = container.clientHeight / grid.height;

	// If the #container is empty(this is the first time running print()), create the divs in which each grid element is located, and attach them to the #container section
	if (!container.getElementsByTagName('div').length) {
		grid.array.forEach(function (current, index) {
			var div = document.createElement('div');
			div.style.width = elementWidth + "px";
			div.style.height = elementHeight + "px";
			div.index = index;
			container.append(div);
		});
	}

	//	If the divs are already created, iterate over them and apply the style classes necessary(herbivore => green, carnivore => red)
	var divs = Array.from(container.getElementsByTagName('div'));
	divs.forEach(function (element, index) {
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
	});
}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html>\r\n\r\n<head>\r\n   <meta charset=\"utf-8\">\r\n   <title>World</title>\r\n   <link rel=\"stylesheet\" type=\"text/css\"\r\n      href=\"https://fonts.googleapis.com/css?family=Rancho&effect=ice\">\r\n   <script src=\"bundle.js\" defer></script>\r\n</head>\r\n\r\n<body>\r\n   <div id=\"wrapper\">\r\n   \t<!-- Start game + Instructions -->\r\n   \t<section id=\"startGamePanel\">\r\n   \t\t<h1 class=\"font-effect-ice\">ARTIFICIAL WORLD</h1>\r\n   \t\t<button>Start game</button>\r\n   \t\t<button>Instructions</button>\r\n\r\n   \t\t<div id=\"instructions\">\r\n   \t\t\t<h1 class=\"font-effect-ice\">INSTRUCTIONS</h1>\r\n   \t\t\t<button>Go back!</button>\r\n   \t\t\t<p>Try to keep the environment stable for as long as you can. You can click anywhere on the map to remove an element. You can also drag and drop the elements from the left to introduce additional elemens into the map. Be creative!</p>\r\n   \t\t\t<ol>\r\n   \t\t\t\t<li><img src=\"http://www.clker.com/cliparts/Y/W/s/K/X/C/red-robot-md.png\" alt=\"\"> <span>- Capable of eating the green robots. Does not increase in number over time</span></li>\r\n   \t\t\t\t<li><img src=\"https://s24.postimg.org/zf6feccvp/prey.png\" alt=\"\"><span> - Eats only grass. Each 10 seconds they DOUBLE in number, so be careful how many of these you will keep!</span></li>\r\n   \t\t\t\t<li><img src=\"https://s30.postimg.org/e9sil8ss1/stone1.png\" alt=\"\"><span> - The stones are immpasable terrain, no robots can pass over it, they act like a fence if you use them right!</span></li>\r\n   \t\t\t\t<li><img src=\"https://s24.postimg.org/axcfxhexx/grass1.png\" alt=\"\"><span> - Food for the green robots. The red robots can't pass over it</span></li>\r\n   \t\t\t</ol>\r\n   \t\t</div>  \t\r\n   \t</section>\r\n\r\n   \t<!-- Tools panel -->\r\n      <section id=\"tools\">\r\n         <div>\r\n         \t<img id=\"herbivore\" src=\"https://s24.postimg.org/zf6feccvp/prey.png\" alt=\"\" draggable=\"true\">\r\n         </div>\r\n         <div>\r\n         \t<img id=\"carnivore\" src=\"http://www.clker.com/cliparts/Y/W/s/K/X/C/red-robot-md.png\" alt=\"\" draggable=\"true\">\r\n         </div>\r\n         <div>\r\n         \t<img id=\"stone\" src=\"https://s30.postimg.org/e9sil8ss1/stone1.png\" alt=\"\" draggable=\"true\">\r\n         </div>\r\n         <div>\r\n         \t<img id=\"grass\" src=\"https://s24.postimg.org/axcfxhexx/grass1.png\" alt=\"\" draggable=\"true\">\r\n         </div>\r\n      </section>\r\n\r\n      <!-- All the grid elements will be inserted here by JS code -->\r\n      <section id=\"gameMap\">\r\n      </section>\r\n   </div>\r\n</body>\r\n\r\n</html>\r\n"

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(5);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(7)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./app.sass", function() {
			var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./app.sass");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "#tools {\n  width: 60px;\n  height: 600px;\n  background-color: rgba(0, 0, 0, 0.4);\n  display: flex;\n  flex-flow: column nowrap;\n  border-right: 6px ridge darkgreen; }\n  #tools div {\n    width: 100%;\n    flex: 1 0 auto;\n    display: flex;\n    align-items: center;\n    justify-content: center; }\n    #tools div img {\n      width: 100%;\n      height: 100%;\n      cursor: -webkit-grab; }\n\n#gameMap {\n  width: 640px;\n  height: 600px;\n  display: flex;\n  flex-flow: row wrap;\n  align-content: flex-start;\n  cursor: crosshair; }\n\ndiv {\n  flex: auto 0 0;\n  backface-visibility: hidden; }\n\n.herbivore {\n  background-image: url(\"https://s24.postimg.org/zf6feccvp/prey.png\");\n  background-size: cover; }\n\n.carnivore {\n  background-image: url(\"http://www.clker.com/cliparts/Y/W/s/K/X/C/red-robot-md.png\");\n  background-size: cover; }\n\n.stone {\n  background-image: url(\"https://s30.postimg.org/e9sil8ss1/stone1.png\");\n  background-size: cover; }\n\n.grass {\n  background-image: url(\"https://s24.postimg.org/axcfxhexx/grass1.png\");\n  background-size: cover; }\n\n.empty {\n  background-color: transparent; }\n\n#startGamePanel {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-color: #222;\n  z-index: 1000;\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: center; }\n  #startGamePanel h1, #startGamePanel #instructions h1 {\n    color: #42c2f4;\n    font-family: arial;\n    font-size: 3rem;\n    padding: 3rem; }\n  #startGamePanel button, #startGamePanel #instructions button {\n    font-size: 2rem;\n    margin-top: 10rem;\n    padding: 1rem;\n    border-radius: 0.5rem;\n    background-color: #429bf4;\n    cursor: pointer; }\n  #startGamePanel button:nth-of-type(2), #startGamePanel #instructions button:nth-of-type(2) {\n    margin-top: 5rem; }\n  #startGamePanel button:active, #startGamePanel #instructions button:active, #startGamePanel button:focus, #startGamePanel #instructions button:focus {\n    outline: none; }\n  #startGamePanel #instructions {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    display: none;\n    background-color: #222;\n    z-index: 1005;\n    padding: 0.5rem;\n    color: white; }\n    #startGamePanel #instructions button {\n      position: absolute;\n      top: 0;\n      margin: 0;\n      right: 0;\n      color: black;\n      font-weight: bold;\n      border-radius: 0;\n      font-size: 0.7rem;\n      padding: 0.6rem; }\n    #startGamePanel #instructions h1 {\n      text-align: center; }\n    #startGamePanel #instructions p {\n      text-indent: 1rem;\n      font-size: 1.1rem; }\n    #startGamePanel #instructions ol {\n      display: flex;\n      flex-flow: row wrap;\n      margin-top: 2rem;\n      list-style-type: none; }\n      #startGamePanel #instructions ol li {\n        display: flex;\n        align-items: center;\n        margin: 1rem 0; }\n        #startGamePanel #instructions ol li img {\n          height: 50px; }\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box; }\n\nbody {\n  width: 100vw;\n  height: 100vh;\n  background-color: #42c2f4; }\n\n#wrapper {\n  width: 700px;\n  display: flex;\n  margin: auto;\n  position: relative;\n  top: 30px;\n  background-image: url(\"http://read.pudn.com/downloads106/sourcecode/others/435495/SuperTractor/res/BackGround__.jpg\"); }\n", ""]);

// exports


/***/ }),
/* 6 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 7 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _app = __webpack_require__(4);

var _app2 = _interopRequireDefault(_app);

var _grid = __webpack_require__(0);

var _grid2 = _interopRequireDefault(_grid);

var _print = __webpack_require__(2);

var _print2 = _interopRequireDefault(_print);

var _gridElement = __webpack_require__(1);

var _gridElement2 = _interopRequireDefault(_gridElement);

var _dragAndDrop = __webpack_require__(13);

var _dragAndDrop2 = _interopRequireDefault(_dragAndDrop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(3);


//	Initialize the grid and populate it
var grid = new _grid2.default(20, 20);
grid.populate();

// Transform every grid.array string in a gridElement instance
grid.array = grid.array.map(function (current, index) {
	return new _gridElement2.default(current, index, grid);
});

//Attach every grid element to the DOM and apply the classes necessary for each type of grid element
grid.output();

// Add onclick delete event on every grid element. Every time the user clicks on one gridElement, that element will become an empty space
document.querySelectorAll('#gameMap div').forEach(function (current, index) {
	current.addEventListener("click", scopePreserver(index));
});
// save the index for referencing to the grid.array element
function scopePreserver(index) {
	return function () {
		grid.array[index].type = " ";
		grid.output();
	};
}

function animateWorld() {
	var reproduceCounter = 0;

	setInterval(function () {

		// Move all animated elements if they got empty space around them
		grid.array.filter(function (current) {
			return current.type === "o" || current.type === "x";
		}).forEach(function (current1) {
			current1.act("move");
		});
		grid.output();

		// If they got the chance, the carnivores will eat surrounding herbivores
		setTimeout(function () {
			grid.array.filter(function (current) {
				return current.type === "x";
			}).forEach(function (current1) {
				current1.act("eatMeat");
			});
			grid.output();

			// If they got the chance, the herbivores will eat surrounding grass. Enable reproducing() every 5 turns
			setTimeout(function () {
				grid.array.filter(function (current) {
					return current.type === "o";
				}).forEach(function (current1) {
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
(0, _dragAndDrop2.default)(grid);

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

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = dragAndDrop;
function dragAndDrop(grid) {

	//	load data on drag start
	document.querySelectorAll('#tools div img').forEach(function (current) {
		current.addEventListener("dragstart", onDragStart);
	});
	function onDragStart() {
		event.dataTransfer.setData("text", event.target.id);
	}

	// allow drop event on all grid elements
	// on drop, modify the type of the target grid element to match the one from each of the droppable images on #tools section
	document.querySelectorAll('#gameMap div').forEach(function (current) {
		current.addEventListener("drop", onDrop);
		current.addEventListener("dragover", allowDrop);
	});

	function onDrop() {
		var data = event.dataTransfer.getData("text");
		var arrayElement = grid.array[this.index];
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

/***/ })
/******/ ]);