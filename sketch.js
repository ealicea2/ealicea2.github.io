
function setup() {
  createCanvas(1440, 500);
  background(41, 47, 54);

myFont = loadFont('Dosis-Light.ttf');

}

function draw() {



for(var x = 20; x < width; x = x + 40){
  ellipse(x,120,10,10); }


  fill(255, 107, 107);
  textSize(55);
  text('Eva', 670, 60);

  fill(78, 205, 196);
  textSize(20);
  text('Student Coder', 654, 90);


// fill(66, 149, 245);
// rect(0, 0, 1440, 5);
// rect(0, 0, 5, 800);


  fill(255, 230, 109);
  textSize(35);
  text('Projects', 25, 400);

  textSize(35);
  text('Experience', 25, 200);

  fill(247, 255, 247);
  textSize(22);
  text('-  Girls Who Code', 25, 250);
  text('-  Web Development Class', 25, 280);

  fill(247, 255, 247);
  textSize(22);
  text('Paint in p5', 650, 470);

  textSize(22);
  text('Burger Animation Clock', 100, 470);





}
