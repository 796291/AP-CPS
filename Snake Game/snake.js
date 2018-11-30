function Snake(loc, vel){

  this.loc = loc;
  this.vel = vel;
  this.segments = [];
  this.segments.push(createVector(0, 0));

  this.run = function(){
    this.update();
    this.render();
  }

  this.update = function(){
    this.segments[0].x = this.loc.x;
    this.segments[0].y = this.loc.y;
    this.loc.add(this.vel);
    this.loc.x = constrain(this.loc.x, 0, 800-20)
    this.loc.y = constrain(this.loc.y, 0, 800-20)
  }

  this.render = function(){
    noStroke();
    fill(0, 0, 255);
    rect(this.segments[0].x, this.segments[0].y, 20, 20)
    noStroke();
    fill(0, 255, 0);
    rect(this.loc.x, this.loc.y, 20, 20);
  }

}
