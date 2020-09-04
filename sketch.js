var fixedRect,movingRect;





function setup() {
  createCanvas(800,400);
fixedRect=createSprite(400,200,100,100)

fixedRect.shapeColor="magenta"





 movingRect= createSprite(600, 200, 50, 50);

 movingRect.shapeColor="red"
}

function draw() {
  background(0);
  
movingRect.x=mouseX

movingRect.y=mouseY

  if(fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2&&
    
    movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2&&
    
    fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2&&

    movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2
    
    
    )  {
          fixedRect.shapeColor="white"
          movingRect.shapeColor="orange"

    }

    else{
      fixedRect.shapeColor="magenta"
      movingRect.shapeColor="red"
    }
  drawSprites();
}