var canvas;

function preload() {
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
aya = loadImage('Th10AyaSprite.png');
momiji = loadImage('Th125Momizi01.png');
ichirin = loadImage('Th12IchirinSprite.png');
sakuya = loadImage('Th08SakuyaSprite.png');
cirno = loadImage('Th09CirnoSprite.png');


reimuback = loadImage('Th14ReimuBackSprite.png');
}

function setup() {

  canvas = createCanvas(1280,720);

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
  image(aya,330,100);
  image(momiji,285,100);
  image(ichirin,1200,25);
  image(sakuya,925,450);
  image(cirno,340,395);

}
