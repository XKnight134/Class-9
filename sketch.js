var box;

function setup() {
  createCanvas(400,400);
  box=createSprite(200,200,50,50)
}

function draw() 
{
  background(120,120,50);

  if(keyDown(UP_ARROW))
  {
    box.position.y=box.position.y - 8;
  }
  if(keyDown(DOWN_ARROW))
  {
    box.position.y=box.position.y + 8;
  }
  if(keyDown(RIGHT_ARROW))
  {
    box.position.x=box.position.x + 8;
  }
  if(keyDown(LEFT_ARROW))
  {
    box.position.x=box.position.x - 8;
  }
  drawSprites()
}








