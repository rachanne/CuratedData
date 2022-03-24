// different heart beats

let heart = [{
  name: "Dramatic",
  color: "navy blue"
}, {
  name: "Stopping",
  color: "black"
}, {
  name: "Regular",
  color: "yellow"
}, {
  name: "Strong",
  color: "purple"
}, {
  name: "Fast",
  color: "red"
}, {
  name: "Hospital",
  color: "white"
}];

let randomIndex;
let animating = false;
let t = "Let's Play a Game of Life"
let drawings = [];
let imageCounter = 0;
let mySound2;
var myBeat = document.getElementById("myBeat")
var hearts = document.getElementById("theHearts")

function preload() {
  for (let i = 0; i <= 5; i++) {
    drawings[i] = loadImage("assets/heart_" + i + ".JPG")

    myImg0 = loadImage("assets/heart_0.jpg")
    myImg1 = loadImage("assets/heart_1.jpg")
    myImg2 = loadImage("assets/heart_2.jpg")
    myImg3 = loadImage("assets/heart_3.jpg")
    myImg4 = loadImage("assets/heart_4.jpg")
    myImg5 = loadImage("assets/heart_5.jpg")

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

  text("click to start game", 50, 50);

}

function draw() {

  if (animating == true) {
    clear();
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
  if (heart[0]) {

    clear();
    randomIndex = int(random(heart.length));
    image(random(drawings), 400, 400);

    text(heart[randomIndex].name, 300, 100);

  } else if (randomIndex == 0) {
    image(myImg, 400, 400)
    text('achivement unlocked: you experienced passion');
    myBeat.play();

  } else if (randomIndex == 1) {
    image(myImg1, 400, 400)
    text('acheivement unlocked: you just died, RIP');
    myBeat2.play();

  } else if (randomIndex == 2) {
    image(myImg2, 400, 400)
    text('acheivement unlocked: congratulations! you have been born!');
    myBeat3.play();

  } else if (randomIndex == 3) {
    image(myImg3, 400, 400)
    text('acheivement unlocked: Love');
    myBeat4.play();

  } else if (randomIndex == 4) {
    image(myImg4, 400, 400)
    text('acheivement unlocked: aw, you got scared!');
    myBeat5.play();

  } else if (randomIndex == 5) {
    image(myImg5, 400, 400)
    text('acheivement unlocked: you experience a love one die.');
    myBeat6.play();

}


}
