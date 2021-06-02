
var bullet, wall,thickness;
var speed,weight;
var deformation;
function setup() {
  createCanvas(1600,400);
speed =random(223,321);
weight = random(30,52);
thickness=random(22,83);
bullet= createSprite(50, 200, 40, 20);
bullet.velocityX=speed;
bullet.shapeColor="lightblue";
wall = createSprite(1000,200,thickness,height/2);
wall.shapecolor=(80,80,80);
}

function draw() {
  background("black");  
  

  if(hasCollided(bullet, wall)){

    bullet.velocityX=0;
  deformation=0.5*weight*speed*speed/(thickness*thickness*thickness);
      if(deformation<10){
        wall.shapeColor="green";
      }  
       
      if(deformation>10){

        wall.shapeColor="red";
      }

  }
  drawSprites();
}

function hasCollided(lbullet, lwall)
{
	bulletRightEdge=lbullet.x +lbullet.width;
	wallLeftEdge=lwall.x;
	if (bulletRightEdge>=wallLeftEdge)
	{
		return true
	}
	return false;
}









