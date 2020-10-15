function firstpage() {

  p1.clear();
  p1.angleMode(DEGREES);
  p11.angleMode(DEGREES);
  p1.noFill();
  p1.noStroke();

  let step = 0.001; // difference in time between two consecutive blobs
  let n = 100; // total number of blobs
  let radius = 5; // radius of the base circle
  let inter = 0.01; // difference of base radii of two consecutive blobs
  let maxNoise = 300; // maximal value for the parameter "noisiness" for the blobs

  p1.push();
  p1.angleMode(DEGREES);
  p1.fill(73, 80, 87);
  p1.textFont("Avenir", 18);
  p1.textStyle(BOLD);
  p1.textAlign(CENTER);
  p1.translate(width / 23, height / 4.3);
  p1.rotate(270);
  p1.text("M E M C O", 0, 0); //text(str, x, y, [x2], [y2])
  p1.pop();


  p1.push();
  p1.imageMode(CENTER);
  p1.tint(255, 150);
  p1.image(img, width / 25, height / 12, 40, 40);
  p1.pop();

  p11.push();
  p11.fill(255);
  p11.textFont("Avenir", 100);
  p11.textStyle(BOLD);
  p11.textAlign(CENTER);
  p11.translate(width / 2, height / 2);
  p11.text("M E M C O", 0, 0); //text(str, x, y, [x2], [y2])
  p11.pop();


  p11.push();
  p11.fill(255);
  p11.textFont("Optima", 16);
  p11.textAlign(CENTER);
  p11.translate(width / 2, height / 11);
  p11.text("A MEMORY VISUALISER", 0, 0); //text(str, x, y, [x2], [y2])
  p11.pop();


  p1.push();
  p1.fill(108, 117, 125);
  p1.textFont("Optima", 14);
  p1.textAlign(CENTER);
  p1.translate(width / 23, height / 1.23);
  p1.rotate(270);
  p1.text("SLAVE TO THE ALGORITHM", 0, 0);
  p1.pop();



  p1.fill(173, 181, 189);
  p1.textFont("Optima", 14);
  p1.textAlign(CENTER);
  p1.text("PROJECT BY JINNI LOW", width / 2, height * 0.93);


  for (var y = 0; y < height / 12; y += 30) {
    p1.ellipseMode(CENTER);
    p1.fill(108, 117, 125);
    p1.ellipse(width / 2 + width * 0.462, y + height / 2.3, 10);
  }

  p1.fill(233, 236, 239, 80);
  p1.ellipse(width / 2 + width * 0.462, height / 2.3 + height * 0, 20);


  //blob 
  p1.push();
  p1.colorMode(HSB, 1);
  let t = frameCount / 40;
  for (let i = n; i > 0; i--) {
    let alpha = 1 - (i / n);
    p1.fill((alpha / 5 + 0.75) % 1, 1, 0.6, alpha);
    let size = radius + i * inter;
    let k = kMax * p1.sqrt(i / n);
    let noisiness = maxNoise * (i / n);
    blob(size, width / 2, height / 2.2, k, t - i * step, noisiness);
  }
  p1.pop();


}


// Creates and draws a blob
// size is the radius (before noise) of the base circle
// (xCenter, yCenter) is the position of the center of the blob
// k is the tightness of the blob (0 = perfect circle, higher = more spiky)
// t is the time
// noisiness is the magnitude of the noise (i.e. how far it streches out)
function blob(size, xCenter, yCenter, k, t, noisiness) {
  p1.beginShape();
  let angleStep = 360 / 10;
  for (let theta = 0; theta <= 360 + 2 * angleStep; theta += angleStep) {
    let r1, r2;

    r1 = p1.cos(theta);
    r2 = p1.sin(theta + 1); // +1 because it has to be positive for the function noise
    let r = size + p1.noise(k * r1, k * r2, t) * noisiness;
    let x = xCenter + r * p1.cos(theta);
    let y = yCenter + r * p1.sin(theta);
    p1.curveVertex(x, y);
  }
  p1.endShape();
}