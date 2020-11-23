class GreenPlatform extends Platform {

  constructor(x,y, w, platformImage){
    super(x,y, w);
    this.note = `G4`;

    this.image = platformImage;
  }

  display(){
    super.display();
    push();
    imageMode(CENTER);
    image(this.image, this.x, this.y, this.width, this.height);
    pop();
  }

}
