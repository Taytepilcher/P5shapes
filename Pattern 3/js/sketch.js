//setup function runs once at start
function setup() {
    var canvas = createCanvas(800, 800,WEBGL);
    canvas.parent("p5container");
}

var n 

//Draw function is a loop that continously runs 60 frames a second when the program is running. 
function draw() {

    background(255, 255, 255);// colours background    
    fill(0, 0 ,0);
    stroke(139, 136, 136);
    strokeWeight(1);
    circle(0,0,600);
    circle(0,0,590);
    circle(0,0,580);
    circle(0,0,570);
    circle(0,0,560);
    circle(0,0,550);
    circle(0,0,540);
    strokeWeight(4);
    circle(0,0,450);
    circle(0,0,350);
    fill(43, 41, 41);
    circle(0,0,200);
    fill(255, 0 ,0);
    circle(0,0, 100)
}
