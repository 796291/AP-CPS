var w = 20;
var cols, rows;
var snake;
var segments = [];

function setup(){
  frameRate(10);
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
  background(20, 20, 20, 6000);
  snake.run();
}

function keyPressed(){
  //up
  if(keyCode === 38){
    for(var i = 0; i < numSegment - 1; i++){
      segments[0].loc = snake.loc
      segments[i].loc = segments[i - 1].loc
    }
    snake.vel = createVector(0, -20);
    snake.loc.add(snake.vel);
  }
  //down
  if(keyCode === 40){
    for(var i = 0; i < numSegment - 1; i++){
      segments[0].loc = snake.loc
      segments[i].loc = segments[i - 1].loc
    }
    snake.vel = createVector(0, 20);
    snake.loc.add(snake.vel);
  }
  //right
  if(keyCode === 39){
    for(var i = 0; i < numSegment - 1; i++){
      segments[0].loc = snake.loc
      segments[i].loc = segments[i - 1].loc
    }
    snake.vel = createVector(20, 0);
    snake.loc.add(snake.vel);
  }
  //left
  if(keyCode === 37){
    for(var i = 0; i < numSegment - 1; i++){
      segments[0].loc = snake.loc
      segments[i].loc = segments[i - 1].loc
    }
    snake.vel = createVector(-20, 0);
    snake.loc.add(snake.vel);
  }
}
