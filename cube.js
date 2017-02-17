function setup(){
  createCanvas(500, 600, WEBGL);
 }

function draw(){
  bg = loadImage("grid.jpg");

  translate(-50,-50);
  var dirY = (500 / height - 0.5) *2;
  var dirX = (400 / width - 0.5) *2;
  directionalLight(250, 250, 250, dirX, -dirY, 0.3);
  ambientMaterial(250);

  rotateX(frameCount * -0.01);
  rotateY(frameCount * 0.01);
  box(160, 160, 160);

}