

function Boid(loc, vel, col){
  // Instance variables
  this.loc = loc;
  this.vel = vel;
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
    if(this !== chaser)
      var d = this.loc.dist(chaser.loc);
      if(d<150){
        var repForce = p5.Vector.sub(this.loc, chaser.loc);
        repForce.normalize();
        repForce.mult(.5);
        this.vel.add(repForce);
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
    push()
      translate(this.loc.x, this.loc.y);
      rotate(this.vel.heading() + radians(90));
      triangle(-5, 0, 5, 0, 0, -15);
    pop()
  }
}
