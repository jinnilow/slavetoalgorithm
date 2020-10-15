function love() {

  extraCanvas6.clear();
  extraCanvas6.push();

  for (let L = 0; L < LoveSlider.value(); L++) {
    let xl = random(width / 7, width / 1.2);
    let yl = random(height / 8, height / 1.1);
    let rl = random(25, 100);
    let bl = new Flowers(xl, yl, rl);
    flowers.push(bl);
  }


  for (let L = 0; L < LoveSlider.value(); L++) {
    flowers[L].move();
    flowers[L].show();
  }
  extraCanvas6.pop();
}

class Flowers {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.angle = 80;
  }

  move() {
    extraCanvas6.rotate(this.angle * 0.05);
    this.angle += 0.01;
  }

  show() {
    extraCanvas6.image(img, this.x, this.y, this.r, this.r);
  }
}