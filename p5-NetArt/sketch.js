var canvas;

function preload() {
  reimu = createImg("https://en.touhouwiki.net/images/1/1d/Th155Reimu.png");
}

function setup() {
  bg = loadImage('Th135_Hakurei_Shrine.png');
  canvas = createCanvas(window.innerWidth, window.innerHeight);
;
  reimu.position(0,0);
  reimu.size(reimu.width/2,reimu.height/2);
}

function draw() {
  background(bg);
//  fill(255);
//  ellipse(width/2,height/2,100,100);

}

window.onresize = function() {
  var w = window.innerWidth;
  var h = window.innerHeight;
  canvas.size(w,h);
  width = w;
  height = h;
};
