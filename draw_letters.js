/* these are optional special variables which will change the system */
var systemBackgroundColor = "black";
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";

/* internal constants */
const darkBlue  = "#0077b6";
const lightBlue  = "#90e0ef";
const strokeColor  = "#03045e";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup
  stroke(strokeColor);
  strokeWeight(4);

  // determine parameters for second circle
  let size2 = letterData["size"];
  let pos2x = 50  + letterData["offsetx"];
  let pos2y = 100 + letterData["offsety"];

  let size3 = letterData["triSize"];
  let pos3x = 50 + letterData["triOffsetx"];
  let pos3y = 100+ letterData["triOffsety"];
  let rotation = letterData["rotation"];
  // // draw two circles
  // fill(darkBlue);
  // ellipse(50, 150, 75, 75);
  // fill(lightBlue);
  // ellipse(pos2x, pos2y, size2, size2);




stroke("white")
strokeWeight(2)
let numLines= 17
let gapSize= 200/numLines
for (let i = 0; i < numLines; i++) {
  line(0,0+(i*gapSize),100,0+(i*gapSize));
}
strokeWeight(0);
fill("black");
drawTriangle(pos3x,pos3y,size3,rotation);
ellipse(pos2x,pos2y,size2);
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  return new_letter;
}
function drawTriangle(posx,posy,size,degrees){
  angleMode(DEGREES);
  push ();
  translate(posx,posy);
  rotate(degrees);
  scale(size);
  triangle(-28, 19, 0, -28, 28, 19);
  pop ();
}



var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]
