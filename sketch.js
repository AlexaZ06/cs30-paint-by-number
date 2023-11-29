// Paint/Colour by Number
// Alexandra Zhu
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


//set variables
let catImage;
let state = "start";
let cat;
let wolfchanImg;
let leebitImg;
let dwaekkiImg;
let jiniretImg;
let quokkaImg;
let bbokariImg;
let puppymImg;
let foxinyImg;

//create parent class using code from grid array game
class Gridcat {
  constructor (img){
    this.grid;
    this.GRID_SIZE = 40;
    this.cellSize;
    this.img = img;
    this.imgColour;
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
        colours[y].push(this.img.get(x, y));
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
        if (this.imgColour[y][x][0] >= 210 && this.imgColour[y][x][1] >= 210 && this.imgColour[y][x][2] >= 210
          || this.imgColour[y][x][3] <= 40) {
          blocknum[y].push(0);
        }
  
        //light grey
        else if (this.imgColour[y][x][0] < 210 && this.imgColour[y][x][0] >= 140 &&
          this.imgColour[y][x][1] < 210 && this.imgColour[y][x][1] >= 140 &&
          this.imgColour[y][x][2] < 210 && this.imgColour[y][x][2] >= 140) {
          blocknum[y].push(1);
        }
  
        //dark grey
        else if (this.imgColour[y][x][0] < 140 && this.imgColour[y][x][0] > 40 &&
          this.imgColour[y][x][1] < 140 && this.imgColour[y][x][1] > 40 &&
          this.imgColour[y][x][2] < 140 && this.imgColour[y][x][2] > 40) {
          blocknum[y].push(2);
        }
  
        //pink 
        else if (this.imgColour[y][x][0] > this.imgColour[y][x][1] && this.imgColour[y][x][0] > this.imgColour[y][x][2]) {
          blocknum[y].push(3);
        }
  
        //black
        else if (this.imgColour[y][x][0] <= 40 && this.imgColour[y][x][1] <= 40 && this.imgColour[y][x][2] <= 40
          || this.imgColour[y][x][3] >= 200) {
          blocknum[y].push(4);
        }
  
      }
    }
    return blocknum;
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

class Grid extends Gridcat {
  constructor (img) {
    super(img);
  }

  //create grid
  generateEmptyGrid(cols, rows) {
    super.generateEmptyGrid(cols, rows);
  }

  //gathers colours
  getColors(cols, rows) {
    super.getColors(cols, rows);
  }

  //assign numbers to colours
  numberImage(cols, rows) {
    let blocknum = [];
    for (let y = 0; y < rows; y++) {
      blocknum.push([]);
      for (let x = 0; x < cols; x++) {
  
        //white
        if (this.imgColour[y][x][0] >= 210 && this.imgColour[y][x][1] >= 210 && this.imgColour[y][x][2] >= 210
          || this.imgColour[y][x][3] <= 40) {
          blocknum[y].push(0);
        }
  
        //light grey
        else if (this.imgColour[y][x][0] < 210 && this.imgColour[y][x][0] >= 140 &&
          this.imgColour[y][x][1] < 210 && this.imgColour[y][x][1] >= 140 &&
          this.imgColour[y][x][2] < 210 && this.imgColour[y][x][2] >= 140) {
          blocknum[y].push(1);
        }
  
        //dark grey
        else if (this.imgColour[y][x][0] < 140 && this.imgColour[y][x][0] > 40 &&
          this.imgColour[y][x][1] < 140 && this.imgColour[y][x][1] > 40 &&
          this.imgColour[y][x][2] < 140 && this.imgColour[y][x][2] > 40) {
          blocknum[y].push(2);
        }
  
        //red 
        else if (this.imgColour[y][x][0] > this.imgColour[y][x][1] && this.imgColour[y][x][0] > this.imgColour[y][x][2]) {
          blocknum[y].push(3);
        }

        //yellow 
        else if (this.imgColour[y][x][0] >= 250 && this.imgColour[y][x][1] >= 200
          && this.imgColour[y][x][0] > this.imgColour[y][x][2]
          && this.imgColour[y][x][1] > this.imgColour[y][x][2]) {
          blocknum[y].push(4);
        }

        //orange 
        else if (this.imgColour[y][x][0] >= 225 && this.imgColour[y][x][1] >= 175
                 && this.imgColour[y][x][0] > this.imgColour[y][x][2]
                 && this.imgColour[y][x][1] > this.imgColour[y][x][2]) {
          blocknum[y].push(5);
        }

        //green 
        else if (this.imgColour[y][x][1] > this.imgColour[y][x][0] && this.imgColour[y][x][1] > this.imgColour[y][x][2]) {
          blocknum[y].push(6);
        }

        //blue 
        else if (this.imgColour[y][x][2] > this.imgColour[y][x][0] && this.imgColour[y][x][2] > this.imgColour[y][x][1]) {
          blocknum[y].push(7);
        }

        //purple 
        else if (this.imgColour[y][x][0] > this.imgColour[y][x][1] && this.imgColour[y][x][2] > this.imgColour[y][x][1]) {
          blocknum[y].push(8);
        }
  
        //black
        else if (this.imgColour[y][x][0] <= 40 && this.imgColour[y][x][1] <= 40 && this.imgColour[y][x][2] <= 40
          || this.imgColour[y][x][3] >= 200) {
          blocknum[y].push(9);
        }
  
      }
    }
    return blocknum;
  }

  //change cell when clicked
  toggleCell(x,y) {
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
        else if (this.colour === 5 && this.blockNumber[y][x] === 5) {
          this.blockNumber[y][x] += 50;
        }
        else if (this.colour === 6 && this.blockNumber[y][x] === 6) {
          this.blockNumber[y][x] += 60;
        }
        else if (this.colour === 7 && this.blockNumber[y][x] === 7) {
          this.blockNumber[y][x] += 70;
        }
        else if (this.colour === 8 && this.blockNumber[y][x] === 8) {
          this.blockNumber[y][x] += 80;
        }
        else if (this.colour === 9 && this.blockNumber[y][x] === 9) {
          this.blockNumber[y][x] += 90;
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
        else if (this.colour === 5 && this.blockNumber[y][x] === 55) {
          this.blockNumber[y][x] -= 50;
        }
        else if (this.colour === 6 && this.blockNumber[y][x] === 66) {
          this.blockNumber[y][x] -= 60;
        }
        else if (this.colour === 7 && this.blockNumber[y][x] === 77) {
          this.blockNumber[y][x] -= 70;
        }
        else if (this.colour === 8 && this.blockNumber[y][x] === 88) {
          this.blockNumber[y][x] -= 80;
        }
        else if (this.colour === 9 && this.blockNumber[y][x] === 99) {
          this.blockNumber[y][x] -= 90;
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
              fill("lightyellow");
            }
            else if (this.blockNumber[y][x] === 55) {
              fill("lightorange");
            }
            else if (this.blockNumber[y][x] === 66) {
              fill("lightgreed");
            }
            else if (this.blockNumber[y][x] === 77) {
              fill("lightblue");
            }
            else if (this.blockNumber[y][x] === 88) {
              fill("lavender");
            }
            else if (this.blockNumber[y][x] === 99) {
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

class WolfChan extends Grid {
  constructor(img) {
    super(img);
  }

  //create grid
  generateEmptyGrid(cols,rows) {
    super.generateEmptyGrid(cols, rows);
  }

  //get colours 
  getColors(cols, rows) {
    super.getColors(cols,rows);
  }

  //assign numbers to colours
  numberImage(cols, rows) {
    super.numberImage(cols, rows);
  }

  //change cell when clicked
  toggleCell(x,y) {
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
        else if (this.colour === 5 && this.blockNumber[y][x] === 5) {
          this.blockNumber[y][x] += 50;
        }
        else if (this.colour === 6 && this.blockNumber[y][x] === 6) {
          this.blockNumber[y][x] += 60;
        }
        else if (this.colour === 7 && this.blockNumber[y][x] === 7) {
          this.blockNumber[y][x] += 70;
        }
        else if (this.colour === 8 && this.blockNumber[y][x] === 8) {
          this.blockNumber[y][x] += 80;
        }
        else if (this.colour === 9 && this.blockNumber[y][x] === 9) {
          this.blockNumber[y][x] += 90;
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
        else if (this.colour === 5 && this.blockNumber[y][x] === 55) {
          this.blockNumber[y][x] -= 50;
        }
        else if (this.colour === 6 && this.blockNumber[y][x] === 66) {
          this.blockNumber[y][x] -= 60;
        }
        else if (this.colour === 7 && this.blockNumber[y][x] === 77) {
          this.blockNumber[y][x] -= 70;
        }
        else if (this.colour === 8 && this.blockNumber[y][x] === 88) {
          this.blockNumber[y][x] -= 80;
        }
        else if (this.colour === 9 && this.blockNumber[y][x] === 99) {
          this.blockNumber[y][x] -= 90;
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
              fill("lightyellow");
            }
            else if (this.blockNumber[y][x] === 55) {
              fill("lightorange");
            }
            else if (this.blockNumber[y][x] === 66) {
              fill("lightgreed");
            }
            else if (this.blockNumber[y][x] === 77) {
              fill("lightblue");
            }
            else if (this.blockNumber[y][x] === 88) {
              fill("lavender");
            }
            else if (this.blockNumber[y][x] === 99) {
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
  wolfchanImg = loadImage("wolfchan.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  setupImage();
}

function draw() {
  catImage.displayGrid();
}

//change colour of fill base on key
function keyTyped() {
  catImageKeys();
}

//fill in cell with colour when 
function mousePressed() {

  let y = Math.floor(mouseY / catImage.cellSize);
  let x = Math.floor(mouseX / catImage.cellSize);

  catImage.toggleCell(x, y);   //current cell
}

//set up cat
function setupImage() {
  //display image depending on state
  if (state === "cat") {
    //create cat from class
    catImage = new Gridcat(cat);
    catImage.grid = catImage.generateEmptyGrid(catImage.GRID_SIZE, catImage.GRID_SIZE);
   
    //set grid size
    if (height > width) {
      catImage.cellSize = width / catImage.GRID_SIZE;
    }
    else {
      catImage.cellSize = height / catImage.GRID_SIZE;
    }
  
    //display cat
    if (catImage.GRID_SIZE >= 40) {
      catImage.img.resize(catImage.GRID_SIZE, catImage.GRID_SIZE);
      catImage.imgColour = catImage.getColors(catImage.GRID_SIZE, catImage.GRID_SIZE);
      catImage.blockNumber = catImage.numberImage(catImage.GRID_SIZE, catImage.GRID_SIZE);
    }
    else {
      catImage = catImage.generateEmptyGrid(catImage.GRID_SIZE, catImage.GRID_SIZE);
    }
  }
  else if (state === "wolfchan"){
    //create cat from class
    catImage = new Gridcat(cat);
    catImage.grid = catImage.generateEmptyGrid(catImage.GRID_SIZE, catImage.GRID_SIZE);
   
    //set grid size
    if (height > width) {
      catImage.cellSize = width / catImage.GRID_SIZE;
    }
    else {
      catImage.cellSize = height / catImage.GRID_SIZE;
    }
  
    //display cat
    if (catImage.GRID_SIZE >= 40) {
      catImage.img.resize(catImage.GRID_SIZE, catImage.GRID_SIZE);
      catImage.imgColour = catImage.getColors(catImage.GRID_SIZE, catImage.GRID_SIZE);
      catImage.blockNumber = catImage.numberImage(catImage.GRID_SIZE, catImage.GRID_SIZE);
    }
    else {
      catImage = catImage.generateEmptyGrid(catImage.GRID_SIZE, catImage.GRID_SIZE);
    }
  }
  // else if (state === "leebit"){
    
  // }
  // else if (state === "dwaekki"){
    
  // }
  // else if (state === "jiniret"){
    
  // }
  // else if (state === "hanquokka"){
    
  // }
  // else if (state === "bbokari"){
    
  // }
  // else if (state === "puppym"){
    
  // }
  // else if (state === "foxiny"){
    
  // }
}

//keys for cat
function catImageKeys() {
  if (key === "0") {
    catImage.colour = 0;
  }
  else if (key === "1") {
    catImage.colour = 1;
  }
  else if (key === "2") {
    catImage.colour = 2;
  }
  else if (key === "3") {
    catImage.colour = 3;
  }
  else if (key === "4") {
    catImage.colour = 4;
  }
}