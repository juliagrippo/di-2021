
function setup() {
  // set the width & height of the sketch
  createCanvas(500, 500)

  // print the time to the console once at the beginning of the run. try opening up the
  // web inspector and poking around to see the various values the clock function gives you

}

function draw() {
  // check the clock for the current time and unpack some of its fields to generate a time-string
  var now = clock()

  // set the background to 'white' – you can also specify colors use integers, hex-color strings and more.
  // note that setting the background also clears the canvas from our previous round of drawing
  background('black')

  // let yr1=circle(20,20,30);
  // let yr2=rect(20,20,40,40,10);
  // let yr3=rect(20,20,30,30);
  //
  // let yrArray=[yr1,yr2,yr3];
  // let yrShape=lerpColor(yrArray[now.year-1],
  //                             yrArray[now.year],now.progress.year)


  var season = now.season
  var color
  if(season==1) color='brown'
  if(season==2) color='blue'
  if(season==3) color='green'
  if(season==4) color='pink'


  fill(color)

    noStroke(255);
    rect(100,105,140,140);

    noStroke(255);
    rect(100,255,140,140);

    noStroke(255);
    rect(250,105,140,140);

    noStroke(255);
    rect(250,255,140,140);

    noStroke(255);
    circle(140,170,60);

    var year = now.year
    var yr
    if(year==1) yr1=circle(20,20,30)
    if(year==2) yr2=rect(20,20,40,40,10)
    if(year==3) yr3=rect(20,20,30,30)

    fill(255)

  //
  // var rectcolorred = 21
  // var rectcolorgreen = 50
  // var rectcolorblue = 100
  //
  // for (var i=0; i<=11; i++)
  // {
  //
  //   fill(rectcolorred*i, rectcolorgreen*i, rectcolorblue*i)
  //   rect(i*35, 40, 35, 150)

  }



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
//   // text(now.text.date, 30, 50)
//   // text(now.text.time, 30, 100)
//
//   fill(147,94,0);
//   noStroke(255);
//   rect(100,130,140,140);
//
//   fill(147,94,0);
//   noStroke(255);
//   rect(100,280,140,140);
//
//   fill(147,94,0);
//   noStroke(255);
//   rect(250,130,140,140);
//
//   fill(147,94,0);
//   noStroke(255);
//   rect(250,280,140,140);
//
//   fill(0);
//   noStroke(255);
//   circle(140,170,60);
// }
