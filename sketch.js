const canvasWidth = 960;
const canvasHeight = 500;

/*
 * my three variable per letter are:
 *
   size: radius of the second circle (in pixels)
   offsetx: x offset (in pixels) of the second circle
            relative to the first one
   offsety: y offset (in pixels) of the second circle
            relative to the first one
 *
 */

const letterA = {
  //rect1
  "sizea": 30,
  "sizeb": 150,
  "offsetx": 60,
  "offsety": 45,
 //rect2
  "size1a": 80,
  "size1b": 10,
  "offsetx1": 40,
  "offsety1": 70,
  
}

const letterB = {
  //rect1
  "sizea": 80,
  "sizeb": 100,
  "offsetx": 50,
  "offsety": 25,
//rect2
  "size1a": 120,
  "size1b": 10,
  "offsetx1": 25,
  "offsety1": 70,
}

const letterC = {
  //rect1

  "sizea": 140,
  "sizeb": 100,
  "offsetx": 45,
  "offsety": 25,
  //rect2
  "size1a": 10,
  "size1b": 120,
  "offsetx1": 50,
  "offsety1": 20,
}

const backgroundColor  = "#90e0ef";
const strokeColor      = "#03045e";

const darkBlue  = "#0077b6";
const lightBlue  = "#90e0ef";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.pa////rent('canvasContainer');

  // color/stroke setup
  // stroke(strokeColor);
  // strokeWeight(4);
noStroke()
  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function draw () {
  // clear screen
  background(backgroundColor);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 250, center_y, letterA);
  drawLetter(center_x      , center_y, letterB);
  drawLetter(center_x + 250, center_y, letterC);
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second rect
  let size2a = letterData["sizea"];
  let size2b = letterData["sizeb"]
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];
  //parameters for thrid rect
  let size3a= letterData["size1a"] 
  let size3b= letterData["size1b"]
  let pos3x= posx + letterData["offsetx1"];
  let pos3y = posy + letterData["offsety1"];

  // draw two circles

  fill(darkBlue);
  rect(posx, posy, 150, 150);
  fill(lightBlue);
  rect(pos2x, pos2y, size2a, size2b);
  fill(darkBlue)
  rect(pos3x, pos3y, size3a, size3b)




}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
