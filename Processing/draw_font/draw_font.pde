PFont myfont;
int randChar, randSize;
char letter;
color randColorR, randColorG, randColorB;

void setup(){
  size (500,500);
  background (200);
  myfont=loadFont("BerkahiBlackletter-48.vlw");
}

void draw(){
  fill(0);
  textFont(myfont);
  randChar=int(random(120)+1);
  randSize=int(random(60)+1);
  letter=char(randChar);
  textSize(int(randSize)+1);
  if (mousePressed){
  text(letter,mouseX,mouseY);
  }
}

void keyPressed(){
  color randColorR=int (map(mouseX,0,width,0,255));
  color randColorG=int (map(mouseY, 0,height,0,255));
  color randColorB=int (map(mouseX+mouseY,0,width+height,0,255));
  background(randColorR,randColorG,randColorB);
}
