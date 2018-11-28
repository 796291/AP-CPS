var snake = [];
var food = [];
var numSnake = 1;

function setup(){
  frameRate(15);
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  loadSnake(numSnake);
  loadFood(1);
}

function draw(){
  background(20, 20, 20);

  for(var i = 0; i < snake.length; i++){
    snake[i].run();
  }

  for(var i = 0; i < food.length; i++){
    food[i].run();
  }

  checkLoc();
}

function checkLoc(){
  for(var i = 0; i < food.length; i++){
    var distX = food[i].loc.x - snake[0].loc.x;
    var distY = food[i].loc.y - snake[0].loc.y;
    if(distX == (0) && distY == (0)){
      food.splice(i, 1);
      loadFood(1);
      numSnake = numSnake + 1
    }
  }
}

function loadSeg(numSeg){
  for(var i = 0; i < numSeg; i++){

  }
}

function loadSnake(numSnake){
  if(numSnake = 1){
    var loc = createVector(200, 200);
    var vel = createVector(0, 0);
    s = new Snake(loc, vel);
    snake.push(s);
  }else if(numSnake > 1){
    for(var i = 1; i < numSnake; i++){
      var loc = createVector(snake[i-1].loc.x, snake[i-1].loc.y)
      var vel = createVector(0, 0);
      seg = new Snake(loc, vel);
      snake.push()
    }
  }
}

function loadFood(numFood){
  for(var i = 0; i < numFood; i++){
    var min = 1;
    //40 * 20 = 800
    var max = 39;
    var locX = (Math.floor(Math.random() * (max - min + 1) + min)) * 20;
    var locY = (Math.floor(Math.random() * (max - min + 1) + min)) * 20;
    var loc = createVector(locX, locY);
    var f = new Food(loc);
    food.push(f);
  }
}

function keyPressed(){
  if(keyCode === 38){
    snake[0].vel = createVector(0, -20)
  }
  if(keyCode === 40){
    snake[0].vel = createVector(0, 20)
  }
  if(keyCode === 39){
    snake[0].vel = createVector(20, 0)
  }
  if(keyCode === 37){
    snake[0].vel = createVector(-20, 0)
  }
}
