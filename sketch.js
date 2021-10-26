let eye;
let spacing = 100;

function preload() {
  eye = loadModel('Eye.obj', true);
}

function setup() {
  createCanvas(800, 800, WEBGL);
  perspective(PI / 3.0, width / height, 0.1, 500);
}

function draw() {
  background(0);
  fill(0);
  orbitControl();

  normalMaterial();
  ambientLight(200);
  push();
translate(-15, 0, sin(frameCount / 30) * 95);
  model(eye);
  scale(.25);
  pop();
  for (x = 0; x <= width; x += spacing) {
  for (y = 0; y <= height; y += spacing) {

      // noStroke();
      push();
      translate(-400 +x, -400 +y, -400 + y);
      rotateZ(frameCount * 0.01 +x);
      rotateX(frameCount * 0.01);
      rotateY(frameCount * 0.01);
      model(eye);
      scale(.25);
      pop();

      // normalMaterial();
      // ambientLight(200);

    }
  }
}
