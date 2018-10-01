/*
** Ball Constructor Function
** Jakob Hachigian-Kreutzer
** Aug 21, 2018
*/

function Ball(loc, vel, rad, col){
  // Instance variables
  this.loc = loc;
  this.vel = vel;
  this.rad = rad;
  this.col = col;
  //this function calls other functions
  this.run = function(){
    this.checkEdges();
    this.update();
    this.render();
  }
  //This function changes the location of the ball
  //by adding speed to x and y
  this.update = function(){
    if(this !== b1){
      var d = this.loc.dist(b1.loc);
      if(d>250){
        var attForce = p5.Vector.sub(b1.loc, this.loc);
        attForce.normalize();
        attForce.mult(1);
        this.vel.add(attForce);
      }
      if(d<85){
        var repForce = p5.Vector.add(b1.loc, this.loc);
        repForce.normalize();
        repForce.mult(1);
        this.vel.add(repForce);
      }
    }
    this.loc.add(this.vel);
  }
  //checkEdges() reverses speed when the ball touches an edge
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
}
