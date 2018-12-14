function Food(loc){

  this.loc = loc;

  this.run = function(){
    this.render();
  }

  this.render = function(){
    fill(204, 255, 0);
    stroke(141, 206, 113);
    rect(this.loc.x, this.loc.y, 20, 20);
    stroke(141, 206, 113);
    fill(0, 0, 0);
  }

}
