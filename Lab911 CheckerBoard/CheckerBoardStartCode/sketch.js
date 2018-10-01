
var squares = [];
var numberOfSquares = 8;
var squareSize;


function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  squareSize = width/numberOfSquares
  loadSquares();

for(var i = 0; i < squares.length; i++){
squares[i].render();

  }
}

function loadSquares(){
var rowNum = 0;
var colNum = 0;

for(var row = 0; row < numberOfSquares; row++) {
  var x = squareSize*row
  for(var col = 0; col < numberOfSquares; col++) {
    var y = squareSize*col
    var loc = createVector(x, y);
    var c;
    if((row + col)%2){
      c = color(0, 0, 0);
    }
    else {
      c = color(255, 255, 255);
    }
    var s = new Sqr(loc, squareSize, c);
    squares.push(s);

    }
  }


}
