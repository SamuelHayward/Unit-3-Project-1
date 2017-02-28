/*  Original Code by Jaap de Maat & Sion Fletcher - CSM GCD BA Y1 Unit 3 - Jan 2017
    edited by Samuel Hayward
*/

function setup() {
  bg = loadImage("600worldmap.jpg");
  createCanvas(1200, 600);

  /*  button1 = createButton('Load Weather');
    button1.position(25, 20);
    button1.mousePressed(function() {
    });*/

  button2 = createButton('Load Map');
  button2.position(25, 20);
  button2.mousePressed(function() {
    background(bg);
  });
}

    function mousePressed() {
      var x = mouseX;
      var y = mouseY;
      var coordsX = round(map(mouseX, 0, width, -180, 180));
      var coordsY = round(map(mouseY, 0, height, 90, -90));

      var api1 = 'http://api.openweathermap.org/data/2.5/weather?lat=';
      var api2 = '&lon=';
      var api3 = '&APPID=4d2bbca89aaf23904fa598d596ba7de7&units=metric'
      var url = api1 + coordsY + api2 + coordsX + api3;
      console.log(url);
      loadJSON(url, weatherLoaded);
    }
  
function weatherLoaded(data) {

  var temp = round(Number(data.main.temp));
  // var windSpeed = data.query.results.channel.wind.speed;
  // var windDirection = data.query.results.channel.wind.direction;
  // var longitude = round(Number(data.query.results.channel.item.long));
  // var latitude = round(Number(data.query.results.channel.item.lat));
  // var x = map(longitude, -180, 180, 0, width);
  // var y = map(latitude, 90, -90, 0, height);

  //var tempC = round(((temp-32)*5)/9);
  //var tempAnomaly = tempC;

  var tempR = 255 + (6 * temp);
  var tempB = 255 - (6 * temp);
  var tempG = 255 - (6 * temp);
  if (temp < 0) {
    tempG = 255 + (6 * temp);
  }

  var r = tempR;
  var g = tempG;
  var b = tempB;


  fill(r, g, b);
  ellipse(mouseX, mouseY, 20, 20);

  textSize(10);
  textFont("Helvetica");
  textAlign(CENTER);
  fill(0);
  text(temp, mouseX, mouseY + 4);

}
