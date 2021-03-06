class Player {

  constructor(x, y){
    this.x = x;
    this.y = y;
    this.size = 30;
    this.speed = 5;
    this.vy = 2;
    this.jumpPower = 15;
    this.jump = false;
    this.jumpCounter = 0;
    this.exited = false;
  }

  controls(){
    //Left and right movement
    if(keyIsDown(LEFT_ARROW)){
      this.x -= this.speed;
    }
    else if(keyIsDown(RIGHT_ARROW)){
      this.x += this.speed;
    }
    else {
      this.x += 0;
    }

    //Jump
    if(keyIsDown(32)){
      this.jump = true;
    }
    else {
      this.jump = false;
    }

  }

  gravity(force){
    if (this.y >= 375+this.size/2 && !this.jump){
      this.y = this.y;
      this.jumpCounter = 0; //Resets jump counter (limits the amount of time in the air you can jump)
    }
    else {
      this.y += this.vy*force; //Falling (gravity)
    }

    if (this.jump){
      if(this.y <= 50 || this.jumpCounter >= this.jumpPower )// Reached max jump height/jumpPower
        if(this.y >= 375+this.size/2){
          this.y = 375+this.size/2; //Stays at the minimum height
        }
        else {
        this.vy = this.speed;
      }
      else {
      this.vy = -this.jumpPower; //Jumping (only once)
      this.jumpCounter += 1 //Add to jump counter
      }
    }
    else {
      this.vy = this.speed;
    }
  }

  collision(platform, exit, state){
    //Player colides with platform
    if(this.x >= platform.x-platform.width/2 &&
      this.x <= platform.x+platform.width/2 &&
      this.y+this.size/2 >= platform.y-platform.height/2 &&
      this.y+this.size/2 <= platform.y+platform.height/2 &&
      !this.jump){
      this.y = this.y;//dont fall
      this.vy = 0;
      this.jumpCounter = 0;//Allows to jump again
    }

    //Player colides with exit
    else if(this.x >= exit.x-exit.width/2 &&
       this.x <= exit.x+exit.width/2 &&
       this.y >= exit.y-exit.height/2 &&
       this.y <= exit.y+exit.height/2 &&
       !exit.locked){
        this.exited = true;
    }
  }

  display(){
    push();
    noStroke();
    fill(255,0,0);
    ellipse(this.x, this.y, this.size);
    pop();
  }

}
