class Anxious {
  constructor(xax, yax, rax) {
    this.xax = xax;
    this.yax = yax;
    this.rax = rax;
    this.color1 = [0, 100, 102, 30]
    this.color2 = [6, 90, 96, 30]
    this.color3 = [11, 82, 91, 30]
    this.color4 = [20, 69, 82, 30]
    this.color5 = [27, 58, 75, 30]
    this.color6 = [33, 47, 69, 30]
    this.color7 = [39, 38, 64, 30]
    this.color8 = [49, 34, 68, 30]
    this.color9 = [62, 31, 71, 30]
    this.color10 = [77, 25, 77, 30]
    this.colors = [this.color1, this.color2, this.color3, this.color4, this.color6, this.color7, this.color8, this.color9, this.color10, this.color5]
  }

  move() {
    extraCanvas3.push();
    this.xax = this.xax + random(-5, 5);
    this.yax = this.yax + random(-5, 5);
  }

  show() {
    extraCanvas3.noStroke();
    extraCanvas3.fill(random(this.colors));
    extraCanvas3.ellipse(this.xax, this.yax, AnxiousSlider.value());
    extraCanvas3.push();
  }

}