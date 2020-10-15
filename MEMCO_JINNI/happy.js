function happy() {

  extraCanvas5.clear();

  color1 = [255, 123, 0]
  color2 = [255, 136, 0]
  color3 = [255, 149, 0]
  color4 = [255, 162, 0]
  color5 = [255, 170, 0]
  color6 = [255, 183, 0]
  color7 = [255, 195, 0]
  color8 = [255, 208, 0]
  color9 = [255, 221, 0]
  color10 = [255, 234, 0]
  colors = [color1, color2, color3, color4, color5, color6, color7, color8, color9, color10]

  extraCanvas5.push();
  var kh = nh / dh;
  kh = HappySlider.value();
  extraCanvas5.colorMode(HSB, 320, 255, 155);
  extraCanvas5.translate(width / 2, height / 2); //set point to middle of page

  for (let ah = 0; ah < HappySlider.value(); ah += 0.05) {
    let rh = (extraCanvas5.width) * cos(kh * 2 * ah * nh);
    let xh = rh * cos(ah);
    let yh = rh * sin(ah);


    extraCanvas5.fill(ah % 180 + 200, 255, 255);
    extraCanvas5.noStroke();
    extraCanvas5.ellipse(xh, yh, 2, 7);
  }
  nh += 0.000001;
  dh += 0.01;
  extraCanvas5.pop();

}