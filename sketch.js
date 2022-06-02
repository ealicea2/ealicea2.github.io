
function setup() {
  createCanvas(1440, 800);
  background(41, 47, 54);

myFont = loadFont('Dosis-Light.ttf');

}

function draw() {



  // for(var x = 100; x < width; x = x + 100){
  //   ellipse(x,100,30,30);
  //

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
  text('Projects', 25, 200);

  textSize(35);
  text('Experience', 325, 200);

  fill(247, 255, 247);
  textSize(22);
  text('-  Girls Who Code', 325, 250);
  text('-  Web Development Class', 325, 280);

  fill(247, 255, 247);
  textSize(15);
  text('Paint in p5', 25, 400);

  textSize(15);
  text('Burger Animation Clock', 25, 400);

  textSize(15);
  text('Sleep Animation', 25, 400);



}
