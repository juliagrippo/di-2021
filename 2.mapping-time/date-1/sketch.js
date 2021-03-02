
function setup() {
  // set the width & height of the sketch
  createCanvas(500, 500)

  // print the time to the console once at the beginning of the run. try opening up the
  // web inspector and poking around to see the various values the clock function gives you
  print('starting time:', clock())

}

function draw() {
  // check the clock for the current time and unpack some of its fields to generate a time-string
  var now = clock()

  // set the background to 'white' – you can also specify colors use integers, hex-color strings and more.
  // note that setting the background also clears the canvas from our previous round of drawing
  background('black');

  // set up typography & drawing-color
  textFont("Anonymous Pro"); // ← check index.html to see how it was loaded from google-fonts
  textSize(18); // make it big
  noStroke();
  fill(255);

  // draw the time string to the canvas
  text(now.text.date, 30, 50)
  text(now.text.time, 30, 100)

  fill(40);
  noStroke(255);
  rect(20,260,45,15);

  fill(170,170,169);
  noStroke(255);
  rect(73,260,45,15);

  fill(40);
  noStroke(255);
  rect(126,260,45,15);

  fill(40);
  noStroke(255);
  rect(180,260,45,15);

  fill(40);
  noStroke(255);
  rect(235,260,45,15);

  fill(40);
  noStroke(255);
  rect(290,260,45,15);

  fill(40);
  noStroke(255);
  rect(345,260,45,15);


}
