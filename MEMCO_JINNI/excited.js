function excited() {


  push();
  extraCanvas2.clear();
  extraCanvas2.noStroke();
  extraCanvas2.lights();
  extraCanvas2.ambientLight(150); //transparency?

  for (let ia = 0; ia < ExciteSlider.value(); ia++) {
    extraCanvas2.angle = random(360);
    extraCanvas2.alpha = random(360);

    xa = sin(extraCanvas2.angle) * cos(extraCanvas2.alpha) * ra;
    ya = sin(extraCanvas2.angle) * sin(extraCanvas2.alpha) * ra;
    za = cos(extraCanvas2.angle) * ra;


    extraCanvas2.push();
    extraCanvas2.rotateX(xa);
    extraCanvas2.rotateY(ya);
    extraCanvas2.rotateZ(za);

    extraCanvas2.translate(xa, ya, za);

    extraCanvas2.colorMode(HSB, 390, 255, 255);
    extraCanvas2.ambientMaterial(200 + ia / 3, 255, 255);
    extraCanvas2.cylinder(6, 30);
    extraCanvas2.pop();
  }
  pop();
}