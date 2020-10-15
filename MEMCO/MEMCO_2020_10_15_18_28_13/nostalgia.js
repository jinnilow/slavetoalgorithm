function nostalgia (){
  push();
  extraCanvas.clear();
  let newColor = color(255, NostalgiaSlider.value());

  for (var xn = 0; xn < width; xn++) {
    extraCanvas.stroke(newColor);
    extraCanvas.strokeWeight(1);
    extraCanvas.point(random(width), random(height));
  }

  extraCanvas.imageMode(CORNER);
  extraCanvas.image(imgn, 0, 0, width, img.height * width / img.width);
  extraCanvas.tint(newColor);
  pop();
  }