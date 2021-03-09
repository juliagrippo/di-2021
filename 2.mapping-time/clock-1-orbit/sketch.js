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

  var now = clock()

  var secAngle = map(now.sec, 0, 60, -90, 270)

  var minAngle = map(now.min, 0, 60, -90, 270)

  var hourAngle = map(now.hour, 0, 60, -90, 270)

  var secAngle = map(now.progress.min, 0, 1, 0, 360)

  var origin = {x:width/2, y:height/2}

  var minLocation = pointAt(origin.x, origin.y, minAngle, 130)

  var secLocation = pointAt(origin.x, origin.y, secAngle, 185)

  var hourLocation = pointAt(origin.x, origin.y, hourAngle, 75)

  background('black')

  // draw a point at the center of the canvas
  // so we know where the 'origin' is
  // fill(255)
  // circle(origin.x, origin.y, 5)

  // draw lines between the origin & the two calculated points
  // stroke(255, 150)
  // line(origin.x, origin.y, secLocation.x, secLocation.y)
  // line(origin.x, origin.y, minLocation.x, minLocation.y)

  // draw a pair of shapes at those locations

  var dark1 = color(62,62,255)
  var noon1 = color(255,64,83)

  var hourColor
  if (now.am){
    secColor = lerpColor(dark1, noon1, now.progress.halfday)
  }else{
    secColor = lerpColor(noon1, dark1, now.progress.halfday)
  }

    noFill();
    stroke(255);
    strokeWeight(3);
    circle(250,250,375);

    fill(secColor);
    noStroke(255);
    strokeWeight(3);
    circle(secLocation.x, secLocation.y, 35);

    var dark2 = color(64,151,255)
    var noon2 = color(255,67,183)

    var minColor
    if (now.am){
      minColor = lerpColor(dark2, noon2, now.progress.halfday)
    }else{
      minColor = lerpColor(noon2, dark2, now.progress.halfday)
    }

      noFill();
      stroke(255);
      circle(250,250,260);

      fill(minColor);
      noStroke(255);
      strokeWeight(3);
      circle(minLocation.x, minLocation.y,25);


      var dark3 = color(67,220,255)
      var noon3 = color(228,72,255)

      var hourColor
      if (now.am){
        hourColor = lerpColor(dark3, noon3, now.progress.halfday)
      }else{
        hourColor = lerpColor(noon3, dark3, now.progress.halfday)
      }

        noFill();
        stroke(255);
        circle(250,250,150);

        fill(hourColor);
        noStroke(255);
        strokeWeight(3);
        circle(hourLocation.x, hourLocation.y,20);

}
