function extra() {
  extraCanvas4.clear();

  extraCanvas4.push();

  extraCanvas4.fill(0);
  extraCanvas4.rect(0, 0, width / 6, height);
  extraCanvas4.rect(width * 0.82, 0, width / 4, height); //x,y,width,height

  extraCanvas4.push();
  extraCanvas4.fill(0);
  extraCanvas4.rect(0, 0, width, height / 5);
  extraCanvas4.rect(0, height * 0.8, width, height / 2);
  extraCanvas4.pop();

  extraCanvas4.textFont('Optima', 40);
  extraCanvas4.fill(feeling);
  extraCanvas4.text('What do you remember feeling?', width / 6, height / 2);

  extraCanvas4.push();
  extraCanvas4.angleMode(DEGREES);
  extraCanvas4.fill(73, 80, 87);
  extraCanvas4.textFont("Avenir", 18);
  extraCanvas4.textStyle(BOLD);
  extraCanvas4.textAlign(CENTER);
  extraCanvas4.translate(width / 23, height / 4.3);
  extraCanvas4.rotate(270);
  extraCanvas4.text("M E M C O", 0, 0); //text(str, x, y, [x2], [y2])
  extraCanvas4.pop();


  for (var y = 0; y < height / 12; y += 30) {
    extraCanvas4.ellipseMode(CENTER);
    extraCanvas4.fill(108, 117, 125);
    extraCanvas4.ellipse(width / 2 + width * 0.462, y + height / 2.3, 10);
  }

  extraCanvas4.fill(233, 236, 239, 80);
  extraCanvas4.ellipse(width / 2 + width * 0.462, height / 2.3 + (height * 0) + 60, 20);

  extraCanvas4.pop();

  extraCanvas4.push();
  extraCanvas4.imageMode(CENTER);
  extraCanvas4.tint(255, 150);
  extraCanvas4.image(img, width / 25, height / 12, 40, 40);
  extraCanvas4.pop();
}