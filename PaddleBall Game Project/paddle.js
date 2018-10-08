/*
** Collison Detecion
** Jakob Hachigian-Kreutzer
** 919
*/

function Paddle(loc, vel, width, length, col){
  // Instance variables
  this.loc = loc;
  this.vel = vel;
  this.w = width;
  this.l = length;
  this.col = col;
  //this function calls other functions
  this.run = function(){
    this.checkEdges();
    this.update();
    this.render();
  }
//lerp -- paddle follows mouse
  this.update = function(){
    //make paddle lerp to middle of rectangle instead of corner
    paddleLength = width/2
    this.loc.x = lerp(this.loc.x, mouseX-paddleLength, .15)
  }
  //checkEdges() reverses speed when the rectangle touches an edge
  this.checkEdges = function(){
    if(this.loc.x < 0) this.vel.x = -this.vel.x;
    if(this.loc.x > width) this.vel.x = -this.vel.x;
    if(this.loc.y < 0) this.vel.y = -this.vel.y;
    if(this.loc.y > height) this.vel.y = -this.vel.y;
  }

  //render() draws the paddle at the new location
  this.render = function(){
    fill(this.col);
    rect(this.loc.x, this.loc.y, this.w, this.l);
  }
}
