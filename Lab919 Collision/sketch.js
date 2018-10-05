//Global variables
var Boids = [];
var chaser;

//setup function
function setup(){
  //setup the canvas
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  //# of boids loaded
  numBoids = 10
  loadBoids(numBoids);
  //creating the lerping ball - call the Ball function
  var loc = createVector(random(width), random(height));
  var vel = createVector(random(-1,1), random(-1,1));
  var rad = 25;
  var col = color(random(0, 255), random(0, 255), random(0, 255))
  //removes outlines from chaser
  noStroke();
  chaser = new Ball(loc, vel, rad, col)
}
//when called loads boids into an array
function loadBoids(numbBoids){
  for(var i = 0; i < numbBoids; i++){
        var loc = createVector(random(width), random(height));
        var vel = createVector(random(-3,3), random(-3,3));
        var col = color(random(0,255), random(0,255), random(0,255));
        //removes outlines from boids
        noStroke();
        var b = new Boid(loc, vel, col);
        Boids.push(b);
  }
}

//draw boids + mouse controlled ball + splice boids when touched by ball
function draw(){
  background(20, 20, 20, 22);
  //draws the player controlled ball (aka chaser)
  chaser.run();
  //show the number of boids remaining
  textSize(32);
  fill(255, 255, 255);
  text(Boids.length, 400, 400);
  for(var i = 0; i < Boids.length; i++){
    //draws the boids
    Boids[i].run();
    //splices the boids when touched by the chaser
    var x = Boids[i]
    var y = chaser.loc;
    var z = x.loc;
    var dist = y.dist(z);
    if(dist <= 25){
      Boids.splice(i,1);
    }
  }
}
