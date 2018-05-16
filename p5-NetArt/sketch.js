

let bg, clouds;
var mario;
let x = -225;
let speed = 5;

function preload() {
  bg = loadImage('Th135_Hakurei_Shrine.png');
  clouds = loadImage('superMarioClouds_0.png');
//  mario = loadImage('superMarioClouds_0.png');

}

function setup() {
  createCanvas(1280,720);
//  console.log(clouds.width/2);
//  console.log(bg.width);
//  console.log(bg.height);
}

function draw() {
  background(200);
  image(bg,0,0,0,0);
  image(clouds, x, 10, clouds.width/2, clouds.height/2);
//  image(mario,0,0);
  x = x + speed;

  if (x >= width) {
    speed = -speed;
  } else if (x < -225) {
    speed = -speed;
  }
}
