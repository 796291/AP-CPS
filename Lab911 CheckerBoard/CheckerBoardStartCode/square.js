function Sqr(location, sideLength, col){
  this.loc = location;
  this.w = sideLength
  this.col = col


  this.render = function(){
  fill(this.col);
  rect(this.loc.x, this.loc.y, this.w, this.w)
  }

}
