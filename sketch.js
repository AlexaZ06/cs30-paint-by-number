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
let radius;
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

class Skzoo extends Gridcat {
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
  
        //pink 
        else if (this.imgColour[y][x][0] > this.imgColour[y][x][1] && this.imgColour[y][x][0] > this.imgColour[y][x][2]) {
          blocknum[y].push(3);
        }
        //black
        else if (this.imgColour[y][x][0] <= 40 && this.imgColour[y][x][1] <= 40 && this.imgColour[y][x][2] <= 40
          || this.imgColour[y][x][3] >= 200) {
          blocknum[y].push(4);
        }

        if (this.img === wolfChan){
          //light grey
          if (this.imgColour[y][x][0] < 210 && this.imgColour[y][x][0] >= 140 &&
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
        }

        else if (this.img === leeBit || this.img === jiniret){
          //light grey
          if (this.imgColour[y][x][0] < 210 && this.imgColour[y][x][0] >= 140 &&
            this.imgColour[y][x][1] < 210 && this.imgColour[y][x][1] >= 140 &&
            this.imgColour[y][x][2] < 210 && this.imgColour[y][x][2] >= 140) {
            blocknum[y].push(1);
          }
        }

        else if (this.img === dwaekki){
          //darker pink
          if (this.imgColour[y][x][0] > this.imgColour[y][x][1] &&
          this.imgColour[y][x][0] > this.imgColour[y][x][2] &&
          this.imgColour[y][x][2] > this.imgColour[y][x][1]) {
            blocknum[y].push(1);
          }

        }

        else if (this.img === quokka){
          //light brown
          if (this.imgColour[y][x][0] < 200 && this.imgColour[y][x][0] >= 170 &&
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
        }

        else if (this.img === bbokari){
          //pastel yellow
          if (this.imgColour[y][x][0] < 200 && this.imgColour[y][x][0] >= 170 &&
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
        }

        else if (this.img === puppym){
          //tan
          if (this.imgColour[y][x][0] > 200 &&
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
        }

        else{
        //tan
          if (this.imgColour[y][x][0] > 200 &&
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
        }
      }
    }
    return blocknum;
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
    setupImage();
    catImage.displayGrid();
  }
  if (state === "skzoo"){
    setupImage();
    skzoo.displayGrid();
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
  if (state === "cat") {
    let y = Math.floor(mouseY / catImage.cellSize);
    let x = Math.floor(mouseX / catImage.cellSize);
  
    catImage.toggleCell(x, y);   //current cell
  }
  if (state === "skzoo"){
    let y = Math.floor(mouseY / skzoo.cellSize);
    let x = Math.floor(mouseX / skzoo.cellSize);

    skzoo.toggleCell(x,y);
  }
  if (state === "start"){
    buttonPushed();
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
      state = "skzoo";
    }
    else if (state1 === "leebit"){
      skzoo = new Skzoo(leeBit);
      state = "skzoo";
    }
    else if (state1 === "dwaekki"){
      skzoo = new Skzoo(dwaekki);
      state = "skzoo";
    }
    else if (state1 === "jineret"){
      skzoo = new Skzoo(jiniret);
      state = "skzoo";
    }
    else if (state1 === "quokka"){
      skzoo = new Skzoo(quokka);
      state = "skzoo";
    }
    else if (state1 === "bbokari"){
      skzoo = new Skzoo(bbokari);
      state = "skzoo";
    }
    else if (state1 === "puppym"){
      skzoo = new Skzoo(puppym);
      state = "skzoo";
    }
    else if (state1 === "foxiny"){
      skzoo = new Skzoo(foxiny);
      state = "skzoo";
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
    radius = width/15;
    let w = (width-radius)/5;
    change1 = w-radius;
    change2 = w*2-radius;
    change3 = w*3-radius;
    change4 = w*4-radius;
    change5 = w*5-radius;
    let h = height/4;
    h1 = h*3;
    background("white");
    fill("lightblue");

    //cat
    circle(change1, h , radius);

    //wolf
    circle(change2, h, radius);

    //rabbit
    circle(change3, h, radius);

    //pig-rabbit
    circle(change4, h, radius);

    //ferret
    circle(change5, h, radius);

    //quokka
    circle(change1, h*3, radius);
 
    //chick
    circle(change2, h*3, radius);

    //puppy
    circle(change3, h*3, radius);

    //fox
    circle(change4, h*3, radius);

    //grid
    circle(change5, h*3, radius);
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

function buttonPushed() {
  if (mouseX > change1-radius/2 && mouseX < change1+radius/2 && mouseY < h+radius/2 && mouseY > h-radius/2) {
    state = "cat";
  }
  if (mouseX < change1-radius/2 && mouseX < change1+radius/2 && mouseY < h1+radius/2 && mouseY > h1-radius/2) {
    state = "skzoo";
    state1 = "wolfchan";
  }
  if (mouseX < change2-radius/2 && mouseX < change2+radius/2 && mouseY < h+radius/2 && mouseY > h-radius/2) {
    state = "skzoo";
    state1 = "leebit";
  }
  if (mouseX < change2-radius/2 && mouseX < change2+radius/2 && mouseY < h1+radius/2 && mouseY > h1-radius/2) {
    state = "skzoo";
    state1 = "dwaekki";
  }
  if (mouseX < change3-radius/2 && mouseX < change3+radius/2 && mouseY < h+radius/2 && mouseY > h-radius/2) {
    state = "skzoo";
    state1 = "jiniret";
  }
  if (mouseX < change3-radius/2 && mouseX < change3+radius/2 && mouseY < h1+radius/2 && mouseY > h1-radius/2) {
    state = "skzoo";
    state1 = "quokka";
  }
  if (mouseX < change4-radius/2 && mouseX < change4+radius/2 && mouseY < h+radius/2 && mouseY > h-radius/2) {
    state = "skzoo";
    state1 = "bbokari";
  }
  if (mouseX < change4-radius/2 && mouseX < change4+radius/2 && mouseY < h1+radius/2 && mouseY > h1-radius/2) {
    state = "skzoo";
    state1 = "puppym";
  }
  if (mouseX < change5-radius/2 && mouseX < change5+radius/2 && mouseY < h+radius/2 && mouseY > h-radius/2) {
    state = "skzoo";
    state1 = "foxiny";
  }
  if (mouseX < change5-radius/2 && mouseX < change5+radius/2 && mouseY < h1+radius/2 && mouseY > h1-radius/2) {
    state = "userimage";
  }
  return state;
}