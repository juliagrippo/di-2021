// function setup() {
//   // set the width & height of the sketch
//   createCanvas(500, 500)
//
//   // print the time to the console once at the beginning of the run. try opening up the
//   // web inspector and poking around to see the various values the clock function gives you
//   // print('starting time:', clock())
//
// }
//
// function draw(){
//   var now = clock()
// 	var maxWidth = 500
// 	var discrete = false
//
// 	if (discrete){
//     // the map() function lets us *normalize* a value from a starting range then *project* it into another range
//     var hourWidth = map(now.hour, 1,12, 0,maxWidth) // from hours (1-12) to pixels (0–maxWidth)
//     var minsWidth = map(now.min,  0,60, 0,maxWidth) // from mins (0–60) to pixels (0–maxWidth)
//     var secsWidth = map(now.sec,  0,60, 0,maxWidth) // from secs (0–60) to pixels (0–maxWidth)
//   }else{
//     // alternatively, we can use the clock's 'progress' percentages
//     hourWidth = maxWidth * now.progress.day
//     minsWidth = maxWidth * now.progress.hour
//     secsWidth = maxWidth * now.progress.min
//   }
//
//   background(0)
//
//
// 	var sec = map(now.sec, 0, 60, 0, 500)
// 	var min = map(now.min, 0, 60, 0, 500)
// 	var hour = map(now.hour, 0, 60, 0, 500)
//
// 	var sec = map(now.progress.sec, 0, 1, 0, 500)
// 	var min = map(now.progress.min, 0, 1, 0, 500)
//
//
//   var hour = now.progress.hour
// 	var hour = map(now.progress.hour, 1, 12, 0, maxWidth)
//   fill(64,151,255)
//   circle(now.hour,90,75)
//
//   var min = now.progress.min
// 	var min = map(now.progress.min, 0, 60, 0, maxWidth)
//   fill(64,151,255)
// 	circle(now.min,250,75)
//
//   var sec = now.progress.sec
//   fill(64,151,255)
//   circle(now.sec,410,75)
// 	map(now.sec, 0, 60, 0, 500)
//
// }
function setup() {
  // set the width & height of the sketch
  createCanvas(500, 500)

  // print the time to the console once at the beginning of the run. try opening up the
  // web inspector and poking around to see the various values the clock function gives you

}

function draw(){
  var now = clock()

background(0)

	var dark1 = color(11,51,241)
  var noon1 = color(212,9,42)

  var ccolor
  if (now.am){
    ccolor = lerpColor(dark1, noon1, now.progress.halfday)
  }else{
    ccolor = lerpColor(noon1, dark1, now.progress.halfday)
  }

  var hour = now.progress.hour
	fill(ccolor)
	noStroke()
  circle(width*hour,90,75)

  var min = now.progress.min
	fill(ccolor)
	noStroke()
  circle(width*min,250, 75)

  var sec = now.progress.sec
	fill(ccolor)
	noStroke()
  circle(width*sec,410, 75)

}
