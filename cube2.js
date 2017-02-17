function setup(){
  createCanvas(500, 600, WEBGL);
  background(249,234,194)
;
 }

function draw(){
  background(249,234,194)
;

/*translate(0,0,-200);
  fill(189,174,134)
  torus(200,30);
  translate(0,0,200);
  translate(180*cos(frameCount/21),180*sin(frameCount/21),-150);
  fill(249,234,194)
  sphere(50,50);
  translate(-180*cos(frameCount/21),-180*sin(frameCount/21),150);*/

 directionalLight(250, 230, 220, 100, -100, 100);
 ambientMaterial(1);

 rotateX(frameCount * 0.01);
 rotateY(frameCount * 0.01);

 box(90, 90, 90);

 rotateY(frameCount * -0.01);

 translate(130*sin(frameCount/21),130*cos(frameCount/21));
 fill(190,35,38);
 noStroke()
 sphere(10,50);

}