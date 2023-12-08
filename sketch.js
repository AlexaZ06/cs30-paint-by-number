// Paint/Colour by Number
// Alexandra Zhu
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//line 459 in  wolfchan class throws an error 

//set variables
let state = "end";
let cat;
let catImage;
let wolfChan;
let wolfchanImg;
let leeBit;
let leebitImg;
let dwaekki;
let dwaekkiImg;
let jiniret;
let jiniretImg;
let quokka;
let quokkaImg;
let bbokari;
let bbokariImg;
let puppym;
let puppymImg;
let foxiny;
let foxinyImg;
let img;
let someImg;

//ignore
// if (state === "cat") {
// }
// else if (state === "wolfchan"){
// }
// else if (state === "leebit"){
// }
// else if (state === "dwaekki"){
// }
// else if (state === "jiniret"){
// }
// else if (state === "quokka"){
// }
// else if (state === "bbokari"){
// }
// else if (state === "puppym"){   
// }
// else if (state === "foxiny"){
// }

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
  toggleCell(x,y) {
    super.toggleCell(x,y);
  }

  //show grid
  displayGrid() {
    super.displayGrid();
  }
}

class LeeBit extends Grid {
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
  
        //red 
        else if (this.imgColour[y][x][0] > this.imgColour[y][x][1] && this.imgColour[y][x][0] > this.imgColour[y][x][2]) {
          blocknum[y].push(2);
        }
        //black
        else if (this.imgColour[y][x][0] <= 40 && this.imgColour[y][x][1] <= 40 && this.imgColour[y][x][2] <= 40
          || this.imgColour[y][x][3] >= 200) {
          blocknum[y].push(3);
        }
  
      }
    }
    return blocknum;
  }

  //change cell when clicked
  toggleCell(x,y) {
    super.toggleCell(x,y);
  }

  //show grid
  displayGrid() {
    super.displayGrid();
  }
}

class Dwaekki extends Grid {
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
    let blocknum = [];
    for (let y = 0; y < rows; y++) {
      blocknum.push([]);
      for (let x = 0; x < cols; x++) {
  
        //white
        if (this.imgColour[y][x][0] >= 210 && this.imgColour[y][x][1] >= 210 && this.imgColour[y][x][2] >= 210
          || this.imgColour[y][x][3] <= 40) {
          blocknum[y].push(0);
        }
        
        //darker pink
        else if (this.imgColour[y][x][0] > this.imgColour[y][x][1] &&
                 this.imgColour[y][x][0] > this.imgColour[y][x][2] &&
                 this.imgColour[y][x][2] > this.imgColour[y][x][1]) {
          blocknum[y].push(1);
        }

        //pink
        else if (this.imgColour[y][x][0] > this.imgColour[y][x][1] && this.imgColour[y][x][0] > this.imgColour[y][x][2]) {
          blocknum[y].push(2);
        }

        //black
        else if (this.imgColour[y][x][0] <= 40 && this.imgColour[y][x][1] <= 40 && this.imgColour[y][x][2] <= 40
          || this.imgColour[y][x][3] >= 200) {
          blocknum[y].push(3);
        }
  
      }
    }
    return blocknum;
  }

  //change cell when clicked
  toggleCell(x,y) {
    super.toggleCell(x,y);
  }

  //show grid
  displayGrid() {
    super.displayGrid();
  }
}

class Jiniret extends Grid {
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
        
        //pink
        else if (this.imgColour[y][x][0] > this.imgColour[y][x][1] && this.imgColour[y][x][0] > this.imgColour[y][x][2]) {
          blocknum[y].push(2);
        }

        //black
        else if (this.imgColour[y][x][0] <= 40 && this.imgColour[y][x][1] <= 40 && this.imgColour[y][x][2] <= 40
          || this.imgColour[y][x][3] >= 200) {
          blocknum[y].push(3);
        }
  
      }
    }
    return blocknum;
  }

  //change cell when clicked
  toggleCell(x,y) {
    super.toggleCell(x,y);
  }

  //show grid
  displayGrid() {
    super.displayGrid();
  }
}

class Quokka extends Grid {
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
    let blocknum = [];
    for (let y = 0; y < rows; y++) {
      blocknum.push([]);
      for (let x = 0; x < cols; x++) {
  
        //White
        if (this.imgColour[y][x][0] >= 210 && this.imgColour[y][x][1] >= 210 && this.imgColour[y][x][2] >= 210
          || this.imgColour[y][x][3] <= 40) {
          blocknum[y].push(0);
        }
        
        //light brown
        else if (this.imgColour[y][x][0] < 200 && this.imgColour[y][x][0] >= 170 &&
          this.imgColour[y][x][1] < 170 && this.imgColour[y][x][1] >= 140 &&
          this.imgColour[y][x][2] < 140 && this.imgColour[y][x][2] >= 120) {
          blocknum[y].push(1);
        }

        //Brown
        else if (this.imgColour[y][x][0] < 170 && this.imgColour[y][x][0] >= 100 &&
          this.imgColour[y][x][1] < 100 && this.imgColour[y][x][1] >= 60 &&
          this.imgColour[y][x][2] < 60 && this.imgColour[y][x][2] >= 0) {
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
  toggleCell(x,y) {
    super.toggleCell(x,y);
  }

  //show grid
  displayGrid() {
    super.displayGrid();
  }
}

class Bbokari extends Grid {
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
    let blocknum = [];
    for (let y = 0; y < rows; y++) {
      blocknum.push([]);
      for (let x = 0; x < cols; x++) {
  
        //White
        if (this.imgColour[y][x][0] >= 210 && this.imgColour[y][x][1] >= 210 && this.imgColour[y][x][2] >= 210
          || this.imgColour[y][x][3] <= 40) {
          blocknum[y].push(0);
        }
        
        //pastel yellow
        else if (this.imgColour[y][x][0] < 200 && this.imgColour[y][x][0] >= 170 &&
          this.imgColour[y][x][1] < 170 && this.imgColour[y][x][1] >= 140 &&
          this.imgColour[y][x][2] < 160) {
          blocknum[y].push(1);
        }

        //yellow
        else if (this.imgColour[y][x][0] > 210 && this.imgColour[y][x][1] > 210 &&
          this.imgColour[y][x][0] > this.imagColour[y][x][2] &&
          this.imgColour[y][x][1] > this.imgColour[y][x][2] &&
          this.imgColour[y][x][2] < 160) {
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
  toggleCell(x,y) {
    super.toggleCell(x,y);
  }

  //show grid
  displayGrid() {
    super.displayGrid();
  }
}

class Puppym extends Grid {
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
    let blocknum = [];
    for (let y = 0; y < rows; y++) {
      blocknum.push([]);
      for (let x = 0; x < cols; x++) {
  
        //White
        if (this.imgColour[y][x][0] >= 210 && this.imgColour[y][x][1] >= 210 && this.imgColour[y][x][2] >= 210
          || this.imgColour[y][x][3] <= 40) {
          blocknum[y].push(0);
        }
        
        //tan
        else if (this.imgColour[y][x][0] > 200 &&
          this.imgColour[y][x][1] < 190 && this.imgColour[y][x][1] >= 150 &&
          this.imgColour[y][x][2] < 150 && this.imgColour[y][x][2] >= 130) {
          blocknum[y].push(1);
        }

        //light tan
        else if (this.imgColour[y][x][0] > 230 &&
          this.imgColour[y][x][1] < 200 && this.imagColour[y][x][1] >= 180 &&
          this.imgColour[y][x][2] < 180 && this.imgColour[y][x][2] >= 160) {
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
  toggleCell(x,y) {
    super.toggleCell(x,y);
  }

  //show grid
  displayGrid() {
    super.displayGrid();
  }
}

class Foxiny extends Grid {
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
    let blocknum = [];
    for (let y = 0; y < rows; y++) {
      blocknum.push([]);
      for (let x = 0; x < cols; x++) {
  
        //White
        if (this.imgColour[y][x][0] >= 210 && this.imgColour[y][x][1] >= 210 && this.imgColour[y][x][2] >= 210
          || this.imgColour[y][x][3] <= 40) {
          blocknum[y].push(0);
        }
        
        //tan
        else if (this.imgColour[y][x][0] > 200 &&
          this.imgColour[y][x][1] < 190 && this.imgColour[y][x][1] >= 150 &&
          this.imgColour[y][x][2] < 150 && this.imgColour[y][x][2] >= 130) {
          blocknum[y].push(1);
        }

        //light tan
        else if (this.imgColour[y][x][0] > 230 &&
          this.imgColour[y][x][1] < 200 && this.imagColour[y][x][1] >= 180 &&
          this.imgColour[y][x][2] < 180 && this.imgColour[y][x][2] >= 160) {
          blocknum[y].push(2);
        }

        //Brown
        else if (this.imgColour[y][x][0] < 170 && this.imgColour[y][x][0] >= 100 &&
          this.imgColour[y][x][1] < 100 && this.imgColour[y][x][1] >= 60 &&
          this.imgColour[y][x][2] < 60 && this.imgColour[y][x][2] >= 0) {
          blocknum[y].push(3);
        }

        //pink
        else if (this.imgColour[y][x][0] > this.imgColour[y][x][1] && this.imgColour[y][x][0] > this.imgColour[y][x][2]) {
          blocknum[y].push(4);
        }

        //black
        else if (this.imgColour[y][x][0] <= 40 && this.imgColour[y][x][1] <= 40 && this.imgColour[y][x][2] <= 40
          || this.imgColour[y][x][3] >= 200) {
          blocknum[y].push(5);
        }
  
      }
    }
    return blocknum;
  }

  //change cell when clicked
  toggleCell(x,y) {
    super.toggleCell(x,y);
  }

  //show grid
  displayGrid() {
    super.displayGrid();
  }
}

//load image to colour
function preload() {
  cat = loadImage("cat.png");
  wolfChan = loadImage("wolfchan.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  setupImage();
}

function draw() {
  if (state === "start"){
    startScreen();
  }
  if (state === "cat"){
    catImage.displayGrid();
  }
  if (state === "wolfchan"){
    wolfchanImg.displayGrid();
  }
  if (state === "leebit"){
    leebitImg.displayGrid();
  }
  if (state === "dwaekki"){
    dwaekkiImg.displayGrid();
  }
  if (state === "jiniret"){
    jiniretImg.displayGrid();
  }
  if (state === "quokka"){
    quokkaImg.displayGrid();
  }
  if (state === "bbokari"){
    bbokariImg.displayGrid();
  }
  if (state === "puppym"){
    puppymImg.displayGrid();
  }
  if (state === "foxiny"){
    foxinyImg.displayGrid();
  }
  if (state === "end"){
    endScreen();
  }
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

//set up colouring image
function setupImage() {
  //cat
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


  //grid
  //create grid
  someImg = new Grid(img);
  someImg.grid = someImg.generateEmptyGrid(someImg.GRID_SIZE, someImg.GRID_SIZE);
  
  //set grid size
  if (height > width) {
    someImg.cellSize = width / someImg.GRID_SIZE;
  }
  else {
    someImg.cellSize = height / someImg.GRID_SIZE;
  }
  
  //display grid
  if (someImg.GRID_SIZE >= 40) {
    someImg.img.resize(someImg.GRID_SIZE, someImg.GRID_SIZE);
    someImg.imgColour = someImg.getColors(someImg.GRID_SIZE, someImg.GRID_SIZE);
    someImg.blockNumber = someImg.numberImage(someImg.GRID_SIZE, someImg.GRID_SIZE);
  }
  else {
    someImg = someImg.generateEmptyGrid(someImg.GRID_SIZE, someImg.GRID_SIZE);
  }


  //wolf
  //create wolf from class
  wolfchanImg = new WolfChan(wolfChan);
  wolfchanImg.grid = wolfchanImg.generateEmptyGrid(wolfchanImg.GRID_SIZE, wolfchanImg.GRID_SIZE);
  
  //set grid size
  if (height > width) {
    wolfchanImg.cellSize = width / wolfchanImg.GRID_SIZE;
  }
  else {
    wolfchanImg.cellSize = height / wolfchanImg.GRID_SIZE;
  }
  
  //display wolf
  if (wolfchanImg.GRID_SIZE >= 40) {
    wolfchanImg.img.resize(wolfchanImg.GRID_SIZE, wolfchanImg.GRID_SIZE);
    wolfchanImg.imgColour = wolfchanImg.getColors(wolfchanImg.GRID_SIZE, wolfchanImg.GRID_SIZE);
    wolfchanImg.blockNumber = wolfchanImg.numberImage(wolfchanImg.GRID_SIZE, wolfchanImg.GRID_SIZE);
  }
  else {
    wolfchanImg = wolfchanImg.generateEmptyGrid(wolfchanImg.GRID_SIZE, wolfchanImg.GRID_SIZE);
  }


  //rabbit
  //create rabbit from class
  leebitImg = new LeeBit(leeBit);
  leebitImg.grid = leebitImg.generateEmptyGrid(leebitImg.GRID_SIZE, leebitImg.GRID_SIZE);
  
  //set grid size
  if (height > width) {
    leebitImg.cellSize = width / leebitImg.GRID_SIZE;
  }
  else {
    leebitImg.cellSize = height / leebitImg.GRID_SIZE;
  }
  
  //display rabbit
  if (leebitImg.GRID_SIZE >= 40) {
    leebitImg.img.resize(leebitImg.GRID_SIZE, leebitImg.GRID_SIZE);
    leebitImg.imgColour = leebitImg.getColors(leebitImg.GRID_SIZE, leebitImg.GRID_SIZE);
    leebitImg.blockNumber = leebitImg.numberImage(leebitImg.GRID_SIZE, leebitImg.GRID_SIZE);
  }
  else {
    leebitImg = leebitImg.generateEmptyGrid(leebitImg.GRID_SIZE, leebitImg.GRID_SIZE);
  }


  //dwaekki
  //create pig-rabbit from class
  dwaekkiImg = new Dwaekki(dwaekki);
  dwaekkiImg.grid = dwaekkiImg.generateEmptyGrid(dwaekkiImg.GRID_SIZE, dwaekkiImg.GRID_SIZE);
   
  //set grid size
  if (height > width) {
    dwaekkiImg.cellSize = width / dwaekkiImg.GRID_SIZE;
  }
  else {
    dwaekkiImg.cellSize = height / dwaekkiImg.GRID_SIZE;
  }
  
  //display pig-rabbit
  if (dwaekkiImg.GRID_SIZE >= 40) {
    dwaekkiImg.img.resize(dwaekkiImg.GRID_SIZE, dwaekkiImg.GRID_SIZE);
    dwaekkiImg.imgColour = dwaekkiImg.getColors(dwaekkiImg.GRID_SIZE, dwaekkiImg.GRID_SIZE);
    dwaekkiImg.blockNumber = dwaekkiImg.numberImage(dwaekkiImg.GRID_SIZE, dwaekkiImg.GRID_SIZE);
  }
  else {
    dwaekkiImg = dwaekkiImg.generateEmptyGrid(dwaekkiImg.GRID_SIZE, dwaekkiImg.GRID_SIZE);
  }


  //jiniret
  //create ferret from class
  jiniretImg = new Jiniret(jiniret);
  jiniretImg.grid = jiniretImg.generateEmptyGrid(jiniretImg.GRID_SIZE, jiniretImg.GRID_SIZE);
   
  //set grid size
  if (height > width) {
    jiniretImg.cellSize = width / jiniretImg.GRID_SIZE;
  }
  else {
    jiniretImg.cellSize = height / jiniretImg.GRID_SIZE;
  }
  
  //display ferret
  if (jiniretImg.GRID_SIZE >= 40) {
    jiniretImg.img.resize(jiniretImg.GRID_SIZE, jiniretImg.GRID_SIZE);
    jiniretImg.imgColour = jiniretImg.getColors(jiniretImg.GRID_SIZE, jiniretImg.GRID_SIZE);
    jiniretImg.blockNumber = jiniretImg.numberImage(jiniretImg.GRID_SIZE, jiniretImg.GRID_SIZE);
  }
  else {
    jiniretImg = jiniretImg.generateEmptyGrid(jiniretImg.GRID_SIZE, jiniretImg.GRID_SIZE);
  }


  //quokka
  //create quokka from class
  quokkaImg = new Quokka(quokka);
  quokkaImg.grid = quokkaImg.generateEmptyGrid(quokkaImg.GRID_SIZE, quokkaImg.GRID_SIZE);
   
  //set grid size
  if (height > width) {
    quokkaImg.cellSize = width / quokkaImg.GRID_SIZE;
  }
  else {
    quokkaImg.cellSize = height / quokkaImg.GRID_SIZE;
  }
  
  //display quokka
  if (quokkaImg.GRID_SIZE >= 40) {
    quokkaImg.img.resize(quokkaImg.GRID_SIZE, quokkaImg.GRID_SIZE);
    quokkaImg.imgColour = quokkaImg.getColors(quokkaImg.GRID_SIZE, quokkaImg.GRID_SIZE);
    quokkaImg.blockNumber = quokkaImg.numberImage(quokkaImg.GRID_SIZE, quokkaImg.GRID_SIZE);
  }
  else {
    quokkaImg = quokkaImg.generateEmptyGrid(quokkaImg.GRID_SIZE, quokkaImg.GRID_SIZE);
  }


  //chick
  //create chick from class
  bbokariImg = new Bbokari(bbokari);
  bbokariImg.grid = bbokariImg.generateEmptyGrid(bbokariImg.GRID_SIZE,bbokariImg.GRID_SIZE);
     
  //set grid size
  if (height > width) {
    bbokariImg.cellSize = width / bbokariImg.GRID_SIZE;
  }
  else {
    bbokariImg.cellSize = height / bbokariImg.GRID_SIZE;
  }
    
  //display chick
  if (bbokariImg.GRID_SIZE >= 40) {
    bbokariImg.img.resize(bbokariImg.GRID_SIZE, bbokariImg.GRID_SIZE);
    bbokariImg.imgColour = bbokariImg.getColors(bbokariImg.GRID_SIZE, bbokariImg.GRID_SIZE);
    bbokariImg.blockNumber = bbokariImg.numberImage(bbokariImg.GRID_SIZE, bbokariImg.GRID_SIZE);
  }
  else {
    bbokariImg = bbokariImg.generateEmptyGrid(bbokariImg.GRID_SIZE, bbokariImg.GRID_SIZE);
  }


  //puppy
  //create puppy from class
  puppymImg = new Puppym(puppym);
  puppymImg.grid = puppymImg.generateEmptyGrid(puppymImg.GRID_SIZE, puppymImg.GRID_SIZE);
   
  //set grid size
  if (height > width) {
    puppymImg.cellSize = width / puppymImg.GRID_SIZE;
  }
  else {
    puppymImg.cellSize = height / puppymImg.GRID_SIZE;
  }
  
  //display puppy
  if (puppymImg.GRID_SIZE >= 40) {
    puppymImg.img.resize(puppymImg.GRID_SIZE, puppymImg.GRID_SIZE);
    puppymImg.imgColour = puppymImg.getColors(puppymImg.GRID_SIZE, puppymImg.GRID_SIZE);
    puppymImg.blockNumber = puppymImg.numberImage(puppymImg.GRID_SIZE, puppymImg.GRID_SIZE);
  }
  else {
    puppymImg = puppymImg.generateEmptyGrid(puppymImg.GRID_SIZE, puppymImg.GRID_SIZE);
  } 


  //fox
  //create fox from class
  foxinyImg = new Foxiny(foxiny);
  foxinyImg.grid = foxinyImg.generateEmptyGrid(foxinyImg.GRID_SIZE, foxinyImg.GRID_SIZE);
 
  //set grid size
  if (height > width) {
    foxinyImg.cellSize = width / foxinyImg.GRID_SIZE;
  }
  else {
    foxinyImg.cellSize = height / foxinyImg.GRID_SIZE;
  }

  //display fox
  if (foxinyImg.GRID_SIZE >= 40) {
    foxinyImg.img.resize(foxinyImg.GRID_SIZE, foxinyImg.GRID_SIZE);
    foxinyImg.imgColour = foxinyImg.getColors(foxinyImg.GRID_SIZE, foxinyImg.GRID_SIZE);
    foxinyImg.blockNumber = foxinyImg.numberImage(foxinyImg.GRID_SIZE, foxinyImg.GRID_SIZE);
  }
  else {
    foxinyImg = foxinyImg.generateEmptyGrid(foxinyImg.GRID_SIZE, foxinyImg.GRID_SIZE);
  }
}

//start screen
function startScreen() {
  if (state === "start"){
    background("white");

  }
}

function endScreen() {
  if (state === "end"){
    background("black");

  }
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