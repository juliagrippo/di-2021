
function pointAt(cx, cy, angle, dist){
  var theta = angle/360 * TWO_PI
  return {x:cx+cos(theta) * dist,
          y:cy+sin(theta) * dist}
}

function setup() {
  createCanvas(500, 500);
  rectMode(CENTER)
}

function draw() {
  //
  // *** MAPPING TIME TO ANGLES & COLORS ***
  //
  var now = clock()


  background(0)


  noFill();
  stroke(255);
  strokeWeight(3);
  circle(250,250,375*now.moon);

  fill(62,62,255);
  noStroke(255);

  var season = now.season
  var s
  if(season==1) s= rect(250,65,15,100)
  if(season==2) s= rect(440,250,100,15)
  if(season==3) s= rect(250,440,15,100)
  if(season==4) s= rect(65,250,100,15)


  // fill(62,62,255);
  // noStroke(255);
  // strokeWeight(3);
  // rect(secLocation.x, secLocation.y, 15,100);

}

// Code for Static Version -- see below

// function setup() {
//   // set the width & height of the sketch
//   createCanvas(500, 500)
//
//   // print the time to the console once at the beginning of the run. try opening up the
//   // web inspector and poking around to see the various values the clock function gives you
//   print('starting time:', clock())
//
// }
//
// function draw() {
//   // check the clock for the current time and unpack some of its fields to generate a time-string
//   var now = clock()
//
//   // set the background to 'white' – you can also specify colors use integers, hex-color strings and more.
//   // note that setting the background also clears the canvas from our previous round of drawing
//   background('black');
//
//   // set up typography & drawing-color
//   textFont("Anonymous Pro"); // ← check index.html to see how it was loaded from google-fonts
//   textSize(18); // make it big
//   noStroke();
//   fill(255);
//
//   // draw the time string to the canvas
//   text(now.text.date, 30, 50)
//   text(now.text.time, 30, 100)
//
//   noFill();
//   stroke(255);
//   strokeWeight(3);
//   circle(250,275,375);
//
//   fill(255,64,83);
//   noStroke(255);
//   strokeWeight(3);
//   rect(20,260,100,25);
//
// }
