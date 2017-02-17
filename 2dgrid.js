function setup() {
  createCanvas(500,600);
  background(249,234,194);
  drawGrid();
  drawCurves();
}

function drawGrid(){
  stroke(50);
  for(var i = 0; i < 26; i++){
    line(50,450,460-11.2*i,450+4.4*i);
    line(460,450,50+5.2*i,450+4.4*i);
  }
}

function drawCurves(){
  noFill();
  stroke(255,0,0);
  line(180,560,70,300)
  arc(110,240,100,200, PI-1, PI+HALF_PI);
  stroke(0,0,255);
  line(180,560,180,450)
  arc(330,450,300,300, PI, PI+HALF_PI);
}
