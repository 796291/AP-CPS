//snake object (has segment array within)
var snake;
//all food kept in this array (default set 1)
var food = [];
//true restarts game
var start = "true"
var showDeadScreen = "false"
var font;
//# of segments
var score = 0;
//frameRate slider
var fSlider;
var frames = 10;
var img;
var img2;

function preload(){
  font = loadFont('prstart.ttf');
}

function setup(){
  img = loadImage("epicsnake1.png");
  img2 = loadImage("epicsnakeRIP.png");
  fSlider = createSlider(0, 100, 10);
  fSlider.position(780, 5);
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
  if(snake != 0){
    snake.run();
    checkLoc();
  }
  for(var i = 0; i < food.length; i++){
    food[i].run();
  }

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
  if(keyCode === 38){
    start = "false"
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
  //enter key
  if(keyCode === 13){
    showDeadScreen = "reset"
    console.log("a");
    console.log(showDeadScreen);
  }
}

//what happens after you fail
function deadGame(){
  if(snake.status == "true"){
    snake = 0;
    score = 0;
    showDeadScreen = "true"
    console.log(showDeadScreen)
  }
  if(showDeadScreen == "true"){
    textFont(font);
    fill(0, 0, 0);
    //outside rectangle
    rect(0, 0, 800, 800);
    fill(141, 206, 113);
    //inside rectangle
    rect(15, 15, 770, 770)
    fill(0, 0, 0);
    textAlign(CENTER);
    textSize(60);
    text("You Lose...", 400, 425)
    textSize(25);
    text("Press Enter to restart", 400, 625)
    image(img2, 270, 50);
  }
  if(showDeadScreen == "reset"){
    loadSnake();
    gameStart();
    console.log("yes")
    showDeadScreen = "false"
    start = "true"
  }
}

//restart / beginning of game
function gameStart(){
  if(start == "true"){
    textFont(font);
    fill(0, 0, 0);
    //outside rectangle
    rect(0, 0, 800, 800);
    fill(141, 206, 113);
    //inside rectangle
    rect(15, 15, 770, 770)
    fill(0, 0, 0);
    textAlign(CENTER);
    textSize(100);
    text("Snake", 400, 425)
    textSize(25);
    text("Press any arrow key to begin...", 400, 625)
    image(img, 270, 50);
    //snake picture
  }
}

function totalScore(){
  if(start == "false" && showDeadScreen == "false"){
    textSize(30);
    textAlign(CENTER);
    text("length:" + score, 400, 30);
  }
}
