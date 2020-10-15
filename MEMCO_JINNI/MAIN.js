// CURRENT CODES & REFERENCES :
// [Code! Programming with p5.js playlist by The Coding Train on Youtube]
// [for loop - Change Scale + Slider by jarivkin]
// [multiple screen by itsai0724]
// [Wave Circle 3 by Richard Bourne]
// [Bursting by Roni Kaufman]
// [Coding Challenge #55: Mathematical Rose Patterns by The Coding Train] 
// [Rose (mathematics) - Wikipedia]
// [Maurer rose - Wikipedia]
// [Coding in the Cabana 1: Maurer Rose by The Coding Train] 
// [Signal by Richard Bourne Open Processing]
// ["For the Lines" Berti Búrquez]
// [Pickup Sticks by Richard Bourne]
// [18.2: 3D Geometries - WebGL and p5.js Tutorial by The Coding Train]
// [Creating Rain in P5 - Coding Challenge #3 - CarlinoGonzalez]
// [rainbow brush by aferriss]
//***************************************************************************//

var mode = 0;
var drop = [];
let anxious = [];
let flowers = [];
let p1; // page 1 
let p11; //extra canvas on page 1
let p2; // page 2
let extraCanvas;
let extraCanvas1;
let extraCanvas2;
let extraCanvas3;
let extraCanvas4;
let extraCanvas5;
let extraCanvas6;
let extraCanvas7;


//second page
let fade = 0;
let fadeAmount = 10;

//happy
var nh = 4;
var dh = 9;

//excited
let ra = 380; //radius

//anger
let re = 380;


function preload() {
  imgn = loadImage('no.png');
  img = loadImage('flower1.png');
}


function setup() {

  createCanvas(windowWidth, windowHeight);

  p1 = createGraphics(windowWidth, windowHeight);
  p11 = createGraphics(windowWidth, windowHeight);
  p2 = createGraphics(windowWidth, windowHeight);
  extraCanvas = createGraphics(((windowWidth / 2) + 300), ((windowHeight / 2) + 100));
  extraCanvas1 = createGraphics(((windowWidth / 2) + 300), ((windowHeight / 2) + 100));
  extraCanvas2 = createGraphics(((windowWidth / 2) + 300), ((windowHeight / 2) + 100), WEBGL);
  extraCanvas3 = createGraphics(((windowWidth / 2) + 300), ((windowHeight / 2) + 100));
  extraCanvas4 = createGraphics(windowWidth, windowHeight);
  extraCanvas5 = createGraphics(windowWidth, windowHeight);
  extraCanvas6 = createGraphics(windowWidth, windowHeight);
  extraCanvas7 = createGraphics(((windowWidth / 2) + 300), ((windowHeight / 2) + 100));


  NostalgiaSlider = createSlider(0, 80, 0);
  TraumaSlider = createSlider(0, 150, 0);
  LoveSlider = createSlider(0, 250, 0);
  HappySlider = createSlider(0, TWO_PI * 50, 0);
  ExciteSlider = createSlider(0, 360, 0);
  AngerSlider = createSlider(0, 360, 0);
  AnxiousSlider = createSlider(0, this.r * 2, 0);
  SadSlider = createSlider(0, 250, 0);


  button = createButton('SAVE');


  //for "what do you remember feeling text"
  feeling = color(255);



  //first page blob
  kMax = random(0.3, 2.0); // maximal value for the parameter "k" of the blobs


  //anxious

  for (let ax = 0; ax < 1000; ax++) {
    let xax = random(width);
    let yax = random(height);
    let rax = random(10, 40);
    anxious[ax] = new Anxious(xax, yax, rax);
  }


  //sad
  for (var ds = 0; ds < 250; ds++) { // create multiple drops
    extraCanvas3.drop[ds] = new Drop();
  }
}




function mousePressed() {

  // what do you remember feeling text
  if (
    (mouseX > width / 7) &&
    (mouseX < width / 1.1) &&
    mouseY < height / 6 &&
    (mouseY > height / 8)
  ) {
    feeling = color(255, 0);
  } else if ((mouseX > width / 7) &&
    (mouseX < width / 1.1) &&
    mouseY > height / 1.3 &&
    (mouseY < height / 1.1)) {
    feeling = color(255, 0);
  }


}




function draw() {

  background(0);

  if (mode == 0) {
    firstpage();

  } else if (mode == 1) {
    secondpage();

  } else if (mode == 2) {

    extraCanvas7.background(0);

    nostalgia();
    trauma();
    love();
    happy();
    excited();
    anger();
    extra();
    sliders();

  }



  nostalgia();
  trauma();
  love();
  happy();
  excited();
  anger();



  extraCanvas3.clear();


  //anxious

  for (let i = 0; i < anxious.length; i++) {
    anxious[i].move();
    anxious[i].show();
  }


  //sad

  for (var ds = 0; ds < SadSlider.value(); ds++) {
    extraCanvas3.drop[ds].show();
    extraCanvas3.drop[ds].update();
  }


  image(p1, width / 2 - p1.width / 2, height / 2 - p1.height / 2);
  image(p11, width / 2 - p11.width / 2, height / 2 - p11.height / 2);
  image(p2, width / 2 - p2.width / 2, height / 2 - p2.height / 2);
  image(extraCanvas7, width / 2 - extraCanvas7.width / 2, height / 2 - extraCanvas7.height / 2);
  image(extraCanvas6, width / 2 - extraCanvas6.width / 2, height / 2 - extraCanvas6.height / 2);
  image(extraCanvas5, width / 2 - extraCanvas5.width / 2, height / 2 - extraCanvas5.height / 2);
  image(extraCanvas2, width / 2 - extraCanvas2.width / 2, height / 2 - extraCanvas2.height / 2);
  image(extraCanvas, width / 2 - extraCanvas.width / 2, height / 2 - extraCanvas.height / 2);
  image(extraCanvas3, width / 2 - extraCanvas3.width / 2, height / 2 - extraCanvas3.height / 2);
  image(extraCanvas1, width / 2 - extraCanvas1.width / 2, height / 2 - extraCanvas1.height / 2);
  image(extraCanvas4, width / 2 - extraCanvas4.width / 2, height / 2 - extraCanvas4.height / 2);


}


//to click through pages
function mouseClicked() {
  if (mode == 0) {
    mode = 1;
  } else if (mode == 1) {
    mode = 2;
  } else if (mode == 2) {
    mode = 0;
  }

}