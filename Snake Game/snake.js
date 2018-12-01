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
    console.log(numSeg);
    for(var i = 1; i < numSeg; i++){
      this.segments[i].x = this.segments[i-1].x
      this.segments[i].y = this.segments[i-1].y
    }
    this.segments[0].x = this.loc.x;
    this.segments[0].y = this.loc.y;
    this.loc.add(this.vel);
    this.loc.x = constrain(this.loc.x, 0, 800-20)
    this.loc.y = constrain(this.loc.y, 0, 800-20)
  }

  this.render = function(){
    for(var i = 0; i < numSeg; i++){
      fill(0, numSeg, 300*i);
      rect(this.segments[i].x, this.segments[i].y, 20, 20)
    }
    fill(0, 255, 0);
    rect(this.loc.x, this.loc.y, 20, 20);
  }

}
