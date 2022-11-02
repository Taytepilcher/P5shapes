//setup function runs once at start
function setup() {
    var canvas = createCanvas(800, 800,WEBGL);
    canvas.parent("p5container");
}

var n 

//Draw function is a loop that continously runs 60 frames a second when the program is running. 
function draw() {

    background(255, 227, 227); // light pink background
    fill(11, 85, 99);//makes square cyan
    square(100, 0, 100);//makes square at co-ordinates (100,0) with a side length of 100
    fill(217); // setting fill to 
    triangle(0, 400, -400, 400, -200, 100)
   triangle(0, -400, 400, -400, 200, -100)
   fill(165, 208, 168)
   circle(-350, -350,100)
   circle(350, 350,100)
   fill(148, 119, 139)
   circle(-200, 0 ,100)
}
