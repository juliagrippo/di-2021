
function setup() {
  // set the width & height of the sketch
  createCanvas(400, 800)
}

function draw() {
  background('white')
  noStroke()

  var now = clock()
  var spacing = 30
  var circles = circle()
  var hour = now.hours

  // draw as many circles as the current `now.hours` value
  // using _.times. The first circle's y position should be at 100
  // and each circle below it should be `spacing` pixels below it
  fill(0)
  circle(100, 100, 20)

  for (var i=0); i<circles.now.hours; i++){
    print(values[i]);
  }

  // print('CIRCLES:', circl);
  // for (var i=0; i<values.length; i++){
  //   print(values[i]);
  // }
  //
  // print('BOOL VALUES:', booleanValues);
  // for (var i=0; i<booleanValues.length; i++){
  //   print(booleanValues[i]);
  // }

  // draw as many circles as the current now.min value
  // by creating a list from 0 .. `now.min` using _.range
  // and then stepping through that list using _.each or .forEach
  fill(100)
  circle(200, 100, 20)

  // draw as many circles as the current `now.sec` value
  // using `for (;;){...}` syntax
  fill(200)
  circle(300, 100, 20)


  // Phase 2:
  // Once you've successfully drawn vertical stacks of dots, modify
  // your loops to draw concentric circles whose diameters are
  // multiples of the `spacing` variable. Switch from using fill()
  // colors to stroke() colors so we can see all the nested circles
}
