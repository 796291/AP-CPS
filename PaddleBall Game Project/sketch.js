//Global variables
var Balls = [];
var paddle;

//setup canvas
function setup(){
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  //# of boids loaded
  numBalls = 10;
  loadBalls(numBalls);
  //creating the lerping paddle
  var loc = createVector(400, 400);
  var vel = createVector(0, 0);
  var width = 100;
  var length = 5;
  var col = color(random(0, 255), random(0, 255), random(0, 255))
  paddle = new Paddle(loc, vel, width, length, col)
}
//load balls
function loadBalls(numBoids){
  for(var i = 0; i < numBalls; i++){
    //where the balls are spawned in
    var loc = createVector(400, 20);
    var vel = createVector(random(-.1,.1), random(-.1,.1));
    var col = color(random(0,255), random(0,255), random(0,255));
    var b = new Ball(loc, vel, col);
    //add balls to the array
    Balls.push(b);
  }
}

//draw boids + mouse controlled ball
function draw(){
  background(20, 20, 20, 6000);
  //get rid of outlines
  noStroke();
  paddle.run();
  //for(var i = 0; i < Boids.length; i++){
  for(var i = 0; i < Balls.length; i++){
    //Balls[i].run();
  }
}

//score
