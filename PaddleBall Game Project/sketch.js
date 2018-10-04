//Global variables
var Balls = [];
var paddle;

//setup canvas
function setup(){
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  //# of boids loaded
  //numBall = 10;
  //loadBalls(numBall);
  //creating the lerping paddle
  var loc = createVector(400, 400);
  var vel = createVector(0, 0);
  var width = 5;
  var length = 100;
  var col = color(random(0, 255), random(0, 255), random(0, 255))
  paddle = new Paddle(loc, vel, width, length, col)
}
//load balls
//function loadBalls(numbBoids){
  //for(var i = 0; i < numbBoids; i++){
    //    var loc = createVector(random(width), random(height));
      //  var vel = createVector(random(-.1,.1), random(-.1,.1));
        //var col = color(random(0,255), random(0,255), random(0,255));
        //var b = new Ball(loc, vel, col);
        //Boids.push(b);
//  }
//}

//draw boids + mouse controlled ball
function draw(){
  background(20, 20, 20, 22);
  //for(var i = 0; i < Boids.length; i++){
    Balls[i].run();
    paddle.run();
//    }
}

//score
