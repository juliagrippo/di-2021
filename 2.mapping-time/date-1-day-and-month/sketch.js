function setup() {
  // set the width & height of the sketch
  createCanvas(500, 500)

  // print the time to the console once at the beginning of the run. try opening up the
  // web inspector and poking around to see the various values the clock function gives you

}

function draw(){
  var now = clock()

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

  //
  // var weekday = now.weekday
  // var sec = now.seconds
  //
  // now.weekday


  // var month = now.month
  // var year = now.year
  // var weekday = now.day

  // var weekday = now.weekday
  // var color
  // if(weekday==1) color= 'white'
  // if(weekday==2) color= 'gray'
  // if(weekday==3) color= 'gray'
  // if(weekday==4) color= 'gray'
  // if(weekday==5) color= 'gray'
  // if(weekday==6) color= 'gray'
  // if(weekday==7) color= 'gray'
  //
  // fill(color)


  // var day = now.day
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
  // var monthLocation = progress.month.day*height
  //circle(width/2, height/2, 10)
  rect(45,500 * now.progress.month,45,15)
  rect(105,500 * now.progress.month,45,15)
  rect(165,500 * now.progress.month,45,15)
  rect(225,500 * now.progress.month,45,15)
  rect(285,500 * now.progress.month,45,15)
  rect(345,500 * now.progress.month,45,15)
  rect(405,500 * now.progress.month,45,15)

  // var monthLocation = map(now.progress.month, 0, 1, 0, height)
  // rect(monthLocation.x, monthLocation.y, 45,15)





  // rect(20,progress.month.day*height,45,15)
  // rect(73,progress.month.day*height,45,15)
  // rect(126,progress.month.day*height,45,15)
  // rect(180,progress.month.day*height,45,15)
  // rect(235,progress.month.day*height,45,15)
  // rect(290,progress.month.day*height,45,15)
  // rect(345,progress.month*height,45,15)




  // var weekday = now.weekday
  // if(weekday){
  //   fill(240)
  //   noStroke(255)
  //   rect(20,260,45,15)
  // }else{
  //   fill(40)
  //   noStroke(255)
  //   rect(20,260,45,15)
  // }
  //
  // var weekday = now.progress.week
  // if(weekday){
  //   fill(240)
  //   noStroke(255)
  //   rect(73,260,45,15)
  // }else{
  //   fill(40)
  //   noStroke(255)
  //   rect(73,260,45,15)
  // }
  //
  // var weekday = now.progress.week
  // if(weekday){
  //   fill(240)
  //   noStroke(255)
  //   rect(126,260,45,15)
  // }else{
  //   fill(40)
  //   noStroke(255)
  //   rect(126,260,45,15)
  // }
  //
  // var weekday = now.progress.week
  // if(weekday){
  //   fill(240);
  //   noStroke(255);
  //   rect(180,260,45,15);
  // }else{
  //   fill(40);
  //   noStroke(255);
  //   rect(180,260,45,15);
  // }
  //
  // var weekday = now.week
  // if(weekday){
  //   fill(240)
  //   noStroke(255)
  //   rect(235,260,45,15)
  // }else{
  //   fill(40)
  //   noStroke(255)
  //   rect(235,260,45,15)
  // }
  //
  // var weekday = now.week
  // if(weekday){
  //   fill(240)
  //   noStroke(255)
  //   rect(290,260,45,15)
  // }else{
  //   fill(40)
  //   noStroke(255)
  //   rect(290,260,45,15)
  // }
  //
  // var weekday = now.week
  // if(weekday){
  //   fill(240)
  //   noStroke(255)
  //   rect(345,260,45,15)
  // }else{
  //   fill(40);
  //   noStroke(255);
  //   rect(345,260,45,15)
  // }

  // if(day==2) color='blue'
  // if(day==3) color='green'
  // if(day==4) color='pink'
  // if(day==5) color='pink'
  // if(day==6) color='pink'
  // if(day==7) color='pink'

  // var season = now.season
  // var color
  // if(season==1) color='brown'
  // if(season==2) color='blue'
  // if(season==3) color='green'
  // if(season==4) color='pink'

//   var isLeft = x < width/2 // will be 'true' if x is less than 350
//   if (isLeft){
//     fill(0)
//   }else{
//     fill(255)
//   }
//
//   var isUpper = y < height/2 // will be 'false' if y is greater than 200
//   if (isUpper){
//     circle(x, y, 25)
//   }else{
//     rect(x, y, 25, 25)
//   }
// }

  // check the clock for the current time and unpack some of its fields to generate a time-string
  // var day = now.day.month
	// fill(25)
	// noStroke()
  // circle(30,height*day,75)
  //
  //
  // var day = now.day.month
	// fill(25)
	// noStroke()
  // circle(30,height*day, 75)
  //
  // var day = now.day.month
	// fill(25)
	// noStroke()
  // circle(30,height*day, 75)

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
//   text(now.text.date, 30, 50)
//   text(now.text.time, 30, 100)
//
//   fill(40);
//   noStroke(255);
//   rect(20,260,45,15);
// //
// //   fill(170,170,169);
//   noStroke(255);
//   rect(73,260,45,15);
// //
// //   fill(40);
//   noStroke(255);
//   rect(126,260,45,15);
// //
// //   fill(40);
//   noStroke(255);
//   rect(180,260,45,15);
// //
// //   fill(40);
//   noStroke(255);
//   rect(235,260,45,15);
// //
// //   fill(40);
//   noStroke(255);
//   rect(290,260,45,15);
// //
// //   fill(40);
//   noStroke(255);
//   rect(345,260,45,15);

//
// }
