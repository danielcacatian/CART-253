/**************************************************
Drawing Experiments
Daniel Cacatian

Experimenting with p5's drawing and color functions.
**************************************************/

let backgroundShade = 0;

let circle = {
  x: 0,
  y: 250,
  size: 200,
  speed: 1,
  fill: 255,
};

// setup()
//
// Description of setup() goes here.
function setup() {

  createCanvas(500, 500);

}

// draw()
//
// Description of draw() goes here.
function draw() {

  background(backgroundShade);

  //circle.speed = random(-5,5);
  circle.x = circle.x + circle.speed;
  circle.x = constrain(circle.x, 0, width);

  circle.size = map(mouseY, height, 0, 50, 500);
  //circle.y = random(0,height);
  //circle.size = random(0, 100);

  //circle.fill = random(0, 255);
  circle.fill = map(circle.x, 0, width, 0, 255);
  fill(circle.fill);
  ellipse(circle.x, circle.y, circle.size);

  console.log(`circleX: ${circle.x}, circleY: ${circle.y}, circleSize: ${circle.size}, circleSpeed: ${circle.speed}`);
}
