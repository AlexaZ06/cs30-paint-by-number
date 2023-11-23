// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


//code from grid array game as base 
//set variables and constants
// let grid;
// const GRID_SIZE = 40;
// let cellSize;
let theImage = [];
let cat;
// let catColour;
// let blockNumber;
// let colour;

class Grid {
  constructor (someimage){
    this.GRID_SIZE = 40;
    this.cellSize;
    this.image = someimage;
    this.imageColour;
    this.blockNumber;
    this.colour;
  }

  //create grid
  generateEmptyGrid(cols, rows) {
    let newGrid = [];
    for (let y = 0; y < rows; y++) {
      newGrid.push([]);
      for (let x = 0; x < cols; x++) {
        newGrid[y].push(0);
      }
    }
    return newGrid;
  }

  //gather colours
  getColors(cols, rows) {
    let colours = [];
    for (let y = 0; y < rows; y++) {
      colours.push([]);
      for (let x = 0; x < cols; x++) {
        colours[y].push(this.image.get(x, y));
      }
    }
    return colours;
  }
  
  //assign numbers to colours
  numberImage(cols, rows) {
    let blocknum = [];
    for (let y = 0; y < rows; y++) {
      blocknum.push([]);
      for (let x = 0; x < cols; x++) {
  
        //white
        if (this.imageColour[y][x][0] >= 210 && this.imageColour[y][x][1] >= 210 && this.imageColour[y][x][2] >= 210
          || this.imageColour[y][x][3] <= 40) {
          this.blocknum[y].push(0);
        }
  
        //light grey
        else if (this.imageColour[y][x][0] < 210 && this.imageColour[y][x][0] >= 140 &&
          this.imageColour[y][x][1] < 210 && this.imageColour[y][x][1] >= 140 &&
          this.imageColour[y][x][2] < 210 && this.imageColour[y][x][2] >= 140) {
          this.blocknum[y].push(1);
        }
  
        //dark grey
        else if (this.imageColour[y][x][0] < 140 && this.imageColour[y][x][0] > 40 &&
          this.imageColour[y][x][1] < 140 && this.imageColour[y][x][1] > 40 &&
          this.imageColour[y][x][2] < 140 && this.imageColour[y][x][2] > 40) {
          this.blocknum[y].push(2);
        }
  
        //pink 
        else if (this.imageColour[y][x][0] > this.imageColour[y][x][1] && this.imageColour[y][x][0] > this.imageColour[y][x][2]) {
          this.blocknum[y].push(3);
        }
  
        //black
        else if (this.imageColour[y][x][0] <= 40 && this.imageColour[y][x][1] <= 40 && this.imageColour[y][x][2] <= 40
          || this.imageColour[y][x][3] >= 200) {
          this.blocknum[y].push(4);
        }
  
      }
    }
    return this.blocknum;
  }
  //change cell when clicked
  toggleCell(x, y) {
    //check that we are within the grid, then toggle
    if (x >= 0 && x < this.GRID_SIZE && y >= 0 && y < this.GRID_SIZE) {
      // check for right colour then toggle to colour
      if (this.blockNumber[y][x] < 10) {
        if (this.colour === 0 && this.blockNumber[y][x] === 0) {
          this.blockNumber[y][x] += 10;
        }
        else if (this.colour === 1 && this.blockNumber[y][x] === 1) {
          this.blockNumber[y][x] += 11;
        }
        else if (this.colour === 2 && this.blockNumber[y][x] === 2) {
          this.blockNumber[y][x] += 20;
        }
        else if (this.colour === 3 && this.blockNumber[y][x] === 3) {
          this.blockNumber[y][x] += 30;
        }
        else if (this.colour === 4 && this.blockNumber[y][x] === 4) {
          this.blockNumber[y][x] += 40;
        }
      }
      //change block back to original colour
      else if (this.blockNumber[y][x] >= 10) {
        if (this.colour === 0 && this.blockNumber[y][x] === 10) {
          this.blockNumber[y][x] -= 10;
        }
        else if (this.colour === 1 && this.blockNumber[y][x] === 12) {
          this.blockNumber[y][x] -= 11;
        }
        else if (this.colour === 2 && this.blockNumber[y][x] === 22) {
          this.blockNumber[y][x] -= 20;
        }
        else if (this.colour === 3 && this.blockNumber[y][x] === 33) {
          this.blockNumber[y][x] -= 30;
        }
        else if (this.colour === 4 && this.blockNumber[y][x] === 44) {
          this.blockNumber[y][x] -= 40;
        }
      }
    }
  }

  //show grid
  displayGrid() {
    for (let y = 0; y < this.GRID_SIZE; y++) {
      for (let x = 0; x < this.GRID_SIZE; x++) {
        if (this.GRID_SIZE >= 40) {
          //block colour
          fill("lightblue");
          rect(x * this.cellSize, y * this.cellSize, this.cellSize, this.cellSize);
  
          if (this.blockNumber[y][x] < 10) {
            //fill in grid with numbers
            fill("black");
            textAlign(CENTER, CENTER);
            text(this.blockNumber[y][x], x * this.cellSize, y * this.cellSize, this.cellSize, this.cellSize);
          }
          else {
            //colour/fill in cells
            if (this.blockNumber[y][x] === 10) {
              fill("white");
            }
            else if (this.blockNumber[y][x] === 12) {
              fill("lightgrey");
            }
            else if (this.blockNumber[y][x] === 22) {
              fill("grey");
            }
            else if (this.blockNumber[y][x] === 33) {
              fill("pink");
            }
            else if (this.blockNumber[y][x] === 44) {
              fill("black");
            }
            rect(x * this.cellSize, y * this.cellSize, this.cellSize, this.cellSize);
          }
        }
  
        else {
          rect(x * this.cellSize, y * this.cellSize, this.cellSize, this.cellSize);
        }
      }
    }
  }

}

//load image to colour
function preload() {
  cat = loadImage("cat.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  let grid = new Grid(cat);
  grid.generateEmptyGrid(grid.GRID_SIZE, grid.GRID_SIZE);

  if (height > width) {
    grid.cellSize = width / grid.GRID_SIZE;
  }
  else {
    grid.cellSize = height / grid.GRID_SIZE;
  }

  if (grid.GRID_SIZE >= 40) {
    grid.image.resize(grid.GRID_SIZE, grid.GRID_SIZE);
    grid.catColour = grid.getColors(grid.GRID_SIZE, grid.GRID_SIZE);
    grid.blockNumber = grid.numberImage(grid.GRID_SIZE, grid.GRID_SIZE);
  }
  else {
    grid = grid.generateEmptyGrid(grid.GRID_SIZE, grid.GRID_SIZE);
  }

  theImage.push(grid);
}

function draw() {
  for (let chosenImage of theImage){
    chosenImage.imageColour = chosenImage.getColors(chosenImage.GRID_SIZE, chosenImage.GRID_SIZE);
    chosenImage.blockNumber = chosenImage.numberImage(chosenImage.GRID_SIZE, chosenImage.GRID_SIZE);
    chosenImage.displayGrid();
  }
}

//change colour of fill base on key
function keyTyped() {
  for (let chosenImage of theImage) {
    if (key === "0") {
      chosenImage.colour = 0;
    }
    else if (key === "1") {
      chosenImage.colour = 1;
    }
    else if (key === "2") {
      chosenImage.colour = 2;
    }
    else if (key === "3") {
      chosenImage.colour = 3;
    }
    else if (key === "4") {
      chosenImage.colour = 4;
    }
  }
}

//fill in cell with colour when 
function mousePressed() {
  for (let chosenImage of theImage){
    let y = Math.floor(mouseY / chosenImage.cellSize);
    let x = Math.floor(mouseX / chosenImage.cellSize);
  
    chosenImage.toggleCell(x, y);   //current cell
  }
}




