//Global variables
var Balls = [];

function setup(){
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  loadBalls(12);
}

function loadBalls(number){
  for(var i = 0; i < number; i = i + 1){
    var loc = createVector(random(width), random(height));
    var vel = createVector(random(-3,3), random(-3,3));
    var rad = random(20, 40);
    var col = color(random(255), random(255), random(255));
    Balls.push(new Ball(loc, vel, rad, col));
  }
}

function draw(){
  background(20, 20, 20, 22);
  for(var i = 0; i < Balls.length; i = i + 1){
    Balls[i].run();
  }
}
