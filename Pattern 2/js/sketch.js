//setup function runs once at start
function setup() {
    var canvas = createCanvas(800, 800,WEBGL);
    canvas.parent("p5container");
}

var n 

//Draw function is a loop that continously runs 60 frames a second when the program is running. 
function draw() {

    background(40, 63, 59);// colours background    
   
    fill(255, 111, 89);// colours shape 
    stroke(255, 111, 89);// colours line of shape
    strokeWeight(0);// thickness of line
    rect(-400, -400, 800, 200);// rectangle size    
    fill(92, 164, 169);// colours shape
    rect(-400, 300, 800, 100); // rectangle size
    
    fill(230, 235, 224)// colours shape
    triangle(0, 0, 150, 400, -150, 400)// defines trangle co - ordinates
    
    fill(244, 241, 187)// colours shape 
    circle(300, -300, 200)// defines circles parameters(location and radius)

    
}
