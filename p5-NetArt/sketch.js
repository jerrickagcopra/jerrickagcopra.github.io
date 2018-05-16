var canvas;

function preload() {
//  reimu = createImg("https://en.touhouwiki.net/images/1/1d/Th155Reimu.png");;
bg = loadImage('Th135_Hakurei_Shrine.png');
reimu = loadImage('Th08ReimuSprite.png');
rumia = loadImage('Th095RumiaSprite.png');
suika = loadImage('Th095Suika.png');
marisa = loadImage('Th08MarisaSprite.png');
yukari = loadImage('Th07YukariSprite.png');
ran = loadImage('Th07RanSprite.png');
chen = loadImage('Th07ChenSprite.png');
remi = loadImage('Th08RemiliaSprite.png');
flan = loadImage('Th06FlandreSprite.png');
tenshi = loadImage('Th125TenshiSprite.png');
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
  image(marisa,675,150);
  image(yukari,600,250);
  image(ran,650,260);
  image(chen,575,275);
  image(remi,950,450);
  image(flan,990,450);
  image(tenshi,450,0);
//  createElement(reimu,'https://en.touhouwiki.net/wiki/Reimu_Hakurei')
//  fill(255);
//  ellipse(width/2,height/2,100,100);

}
