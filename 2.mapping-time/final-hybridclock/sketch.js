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

//background color changes each month

  let jan=color(20,45,96);
  let feb=color(100,148,208);
  let mar=color(244,204,169);
  let apr=color(200,150,160);
  let may=color(260,160,104);
  let jun=color(106,200,258);
  let jul=color(165,223,82);
  let aug=color(268,202,55);
  let sep=color(264,123,13);
  let oct=color(200,64,33);
  let nov=color(150,176,44);
  let dec=color(47,81,50);

  let colorArray=[jan,feb,mar,apr,may,jun,jul,aug,sep,oct,nov,dec,jan];
  let monthFillColor=lerpColor(colorArray[now.month-1],
                              colorArray[now.month],now.progress.month)
  background(monthFillColor);


  var origin = {x:width/2, y:height/2}

  var minLocation = pointAt(origin.x, origin.y, minAngle, 130)

  var secLocation = pointAt(origin.x, origin.y, secAngle, 185)

  var hourLocation = pointAt(origin.x, origin.y, hourAngle, 75)

// rectangles change color to depict day of the week dependant on color

  var weekday = now.weekday
  var day
  if(weekday==1) day= 'white'
  if(weekday==2) day= 'gray'
  if(weekday==3) day= 'lightskyblue'
  if(weekday==4) day= 'pink'
  if(weekday==5) day= 'lightyellow'
  if(weekday==6) day= 'blue'
  if(weekday==7) day= 'lightgreen'

  fill(day)
  noStroke()

  // rectangles move top to bottom to depict progression of the month
  // top of the screen is beginning of the month, bottom is end of the month

  rect(60,500 * now.progress.month,45,15)
  rect(125,500 * now.progress.month,45,15)
  rect(190,500 * now.progress.month,45,15)
  rect(255,500 * now.progress.month,45,15)
  rect(320,500 * now.progress.month,45,15)
  rect(380,500 * now.progress.month,45,15)
  rect(440,500 * now.progress.month,45,15)

// depicts seconds

  // noFill();
  // stroke(255);
  // strokeWeight(3);
  // circle(250,250,375);
  //
  // fill(62,62,255);
  // noStroke(255);
  // strokeWeight(3);
  // circle(secLocation.x, secLocation.y, 35);

  var dark1 = color(62,62,255)
  var noon1 = color(255,64,83)

  var secColor
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

// depicts minutes

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

// depicts hours

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

  var year = now.year
  var yr
  if(year==1) yr=circle(20,20,30)
  if(year==2) yr=rect(20,20,40,40,10)
  if(year==3) yr=rect(20,20,30,30)

// color of squares in the top right corner depicts season

  var season = now.season
  var s
  if(season==1) s='lightyellow'
  if(season==2) s='lightskyblue'
  if(season==3) s='lightgreen'
  if(season==4) s='pink'

  fill(s)

    noStroke(255);
    rect(30,30,30,30);

    noStroke(255);
    rect(30,65,30,30);

    noStroke(255);
    rect(65,30,30,30);

    noStroke(255);
    rect(65,65,30,30);

    var season = now.season
    var s
    if(season==1) s= rect(440,250,100,15)
    if(season==2) s= rect(250,65,15,100)
    if(season==3) s= rect(65,250,100,15)
    if(season==4) s= rect(250,440,15,100)


}
