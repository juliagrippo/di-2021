function pointAt(cx, cy, angle, dist){
  var theta = angle/360 * TWO_PI
  return {x:cx+cos(theta) * dist,
          y:cy+sin(theta) * dist}
}

function setup() {
  // set the width & height of the sketch
  createCanvas(500, 500);
  rectMode(CENTER)

  // print the time to the console once at the beginning of the run. try opening up the
  // web inspector and poking around to see the various values the clock function gives you
  // print('starting time:', clock())

}

function draw() {
  // check the clock for the current time and unpack some of its fields to generate a time-string
  var now = clock()

  var minAngle = map(now.sec, 0, 60, 0, 360)

  var secAngle = map(now.progress.sec, 0, 1, 0, 360

  var origin = {x:width/2, y:height/2}

  var minLocation = pointAt(origin.x, origin.y, minAngle, 80)

  var secLocation = pointAt(origin.x, origin.y, secAngle, 50)

  // set the background to 'white' – you can also specify colors use integers, hex-color strings and more.
  // note that setting the background also clears the canvas from our previous round of drawing
  background('black');

  // set up typography & drawing-color
  // textFont("Anonymous Pro"); // ← check index.html to see how it was loaded from google-fonts
  // textSize(18); // make it big
  // noStroke();
  // fill(255);

  // draw the time string to the canvas
  // text(now.text.date, 30, 50)
  // text(now.text.time, 30, 100)

  noFill();
  stroke(255);
  strokeWeight(3);
  circle(250,275,375);

  fill(62,62,255);
  noStroke(255);
  strokeWeight(3);
  circle(minLocation.x, minLocation.y, 35);

  // noFill();
  // stroke(255);
  // circle(250,275,260);
  //
  // fill(64,151,255);
  // noStroke(255);
  // strokeWeight(3);
  // circle(250,147,25);
  //
  // noFill();
  // stroke(255);
  // circle(250,275,150);
  //
  // fill(67,220,255);
  // noStroke(255);
  // strokeWeight(3);
  // circle(250,202,20);
}
