var box;

//configuração
function setup() {
  createCanvas(800, 800);
  box = createSprite(200, 200, 30, 30);
  box.shapeColor = "purple";
}

//repetição
function draw() {
  background('lightgreen');

  if (keyIsDown(RIGHT_ARROW)) {
    box.position.x = box.position.x + 5;
  }
  if (keyIsDown(LEFT_ARROW)) {
    box.position.x = box.position.x - 5;
  }
  if (keyIsDown(UP_ARROW)) {
    box.position.y = box.position.y - 5;
  }

  if (keyIsDown(DOWN_ARROW)) {
    box.position.y = box.position.y + 5;
  }

  drawSprites();

}




