//setup function runs once at start
function setup() {
    var canvas = createCanvas(800, 800);
    canvas.parent("p5container");
}
var num 
num = 6

//Draw function is a loop that continously runs 60 frames a second when the program is running. 
function draw() {
    background(220); // light grey background
    num= num+1
    
    fill(255, 255, 255)
    ellipse(num, num-8, 200);// creates the circle 
    fill(50, num, num); // setting fill to RGB white

    square(300, 300, 200);
}
