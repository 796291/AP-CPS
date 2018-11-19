function Snake(loc, vel, status){

  this.loc = loc;
  this.vel = vel;
  this.status = status

  this.run = function(){
    this.update();
    this.render();
  }

  this.update = function(){
    this.loc.add(this.vel);
    this.loc.x = constrain(this.loc.x, 0, width-w)
    if(this.loc.x = constrain(this.loc.x, 0, width-w)){

    }
    this.loc.y = constrain(this.loc.y, 0, width-w)
    if(this.loc.y = constrain(this.loc.y, 0, width-w)){

    }

  }

  this.render = function(){
    fill(255, 255, 255);
    rect(this.loc.x, this.loc.y, w, w);
  }

}
//snake code:

//keep track of location, velocity, color
//update function
  //move the snake a certain amount
    //direction of velocity after key is pressed = direction of movement
    //need to move by a width (like within a grid)
  //stop the snake when it touches a wall
    //return "status" = true or false to restart the game if it touches the wall
//render function
  //gives snake a color
  //creates the rectangle for the snake
    //width and height = w (20), one square in the grid
//tangled function
  //checks if the snake is "tangled"
    //if a segment is running into another segment/head of the snake
  //returns "status" true or false
    //can be used to decide to start a new game or not
