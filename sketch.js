var object=[];
var k;
var Color =["#f9989f","#fccb8f","#faf096","#c5f8c8","#ffd3de","#f6b8d1","#5dc0a6","#ffba5a","ffa45c","f2efb6","#DB2D43"];
function setup() { 
    createCanvas(windowWidth, windowHeight).position(0, 0);
    for(var i = 0; i < 150; i++){
        k = floor(random(0, Color.length-1));
        object[i] = new Circle(random(width), random(height),random(-5,5),random(-5,5),Color[k], random(10, 15));
    }
}
function draw() { 
    background("#5c4d4d");
    for(var i = 0; i < object.length; i++) {
        object[i].update_speed();
        object[i].collideEdge();
        object[i].display();
    }
}