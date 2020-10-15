function Drop() {
  extraCanvas3.push();
  this.x = random(0, ((windowWidth / 2) + 300));
  this.y = random(0, ((windowHeight / 2) + 100));
  this.color1 = [231, 236, 239]
  this.color2 = [39, 76, 119]
  this.color3 = [96, 150, 186]
  this.color4 = [163, 206, 241]
  this.color5 = [139, 140, 137]
  this.colors = [this.color1, this.color2, this.color3, this.color4, this.color5] // set a four color palette


  this.show = function() {


    extraCanvas3.fill(random(this.colors));
    extraCanvas3.noStroke();
    extraCanvas3.ellipse(this.x, this.y, 3, 30);
  }

  this.update = function() { //to make it move 
    this.speed = random(7); //speed
    this.gravity = 1.05;
    this.y = this.y + 3 + this.speed * this.gravity; //speed

    if (this.y > height) { // make rain continuous
      this.y = random(0, -height);
      this.gravity = 0;
    }
  }
  extraCanvas3.pop();
}