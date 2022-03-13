function setup() {
createCanvas(400,400);
}


function draw() {
background(247,226,151);

//hair
fill(66,35,15);
strokeWeight(0);
arc(0,0,850,300,0,HALF_PI);
  
//face
fill(235,148,110);
noStroke();
ellipse(60,290,90,60);
ellipse(340,290,90,60);

  
//eye
strokeWeight(10);
stroke(110,56,35);
line(100,160,100,210);
stroke(45,121,128);
line(300,160,300,210);
  
  
//glasses
strokeWeight(13);
stroke(38,19,9);
noFill();
line(190,200,210,200)
circle(300,190,170);
circle(100,190,170);

//nose
fill(213,112,68);
noStroke();
triangle(200,250,200,300,224,275.5);
  
//mouth
strokeWeight(9);
stroke(196,97,75);
noFill();
arc(200, 335, 200, 40, 0, PI);





}
