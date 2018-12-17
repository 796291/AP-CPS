//snake object (has segment array within)
var snake;
//all food kept in this array (default set 1)
var food = [];
//sets up start screen
var start = "true"
//make sure end screen isnt called
var showDeadScreen = "false"
//# of segments
var score = 0;
//frameRate slider
var fSlider;
//default frames
var frames = 10;
//start image
var img;
//end image
var img2;
//font
var font;

function preload(){
  font = loadFont('prstart.ttf');
}

function setup(){
  //load images so they can be used later
  img = loadImage("epicsnake1.png");
  img2 = loadImage("epicsnakeRIP.png");
  //creates frame rate slider
  fSlider = createSlider(0, 100, 10);
  fSlider.position(780, 5);
  frameRate(frames);
  //sets up basics
  textAlign(CENTER, CENTER);
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(141, 206, 113);
  //calls snake and food
  loadSnake();
  loadFood(1);
}

function draw(){
  frames = fSlider.value();
  frameRate(frames);
  background(141, 206, 113);
  //makes sure snake function and functions relating to snake function
  //are not called during certain circumstances (when the snake is reset)
  if(snake != 0){
    snake.run();
    checkLoc();
  }
  for(var i = 0; i < food.length; i++){
    food[i].run();
  }
  //call functions
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

//creates Snake
function loadSnake(){
  var loc = createVector(200, 200);
  var vel = createVector(0, 0);
  snake = new Snake(loc, vel);
}

//puts a locations to a piece of food and puts it in the food array
function loadFood(numFood){
  for(var i = 0; i < numFood; i++){
    //40 * 20 = 800
    var min = 1;
    var max = 39;
    //random x & y between 0 and 800
    var locX = (Math.floor(Math.random() * (max - min + 1) + min)) * 20;
    var locY = (Math.floor(Math.random() * (max - min + 1) + min)) * 20;
    //checks snake head ro make sure food loc doesn't = snake loc
    if((locX == snake.loc.x) && (locY == snake.loc.y)){
      locX = (Math.floor(Math.random() * (max - min + 1) + min)) * 20;
      locY = (Math.floor(Math.random() * (max - min + 1) + min)) * 20;
    }
    //checks every segment to make sure food loc doesn't = segment loc
    for(var i = 0; i < snake.segments.length; i++){
      if((locX == snake.segments[i].x) && (locY == snake.segments[i].y)){
        locX = (Math.floor(Math.random() * (max - min + 1) + min)) * 20;
        locY = (Math.floor(Math.random() * (max - min + 1) + min)) * 20;
      }
    }
    var loc = createVector(locX, locY);
    var f = new Food(loc);
    food.push(f);
  }
}

//tests when a certain key is pressed
function keyPressed(){
  if(keyCode === 38){
    start = "false"
    snake.vel = createVector(0, -20)
  }
  if(keyCode === 40){
    start = "false"
    snake.vel = createVector(0, 20)
  }
  if(keyCode === 39){
    start = "false"
    snake.vel = createVector(20, 0)
  }
  if(keyCode === 37){
    start = "false"
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
  //when the end screen is shown
  if(showDeadScreen == "true"){
    //END SCREEN
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
