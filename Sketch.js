function setup() {
  createCanvas(windowWidth, windowHeight); // Pantalla completa
  background(220);
}

function draw() {
  background(220);
  fill(100, 150, 255);

  if (touches.length > 0) {
    // Si hay toque en pantalla
    ellipse(touches[0].x, touches[0].y, 50, 50);
  } else {
    // Si no, que siga el mouse
    ellipse(mouseX, mouseY, 50, 50);
  }
}

// Para que se ajuste si girás el celu o cambiás el tamaño de la ventana
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
