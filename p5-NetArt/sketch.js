var canvas;

function preload() {
//  reimu = createImg("https://en.touhouwiki.net/images/1/1d/Th155Reimu.png");;
bg = loadImage('Th135_Hakurei_Shrine.png');
reimu = loadImage('Th08ReimuSprite.png');
rumia = loadImage('Th095RumiaSprite.png');
suika = loadImage('Th095Suika.png');
}

function setup() {

  canvas = createCanvas(1280,720);

//  reimu.position(0,0);
//  reimu.size(reimu.width/2,reimu.height/2);
}

function draw() {
  background(bg);
  image(reimu,640,420);
  image(rumia,500,200);
  image(suika,600,460);
//  createElement(reimu,'https://en.touhouwiki.net/wiki/Reimu_Hakurei')
//  fill(255);
//  ellipse(width/2,height/2,100,100);

}
