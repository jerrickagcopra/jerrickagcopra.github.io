var canvas;

function preload() {
//  reimu = createImg("https://en.touhouwiki.net/images/1/1d/Th155Reimu.png");;
bg = loadImage('Th135_Hakurei_Shrine.png');
reimu =loadImage('Th16Reimu.png');
}

function setup() {

  canvas = createCanvas(1280,720);

//  reimu.position(0,0);
//  reimu.size(reimu.width/2,reimu.height/2);
}

function draw() {
  background(bg);
  image(reimu,0,0,reimu.width/2,reimu.height/2);
//  createElement(reimu,'https://en.touhouwiki.net/wiki/Reimu_Hakurei')
//  fill(255);
//  ellipse(width/2,height/2,100,100);

}
