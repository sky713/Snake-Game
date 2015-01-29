use2D = true;


// -- GRID --

var squareSize = 10; //the size of each square
var gridSize = 60; //the number of lines in the grid
//Makes a 2d array for the gride, with gridSize columns and gridSize rows
var grid = new Array(gridSize);
for (var i = 0; i < grid.length; i++) {
	grid[i] = new Array(gridSize);
}

//draws all the objects in the grid
function drawGrid() {
	//iterate through the whole grid
	for (var x = 0; x < grid.length; x++) {
		for (var y = 0; y < grid.length; y++) {
			if (grid[x][y] == 'food') { //if its food draw food
				drawFood(x * squareSize, y * squareSize);
			} else if (grid[x][y] == 'snake') { //if its snake draw snake
				drawSnake(x * squareSize, y * squareSize);
			}
		}
	}
}

// -- SNAKE --

var snakeSize = 10; //the initial size of the snake
//the snake is an array of objects with an x and y value.
var snake = new Array(10);
function newSnake() {
	var snakeX = snakeSize, //starting location for the snake's head
	    snakeY = 0;
	for (var i = 0; i < snake.length; i++) { //runs over the length of the snake
		snake[i] = { //adds each object with an x and y value
			x : snakeX - i,
			y : snakeY
		};
		grid[snakeX - i][snakeY] = 'snake'; //puts the snake in the grid
	}

}

//draws one snake block in the world
//Param: x,y coordinates of the canvas, no offset
function drawSnake(x, y) {
	var snakeSprite = new Sprite();
	snakeSprite.height = squareSize;
	snakeSprite.width = squareSize;
	snakeSprite.x = x;
	snakeSprite.y = y;
	snakeSprite.image = Textures.load("blueSquare.png");
	world.addChild(snakeSprite);
}


// -- FOOD --

//makes a new food block and puts it in the world
function newFood() {
	//randomly picks coordinates
	var randX = Math.floor(Math.random() * gridSize);
	var randY = Math.floor(Math.random() * gridSize);
	grid[randX][randY] = 'food'; //tells the grid where the food is
}

//draws the food in the world
//param: x,y coordinates of the canvas, no offset
function drawFood(x, y) {
	var foodSprite = new Sprite();
	foodSprite.height = squareSize;
	foodSprite.width = squareSize;
	foodSprite.x = x;
	foodSprite.y = y;
	foodSprite.image = Textures.load("blackSquare.png");
	world.addChild(foodSprite);
}



newSnake();
newFood();
drawGrid();
