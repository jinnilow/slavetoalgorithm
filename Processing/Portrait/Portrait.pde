 //Portrait of a Queen made 31/7/2020 by Jinni Low

void setup(){
size (500, 500);
}

void draw(){
  background (mouseY/2, (mouseY+mouseX)/4, 255-mouseX/2);
  fill (255,204,143);
  noStroke();
  ellipse (250,250, 200,200);
  fill (0);
  ellipse (220, 220, 18,45);
  ellipse (280, 220, 18,45);
  fill (255,153,51);
  rect (245,260, 10, 10);
  fill (255,153,204);
  arc(250,285, 75, 75, 0, PI); // (x, y, width, height, start, stop)
  fill (255,153,255);
  arc(250,180, 200, 150, PI , TWO_PI);
  fill(204);
  triangle(180, 150, 240, 150, 180, 80); 
  triangle(310, 150, 260, 150, 310, 80); 
  triangle(220, 150, 280, 150, 250, 40);
  fill (96);
  ellipse (180, 80, 18,18);
  ellipse (310, 80, 18,18);
  ellipse (250, 40, 18,18);
  fill (253,155,253);
  rect(320, 150, 50, 200);
  translate(130,150);
  rotate(90-mouseX/5);
  rect(0, 0, 50, 200);


}
