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

  // map the current second from a 0-60 value
  // to a 0-360° angle
  var secAngle = map(now.sec, 0, 60, -90, 270)

  var minAngle = map(now.min, 0, 60, -90, 270)

  var hourAngle = map(now.hour, 0, 60, -90, 270)

  // map the fraction of the current second from
  // a 0.0-1.0 percentage to a 0-360° angle
  var secAngle = map(now.progress.min, 0, 1, 0, 360)

  // define a dark and light color for midnight and noon respectively
  var dark = color('#036')
  var noon = color('lightskyblue')

  // pick an appropriate color mixture for the current hour
  var hourColor
  if (now.am){
    // fade up from midnight to noon
    hourColor = lerpColor(dark, noon, now.progress.halfday)
  }else{
    // fade down from noon to midnight
    hourColor = lerpColor(noon, dark, now.progress.halfday)
  }


  //
  // *** CALCULATING LOCATIONS ***
  //

  // we'll use the center of the canvas as the
  // starting point for our location calculations
  var origin = {x:width/2, y:height/2}

  // calculate the position of the 'once-per-minute'
  // shape relative to the origin
  var minLocation = pointAt(origin.x, origin.y, minAngle, 130)

  // calculate the position of the 'once-per-second'
  // shape relative to the once-per-minute point
  // we just located
  var secLocation = pointAt(origin.x, origin.y, secAngle, 185)

  var hourLocation = pointAt(origin.x, origin.y, hourAngle, 75)


  //
  // *** DRAWING ***
  //

  // color the background based on our fade up/down logic
  background(hourColor)

  // draw a point at the center of the canvas
  // so we know where the 'origin' is
  // fill(255)
  // circle(origin.x, origin.y, 5)

  // draw lines between the origin & the two calculated points
  // stroke(255, 150)
  // line(origin.x, origin.y, secLocation.x, secLocation.y)
  // line(origin.x, origin.y, minLocation.x, minLocation.y)

  // draw a pair of shapes at those locations

  noFill();
  stroke(255);
  strokeWeight(3);
  circle(250,250,375);

  fill(62,62,255);
  noStroke(255);
  strokeWeight(3);
  circle(secLocation.x, secLocation.y, 35);

  noFill();
  stroke(255);
  circle(250,250,260);

  fill(64,151,255);
  noStroke(255);
  strokeWeight(3);
  circle(minLocation.x, minLocation.y,25);

  noFill();
  stroke(255);
  circle(250,250,150);

  fill(67,220,255);
  noStroke(255);
  strokeWeight(3);
  circle(hourLocation.x, hourLocation.y,20);

}
