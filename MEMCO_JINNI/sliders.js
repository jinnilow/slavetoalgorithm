function sliders() {

  NostalgiaSlider.position(width / 6.1, height / 7);
  LoveSlider.position(width / 2.85, height / 7);
  HappySlider.position(width / 1.85, height / 7);
  ExciteSlider.position(width / 1.35, height / 7);
  TraumaSlider.position(width / 6.1, height / 1.2);
  AngerSlider.position(width / 2.85, height / 1.2);
  AnxiousSlider.position(width / 1.85, height / 1.2);
  SadSlider.position(width / 1.35, height / 1.2);

  button.position(width / 1.06, height / 1.2);
  button.size(60, 30);
  button.mousePressed(save);
  button.style('background-color');


  extraCanvas4.textFont("Avenir", 14);
  extraCanvas4.noStroke();
  extraCanvas4.fill(222, 226, 230);
  extraCanvas4.text('N O S T A L G I A', width / 6, height / 8);
  extraCanvas4.text('L O V E', width / 2.80, height / 8);
  extraCanvas4.text('H A P P Y', width / 1.83, height / 8);
  extraCanvas4.text('E X C I T E D', width / 1.34, height / 8);
  extraCanvas4.text('T R A U M A', width / 5.99, height / 1.121);
  extraCanvas4.text('A N G R Y', width / 2.80, height / 1.121);
  extraCanvas4.text('A N X I O U S', width / 1.83, height / 1.121);
  extraCanvas4.text('S A D', width / 1.34, height / 1.121);


}