/*
** Ball Constructor Function
** Jakob Hachigian-Kreutzer
** 10/4/18
*/

//function creating balls, utilized through abstraction
function Ball(loc, vel, rad, col, sp){
  // Instance variables
  this.loc = loc;
  this.vel = vel;
  this.rad = rad;
  this.col = col;
  sp = "na"
  //this function calls other functions
  this.run = function(){
    this.checkEdges();
    this.update();
    this.render();
    this.checkPaddle();
  }
  //This function changes the location of the ball
  //by adding speed to x and y
  this.update = function(){
    this.loc.x = this.loc.x + this.vel.x;
    this.loc.y = this.loc.y + this.vel.y;
  }
  //checkEdges() reverses speed when the ball touches an edge
  //keeps shit from going off the edge
  this.checkEdges = function(){
    if(this.loc.x < 0) this.vel.x = -this.vel.x;
    if(this.loc.x > width) this.vel.x = -this.vel.x;
    if(this.loc.y < 0) this.vel.y = -this.vel.y;
    if(this.loc.y > height) this.vel.y = -this.vel.y;
  }

  //render() draws the ball at the new location
  this.render = function(){
    fill(this.col);
    ellipse(this.loc.x, this.loc.y, rad, rad);
  }

  //checking when the ball hits the paddle
  this.checkPaddle = function(){
    console.log("checkp")
    var distY = this.loc.y - 560
    //looking for if the ball is hitting the top of the bottom of the paddle
    if((distY > -10) && (this.loc.x > mouseX - 125) && (this.loc.x < mouseX + 125)){
      sp = "t"
      console.log("t")
    }
    if((distY < 10) && (this.loc.x > mouseX -125 ) && (this.loc.x < mouseX - 125)){
      sp = "f"
    }
  }
}
