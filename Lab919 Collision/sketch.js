//Global variables
var Boids = [];
var chaser;

//setup canvas
function setup(){
//frameRate(25);
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  //# of boids loaded
  numBoids = 10
  loadBoids(numBoids);
  //creating the lerping ball
  var loc = createVector(random(width), random(height));
  var vel = createVector(random(-1,1), random(-1,1));
  var rad = 25;
  var col = color(random(0, 255), random(0, 255), random(0, 255))
  chaser = new Ball(loc, vel, rad, col)
}
//load boids
function loadBoids(numbBoids){
  for(var i = 0; i < numbBoids; i++){
        var loc = createVector(random(width), random(height));
        var vel = createVector(random(-.1,.1), random(-.1,.1));
        var col = color(random(0,255), random(0,255), random(0,255));
        var b = new Boid(loc, vel, col);
        Boids.push(b);
  }
}

//draw boids + mouse controlled ball
function draw(){
  background(20, 20, 20, 22);
  for(var i = 0; i < Boids.length; i++){
    Boids[i].run();
    chaser.run();
    var x = Boids[i]
    var y = chaser.loc;
    var z = x.loc;
    var dist = y.dist(z);
    if(dist <= 25){
      Boids.splice(i,1);
    }

  }
}

//number of boids remainging
console.log(Boids.length);
