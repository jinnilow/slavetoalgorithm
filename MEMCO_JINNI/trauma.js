function trauma() {
  push();
  extraCanvas1.clear();
  let colo1 = color(255, TraumaSlider.value());

  extraCanvas1.noFill();
  extraCanvas1.beginShape();
  for (var xtt = 0; xtt < width; xtt++) {
    extraCanvas1.stroke(colo1);
    extraCanvas1.strokeWeight(0.6);
    extraCanvas1.vertex(random((windowWidth / 2) + 300), random((windowHeight / 2) + 100));
  }
  extraCanvas1.endShape();

  for (var xt = 0; xt < width; xt++) {
    extraCanvas1.stroke(colo1);
    extraCanvas1.strokeWeight(0.5);
    extraCanvas1.point(random((windowWidth / 2) + 300), random((windowHeight / 2) + 100));
  }
  pop();
}