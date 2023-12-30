// Paint/Colour by Number
// Alexandra Zhu
// Date
//
// Extra for Experts:
// - https://www.geeksforgeeks.org/flood-fill-algorithm-implement-fill-paint/ (for floodfill)
// - Erika helped get flood fill to work


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
    this.stateC;
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
    return this.blockNumber[y][x];
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
        //white then fill in image
        if (state1 !== "foxiny"){
          //white
          if (this.imgColour[y][x][0] >= 210 && this.imgColour[y][x][1] >= 210 && this.imgColour[y][x][2] >= 210
            || this.imgColour[y][x][3] < 40) {
            blocknum[y].push(0);
          }
  
          //colours for specific images
          else if (state1 === "wolfchan"){
            //light grey
            if (this.imgColour[y][x][0] > 142 && this.imgColour[y][x][1] > 167 && this.imgColour[y][x][2] > 167) {
              blocknum[y].push(1);
            }
      
            //dark grey
            else {
              blocknum[y].push(2);
            }
          }
  
          else if (state1 === "leebit"){
            //light grey
            if (this.imgColour[y][x][0] < 220 && this.imgColour[y][x][0] >= 100 &&
              this.imgColour[y][x][1] < 220 && this.imgColour[y][x][1] >= 100 &&
              this.imgColour[y][x][2] < 220 && this.imgColour[y][x][2] >= 100) {
              blocknum[y].push(1);
            }
  
            //pink 
            else if (this.imgColour[y][x][0] > 230 && this.imgColour[y][x][1] > 170 && this.imgColour[y][x][2] > 180) {
            blocknum[y].push(2);
            }
  
            //black
            else if (this.imgColour[y][x][0] <= 50 && this.imgColour[y][x][1] <= 50 && this.imgColour[y][x][2] <= 50
                    || this.imgColour[y][x][3] >= 200) {
              blocknum[y].push(3);
            }
          }
  
          else if (state1 === "dwaekki"){
            //pink 
            if (this.imgColour[y][x][0] > 150 && this.imgColour[y][x][1] > 150 && this.imgColour[y][x][2] > 75) {
              blocknum[y].push(1);
            }
            
            //black
            else if (this.imgColour[y][x][0] <= 50 && this.imgColour[y][x][1] <= 50 && this.imgColour[y][x][2] <= 50
                    || this.imgColour[y][x][3] >= 100) {
              blocknum[y].push(2);
            }
          }
  
          else if (state1 === "jiniret"){
            //pink 
            if (this.imgColour[y][x][0] > 240 && this.imgColour[y][x][1] > 170 && this.imgColour[y][x][2] > 195) {
            blocknum[y].push(1);
            }
  
            //black
            else if (this.imgColour[y][x][0] <= 50 && this.imgColour[y][x][1] <= 50 && this.imgColour[y][x][2] <= 50
                    || this.imgColour[y][x][3] >= 200) {
              blocknum[y].push(2);
            }
          }
  
          else if (state1 === "quokka"){
            //light brown
            if (this.imgColour[y][x][0] > 210 && this.imgColour[y][x][1] > 115 && this.imgColour[y][x][2] > 70) {
              blocknum[y].push(1);
            }
  
            //brown
            else if (this.imgColour[y][x][0] < 245 && this.imgColour[y][x][1] < 155 && this.imgColour[y][x][2] > 50) {
              blocknum[y].push(2);
            }
  
            //black
            else if (this.imgColour[y][x][0] <= 50 && this.imgColour[y][x][1] <= 50 && this.imgColour[y][x][2] <= 50
                    || this.imgColour[y][x][3] >= 200) {
              blocknum[y].push(3);
            }
          }
  
          else if (state1 === "bbokari"){
            //yellow
            if (this.imgColour[y][x][0] > 100 && this.imgColour[y][x][1] > 80 && this.imgColour[y][x][2] > 40) {
              blocknum[y].push(1);
            }
            
            //black
            else if (this.imgColour[y][x][0] <= 50 && this.imgColour[y][x][1] <= 50 && this.imgColour[y][x][2] <= 50
                     || this.imgColour[y][x][3] >= 200) {
              blocknum[y].push(2);
            }
          }
  
          else if (state1 === "puppym"){
            //tan
            if (this.imgColour[y][x][0] > 250 && this.imgColour[y][x][1] > 200 && this.imgColour[y][x][2] > 170) {
              blocknum[y].push(1);
            }
            
            //brown
            else if (this.imgColour[y][x][0] > 210 && this.imgColour[y][x][1] > 190 && this.imgColour[y][x][2] > 170
                     || this.imgColour[y][x][3] >= 200) {
                blocknum[y].push(2);
            }
          }
        }

        //requires white to be looked for after tan due to colors being similar
        else if (state1 === "foxiny") {
          //tan
          if (this.imgColour[y][x][0] > 235 && this.imgColour[y][x][1] > 180 && this.imgColour[y][x][2] > 175) {
            blocknum[y].push(1);
          }

          else if (this.imgColour[y][x][0] >= 210 && this.imgColour[y][x][1] >= 210 && this.imgColour[y][x][2] >= 210
            || this.imgColour[y][x][3] < 40) {
            blocknum[y].push(0);
          }

          //brown
          else if (this.imgColour[y][x][0] >= 230 && this.imgColour[y][x][1] >=220 && this.imgColour[y][x][2] >= 210
                   || this.imgColour[y][x][3] >= 200) {
            blocknum[y].push(2);
          }

          //cover missing cases
          else{
            blocknum[y].push(1);
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

            //colours specific to each image
            //wolfchan
            else if (state1 === "wolfchan"){
              if (this.blockNumber[y][x] === 12) {
                fill("lightgrey");
              }
              else if (this.blockNumber[y][x] === 22) {
                fill("grey");
              }
            }

            //leebit
            else if (state1 === "leebit"){
              if (this.blockNumber[y][x] === 12) {
                fill("lightgrey");
              }
              else if (this.blockNumber[y][x] === 22) {
                fill("pink");
              }
              else if (this.blockNumber[y][x] === 33) {
                fill("black");
              }
            }

            //dwaekki
            else if (state1 === "dwaekki"){
              if (this.blockNumber[y][x] === 12) {
                fill("pink");
              }
              else if (this.blockNumber[y][x] === 22) {
                fill("black");
              }
            }

            //jiniret
            else if (state1 === "jiniret"){
              if (this.blockNumber[y][x] === 12) {
                fill("pink");
              }
              else if (this.blockNumber[y][x] === 22) {
                fill("black");
              }
            }

            //quokka
            else if (state1 === "quokka"){
              if (this.blockNumber[y][x] === 12) {
                fill(244,164,96);
              }
              else if (this.blockNumber[y][x] === 22) {
                fill(204, 119, 34);
              }
              else if (this.blockNumber[y][x] === 33) {
                fill("black");
              }
            }

            //bbokari
            else if (state1 === "bbokari"){
              if (this.blockNumber[y][x] === 12) {
                fill("yellow");
              }
              else if (this.blockNumber[y][x] === 22) {
                fill("black");
              }
            }

            //puppym
            else  if (state1 === "puppym"){
              if (this.blockNumber[y][x] === 12) {
                fill(242, 210, 189);
              }
              else if (this.blockNumber[y][x] === 22) {
                fill(128, 70, 27);
              }
            }

            //foxiny
            else if (state1 === "foxiny"){
              if (this.blockNumber[y][x] === 12) {
                fill(255,248,220);
              }
              else if (this.blockNumber[y][x] === 22) {
                fill(123, 63, 0);
              }
            }

            //draw
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
    skzooImageKeys();
  }
  //user
  if (state === "userImage"){
    userImageKeys();
  }
}

//fill in colour and select options
function mousePressed() {
  //colour cat
  if (state === "cat") {
    let y = Math.floor(mouseY / catImage.cellSize);
    let x = Math.floor(mouseX / catImage.cellSize);

    if (mouseButton === CENTER){
      floodFill(x, y, catImage.displayGrid, catImage.stateC);
    }
    else{
      catImage.toggleCell(x, y);   //current cell
    }
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
  if (state === "end"){
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
    else if (state1 === "jiniret"){
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

    skzoo.grid = skzoo.generateEmptyGrid(skzoo.GRID_SIZE, skzoo.GRID_SIZE);
      
    //set grid size
    if (height > width) {
      skzoo.cellSize = width / skzoo.GRID_SIZE;
    }
    else {
      skzoo.cellSize = height / skzoo.GRID_SIZE;
    }
    //display animal
    if (skzoo.GRID_SIZE >= 40) {
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
    if (state === "cat"){
      catImage.displayGrid();
    }
    if (state === "skzoo"){
      skzoo.displayGrid();
    }
  }
}

//check done
function doneColoring() {
  if (state === "cat"){
    for (let y = 0; y < catImage.GRID_SIZE; y++){
      for (let x = 0; x < catImage.GRID_SIZE; x++){
      
      }
    }
  }
  if (state === "skzoo"){
    skzoo.displayGrid();
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

//keys for skzoo
function skzooImageKeys() {
  if (key === "0") {
    skzoo.colour = 0;
  }
  else if (key === "1") {
    skzoo.colour = 1;
  }
  else if (key === "2") {
    skzoo.colour = 2;
  }
  else if (key === "3") {
    skzoo.colour = 3;
  }
}

// button pushed change state and create coloring image
function buttonPushed() {
  //cat
  if (mouseX > change1-diameter/2 && mouseX < change1+diameter/2 && mouseY < h+diameter/2 && mouseY > h-diameter/2) {
    //change state
    state = "cat";

    //set up image
    background("white");
    setupImage();
  }
  //wolf
  else if (mouseX > change1-diameter/2 && mouseX < change1+diameter/2 && mouseY < h1+diameter/2 && mouseY > h1-diameter/2) {
    //change state
    state = "skzoo";
    state1 = "wolfchan";

    //set up image
    background("white");
    setupImage();
  }
  //rabbit
  else if (mouseX > change2-diameter/2 && mouseX < change2+diameter/2 && mouseY < h+diameter/2 && mouseY > h-diameter/2) {
    //change state
    state = "skzoo";
    state1 = "leebit";

    //set up image
    background("white");
    setupImage();
  }
  //pig-rabbit
  else if (mouseX > change2-diameter/2 && mouseX < change2+diameter/2 && mouseY < h1+diameter/2 && mouseY > h1-diameter/2) {
    //change state
    state = "skzoo";
    state1 = "dwaekki";

    //set up image
    background("white");
    setupImage();
  }
  //ferret
  else if (mouseX > change3-diameter/2 && mouseX < change3+diameter/2 && mouseY < h+diameter/2 && mouseY > h-diameter/2) {
    //change state
    state = "skzoo";
    state1 = "jiniret";
    
    //set up image
    background("white");
    setupImage();
  }
  //quokka
  else if (mouseX > change3-diameter/2 && mouseX < change3+diameter/2 && mouseY < h1+diameter/2 && mouseY > h1-diameter/2) {
    //change state
    state = "skzoo";
    state1 = "quokka";
    
    //set up image
    background("white");
    setupImage();
  }
  //chick
  else if (mouseX > change4-diameter/2 && mouseX < change4+diameter/2 && mouseY < h+diameter/2 && mouseY > h-diameter/2) {
    //change state
    state = "skzoo";
    state1 = "bbokari";
    
    //set up image
    background("white");
    setupImage();
  }
  //puppy
  else if (mouseX > change4-diameter/2 && mouseX < change4+diameter/2 && mouseY < h1+diameter/2 && mouseY > h1-diameter/2) {
    //change state
    state = "skzoo";
    state1 = "puppym";
    
    //set up image
    background("white");
    setupImage();
  }
  //fennec fox
  else if (mouseX > change5-diameter/2 && mouseX < change5+diameter/2 && mouseY < h+diameter/2 && mouseY > h-diameter/2) {
    //change state
    state = "skzoo";
    state1 = "foxiny";
    
    //set up image
    background("white");
    setupImage();
  }
  //user
  else if (mouseX > change5-diameter/2 && mouseX < change5+diameter/2 && mouseY < h1+diameter/2 && mouseY > h1-diameter/2) {
    //change state
    state = "userimage";
    
    //set up image
    background("white");
    setupImage();
  }
  return state;
}

//floodfill
//opperation
function floodFill(x, y, grid, stateC) {

  //base case
  if (x<0 || x>= grid.GRID_SIZE || y<0 || y >= grid.GRID_SIZE || grid[y][x] !== stateC){
    return;
  }

  else{
    //look at neighbours
    //north
    floodFillTill(x, y - 1, grid, stateC);
    //south
    floodFillTill(x, y + 1, grid, stateC);
    //east
    floodFillTill(x + 1, y, grid, stateC);
    //west
    floodFillTill(x - 1, y, grid, stateC);
  }
}

//call
function floodFillStart(x, y, grid, stateC) {
  if (grid[y][x] !== stateC){
    floodFill(x, y, grid, stateC);  
  } 
}
