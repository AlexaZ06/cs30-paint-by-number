// Paint/Colour by Number
// Alexandra Zhu
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//line 459 in  wolfchan class throws an error 

//set variables
let state = "start";
let state1 = "";
let diameter;
let change1;
let change2;
let change3;
let change4;
let change5;
let h;
let h1;

//colouring image
let cat;
let catImage;
let skzoo;
let wolfChan;
let leeBit;
let dwaekki;
let jiniret;
let quokka;
let bbokari;
let puppym;
let foxiny;

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
    return super.generateEmptyGrid(cols, rows);
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

class Skzoo extends Gridcat {
  constructor(img) {
    super(img);
  }

  //create grid
  generateEmptyGrid(cols,rows) {
    return super.generateEmptyGrid(cols, rows);
  }

  //get colours 
  getColors(cols, rows) {
    return super.getColors(cols,rows);
  }

  //assign numbers to colours
  numberImage(cols, rows) {
    let blocknum = [];
    for (let y = 0; y < rows; y++) {
      blocknum.push([]);
      for (let x = 0; x < cols; x++) {
        console.log(this);
        //white
        if (this.imgColour[y][x][0] >= 210 && this.imgColour[y][x][1] >= 210 && this.imgColour[y][x][2] >= 210
          || this.imgColour[y][x][3] <= 40) {
          blocknum[y].push(0);
        }
  
        //pink 
        else if (this.imgColour[y][x][0] > this.imgColour[y][x][1] && this.imgColour[y][x][0] > this.imgColour[y][x][2]) {
          blocknum[y].push(1);
        }
        //black
        else if (this.imgColour[y][x][0] <= 40 && this.imgColour[y][x][1] <= 40 && this.imgColour[y][x][2] <= 40
          || this.imgColour[y][x][3] >= 200) {
          blocknum[y].push(2);
        }

        //colours for specific images
        if (state1 === "wolfchan"){
          //light grey
          if (this.imgColour[y][x][0] < 210 && this.imgColour[y][x][0] >= 140 &&
            this.imgColour[y][x][1] < 210 && this.imgColour[y][x][1] >= 140 &&
            this.imgColour[y][x][2] < 210 && this.imgColour[y][x][2] >= 140) {
            blocknum[y].push(3);
          }
    
          //dark grey
          else if (this.imgColour[y][x][0] < 140 && this.imgColour[y][x][0] > 40 &&
            this.imgColour[y][x][1] < 140 && this.imgColour[y][x][1] > 40 &&
            this.imgColour[y][x][2] < 140 && this.imgColour[y][x][2] > 40) {
            blocknum[y].push(4);
          }
        }

        else if (state1 === "leebit" || state1 === "jiniret"){
          //light grey
          if (this.imgColour[y][x][0] < 210 && this.imgColour[y][x][0] >= 140 &&
            this.imgColour[y][x][1] < 210 && this.imgColour[y][x][1] >= 140 &&
            this.imgColour[y][x][2] < 210 && this.imgColour[y][x][2] >= 140) {
            blocknum[y].push(3);
          }
        }

        else if (state1 === "dwaekki"){
          //darker pink
          if (this.imgColour[y][x][0] > this.imgColour[y][x][1] &&
          this.imgColour[y][x][0] > this.imgColour[y][x][2] &&
          this.imgColour[y][x][2] > this.imgColour[y][x][1]) {
            blocknum[y].push(3);
          }

        }

        else if (state1 === "quokka"){
          //light brown
          if (this.imgColour[y][x][0] < 200 && this.imgColour[y][x][0] >= 170 &&
          this.imgColour[y][x][1] < 170 && this.imgColour[y][x][1] >= 140 &&
          this.imgColour[y][x][2] < 140 && this.imgColour[y][x][2] >= 120) {
            blocknum[y].push(3);
          }

          //Brown
          else if (this.imgColour[y][x][0] < 170 && this.imgColour[y][x][0] >= 100 &&
          this.imgColour[y][x][1] < 100 && this.imgColour[y][x][1] >= 60 &&
          this.imgColour[y][x][2] < 60 && this.imgColour[y][x][2] >= 0) {
            blocknum[y].push(4);
          }
        }

        else if (state1 === "bbokari"){
          //pastel yellow
          if (this.imgColour[y][x][0] < 200 && this.imgColour[y][x][0] >= 170 &&
          this.imgColour[y][x][1] < 170 && this.imgColour[y][x][1] >= 140 &&
          this.imgColour[y][x][2] < 160) {
            blocknum[y].push(3);
          }

          //yellow
          else if (this.imgColour[y][x][0] > 210 && this.imgColour[y][x][1] > 210 &&
          this.imgColour[y][x][0] > this.imagColour[y][x][2] &&
          this.imgColour[y][x][1] > this.imgColour[y][x][2] &&
          this.imgColour[y][x][2] < 160) {
            blocknum[y].push(4);
          }
        }

        else if (state1 === "puppym"){
          //tan
          if (this.imgColour[y][x][0] > 200 &&
          this.imgColour[y][x][1] < 190 && this.imgColour[y][x][1] >= 150 &&
          this.imgColour[y][x][2] < 150 && this.imgColour[y][x][2] >= 130) {
            blocknum[y].push(3);
          }

          //light tan
          else if (this.imgColour[y][x][0] > 230 &&
          this.imgColour[y][x][1] < 200 && this.imagColour[y][x][1] >= 180 &&
          this.imgColour[y][x][2] < 180 && this.imgColour[y][x][2] >= 160) {
            blocknum[y].push(4);
          }
        }

        else{
        //tan
          if (this.imgColour[y][x][0] > 200 &&
          this.imgColour[y][x][1] < 190 && this.imgColour[y][x][1] >= 150 &&
          this.imgColour[y][x][2] < 150 && this.imgColour[y][x][2] >= 130) {
            blocknum[y].push(3);
          }

          //light tan
          else if (this.imgColour[y][x][0] > 230 &&
          this.imgColour[y][x][1] < 200 && this.imagColour[y][x][1] >= 180 &&
          this.imgColour[y][x][2] < 180 && this.imgColour[y][x][2] >= 160) {
            blocknum[y].push(4);
          }

          //Brown
          else if (this.imgColour[y][x][0] < 170 && this.imgColour[y][x][0] >= 100 &&
          this.imgColour[y][x][1] < 100 && this.imgColour[y][x][1] >= 60 &&
          this.imgColour[y][x][2] < 60 && this.imgColour[y][x][2] >= 0) {
            blocknum[y].push(5);
          }
        }
      }
    }
    return blocknum;
  }

  toggleCell(x, y){
    super.toggleCell(x,y);
  }

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
              fill("pink");
            }
            else if (this.blockNumber[y][x] === 22) {
              fill("black");
            }

            //colours specific to each image
            if (state1 === "wolfchan"){
              if (this.blockNumber[y][x] === 33) {
                fill("lightgrey");
              }
              else if (this.blockNumber[y][x] === 44) {
                fill("grey");
              }
            }
            if (state1 === "leebit" || state1 === "jiniret"){
              if (this.blockNumber[y][x] === 33) {
                fill("lightgrey");
              }
            }
            if (state1 === "dwaekki"){
              if (this.blockNumber[y][x] === 33) {
                fill("darkpink");
              }
            }
            if (state1 === "quokka"){
              if (this.blockNumber[y][x] === 33) {
                fill("lightbrown");
              }
              else if (this.blockNumber[y][x] === 44) {
                fill("brown");
              }
            }
            if (state1 === "bbokari"){
              if (this.blockNumber[y][x] === 33) {
                fill("lightyellow");
              }
              else if (this.blockNumber[y][x] === 44) {
                fill("yellow");
              }
            }
            if (state1 === "puppym"){
              if (this.blockNumber[y][x] === 33) {
                fill("tan");
              }
              else if (this.blockNumber[y][x] === 44) {
                fill("lighttan");
              }
            }
            if (state1 === "foxiny"){
              if (this.blockNumber[y][x] === 33) {
                fill("tan");
              }
              else if (this.blockNumber[y][x] === 44) {
                fill("lighttan");
              }
              else if (this.blockNumber[y][x] === 55) {
                fill("brown");
              }
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
  cat = loadImage("assets/cat.png");
  wolfChan = loadImage("assets/WolfChan.png");
  leeBit = loadImage("assets/Leebit.png");
  dwaekki = loadImage("assets/Dwaekki.png");
  jiniret = loadImage("assets/Jiniret.png");
  quokka = loadImage("assets/Quokka.png");
  bbokari = loadImage("assets/Bbokari.png");
  puppym = loadImage("assets/PuppyM.png");
  foxiny = loadImage("assets/Foxiny.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  if (state === "start"){
    startScreen();
  }
  if (state === "cat"){
    catImage.displayGrid();
  }
  if (state === "skzoo"){
    skzoo.displayGrid();
  }
  if (state === "end"){
    endScreen();
  }
}

//change colour of fill base on key
function keyTyped() {
  //cat
  if (state === "cat"){
    catImageKeys();
  }
  //skzoo
  if (state === "skzoo"){
    // skzooImageKeys();
  }
  //user
}

//fill in colour and select options
function mousePressed() {
  //colour cat
  if (state === "cat") {
    let y = Math.floor(mouseY / catImage.cellSize);
    let x = Math.floor(mouseX / catImage.cellSize);
  
    catImage.toggleCell(x, y);   //current cell
  }
  //colour other images
  if (state === "skzoo"){
    let y = Math.floor(mouseY / skzoo.cellSize);
    let x = Math.floor(mouseX / skzoo.cellSize);

    skzoo.toggleCell(x,y);
  }
  //select stract options
  if (state === "start"){
    buttonPushed();
  }
  //select end options
  if (state === "start"){
    // backToStart();
  }
}


//set up colouring image
function setupImage() {
  if (state === "cat") {
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
  }
  if (state === "skzoo"){
    if (state1 === "wolfchan"){
      skzoo = new Skzoo(wolfChan);
    }
    else if (state1 === "leebit"){
      skzoo = new Skzoo(leeBit);
    }
    else if (state1 === "dwaekki"){
      skzoo = new Skzoo(dwaekki);
    }
    else if (state1 === "jineret"){
      skzoo = new Skzoo(jiniret);
    }
    else if (state1 === "quokka"){
      skzoo = new Skzoo(quokka);
    }
    else if (state1 === "bbokari"){
      skzoo = new Skzoo(bbokari);
    }
    else if (state1 === "puppym"){
      skzoo = new Skzoo(puppym);
    }
    else if (state1 === "foxiny"){
      skzoo = new Skzoo(foxiny);
    }

    // console.log(skzoo)
    skzoo.grid = skzoo.generateEmptyGrid(skzoo.GRID_SIZE, skzoo.GRID_SIZE);
    // console.log(skzoo)
      
    //set grid size
    if (height > width) {
      skzoo.cellSize = width / skzoo.GRID_SIZE;
    }
    else {
      skzoo.cellSize = height / skzoo.GRID_SIZE;
    }
    //display animal
    if (skzoo.GRID_SIZE >= 40) {
      // console.log('here')
      skzoo.img.resize(skzoo.GRID_SIZE, skzoo.GRID_SIZE);
      skzoo.imgColour = skzoo.getColors(skzoo.GRID_SIZE, skzoo.GRID_SIZE);
      skzoo.blockNumber = skzoo.numberImage(skzoo.GRID_SIZE, skzoo.GRID_SIZE);
    }
    else {
      skzoo = skzoo.generateEmptyGrid(skzoo.GRID_SIZE, skzoo.GRID_SIZE);
    }
  }

}

//start screen
function startScreen() {
  if (state === "start"){
    diameter = width/15;
    let w = (width-diameter)/5;
    change1 = w-diameter;
    change2 = w*2-diameter;
    change3 = w*3-diameter;
    change4 = w*4-diameter;
    change5 = w*5-diameter;
    h = height/4;
    h1 = h*3;
    background("white");
    fill("lightblue");

    //cat
    circle(change1, h , diameter);

    //wolf
    circle(change2, h, diameter);

    //rabbit
    circle(change3, h, diameter);

    //pig-rabbit
    circle(change4, h, diameter);

    //ferret
    circle(change5, h, diameter);

    //quokka
    circle(change1, h*3, diameter);
 
    //chick
    circle(change2, h*3, diameter);

    //puppy
    circle(change3, h*3, diameter);

    //fox
    circle(change4, h*3, diameter);

    //grid
    circle(change5, h*3, diameter);
  }
}

function endScreen() {
  if (state === "end"){
    background("black");
  }
}

//keys for cat
function catImageKeys() {
  console.log("here");
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
  console.log(catImage.colour);
}

// button pushed change state and create coloring image
function buttonPushed() {
  if (mouseX > change1-diameter/2 && mouseX < change1+diameter/2 && mouseY < h+diameter/2 && mouseY > h-diameter/2) {
    //change state
    state = "cat";

    //set up image
    background("white");
    setupImage();
  }
  else if (mouseX > change1-diameter/2 && mouseX < change1+diameter/2 && mouseY < h1+diameter/2 && mouseY > h1-diameter/2) {
    //change state
    state = "skzoo";
    state1 = "wolfchan";

    //set up image
    background("white");
    setupImage();
  }
  else if (mouseX > change2-diameter/2 && mouseX < change2+diameter/2 && mouseY < h+diameter/2 && mouseY > h-diameter/2) {
    //change state
    state = "skzoo";
    state1 = "leebit";

    //set up image
    background("white");
    setupImage();
  }
  else if (mouseX > change2-diameter/2 && mouseX < change2+diameter/2 && mouseY < h1+diameter/2 && mouseY > h1-diameter/2) {
    //change state
    state = "skzoo";
    state1 = "dwaekki";

    //set up image
    background("white");
    setupImage();
  }
  else if (mouseX > change3-diameter/2 && mouseX < change3+diameter/2 && mouseY < h+diameter/2 && mouseY > h-diameter/2) {
    //change state
    state = "skzoo";
    state1 = "jiniret";
    
    //set up image
    background("white");
    setupImage();
  }
  else if (mouseX > change3-diameter/2 && mouseX < change3+diameter/2 && mouseY < h1+diameter/2 && mouseY > h1-diameter/2) {
    //change state
    state = "skzoo";
    state1 = "quokka";
    
    //set up image
    background("white");
    setupImage();
  }
  else if (mouseX > change4-diameter/2 && mouseX < change4+diameter/2 && mouseY < h+diameter/2 && mouseY > h-diameter/2) {
    //change state
    state = "skzoo";
    state1 = "bbokari";
    
    //set up image
    background("white");
    setupImage();
  }
  else if (mouseX > change4-diameter/2 && mouseX < change4+diameter/2 && mouseY < h1+diameter/2 && mouseY > h1-diameter/2) {
    //change state
    state = "skzoo";
    state1 = "puppym";
    
    //set up image
    background("white");
    setupImage();
  }
  else if (mouseX > change5-diameter/2 && mouseX < change5+diameter/2 && mouseY < h+diameter/2 && mouseY > h-diameter/2) {
    //change state
    state = "skzoo";
    state1 = "foxiny";
    
    //set up image
    background("white");
    setupImage();
  }
  else if (mouseX > change5-diameter/2 && mouseX < change5+diameter/2 && mouseY < h1+diameter/2 && mouseY > h1-diameter/2) {
    //change state
    state = "userimage";
    
    //set up image
    background("white");
    setupImage();
  }
  return state;
}