//sketch 14 August 2020 - jinni
PImage photo; 
int smallPoint, largePoint, x, y, t, dotSize;
color pix;
float pointillise;

void setup(){
  smallPoint=4;
  largePoint=40;
  size(960,960);
  background (0);
  imageMode(CENTER);
  photo = loadImage("jinniFBprofile.jpg");
  smallPoint=4; 
  largePoint=40;
}

void draw(){
  //image (photo,480,480);
  x=int(random(photo.width));// finds random point across the sketch (x) - use int so that its whole number
  y=int(random(photo.height));
  pointillise = map(mouseX, 0, photo.width, smallPoint, largePoint); //map (what are we following, lowest value in, highest value in, lowest value out, highest value out)
  dotSize=int(pointillise);
  pix= photo.get(x,y);
  t= int(random(256)); //full transparency to full opaque - 255+1 to include full range
  fill (pix, t);
  stroke(pix,t);
  ellipse (x,y,dotSize,dotSize);
  //line (x,y,x+dotSize,y+dotSize);
}
