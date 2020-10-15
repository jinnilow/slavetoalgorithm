function anger(){
  color10 = [11, 9, 10]
  color20 = [22, 26, 29]
  color30 = [102, 7, 8]
  color40 = [164, 22, 26]
  color50 = [186, 24, 27]
  color60 = [229, 56, 59]
  color70 = [177, 167, 166]
  color80 = [211, 211, 211]
  color90 = [245, 243, 244]
  color100 = [255, 255, 255]
  colorsa = [color10, color20, color30, color40, color50, color60, color70, color80, color90, color100]
  
  
  push();
  extraCanvas2.noStroke();
  extraCanvas2.lights();
  extraCanvas2.ambientLight(130);
  for (let ie = 0; ie < AngerSlider.value(); ie++) {
    extraCanvas2.angle = random(360);
    extraCanvas2.alpha = random(360);

    let xe = sin(extraCanvas2.angle) * cos(extraCanvas2.alpha) * re;
    let ye = sin(extraCanvas2.angle) * sin(extraCanvas2.alpha) * re;
    let ze = cos(extraCanvas2.angle) * re;


    extraCanvas2.push();
    extraCanvas2.rotateX(xe * 100);
    extraCanvas2.rotateY(ye * 20);
    extraCanvas2.rotateZ(ze * 50);

    extraCanvas2.translate(xe, ye, ze);
    extraCanvas2.colorMode(HSB);
    extraCanvas2.ambientMaterial(320 + ie % 255, 255, 255);
    extraCanvas2.cone(10, 50);
    extraCanvas2.pop();
  }
  pop();
}