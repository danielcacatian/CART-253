/**************************************************
Melody Tower
Daniel Cacatian
Creating a platforming game that incorporates platforming and sound mechanics within p5.js
**************************************************/

//User himself
let player;

//Platform player can jump on
let platforms = [];
let bluePlatform; //E note
let orangePlatform; //B note
let redPlatform; //A note
let greenPlatform; //G note
let purplePlatform; //C note

//States & Levels
let state = `title`;
let level = 1;

//Font
let pixelFont;

//Load images
function preload(){
  //Background images
  backgroundImage = loadImage(`assets/images/Background.png`);
  titleImage = loadImage(`assets/images/TitleScreen.png`);
  controlsImage = loadImage(`assets/images/Controls.png`)
  endImage = loadImage(`assets/images/EndScreen.png`);

  //Player image
  playerImage = loadImage(`assets/images/Player.png`);
  playerImage2 = loadImage(`assets/images/PlayerFlip.png`);

  //Ground image
  groundImage = loadImage(`assets/images/Ground.png`);
  groundImage2 = loadImage(`assets/images/Ground2.png`);

  //Platform images
  blueImage = loadImage(`assets/images/Blue.png`);
  orangeImage = loadImage(`assets/images/Orange.png`);
  redImage = loadImage(`assets/images/Red.png`);
  greenImage = loadImage(`assets/images/Green.png`);
  purpleImage = loadImage(`assets/images/Purple.png`);

  //Fonts
  pixelFont = loadFont(`assets/fonts/EnterCommand.ttf`)
}

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(600, windowHeight);
  noStroke();
  userStartAudio();

  //Player setup
  player = new Player(width/2, height-100, playerImage, playerImage2);

  if(level===1){
    level1Setup();
  }
  else if(level===2){
    level2Setup();
  }
  else if(level===3){
    level3Setup();
  }
}


// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);

  if (state === `title`){
    title();
  }
  else if (state === `controls`){
    controls();
  }
  else if (state === `simulation`){
    simulation();
  }

//STATE FUNCTIONS////////////////////////////////////////////////////////
//Title State
function title(){
  //Background
  displayBackground(titleImage);
  //Text
  displayText(`Press 'any key' to START`, width/2, height/2+125, 36);
}

//Control States
function controls(){
  //Background
  displayBackground(controlsImage);
  //Text
  displayText(`CONTROLS`, width/2, 50, 50);
  displayText(`Press 'any key' to CONTINUE`, width/2, height-50, 36);
}

function simulation(){
  //Background
  displayBackground(backgroundImage);
  //Text
  displayText(`GOAL: Get to the top!`, width/2, height/2, 50);

  //Ground
  push();
  imageMode(CENTER);
  image(groundImage, width / 2, windowHeight, width, 90);
  pop();

  //Display player
  player.controls();
  player.display();
  player.gravity();
  player.wrap();

  levelComplete();

  //Display platforms
  for (let i = 0; i < platforms.length; i++){
    let platform = platforms[i];
    platform.display();
    platform.playNote();
    platform.pressedOn(player);

    player.collision(platform);
  }

}
}

//MISCELLANEOUS FUNCTIONS//////////////////////////////////////////////////
//Proceed to next level
function levelComplete(){
  if(player.y <= -25){
    level++ ;
    player.y = height-100;
  }
}

function keyPressed(){
  if(state===`title`){
    state = `controls`;
  }
  else if(state===`controls`){
    state = `simulation`;
  }
}

//LEVEL PLATFORM SETUPS////////////////////////////////////////////////////////
//Level 1
function level1Setup(){
  //Platforms IN ORDER
  bluePlatform = new BluePlatform(width/2, height-150, 250, blueImage);
  platforms.push(bluePlatform);

  orangePlatform = new OrangePlatform(width/2, height-300 , 250, orangeImage);
  platforms.push(orangePlatform);

  redPlatform = new RedPlatform(width/2, height-450 , 250, redImage);
  platforms.push(redPlatform);

  bluePlatform = new BluePlatform(width/2, height-600, 250, blueImage);
  platforms.push(bluePlatform);

  greenPlatform = new GreenPlatform(width/2, height-700 , 250, greenImage);
  platforms.push(greenPlatform);

  greenPlatform = new GreenPlatform(width/2, height-750 , 250, greenImage);
  platforms.push(greenPlatform);

  redPlatform = new RedPlatform(width/2, height-900 , 250, redImage);
  platforms.push(redPlatform);
}

//level 2
function level2Setup(){
  //Platforms IN ORDER
  bluePlatform = new BluePlatform(100, height-150, 100, blueImage);
  platforms.push(bluePlatform);

  orangePlatform = new OrangePlatform(width/2, height-300 , 100, orangeImage);
  platforms.push(orangePlatform);

  redPlatform = new RedPlatform(500, height-400 , 100, redImage);
  platforms.push(redPlatform);

  bluePlatform = new BluePlatform(500, height-550, 100, blueImage);
  platforms.push(bluePlatform);

  greenPlatform = new GreenPlatform(width/2, height-650 , 100, greenImage);
  platforms.push(greenPlatform);

  greenPlatform = new GreenPlatform(100, height-700 , 100, greenImage);
  platforms.push(greenPlatform);

  redPlatform = new RedPlatform(width/2, height-850 , 100, redImage);
  platforms.push(redPlatform);
}

//level 3
function level3Setup(){
  //Platforms IN ORDER
  bluePlatform = new BluePlatform(450, height-100, 150, blueImage);
  platforms.push(bluePlatform);

  redPlatform = new RedPlatform(width/2, height-250 , 150, redImage);
  platforms.push(redPlatform);

  purplePlatform = new PurplePlatform(150, height-400 , 150, purpleImage);
  platforms.push(purplePlatform);

  orangePlatform = new OrangePlatform(width/2, height-550 , 150, orangeImage);
  platforms.push(orangePlatform);

  redPlatform = new RedPlatform(450, height-700 , 150, redImage);
  platforms.push(redPlatform);

  orangePlatform = new OrangePlatform(width/2, height-850 , 150, orangeImage);
  platforms.push(orangePlatform);
}

//TEXT & BACKGROUND IMAGE FUNCTION ///////////////////////////////////////////////////////////////
function displayText(string, x, y, size){
  push();
  textFont(pixelFont);
  textAlign(CENTER, CENTER);
  textSize(size);
  fill(255);
  text(string, x, y);
  pop();
}

function displayBackground(loadImage){
  push();
  imageMode(CENTER);
  image(loadImage, width/2, height/2, width, height);
  pop()
}
