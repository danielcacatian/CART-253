class GreenPlatform extends Platform {

  constructor(x,y){
    super(x,y);
    this.note = `F4`;
  }

  display(){
    super.display();
    push();
    rectMode(CENTER);
    fill(103, 204, 0);
    rect(this.x, this.y, this.width, this.height);
    pop();
  }

}