function Snake(loc, vel){

  this.loc = loc;
  this.vel = vel;

  this.run = function(){
    this.update();
    this.render();
  }

  this.update = function(){
    this.loc.add(this.vel);
    this.loc.x = constrain(this.loc.x, 0, 800-20)
    this.loc.y = constrain(this.loc.y, 0, 800-20)
  }

  this.render = function(){
    noStroke();
    fill(0, 255, 0);
    rect(this.loc.x, this.loc.y, 20, 20);
  }

}
