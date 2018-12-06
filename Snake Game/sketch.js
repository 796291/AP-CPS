var snake;
var food = [];
var numSeg = 1;
var start = "true"
var font;
var score = 0;

function preload(){
  font = loadFont('prstart.ttf');
}

function setup(){
  textAlign(CENTER, CENTER);
  frameRate(10);
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(121, 139, 19);
  loadSnake();
  loadFood(1);
}

function draw(){
  background(121, 139, 19);
  snake.run();

  for(var i = 0; i < food.length; i++){
    food[i].run();
  }

  checkLoc();
  deadGame();
  gameStart();
  Score();
}

//eat food
function checkLoc(){
  for(var i = 0; i < food.length; i++){
    var distX = food[i].loc.x - snake.loc.x;
    var distY = food[i].loc.y - snake.loc.y;
    if(distX == (0) && distY == (0)){
      food.splice(i, 1);
      loadFood(1);
      snake.segments.push(createVector(0, 0));
      console.log(snake.segments.length)
      score++;
    }
  }
}

function loadSnake(){
  var loc = createVector(200, 200);
  var vel = createVector(0, 0);
  snake = new Snake(loc, vel);
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
  start = "false"
  if(keyCode === 38){
    snake.vel = createVector(0, -20)
  }
  if(keyCode === 40){
    snake.vel = createVector(0, 20)
  }
  if(keyCode === 39){
    snake.vel = createVector(20, 0)
  }
  if(keyCode === 37){
    snake.vel = createVector(-20, 0)
  }
}

//what happens after you fail
function deadGame(){
  if(snake.status == "true"){
    snake = 0;
    loadSnake();
    gameStart();
    score = 0;
  }
}

//restart / beginning of game
function gameStart(){
  if(start == "true"){
    textFont(font);
    fill(0, 0, 0);
    rect(225, 300, 350, 200);
    fill(121, 139, 19);
    rect(240, 315, 320, 170)
    fill(0, 0, 0);
    textAlign(CENTER);
    textSize(100);
    text("Snake", 400, 425)
  }
}

//retro style
function splashScreen(){

}

function Score(){
  textSize(30);
  textAlign(LEFT);
  text(score, 770, 30);
}
