var x = 20 // starting x position to draw
var y = 20  // starting y position to draw
var barHeight = 180 // height of each bar
var maxWidth = 100 // maximum width of each bar (the actual width will always be ≤ this)
// var spacing = 10 // the vertical space to skip between bars

var discrete = false // flag whether to have the bars 'tick' from one value to the next or move smoothly,
                     // try setting it to false and see what happens...

// this gets called only once in the very beginning
function setup() {
	createCanvas(500, 500)
}

// this gets called every frame (about 60 frames per second)
function draw() {
  background(255)
  noStroke()

  // store the current time in a local variable
  var now = clock()

  // calculate the width in pixels of each bar
  // if (discrete){
    // the map() function lets us *normalize* a value from a starting range then *project* it into another range
    var hourWidth = map(now.hour, 1,12, 0,maxWidth) // from hours (1-12) to pixels (0–maxWidth)
    var minsWidth = map(now.min,  0,60, 0,maxWidth) // from mins (0–60) to pixels (0–maxWidth)
    var secsWidth = map(now.sec,  0,60, 0,maxWidth) // from secs (0–60) to pixels (0–maxWidth)
  // }else{
    // alternatively, we can use the clock's 'progress' percentages
    hourWidth = maxWidth * now.progress.day
    minsWidth = maxWidth * now.progress.hour
    secsWidth = maxWidth * now.progress.min

    var origin = {x:250, y:250}

    // calculate the position of the 'once-per-minute'
    // shape relative to the origin
    var minLocation = (origin.x, origin.y, minAngle, 130)

    // calculate the position of the 'once-per-second'
    // shape relative to the once-per-minute point
    // we just located
    var secLocation = (origin.x, origin.y, secAngle, 185)

    var hourLocation = (origin.x, origin.y, hourAngle, 75)

  // }

  // draw the hours bar at the top...
  fill(80, 0, 0)
  circle(secLocation.x, secLocation.y, hourWidth)

  // ...the minutes bar in the middle...
  fill(150, 0, 0)
  circle(minLocation.x, minLocation.y,minsWidth)

  // ...and the seconds bar at the bottom
  fill(255, 0, 0)
  circle(hourLocation.x, hourLocation.y, secsWidth)
}// function setup() {
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
//     // map the current second from a 0-60 value
//     // to a 0-360° angle
//     var sec = map(now.sec, 0, 100, 0, 500)
//
//     var min = map(now.min, 0, 100, 0, 500)
//
//     var hour = map(now.hour, 0, 100, 0, 500)
//
//     // map the fraction of the current second from
//     // a 0.0-1.0 percentage to a 0-360° angle
//     var secAngle = map(now.progress.min, 0, 100, 0, 500)
//
//     // define a dark and light color for midnight and noon respectively
//     var dark = color('#036')
//     var noon = color('lightskyblue')
//
//     // pick an appropriate color mixture for the current hour
//     var hourColor
//     if (now.am){
//       // fade up from midnight to noon
//       hourColor = lerpColor(dark, noon, now.progress.halfday)
//     }else{
//       // fade down from noon to midnight
//       hourColor = lerpColor(noon, dark, now.progress.halfday)
//     }
//
//     var origin = {x:0, y:80}
//
//     // calculate the position of the 'once-per-minute'
//     // shape relative to the origin
//     var minLocation = pointAt(origin.x, origin.y, minAngle, 130)
//
//     // calculate the position of the 'once-per-second'
//     // shape relative to the once-per-minute point
//     // we just located
//     var secLocation = pointAt(origin.x, origin.y, secAngle, 185)
//
//     var hourLocation = pointAt(origin.x, origin.y, hourAngle, 75)
//
//
//     //
//     // *** DRAWING ***
//     //
//
//     // color the background based on our fade up/down logic
//     background(hourColor)
//
//   // set the background to 'white' – you can also specify colors use integers, hex-color strings and more.
//   // note that setting the background also clears the canvas from our previous round of drawing
//   background('black');
//
//   // set up typography & drawing-color
//   // textFont("Anonymous Pro"); // ← check index.html to see how it was loaded from google-fonts
//   // textSize(18); // make it big
//   // noStroke();
//   // fill(255);
//
//   // draw the time string to the canvas
//   // text(now.text.date, 30, 50);
//   // text(now.text.time, 30, 100);
//
//   fill(64,151,255);
//   noStroke(255);
//   strokeWeight(3);
//   circle(80,180,75);
//
//   fill(64,151,255);
//   noStroke(255);
//   strokeWeight(3);
//   circle(120,300,75);
//
//   fill(64,151,255);
//   noStroke(255);
//   strokeWeight(3);
//   circle(100,420,75);
//
// }
//
//
//   fill(64,151,255);
//   noStroke(255);
//   strokeWeight(3);
//   circle(80,180,75);
//
//   fill(64,151,255);
//   noStroke(255);
//   strokeWeight(3);
//   circle(120,300,75);
//
//   fill(64,151,255);
//   noStroke(255);
//   strokeWeight(3);
//   circle(100,420,75);
//
// }
