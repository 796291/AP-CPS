//snake object (has segment array within)
var snake;
//all food kept in this array (default set 1)
var food = [];
//true restarts game
var start = "true"
var font;
//# of segments
var score = 0;
//frameRate slider
var fSlider;
var frames = 10;

function preload(){
  font = loadFont('prstart.ttf');
}

function setup(){
  fSlider = createSlider(0, 30, 10);
  fSlider.position(850, 5);
  textAlign(CENTER, CENTER);
  frameRate(frames);
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(141, 206, 113);
  loadSnake();
  loadFood(1);
}

function draw(){
  frames = fSlider.value();
  frameRate(frames);
  background(141, 206, 113);
  snake.run();

  for(var i = 0; i < food.length; i++){
    food[i].run();
  }

  checkLoc();
  deadGame();
  gameStart();
  totalScore();
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
    //outside rectangle
    rect(225, 300, 350, 200);
    fill(141, 206, 113);
    //inside rectangle
    rect(240, 315, 320, 170)
    fill(0, 0, 0);
    textAlign(CENTER);
    textSize(100);
    text("Snake", 400, 425)
    textSize(25);
    text("Press any arrow key to begin...", 400, 625)
  }
}

function totalScore(){
  textSize(30);
  textAlign(CENTER);
  text("length:" + score, 400, 30);
}
