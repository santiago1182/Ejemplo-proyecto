function setup() {
  createCanvas(windowWidth, windowHeight); // ocupa toda la pantalla
  background(220);
}

function draw() {
  background(220);
  fill(100, 150, 255);

  if (mouseIsPressed) {
    // si clicás con el mouse
    ellipse(mouseX, mouseY, 50, 50);
  } else if (touches.length > 0) {
    // si tocás en el celular
    ellipse(touches[0].x, touches[0].y, 50, 50);
  } else {
    textSize(20);
    textAlign(CENTER, CENTER);
    fill(50);
    text("Toca la pantalla o clickea para dibujar 😊", width/2, height/2);
  }
}
