function secondpage() {

  p2.background(0);
  p2.noStroke();

  p2.push();
  p2.imageMode(CENTER);
  p2.tint(255, 150);
  p2.image(img, width / 25, height / 12, 40, 40);
  p2.pop();

  p2.push();
  p2.angleMode(DEGREES);
  p2.fill(73, 80, 87);
  p2.textFont("Avenir", 18);
  p2.textStyle(BOLD);
  p2.textAlign(CENTER);
  p2.translate(width / 23, height / 4.3);
  p2.rotate(270);
  p2.text("M E M C O", 0, 0); //text(str, x, y, [x2], [y2])
  p2.pop();


  p2.fill(233, 236, 239, 80);
  p2.ellipse(width / 2 + width * 0.462, height / 2.3 + (height * 0) + 30, 20);


  p2.fill(255, fade);
  p2.textFont("Optima", 50);
  p2.textAlign(LEFT);
  p2.text("Take a deep breath.", (width / 2) - 425, height / 2.3 + (height * 0) - 90);
  p2.text("Recall a memory.", (width / 2) - 425, height / 2.3 + (height * 0) - 25); //text(str, x, y, [x2], [y2])
  if (fade < 0) fadeAmount = 10;
  if (fade > 255) fadeAmount = -10;
  fade += fadeAmount;


  p2.push();
  p2.fill(164, 173, 182);
  p2.textFont("Avenir", 18);
  p2.textAlign(LEFT);
  p2.translate(width / 2, height / 2.3 + (height * 0));
  p2.text("Did you know that sights, sounds, and smells", -425, 60);
  p2.text("can all evoke emotionally charged memories?", -425, 88);
  p2.text("Participants are encouraged to indulge in", -425, 144);
  p2.text("their own sensory experiences beforehand to", -425, 172);
  p2.text("ensure the best possible outcome.", -425, 200);
  p2.pop();



  for (var y = 0; y < height / 12; y += 30) {
    p2.ellipseMode(CENTER);
    p2.fill(108, 117, 125);
    p2.ellipse(width / 2 + width * 0.462, y + height / 2.3, 10);
  }


  //blob2
  let n = 50;
  let step = 0.001;
  let radius = 5;
  let inter = 0.01;
  let maxNoise = 300;


  p2.push();
  p2.colorMode(HSB, 1);
  let t = frameCount / 40;
  for (let i = n; i > 0; i--) {
    let alpha = 10 - (i / n);
    p2.fill((alpha / 5 + 0.75) % 1, 1, 0.6, alpha);
    let size = radius + i * inter;
    let k = kMax * p1.sqrt(i / n);
    let noisiness = maxNoise * (i / n);
    blob2(size, width / 1.4, height / 2, k, t - i * step, noisiness);
  }
  p2.pop();


}



function blob2(size, xCenter, yCenter, k, t, noisiness) {
  p2.beginShape();
  let angleStep = 360 / 10;
  for (let theta = 0; theta <= 360 + 2 * angleStep; theta += angleStep) {
    let r1, r2;

    r1 = p2.cos(theta);
    r2 = p2.sin(theta + 1);
    let r = size + p2.noise(k * r1, k * r2, t) * noisiness;
    let x = xCenter + r * p2.cos(theta);
    let y = yCenter + r * p2.sin(theta);
    p2.curveVertex(x, y);
  }
  p2.endShape();


}