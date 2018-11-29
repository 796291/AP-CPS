function Snake(loc, vel, numSeg){

  this.loc = loc;
  this.vel = vel;
  this.numSeg = numSeg;
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
    for(var i = 0; i < this.numSeg; i++){
      noStroke();
      fill(0, 0, 255);
      this.segments.push(createVector(this.segments[i].x, this.segments[i].y));
      rect(this.segments[i].x, this.segments[i].y, 20, 20)
    }
    noStroke();
    fill(0, 255, 0);
    rect(this.loc.x, this.loc.y, 20, 20);
  }

}
