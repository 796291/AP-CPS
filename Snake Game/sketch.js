var w = 20;
var cols, rows;
var snake;

function setup(){
  var cnv = createCanvas(800, 800);
  cnv.position(windowWidth-width)/(2, 30);
  background(20, 20, 20);
  cols = width/w;
  rows = height/w;
  var loc = createVector(width/2, height/2);
  var vel = createVector(1, 0);
  snake = new Snake(loc, vel);
}

function draw(){
  snake.run();
}

function keyPress(){
  if(keyCode === 38){

  }

  if(keyCode === 40){

  }

  if(keyCode === 37){

  }

  if(keyCode === 39){

  }
}
