// different heart beats

let heart = ["achivement unlocked: you experienced passion",


  "acheivement unlocked: you just died, RIP",


  "acheivement unlocked: congratulations! you have been born!",


  "acheivement unlocked: Love",


  "acheivement unlocked: aw you got scared!",


  "acheivement unlocked: you experience a love one die",
];



let randomIndex;
let animating = false;
let t = "Let's Play a Game of Life"
let drawings = [];
let imageCounter = 0;
let myImg

let myBeat;
let myBeat2;
let myBeat3;
let myBeat4;
let myBeat5;
let myBeat6;

function preload() {
  for (let i = 0; i <= 5; i++) {
    drawings[i] = loadImage("assets/heart_" + i + ".JPG")

     myImg = loadImage("Documents/CuratedData/assets/heart_0.JPG")
     myImg1 = loadImage("Documents/CuratedData/assets/heart_1.JPG")
     myImg2 = loadImage("Documents/CuratedData/assets/heart_2.JPG")
     myImg3 = loadImage("Documents/CuratedData/assets/heart_3.JPG")
     myImg4 = loadImage("Documents/CuratedData/assets/heart_4.JPG")
     myImg5 = loadImage("Documents/CuratedData/assets/heart_5.JPG")

    myBeat = loadSound("sounds/sound_1.mp3")
    myBeat2 = loadSound("sounds/sound_2.mp3")
    myBeat3 = loadSound("sounds/sound_3.mp3")
    myBeat4 = loadSound("sounds/sound_4.mp3")
    myBeat5 = loadSound("sounds/sound_5.mp3")
    myBeat6 = loadSound("sounds/sound_5.mp3")

  }
}



function setup() {
  createCanvas(800, 600);
  background(220);
  textSize(32);
  imageMode(CENTER);
  frameRate(10);

  text("Let's Play a Game of Life", 50, 50);

}

function draw() {

  if (animating == true) {

    image(drawings[imageCounter], 400, 400);
    imageCounter++;

    if (imageCounter < drawings.length - 1) {} else {
      imageCounter = 0;

    }
  }
}

function mousePressed() {
  animating = true;
  setTimeout(randomizer, 2000);
}

function randomizer() {

  animating = false;


  randomIndex = int(random(heart.length));
  image(random(drawings), 400, 400);

  text(heart[randomIndex].name, 300, 100);

}
if (randomIndex == 0) {
  image(myImg, 400, 400);
  text('achivement unlocked: you experienced passion');
  myBeat.play();

} else if (randomIndex == 1) {
  image(myImg1, 400, 400);
  text('acheivement unlocked: you just died, RIP');
  myBeat2.play();

} else if (randomIndex == 2) {
  image(myImg2, 400, 400);
  text('acheivement unlocked: congratulations! you have been born!');
  myBeat3.play();

} else if (randomIndex == 3) {
  image(myImg3, 400, 400);
  text('acheivement unlocked: Love');
  myBeat4.play();

} else if (randomIndex == 4) {
  image(myImg4, 400, 400);
  text('acheivement unlocked: aw, you got scared!');
  myBeat5.play();

} else if (randomIndex == 5) {
  image(myImg5, 400, 400);
  text('acheivement unlocked: you experience a love one die.');
  myBeat6.play();

}
